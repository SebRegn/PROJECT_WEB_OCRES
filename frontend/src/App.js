import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import Navigation from './widgets/navigation/sidebar';
import Tableauevent from './widgets/info/tableau';
import Diagramme from './widgets/info/diagramme';
import Musique from './widgets/info/musique';
import Heure from './widgets/info/heure';
import Publi from './widgets/info/publication';
import SimpleDemo from './widgets/info/check';

const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '1em auto 0',
};

const container2 = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 50px 2px',
};

class App extends React.Component {
  render() {
    return (
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm3 ms-xl2">
            <Navigation />
          </div>


          <div className=" ms-Grid-col ms-sm7 ms-xl10">

            <div style={container} className="ms-Grid-row ">
              <div style={container} className="ms-Grid-row ">
                <Heure />
              </div >
              <Musique />
            </div>

          <div className=" ms-Grid-col ms-lg12  ms-xxl8">
            <div className="ms-Grid-col">
              <div style={container2}>
                <Diagramme />
              </div>
            </div>
          
            <div style={container} className="ms-Grid-col ">
              <Tableauevent />
            </div>
            <div style={container2} className="ms-Grid-col ">
                <SimpleDemo />
            </div>
          </div>

          <div className=" ms-Grid-col ms-lg12  ms-xxl4">
            <div style={container} className="ms-Grid-col "><Publi /></div> 
          </div>

          </div>


        </div>
      </div>
    );
  }
}
export default App;

