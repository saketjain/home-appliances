import { AxiosInstance } from 'axios';
import { AppConstants } from '../../../constants';
import { configStore } from '../../config';

export class SimulationService {

    private axios: AxiosInstance;

    constructor() {
        this.axios = configStore.messagingHandler.getAxiosInstance();
    }

    public startSimulation(request: SimulationRequest) {
        const x = '';
        return this.axios.post(process.env.REACT_APP_SERVER_URL + AppConstants.SERVER_URLS.START_SIMULATION, request);
    }

    public stopSimulation(request: SimulationRequest) {
        return this.axios.post(process.env.REACT_APP_SERVER_URL + AppConstants.SERVER_URLS.STOP_SIMULATION, request);
    }
}

export const simulationService = new SimulationService();