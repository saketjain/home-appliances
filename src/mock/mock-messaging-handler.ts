import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { token } from './auth';
export class MockAxiosMessagingHandler {

    public static setupMock(axios: AxiosInstance) {
        const mock = new MockAdapter(axios);
        mock.onPost(/\/security\/generateToken/).reply(200, token);
        mock.onPost(/\/startNeighbourhoodSimulation/).passThrough();
        mock.onPost(/\/stopNeighbourhoodSimulation/).passThrough();
    }
}