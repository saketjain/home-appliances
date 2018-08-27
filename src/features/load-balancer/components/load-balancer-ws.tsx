import * as React from 'react';
import SockJsClient from 'react-stomp';

interface ILoadBalancerState {
    messages: string[];
}

export class LoadBalancer extends React.Component<any, ILoadBalancerState> {

    private connection: WebSocket;

    private clientRef: any;

    public constructor(props: any) {
        super(props);
        this.state = {messages: []};
    }

    public handleMessage = (message: any) => {
        this.state.messages.push(message);
        this.setState({
            messages: this.state.messages
        });
    }

    public render() {
        return (
            <div>
            <SockJsClient url='http://localhost:8080/ws' topics={['/topic/greetings']}
                onMessage={this.handleMessage}
                ref={ (client: any) => { this.clientRef = client }} />
                {this.state.messages.map((e, i) => <p key={i}>{e}</p>)}
            </div>
        )
    }
}