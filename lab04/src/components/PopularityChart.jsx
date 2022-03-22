import React from "react";

import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  {
    name: "Drony wyścigowe",
    ilosc: 20,
  },
  {
    name: "Drony fotograficzne",
    ilosc: 50,
  },
  {
    name: "Drony amatorskie",
    ilosc: 100,
  },
];

export default function PopularityChart() {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ilosc" fill="#8884d8" />
    </BarChart>
  );
}
