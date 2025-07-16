import type { AxiosError } from "axios";
import type { DataProvider } from "react-admin";

import apiInstance from "@/api/axiosInstance";

function extractErrorMessage(error: AxiosError<{ message: string }>): string {
  const raw = error?.response?.data?.message || error?.message;

  if (Array.isArray(raw)) {
    return raw.join("\n"); // каждый элемент с новой строки
  }

  if (typeof raw === "string") {
    return raw;
  }

  return "Произошла неизвестная ошибка";
}

function withErrorHandler<T>(fn: () => Promise<T>): Promise<T> {
  return fn().catch((error) => {
    throw new Error(extractErrorMessage(error));
  });
}

export const dataProvider: DataProvider = {
  getList: (resource, params) =>
    withErrorHandler(async () => {
      const { page = 1, perPage = 10 } = params.pagination || {};

      let response;
      if (resource === "users") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            tgId: params.filter?.tgId,
            username: params.filter?.username,
          },
        });
      } else if (resource === "withdrawal-requests") {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            id: params.filter?.id,
            tgId: params.filter?.tgId,
            username: params.filter?.username,
            status: params.filter?.status,
          },
        });
      } else {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
          },
        });
      }

      return {
        data: response.data.data,
        total: response.data.total,
      };
    }),

  getOne: (resource, params) =>
    withErrorHandler(async () => {
      let response;
      if (resource === "users") {
        response = await apiInstance.get(`/${resource}/by-id/${params.id}`);
      } else {
        response = await apiInstance.get(`/${resource}/${params.id}`);
      }

      return { data: response.data };
    }),

  update: (resource, params) =>
    withErrorHandler(async () => {
      const { id, data } = params;
      const response = await apiInstance.put(`/${resource}/${id}`, data);
      return { data: response.data };
    }),

  create: (resource, params) =>
    withErrorHandler(async () => {
      const response = await apiInstance.post(`/${resource}`, params.data);
      return { data: response.data };
    }),

  getMany: (resource, params) =>
    withErrorHandler(async () => {
      const { ids } = params;

      const response = await apiInstance.get(`/${resource}/many`, {
        params: { ids },
      });
      return { data: response.data };
    }),
  getManyReference: (resource, params) =>
    withErrorHandler(async () => {
      const { target, id } = params;
      const { page = 1, perPage = 10 } = params.pagination || {};
      // const { sort = {} } = params;
      // const filter = params.filter || {};

      let response;
      if (resource === "task-answers") {
        //берем только userId для фильтра
        const userId =
          Array.isArray(id) && id.length > 0 && typeof id[0] === "object"
            ? id[0][target]
            : id;
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
            // sort: sort.field,
            // order: sort.order,
            // ...filter,
            [target]: userId,
          },
        });
      } else {
        response = await apiInstance.get(`/${resource}/pagination`, {
          params: {
            page,
            limit: perPage,
          },
        });
      }

      return {
        data: response.data.data,
        total: response.data.total,
      };
    }),

  updateMany: () => Promise.reject("Not implemented"),
  delete: (resource, params) =>
    withErrorHandler(async () => {
      const { id } = params;
      const response = await apiInstance.delete(`/${resource}/${id}`);

      return { data: response.data };
    }),
  deleteMany: (resource, params) =>
    withErrorHandler(async () => {
      const { ids } = params; // массив id для удаления
      await apiInstance.delete(`/${resource}`, { data: { ids } });
      return { data: ids }; // возвращаем удалённые id
    }),
};
