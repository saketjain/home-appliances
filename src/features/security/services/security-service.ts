import { AxiosInstance } from 'axios';
import { AppConstants } from '../../../constants';
import { configStore } from '../../config';

export class SecurityService {

    private axios: AxiosInstance;

    constructor() {
        this.axios = configStore.messagingHandler.getAxiosInstance();
    }

    public login(credentials: any) {
        return this.axios.post(process.env.REACT_APP_SECURITY_URL + AppConstants.SERVER_URLS.GENERATE_TOKEN, credentials);
    }
}

export const securityService = new SecurityService();