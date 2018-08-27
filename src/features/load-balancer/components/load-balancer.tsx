import * as Highcharts from 'highcharts';
import * as React from 'react';
import {
  Chart, HighchartsChart, Legend, LineSeries, Title, withHighcharts, XAxis, YAxis
} from 'react-jsx-highcharts';
import SockJsClient from 'react-stomp';

interface ILoadBalancerState {
  data: any;
}

class LoadBalancer extends React.Component<any, ILoadBalancerState> {

  private connection: WebSocket;

  private clientRef: any;

  constructor (props: any) {
    super(props);
    this.updateLiveData = this.updateLiveData.bind(this);
    this.state = {
      data: []
    };
  }

  public updateLiveData (message: any) {
    const { data } = this.state;
    const newData = data.slice(0); // Clone
    newData.push([message.timeStamp, message.load]);
    this.setState({
      data: newData
    });
  }

  public render() {
    const { data } = this.state;

    return (
      <div className="app">
        <SockJsClient url='http://localhost:8080/ws' topics={['/topic/1']}
                onMessage={this.updateLiveData}
                ref={ (client: any) => { this.clientRef = client }} />
        <HighchartsChart>
          <Chart />

          <Title>Neighbourhood Power Consumption</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <XAxis type="datetime">
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Consumption (Kwh)</YAxis.Title>
            <LineSeries data={data} />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default withHighcharts(LoadBalancer, Highcharts);