import { createAsyncThunk } from "@reduxjs/toolkit";

async function fetchApi(endpoint: string) {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) throw new Error("fetch error");
  return await res.json();
}

export const fetchUsers = createAsyncThunk("users/fetch", () =>
  fetchApi("/users")
);

export const fetchUserDetail = createAsyncThunk("users/detail", (id: number) =>
  fetchApi(`/users/${id}`)
);
