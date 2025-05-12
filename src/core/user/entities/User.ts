import { Profile } from "../../profile/entities/Profile";
import { StoreUserDTO } from "../dtos/StoreUserDTO";
import bcrypt from 'bcrypt';

export class User 
{
  private readonly id!: number;
  private password: string;
  
  public readonly uuid!: string;
  public uuid_profile: string;
  public name: string;
  public email: string;
  public readonly createdAt!: Date;

  public profile!: Profile;
  
  constructor(data: StoreUserDTO) {
    
    this.uuid_profile = data.uuid_profile;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password; 
  }

  public async encryptPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(12));
  }

  public toStore() {
    return {
      uuid_profile: this.uuid_profile,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}
  