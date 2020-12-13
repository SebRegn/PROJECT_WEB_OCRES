import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import Navigation from './widgets/navigation/sidebar';
import CreateEvent from './forms/create_event';
import AddAffluance from './forms/add_affluance';

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

            {/* <div className="ms-Grid-row"> */}
              <div className="= ms-Grid-col "><CreateEvent/></div>
              <div className="= ms-Grid-col "><AddAffluance/></div>
            {/* </div> */}
          </div>
          {/* <div style={container}>

            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col"><label>Date</label><input className="form-control" type="date" /></div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col"><label>Event</label><input type="text" className="form-control" /></div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col"><label>Boite</label><input type="text" className="form-control" /></div>
                  <div className="col"><label>Number</label><input type="number" className="form-control" min={0} /></div>
                </div>
              </div>
              <div className="form-group"><button className="btn btn-primary btn-block" type="button">Ajouter</button></div>
            </form>

          </div> */}
        </div>
      </div>
    )
  }
}

export default Admin;