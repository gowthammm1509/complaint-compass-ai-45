
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Alex S.', resolved: 23, sla: 95 },
  { name: 'Jane W.', resolved: 18, sla: 87 },
  { name: 'Chris T.', resolved: 27, sla: 91 },
  { name: 'Maria L.', resolved: 21, sla: 98 },
  { name: 'Dave K.', resolved: 15, sla: 82 },
];

const TeamPerformance = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
              barSize={20}
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
                formatter={(value, name) => {
                  return [
                    name === 'resolved' ? `${value} tickets` : `${value}%`,
                    name === 'resolved' ? 'Resolved' : 'SLA Met'
                  ];
                }}
              />
              <Bar dataKey="resolved" fill="#2684FF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPerformance;
