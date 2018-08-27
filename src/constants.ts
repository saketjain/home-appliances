export const CONTEXT = '/mobile';
export const AppConstants = {
    CLIENT_URLS: {
        HOME_SIMULATION: CONTEXT + '/homeSimulation',
        LOAD_BALANCER: CONTEXT + '/loadBalancer',
        NEIGHBOURHOOD_SIMULATION: CONTEXT + '/neighbourhoodSimulation'
    },
    SERVER_URLS: {
        CONSUMPTION_TOPIC: '/topic',
        GENERATE_TOKEN: '/generateToken',
        START_SIMULATION: '/startNeighbourhoodSimulation',
        STOP_SIMULATION: '/stopNeighbourHoodSimulation'
    }
};
