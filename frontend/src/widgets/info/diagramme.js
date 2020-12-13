import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';


class Diagramme extends React.Component {

  constructor(props) {
    super(props);

    this.state = {affluance: []};
  }

  

  componentDidMount() {
    axios.get('http://localhost:8000/affluance/')
      .then(response => {
        this.setState({ affluance: response.data })
        console.log(this.state.affluance);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedData = await fetch('http://localhost:8000/affluance', {
  //       method: 'GET'
  //     });

  //     const affluance = await fetchedData.json();

  //     // const nb = jsonData.reduce(
  //     //   (acc, amount) => [...acc, amount.nb],
  //     //   []
  //     // );

  //     setData({
  //       datasets: [
  //         {data: affluance}
  //       ],

  //     });
  //   };

  //   fetchData();

  //   return fetchedData;

  // }, []);


  // const data = [{name: '20/02/14', poseidon: 500, mercure: 320, },
  //               {name: '21/02/14', poseidon: 400, mercure: 500, },
  //               {name: '22/02/14', poseidon: 200, mercure: 300, },
  //               {name: '23/02/14', poseidon: 450, mercure: 250, },
  //               {name: '24/02/14', poseidon: 430, mercure: 460, },
  //             ];
  render() {

    return (
      <Card >
      <CardHeader title="Affluence" />
      <CardContent>
      <LineChart
        width={600}
        height={280}
        data={this.state.affluance}
        margin={{
          top: 5, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="poseidon" stroke="green"  />
        <Line type="monotone" dataKey="mercure" stroke="purple" />
      </LineChart>
      </CardContent>
    </Card>
        
    );
  }
}
export default Diagramme;
