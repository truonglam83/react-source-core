// src/store/auth/auth.type.ts

import { Role } from "@/types/auth.type";

/**
 * Auth state in Redux store
 */
export interface AuthState {
  accessToken: string | null;
  user: {
    id: string;
    role: Role;
  } | null;
}
