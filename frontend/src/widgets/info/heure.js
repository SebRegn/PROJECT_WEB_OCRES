import React  from 'react';
import Clock from 'react-live-clock';
 

class Heure extends React.Component {

    render() {

        return(
        <h1><Clock 
        format={'HH:mm:ss'} 
        ticking={true} 
        timezone={'EU/Pacific'}
         >
        </Clock></h1>
        )
    }
}
export default Heure;

