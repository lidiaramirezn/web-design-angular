export class Token {
    access_token!: string;
    token_type!:string;
    refresh_token!: string;
    expires_in!: number; //seconds
    scope!: string;
    created!: number; // millisec
}
