import { ACCESS_TOKEN } from "@/model/consts/common";

import apiInstance from "@/api/axiosInstance";

import type { ADMIN_ROLES } from "@/entities/admin/model/types/admin.type";

// твой axios с базовым урлом

const authProvider = {
  // Логин: вызывается при вводе логина/пароля
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const { data } = await apiInstance.post<{
        data: { accessToken: string; refreshToken: string };
      }>("/auth/login-admin", {
        username,
        password,
      });
      localStorage.setItem(ACCESS_TOKEN, data.data.accessToken);
      return Promise.resolve();
    } catch {
      return Promise.reject(new Error("Invalid username or password"));
    }
  },

  // Логаут: очистка токена
  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    return Promise.resolve();
  },

  // Проверка авторизации (вызывается на каждой странице)
  checkAuth: async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      return Promise.reject();
    }

    try {
      // отправляем запрос на /auth/me с токеном
      await apiInstance.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return Promise.resolve();
    } catch {
      // токен невалидный или запрос не удался — отклоняем
      return Promise.reject();
    }
  },

  // Проверка прав (можно просто разрешить всегда)
  checkError: (error: { status: number }) => {
    // если сервер вернул 401, значит сессия устарела
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem(ACCESS_TOKEN);
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Получить права, если нужны роли
  getPermissions: async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      return Promise.reject();
    }

    try {
      const { data } = await apiInstance.get<{
        data: { role: ADMIN_ROLES; id: string };
      }>("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return Promise.resolve({ role: data.data.role, id: data.data.id });
    } catch {
      return Promise.reject();
    }
  },
};

export default authProvider;
