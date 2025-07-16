import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAdminStore } from "../../../entities/admin/model/store/admin.store";

import authProvider from "@/admin/authProvider";
import type { ADMIN_ROLES } from "@/entities/admin/model/types/admin.type";

export const useInitAdmin = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const setRole = useAdminStore((state) => state.setRole);
  const setAdminId = useAdminStore((state) => state.setAdminId);

  useEffect(() => {
    authProvider
      .getPermissions()
      .then((data: { role: ADMIN_ROLES; id: string }) => {
        setRole(data.role);
        setAdminId(data.id);
      })
      .catch(() => {
        setRole(null);
      });
  }, [isLoginPage]);
};
