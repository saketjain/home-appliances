export const CONTEXT = '/mobile';
export const AppConstants = {
    CLIENT_URLS: {
        HOME_SIMULATION: CONTEXT + '/homeSimulation',
        LOAD_BALANCER: CONTEXT + '/loadBalancer',
        NEIGHBOURHOOD_SIMULATION: CONTEXT + '/neighbourhoodSimulation',
        SCENE: CONTEXT + '/scene'
    },
    SERVER_URLS: {
        CONSUMPTION_TOPIC: '/topic',
        GENERATE_TOKEN: '/security/generateToken',
        START_SIMULATION: '/startNeighbourhoodSimulation',
        STOP_SIMULATION: '/stopNeighbourhoodSimulation'
    }
};
