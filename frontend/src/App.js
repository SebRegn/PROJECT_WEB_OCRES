import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import Navigation from './widgets/navigation/sidebar';
import Tableauevent from './widgets/info/tableau';
import Diagramme from './widgets/info/diagramme';
import Musique from './widgets/info/musique';
import Heure from './widgets/info/heure';
import Publi from './widgets/info/publication';

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
 render(){
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm8 ms-xl2">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl8">
          
          <div style={container}>
              <div style={container}> 
              <Heure />
              </div>
              <Musique/>
          </div>

          <div className="ms-Grid-row">
            <div style={container2}>
              <Diagramme />
            </div>
          </div>

          
            <div style={container}>
              <div style={container2}> 
              <Publi />
              </div>
              <Tableauevent />
            </div>
          </div>

        
      </div>
    </div>
  );
}
}
export default App;

