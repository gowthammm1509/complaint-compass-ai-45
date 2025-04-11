
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Saad",
      email: "saad@example.com",
      avatar: "",
      ticketsAssigned: 12,
      ticketsResolved: 45,
      averageResponseTime: "1.5h",
    },
    {
      id: 2,
      name: "Prakrit",
      email: "prakrit@example.com",
      avatar: "",
      ticketsAssigned: 8,
      ticketsResolved: 37,
      averageResponseTime: "1.2h",
    },
    {
      id: 3,
      name: "Gowtham",
      email: "gowtham@example.com",
      avatar: "",
      ticketsAssigned: 15,
      ticketsResolved: 62,
      averageResponseTime: "1.8h",
    },
    {
      id: 4,
      name: "Nazim",
      email: "nazim@example.com",
      avatar: "",
      ticketsAssigned: 7,
      ticketsResolved: 31,
      averageResponseTime: "2.1h",
    },
    {
      id: 5,
      name: "Kalyan",
      email: "kalyan@example.com",
      avatar: "",
      ticketsAssigned: 9,
      ticketsResolved: 28,
      averageResponseTime: "1.7h",
    },
    {
      id: 6,
      name: "Samuel",
      email: "samuel@example.com",
      avatar: "",
      ticketsAssigned: 11,
      ticketsResolved: 42,
      averageResponseTime: "1.9h",
    },
    {
      id: 7,
      name: "Noel",
      email: "noel@example.com",
      avatar: "",
      ticketsAssigned: 6,
      ticketsResolved: 25,
      averageResponseTime: "2.3h",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Average Resolution Time</p>
              <h3 className="text-2xl font-bold mt-1">1.7 days</h3>
              <div className="flex items-center mt-2">
                <span className="text-xs font-medium text-green-600">+5%</span>
                <span className="text-xs text-gray-500 ml-1">vs last week</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-50 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">First Response Time</p>
              <h3 className="text-2xl font-bold mt-1">2.3 hours</h3>
              <div className="flex items-center mt-2">
                <span className="text-xs font-medium text-red-600">-2%</span>
                <span className="text-xs text-gray-500 ml-1">vs last week</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-50 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Customer Satisfaction</p>
              <h3 className="text-2xl font-bold mt-1">89%</h3>
              <div className="flex items-center mt-2">
                <span className="text-xs font-medium text-green-600">+3%</span>
                <span className="text-xs text-gray-500 ml-1">vs last week</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-50 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
