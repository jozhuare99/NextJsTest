"use client"

import {Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, YAxis} from "recharts";

const Overview = ({data}) => {
  // console.log(data)
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis 
        dataKey="name"
        stroke="#8884d8"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        />
        <YAxis
        stroke="#8884d8"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value)=>`$${value}`}
        />
        <Tooltip />
        <Bar dataKey='total' fill='#3498db' radius={[4,4,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Overview;