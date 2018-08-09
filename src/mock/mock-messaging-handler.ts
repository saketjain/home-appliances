import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { token } from './auth';
import { depositSummary, mutualFundSummary, portfolioSummary } from './portfolio-data';
export class MockAxiosMessagingHandler {

    public static setupMock(axios: AxiosInstance) {
        const mock = new MockAdapter(axios);
        mock.onPost(/\/security\/generateToken/).reply(200, token);
        mock.onGet(/\/portfolio\/list\/[0-9]+/).passThrough();
        mock.onGet(/\/portfolio\/[0-9]+\/stocks\/summary/).passThrough();
        mock.onGet(/\/portfolio\/[0-9]+\/stocks\/details/).passThrough();
        mock.onGet(/\/portfolio\/[0-9]+\/summary\/funds/).passThrough();
        mock.onGet(/\/portfolio\/[0-9]+\/summary/).reply(200, portfolioSummary);
        mock.onGet(/\/portfolio\/[0-9]+\/mutualFunds\/summary/).reply(200, mutualFundSummary);
        mock.onGet(/\/portfolio\/[0-9]+\/deposits\/summary/).reply(200, depositSummary);
    }
}