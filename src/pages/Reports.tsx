
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

const ReportsPage = () => {
  // Sample data for complaint categories by status
  const categories = [
    { name: "Technical Support", todo: 10, inProgress: 15, resolved: 25 },
    { name: "Billing", todo: 8, inProgress: 10, resolved: 15 },
    { name: "Product Inquiry", todo: 5, inProgress: 8, resolved: 12 },
    { name: "Account/Login Issues", todo: 7, inProgress: 6, resolved: 14 },
    { name: "Return/Exchange", todo: 4, inProgress: 3, resolved: 9 },
    { name: "Feedback/Suggestions", todo: 1, inProgress: 0, resolved: 8 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-gray-500 mt-1 dark:text-gray-400">View and export analytics about your complaints</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
              <option>Custom range</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">To Do</span>
                  <span className="text-sm font-medium">35 tickets (23%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-gray-400 rounded-full" style={{ width: "23%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">In Progress</span>
                  <span className="text-sm font-medium">42 tickets (28%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Resolved</span>
                  <span className="text-sm font-medium">73 tickets (49%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "49%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resolution by Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 resolution-card">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Low</span>
                  <span>0.9 days</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Medium</span>
                  <span>1.7 days</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>High</span>
                  <span>2.3 days</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-orange-500 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Critical</span>
                  <span>3.1 days</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1 dark:bg-gray-700">
                  <div className="h-2 bg-red-500 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Complaint Categories by Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">To Do</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">In Progress</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Resolved</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Total</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => {
                  const total = category.todo + category.inProgress + category.resolved;
                  return (
                    <tr key={category.name} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-4 font-medium">{category.name}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{category.todo}</span>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/50 dark:text-blue-300">{category.inProgress}</span>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full dark:bg-green-900/50 dark:text-green-300">{category.resolved}</span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium">{total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
