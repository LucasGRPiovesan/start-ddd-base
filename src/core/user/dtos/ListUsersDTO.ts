export interface ListUserDTO {
  uuid: string;
  name: string;
  email: string;
  profile: {
    uuid: string;
    profile: string;
    description: string;
  };
}
