
import * as jwt from 'jsonwebtoken';
import * as md5 from 'md5';
import { action, observable } from 'mobx';
import { configStore } from '../../config';
import { IMessagingHandler } from '../../messaging';
import { securityService, SecurityService } from '../services/security-service';

export class AuthStore {

    @observable
    public isAuthenticated: boolean;

    @observable
    public userId: number;

    @observable
    public userName: string;

    @observable
    public password: string;

    private messagingHandler: IMessagingHandler;

    private securityService: SecurityService;

    constructor(secService: SecurityService) {
        this.messagingHandler = configStore.messagingHandler;
        this.securityService = secService;
        this.initStore();
    }

    @action
    public async handleLogin() {

        const credentials = {
            'password': md5(this.password),
            'userName': this.userName
            
        };
        const response = await this.securityService.login(credentials);
        const token = response.data;
        this.decodeToken(token);
        this.isAuthenticated = true;
        localStorage.setItem('token', token);
        this.messagingHandler.setAuthorizationHeader(token);
    }

    @action
    public destroy() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

    private hasExpired(decodedToken: any) {
       return (new Date()).getTime() > decodedToken.exp * 1000;
    }

    private initStore() {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const decodeToken = jwt.decode(token);
                const expired = this.hasExpired(decodeToken);
                this.decodeToken(token);
                this.isAuthenticated = true;
                this.messagingHandler.setAuthorizationHeader(token);
                return;
            }
            this.destroy();
        } catch (e) {
            this.destroy();
        }
    }
    
    private decodeToken(token: string) {
        const decodedToken: any = jwt.decode(token);
        const user = JSON.parse(decodedToken.user);
        this.userId = user.userId;
        this.userName = user.firstName;
    }
}
export const authStore = new AuthStore(securityService);