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
    pop: 20,
  },
  {
    name: "Drony fotograficzne",
    pop: 50,
  },
  {
    name: "Drony amatorskie",
    pop: 100,
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
      <Bar dataKey="pop" fill="#8884d8" />
    </BarChart>
  );
}
