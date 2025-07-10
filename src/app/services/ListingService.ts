import { ApiService } from "./ApiService";
import { LISTING } from "app/constants/api";
import { AxiosResponse } from "axios";

export class ListingService extends ApiService {
    listingService: any;

    constructor (accessToken?: any, baseUrl?: any) {
        super (accessToken, baseUrl);
        this.listingService = LISTING;
    }

    getListings (payload? : any) : any {
        return new Promise (async (resolve, reject) => {
            try {
                const response = await this.requestV2(this.listingService.get, payload);
                resolve (response)
            } catch (e: any) {
                reject(e)
            }
        });
    }
}