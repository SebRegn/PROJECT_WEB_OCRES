import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import Navigation from './widgets/navigation/sidebar';
import CreateEvent from './forms/create_event';
import AddAffluance from './forms/add_affluance';
import AddTask from './forms/add_task';


// const container = {
//   display: 'flex',
//   justifyContent: 'center',
//   margin: '1em auto 0',
// };


class Admin extends React.Component {
  render() {
    return (

      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm3 ms-xl2">
            <Navigation />
          </div>
          <div className=" ms-Grid-col ms-sm9  ms-xl10">


              <div className="= ms-Grid-col ms-sm4  "><CreateEvent/></div>
              <div className="= ms-Grid-col ms-sm4  "><AddAffluance/></div>
              <div className="= ms-Grid-col ms-sm4 "><AddTask/></div>

          </div>
          
        </div>
      </div>
    )
  }
}

export default Admin;