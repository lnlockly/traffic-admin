import { ADMIN_ROLES } from "@/entities/admin/model/types/admin.type";

export const adminRoleChoices = [
  { id: ADMIN_ROLES.ADMIN, name: "Админ" },
  { id: ADMIN_ROLES.SUPER_ADMIN, name: "Супер-админ" },
];

export const ADMIN_FIELDS_lABELS = {
  USERNAME: "Логин",
  PASSWORD: "Пароль",
  REPEATED_PASSWORD: "Повторите пароль",
  ROLE: "Роль",
};
