"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    visits: 1400,
    inquiries: 240,
  },
  {
    name: "Feb",
    visits: 1800,
    inquiries: 350,
  },
  {
    name: "Mar",
    visits: 2400,
    inquiries: 450,
  },
  {
    name: "Apr",
    visits: 2100,
    inquiries: 410,
  },
  {
    name: "May",
    visits: 2800,
    inquiries: 520,
  },
  {
    name: "Jun",
    visits: 3200,
    inquiries: 580,
  },
  {
    name: "Jul",
    visits: 3000,
    inquiries: 560,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar
          dataKey="visits"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="inquiries"
          fill="hsl(var(--accent))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}