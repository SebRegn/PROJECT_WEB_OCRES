import 'office-ui-fabric-react/dist/css/fabric.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Test = ({ className, ...rest }) => {
  const classes = useStyles();
  const [data, setData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/tableau', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();

      const data = jsonData.reduce(
        (acc, amount) => [...acc, amount.nb],
        []
      );

      const date = jsonData.reduce(
        (acc, amount) => [...acc, amount.date],
        []
    );
      setData({
        datasets: [
          {
            data: data.reverse(),
            label: date.reverse(),
            borderColor: 'green',
            fill: false
          },
          {
            data: date.reverse(),
            label: 'Bateau2',
            borderColor: 'purple',
            fill: false
          }
        ],

      });
    };

    fetchData();
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Affluence" />
      <CardContent>
        <Box width={600} height={280} position="relative">
          <Line
            data={data}
            options={{
              legend: {
                display: true
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 40,
                      min: 0,
                      stepSize: 10
                    }
                  }
                ]
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Test;