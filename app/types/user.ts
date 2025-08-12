export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null | never;
}

export interface UserDetailState {
  data: User | null;
  loading: boolean;
  error: string | null | never;
}
