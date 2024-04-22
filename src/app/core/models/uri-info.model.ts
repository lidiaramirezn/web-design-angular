export class UriInfo { 
    id!:number; 
    pattern!: string;
    uri!: any;
    secure!:boolean;

    constructor(uri: string, secure: boolean ){
        this.uri = uri;
        this.secure = secure;

    }
}