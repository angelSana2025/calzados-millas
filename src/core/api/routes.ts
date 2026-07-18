import type { InventorySection } from "../config/routes";

/** Paths del API NestJS — alinear con los controllers del backend */
export const API_ROUTES = {
  auth: {
    login: "/auth/login",
  },
  inventory: {
    list: (section: InventorySection) => `/inventory/${section}`,
    byId: (id: number) => `/inventory/${id}`,
  },
  orders: {
    root: "/orders",
    byId: (id: number) => `/orders/${id}`,
  },
} as const;
