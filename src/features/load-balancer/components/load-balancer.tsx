import * as Highcharts from 'highcharts';
import { inject, observer } from "mobx-react";
import * as React from 'react';
import {
  Chart, HighchartsChart, Legend, LineSeries, Title, Tooltip, withHighcharts, XAxis, YAxis
} from 'react-jsx-highcharts';
import SockJsClient from 'react-stomp';

interface ILoadBalancerState {
  data: any;
}

@inject('consumptionStore')
@observer
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
    const { consumptionStore } = this.props;
    consumptionStore.updateLiveData(message);
  }

  public formatToolTip() {
    return "<b>Hello</b>";
  }

  public render() {
    const { consumptionStore: { data } } = this.props;
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
            <LineSeries name="Consumption" data={data} />
          </YAxis>

          <Tooltip padding={10} hideDelay={250} shape="square" formatToolTip={this.formatToolTip}/>
        </HighchartsChart>
      </div>
    );
  }
}

export default withHighcharts(LoadBalancer, Highcharts);