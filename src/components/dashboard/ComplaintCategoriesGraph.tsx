
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Technical Support', count: 35 },
  { name: 'Billing', count: 25 },
  { name: 'Product Inquiry', count: 20 },
  { name: 'Account/Login Issues', count: 18 },
  { name: 'Return/Exchange', count: 15 },
  { name: 'Feedback/Suggestions', count: 12 },
];

const ComplaintCategoriesGraph = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Complaint Categories Distribution</CardTitle>
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
              barSize={40}
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
                    `${value} complaints`,
                    'Count'
                  ];
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplaintCategoriesGraph;
