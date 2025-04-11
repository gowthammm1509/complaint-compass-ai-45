
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-gray-500 mt-1">View and export analytics about your complaints</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none">
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
            <CardTitle>Tickets by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">To Do</span>
                  <span className="text-sm font-medium">35 tickets (23%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-2 bg-gray-400 rounded-full" style={{ width: "23%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">In Progress</span>
                  <span className="text-sm font-medium">42 tickets (28%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Resolved</span>
                  <span className="text-sm font-medium">73 tickets (49%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "49%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Average Resolution</p>
                  <p className="text-2xl font-bold mt-1">1.8 days</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">First Response</p>
                  <p className="text-2xl font-bold mt-1">3.2 hours</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Resolution by Priority</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Low</span>
                      <span>0.9 days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Medium</span>
                      <span>1.7 days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>High</span>
                      <span>2.3 days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-orange-500 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Critical</span>
                      <span>3.1 days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-red-500 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Report Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date Range</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Created By</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Created On</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">Monthly Performance</td>
                  <td className="px-4 py-4 text-sm">Mar 1 - Mar 31, 2025</td>
                  <td className="px-4 py-4 text-sm">John Smith</td>
                  <td className="px-4 py-4 text-sm">Apr 5, 2025</td>
                  <td className="px-4 py-4">
                    <Button variant="outline" size="sm">Download</Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">Technical Issues Summary</td>
                  <td className="px-4 py-4 text-sm">Q1 2025</td>
                  <td className="px-4 py-4 text-sm">Jane Wilson</td>
                  <td className="px-4 py-4 text-sm">Apr 2, 2025</td>
                  <td className="px-4 py-4">
                    <Button variant="outline" size="sm">Download</Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">Customer Satisfaction</td>
                  <td className="px-4 py-4 text-sm">Last 90 days</td>
                  <td className="px-4 py-4 text-sm">Chris Taylor</td>
                  <td className="px-4 py-4 text-sm">Mar 28, 2025</td>
                  <td className="px-4 py-4">
                    <Button variant="outline" size="sm">Download</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
