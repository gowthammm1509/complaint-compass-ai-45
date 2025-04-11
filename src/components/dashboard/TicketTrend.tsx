
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Mon", tickets: 12 },
  { name: "Tue", tickets: 19 },
  { name: "Wed", tickets: 15 },
  { name: "Thu", tickets: 25 },
  { name: "Fri", tickets: 17 },
  { name: "Sat", tickets: 8 },
  { name: "Sun", tickets: 5 },
];

const TicketTrend = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Ticket Volume Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value) => [`${value} tickets`, 'Volume']}
              />
              <Line
                type="monotone"
                dataKey="tickets"
                stroke="#2684FF"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketTrend;
