import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';



const Diagramme = ({ className, ...rest }) => {
  const [nb, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/tableau', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();

      const nb = jsonData.reduce(
        (acc, amount) => [...acc, amount.nb],
        []
      );

      setData({
        datasets: [
          {
            name: '20-05-2020', Bateau1: nb.reverse(), Bateau2: 26, amt: 2400,
          }
        ],

      });
    };

    fetchData();
  }, []);

  return (
    <LineChart
      width={600}
      height={280}
      data={nb}
      margin={{
        top: 5, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Bateau1" stroke="green" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Bateau2" stroke="purple" />
    </LineChart>
  );
}
export default Diagramme;
