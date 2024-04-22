import { environment } from "src/environments/environment";
import { UriInfo } from "../models/uri-info.model";

export abstract class ApiInfo {

    static supportedUris: UriInfo[] = [
        new UriInfo("/setup/createOTP", false),
        new UriInfo("/setup/checkOTP", false),
        new UriInfo("/setup/check", false),
        new UriInfo("/setup/signup", false),
        new UriInfo("/setup/changePassword", false),
        new UriInfo("/oauth/token", false),
        new UriInfo("/exchange/rates", false),
        new UriInfo("/exchange/offers", false),
        new UriInfo("/transaction/fetch", true),
        new UriInfo("/transaction/checkoutDetails", true),
        new UriInfo("/instrument/storedValue", true),
        new UriInfo("/instrument/getAllInstruments", true),
        new UriInfo("/instrument/add", true),
        new UriInfo("/transferfunds/purchaseAsset", true),
        new UriInfo("/address/places", true),
        new UriInfo("/address/places", true),
        new UriInfo("/address/zone", true),
        new UriInfo("/user/info", true),
        new UriInfo("/user/updateInfo", true),
        new UriInfo("/people/person", true),
        new UriInfo("/product/assets", true),
        new UriInfo("/product/updateAsset", true),
    ];

    public static getUriInfo(url : string): UriInfo | null{
        let uriInfo = null;
        let found = false;

        for (var i = 0, length = this.supportedUris.length; i < length;){
            if(url.includes(this.supportedUris[i].uri)){
               found = true;
               uriInfo = this.supportedUris[i];
               break;
            }
            i = i + 1;
        }

         return uriInfo;
    }

    public static isSupported(url : string):boolean{
       if(this.getUriInfo(url)){
            return true;
       }
       return false;
    }

    public static isSecure(url : string):boolean {
        let uri = this.getUriInfo(url);
        if(!uri){
            throw new Error('uri is not supported.');
        }
        return uri.secure;
    }

    public static getPath(key: any) : string {
        if (this.supportedUris.includes(key)) {
            return environment.url
        }
        throw new Error('uri is not supported.');
    }
}

