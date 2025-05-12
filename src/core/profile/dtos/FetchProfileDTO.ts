export interface FetchProfileDTO {
  uuid?: string;
  profile: string;
  description?: string | null;
  created_at?: Date;
}
