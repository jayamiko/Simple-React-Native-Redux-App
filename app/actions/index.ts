import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("users fetch error");
  return await res.json();
});

export const fetchUserDetail = createAsyncThunk(
  "users/detail",
  async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("user detail fetch error");
    return await res.json();
  }
);
