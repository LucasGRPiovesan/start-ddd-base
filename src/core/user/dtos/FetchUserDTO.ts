export interface FetchUserDTO {
  uuid?: string;
  name: string;
  email: string;
  password?: string;
  created_at?: Date;
}
