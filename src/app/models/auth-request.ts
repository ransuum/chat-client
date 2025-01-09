export interface SignUpRequest {
  firstname: string;
  lastname: string;
  phone: string;
  username: string;
  email: string;
  password: string;
  address: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  userName: string;
  tokenType: TokenType;
  accessTokenExpiry: number;
}

export enum TokenType {
  Bearer = 'Bearer'
}
