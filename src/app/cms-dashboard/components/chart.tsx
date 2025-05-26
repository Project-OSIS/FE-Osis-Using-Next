import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
{ date: '01 May', value: 60 },
{ date: '02 May', value: 62 },
{ date: '03 May', value: 65 },
{ date: '04 May', value: 68 },
{ date: '05 May', value: 70 },
{ date: '06 May', value: 72 },
{ date: '07 May', value: 75 },
{ date: '08 May', value: 73 },
{ date: '09 May', value: 71 },
{ date: '10 May', value: 69 },
{ date: '11 May', value: 67 },
{ date: '12 May', value: 65 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
if (active && payload && payload.length) {
  return (
    <div className="bg-custom-dark/90 border border-custom-cyan-700 
                    shadow-lg p-4 rounded-lg text-custom-white">
      <p className="font-bold text-custom-cyan-300">{label}</p>
      <p className="text-custom-cyan-200">Total Proker: {payload[0].value}</p>
    </div>
  );
}
return null;
};

const Chart = () => {
return (
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={data}>
      <CartesianGrid 
        strokeDasharray="3 3" 
        stroke="rgba(6, 182, 212, 0.1)" 
      />
      <XAxis 
        dataKey="date" 
        axisLine={false} 
        tickLine={false} 
        className="text-custom-cyan-500"
        tick={{ fill: 'rgba(6, 182, 212, 0.7)' }}
      />
      <YAxis 
        axisLine={false} 
        tickLine={false} 
        className="text-custom-cyan-500"
        tick={{ fill: 'rgba(6, 182, 212, 0.7)' }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Line 
        type="monotone" 
        dataKey="value" 
        stroke="#06b6d4" 
        strokeWidth={3} 
        dot={{ 
          stroke: '#06b6d4', 
          strokeWidth: 2, 
          r: 5,
          fill: '#0e7490' 
        }}
        activeDot={{ 
          stroke: '#06b6d4', 
          strokeWidth: 4, 
          r: 8,
          fill: '#0891b2' 
        }}
      />
    </LineChart>
  </ResponsiveContainer>
);
};

export default Chart;