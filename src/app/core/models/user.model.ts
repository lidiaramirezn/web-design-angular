import { Address } from "./address.model";
import { ID } from "./id.model";
import { Profile } from "./profile.model";

export class User{
    id!: ID;
    name!: string;
    lastName!:string;
    fullName!:string;
    phoneNumber!:string;
    countryCode!: number;
    address!: Address;
    thumbnailUrl!: string;
    displayName!: string;
    email!: string;
    profile!: Profile;
}