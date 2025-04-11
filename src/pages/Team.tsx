
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Smith",
      email: "alex.smith@example.com",
      avatar: "",
      ticketsAssigned: 12,
      ticketsResolved: 45,
      averageResponseTime: "1.5h",
    },
    {
      id: 2,
      name: "Jane Wilson",
      email: "jane.wilson@example.com",
      avatar: "",
      ticketsAssigned: 8,
      ticketsResolved: 37,
      averageResponseTime: "1.2h",
    },
    {
      id: 3,
      name: "Chris Taylor",
      email: "chris.taylor@example.com",
      avatar: "",
      ticketsAssigned: 15,
      ticketsResolved: 62,
      averageResponseTime: "1.8h",
    },
    {
      id: 4,
      name: "Maria Lopez",
      email: "maria.lopez@example.com",
      avatar: "",
      ticketsAssigned: 7,
      ticketsResolved: 31,
      averageResponseTime: "2.1h",
    },
    {
      id: 5,
      name: "Dave Kim",
      email: "dave.kim@example.com",
      avatar: "",
      ticketsAssigned: 9,
      ticketsResolved: 28,
      averageResponseTime: "1.7h",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Team Management</h1>
        <p className="text-gray-500 mt-1">Manage your support team and track performance</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Assigned</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Resolved</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Avg. Response</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium mr-3">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">{member.email}</td>
                    <td className="px-4 py-4 text-sm">{member.ticketsAssigned}</td>
                    <td className="px-4 py-4 text-sm">{member.ticketsResolved}</td>
                    <td className="px-4 py-4 text-sm">{member.averageResponseTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Average Resolution Time</span>
              <span className="text-lg font-bold">1.7 days</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: "68%" }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">First Response Time</span>
              <span className="text-lg font-bold">2.3 hours</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: "82%" }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Customer Satisfaction</span>
              <span className="text-lg font-bold">89%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "89%" }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamPage;
