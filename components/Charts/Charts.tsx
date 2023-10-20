"use client";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

 const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },

  ];
const ChartsOne = () => {

  return (
    <div>
      <PieChart width={220} height={200}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#06b6d4"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={60}
          fill="#4b5563"
          label
        />
      </PieChart>
    </div>
  );
};

const ChartsTwo = () => {

  return (
    <div>
      <PieChart width={220} height={200}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#06b6d4"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={60}
          fill="#4b5563"
          label
        />
      </PieChart>
    </div>
  );
};

const ChartsThree = () => {

  return (
    <div>
      <PieChart width={220} height={200}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#06b6d4"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={60}
          fill="#4b5563"
          label
        />
      </PieChart>
    </div>
  );
};

export { ChartsOne, ChartsTwo, ChartsThree };
