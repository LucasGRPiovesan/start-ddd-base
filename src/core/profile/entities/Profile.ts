import { StoreProfileDTO } from "../dtos/StoreProfileDTO";

export class Profile 
{
  private readonly id!: string;

  public readonly uuid!: string;
  public profile!: string;
  public description!: string;
  public readonly createdAt!: Date;

  constructor(data: StoreProfileDTO) {

    this.profile = data.profile;
    this.description = data.description;
  }

  public toStore() {
    return {
      profile: this.profile,
      description: this.description,
    };
  }
}
  