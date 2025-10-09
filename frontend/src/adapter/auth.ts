"use server";

import { post } from "@/lib/http";
import { FormInformation } from "@/lib/type";

export async function loginAdapter(data: FormInformation) {
  try {
    const response = await post("/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response?.success) {
      return await response;
    } else {
      throw new Error("Login failed");
    }
  } catch (err) {
    throw new Error("Login error");
  }
}

export async function registerAdapter(data: FormInformation) {
  try {
    const response = await post("/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response?.success) {
      return await response;
    } else {
      throw new Error("Registration failed");
    }
  } catch (err) {
    throw new Error("Registration error");
  }
}

export async function logoutAdapter() {
  try {
    const response = await post(
      "/auth/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response?.success) {
      return await response;
    } else {
      throw new Error("Logout failed");
    }
  } catch (err) {
    throw new Error("Logout error");
  }
}
