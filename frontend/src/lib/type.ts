export interface FormInformation {
  email: string;
  password: string;
}

export interface ApiResponseResgister {
  success: boolean;
  user: User;
}

export interface User {
  email: string;
}

export interface ApiResponseLogin {
  success: boolean;
  message: string;
  user: User;
}

export interface User {
  email: string;
}

export interface ApiResponseTracks {
  success: boolean;
  data: Data;
}

export interface Data {
  total: number;
  byComponent: ByComponent[];
}

export interface ByComponent {
  _id: string;
  count: number;
}
