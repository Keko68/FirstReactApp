import React, { Component } from 'react';
import classes from './App.css';
import Device from './Device/Device';

//import singleSpaReact, {SingleSpaContext} from 'single-spa-react';

class App extends Component {
  //state is only possible within classes that extends Component
  //if state changes - and only state - then react renders the application
  state = {
    devices: [
      { id: '10001', name: 'WOLFRAM    ', MAC: 1234567890 },
      { id: '10002', name: 'BARIUM    ', MAC: 2345678901 },
      { id: '10003', name: 'TITAN    ', MAC: 3456789012 },
      { id: '10004', name: 'R2D2    ', MAC: 4567890123 }
    ],
    otherState: 'some other value',
    showDevices: false
  }

  nameChangeHandler = (event, id) => {
    const deviceIndex = this.state.devices.findIndex(p => {
      return p.id === id;
    });

    const device = {
      ...this.state.devices[deviceIndex]
    };

    device.name = event.target.value;

    const devices = [...this.state.devices];
    devices[deviceIndex] = device;

    this.setState({devices: devices} );
  };

  deleteDeviceHandler = (deviceIndex) => {
    const devices = [...this.state.devices];
    devices.splice(deviceIndex, 1);
    this.setState({devices: devices})
  };

  toggleDeviceHandler = () => {
    const doesShow = this.state.showDevices;
    this.setState({showDevices: !doesShow});
  };

  noticeDeviceHandler = () => {
    
  }

  render() {
    let devices = null;
    let btnClass = '';

    if (this.state.showDevices) {
      devices = (
        <div>
          {this.state.devices.map((device, index) => {
            return (
              <Device 
                click={() => this.noticeDeviceHandler(index)}
                name={device.name}
                MAC={device.MAC}
                key={device.id}
                changed={(event) => this.nameChangeHandler(event, device.id)} 
              />
            );
            })}  
        </div> 
      );

      btnClass = classes.Red;
     }

    const assignedClasses = [];

    if (this.state.devices.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if (this.state.devices.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
       <div className={classes.App}>
          <h1>Autonomous Logistics</h1>
          <p className={assignedClasses.join(' ')}>Device Management</p>
          
          <button className={btnClass}
            key="key1"
            onClick={this.toggleDeviceHandler}>Toggle Devices</button>

          <button className={btnClass}
            key="key2"
            onClick={this.deleteDeviceHandler}>Delete Devices</button>
            {devices}        
        </div>
     );
 
  }
}

export default App;
