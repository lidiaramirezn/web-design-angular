export class UserModel {
    idType!: number;
    idNumber!: number;
    firstName!: string;
    lastName!: string;
    fullName!: string;
    email!: string;
    countryCode!: number;
    phoneNumber!: string;
    pin!: string;
    terms: boolean = false;
    otpInput!: number;
    channelType!:number; //0 = email 1 = phone
    
}