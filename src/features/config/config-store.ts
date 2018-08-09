import { MockAxiosMessagingHandler } from '../../mock/mock-messaging-handler';
import { AxiosMessagingHandler, IMessagingHandler } from '../messaging';
export class ConfigStore {

    public messagingHandler: IMessagingHandler;

    constructor() {
        this.messagingHandler = new AxiosMessagingHandler();
        if (process.env.REACT_APP_NODE_ENV === 'local') {
            MockAxiosMessagingHandler.setupMock(this.messagingHandler.getAxiosInstance());
        }
    }
}

export const configStore = new ConfigStore();

