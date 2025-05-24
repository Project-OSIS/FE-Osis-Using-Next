// src/app/cms-dashboard/components/chart.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '01 May', value: 78 },
  { date: '02 May', value: 75 },
  { date: '03 May', value: 73 },
  // ...
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#2196f3" name="Order" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;