import { create } from "zustand";

import type { ADMIN_ROLES } from "../types/admin.type";

interface Store {
  role: ADMIN_ROLES | null;
  setRole: (role: ADMIN_ROLES | null) => void;

  adminId: string | null;
  setAdminId: (adminId: string | null) => void;
}

export const useAdminStore = create<Store>((set) => ({
  role: null,
  setRole: (role) => set({ role }),

  adminId: null,
  setAdminId: (adminId) => set({ adminId }),
}));
