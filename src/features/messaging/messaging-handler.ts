import axios, {AxiosInstance} from 'axios';
import { AppConfig } from '../../config';

export interface IMessagingHandler {

    getAxiosInstance(): AxiosInstance;

    setAuthorizationHeader(toksn: string): void;
}

export class AxiosMessagingHandler implements IMessagingHandler {

    private axiosInstance: AxiosInstance;

    constructor() {

        // Set config defaults when creating the instance
        this.axiosInstance = axios.create({
            baseURL: AppConfig.BASE_URL
        });
    }

    public getAxiosInstance() {
        return this.axiosInstance;
    }

    public setAuthorizationHeader(token: string) {
        this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
}

