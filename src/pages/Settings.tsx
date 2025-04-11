
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">Configure your complaint management system</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email Integration</TabsTrigger>
          <TabsTrigger value="workflow">Workflow</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="company-name">Company Name</Label>
                <input
                  id="company-name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="Acme Corporation"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="America/New_York"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="date-format">Date Format</Label>
                <select
                  id="date-format"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="MM/DD/YYYY"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Enable Dark Mode</h4>
                  <p className="text-xs text-gray-500">Use dark theme for the dashboard</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="email-provider">Email Provider</Label>
                <select
                  id="email-provider"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="gmail"
                >
                  <option value="gmail">Gmail</option>
                  <option value="outlook">Outlook</option>
                  <option value="custom">Custom SMTP</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email-address">Email Address</Label>
                <input
                  id="email-address"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="support@acmecorp.com"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="check-frequency">Check Frequency</Label>
                <select
                  id="check-frequency"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="5"
                >
                  <option value="1">Every 1 minute</option>
                  <option value="5">Every 5 minutes</option>
                  <option value="15">Every 15 minutes</option>
                  <option value="30">Every 30 minutes</option>
                  <option value="60">Every hour</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Auto-Create Tickets</h4>
                  <p className="text-xs text-gray-500">Automatically create tickets from incoming emails</p>
                </div>
                <Switch id="auto-create" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Process Attachments</h4>
                  <p className="text-xs text-gray-500">Include email attachments in created tickets</p>
                </div>
                <Switch id="process-attachments" defaultChecked />
              </div>
              
              <Button>Connect Email</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workflow">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Default Ticket Statuses</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="h-3 w-3 bg-status-todo rounded-full mr-2"></div>
                      <span className="font-medium">To Do</span>
                    </div>
                    <p className="text-xs text-gray-500">New tickets awaiting action</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="h-3 w-3 bg-status-inprogress rounded-full mr-2"></div>
                      <span className="font-medium">In Progress</span>
                    </div>
                    <p className="text-xs text-gray-500">Tickets being worked on</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="h-3 w-3 bg-status-resolved rounded-full mr-2"></div>
                      <span className="font-medium">Resolved</span>
                    </div>
                    <p className="text-xs text-gray-500">Completed tickets</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">+ Add Custom Status</Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Ticket Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                    <span>Billing</span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                    <span>Technical</span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                    <span>Service</span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                    <span>Feedback</span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                <Button variant="outline" size="sm">+ Add Category</Button>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="auto-assign">Auto-Assignment Logic</Label>
                <select
                  id="auto-assign"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="round-robin"
                >
                  <option value="round-robin">Round Robin</option>
                  <option value="load-balance">Load Balancing</option>
                  <option value="category-specialist">Category Specialist</option>
                  <option value="manual">Manual Only</option>
                </select>
              </div>
              
              <Button>Save Workflow Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-sm font-medium">Email Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">New Ticket Created</h4>
                    <p className="text-xs text-gray-500">Send email when a new ticket is created</p>
                  </div>
                  <Switch id="notify-new-ticket" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Ticket Assigned</h4>
                    <p className="text-xs text-gray-500">Send email when a ticket is assigned</p>
                  </div>
                  <Switch id="notify-assigned" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Comment Added</h4>
                    <p className="text-xs text-gray-500">Send email when a comment is added</p>
                  </div>
                  <Switch id="notify-comment" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Status Changed</h4>
                    <p className="text-xs text-gray-500">Send email when a ticket status changes</p>
                  </div>
                  <Switch id="notify-status" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">SLA Warning</h4>
                    <p className="text-xs text-gray-500">Send email when a ticket approaches SLA breach</p>
                  </div>
                  <Switch id="notify-sla" defaultChecked />
                </div>
              </div>
              
              <h3 className="text-sm font-medium pt-4">In-App Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Mentions</h4>
                    <p className="text-xs text-gray-500">Notify when someone @mentions you</p>
                  </div>
                  <Switch id="notify-mentions" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Assignments</h4>
                    <p className="text-xs text-gray-500">Notify when you're assigned to a ticket</p>
                  </div>
                  <Switch id="notify-assignments" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">Team Updates</h4>
                    <p className="text-xs text-gray-500">Notify on team membership changes</p>
                  </div>
                  <Switch id="notify-team" />
                </div>
              </div>
              
              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">AI-Powered Categorization</h4>
                  <p className="text-xs text-gray-500">Automatically categorize tickets based on content</p>
                </div>
                <Switch id="ai-categorization" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Priority Detection</h4>
                  <p className="text-xs text-gray-500">Use AI to determine ticket priority level</p>
                </div>
                <Switch id="ai-priority" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Sentiment Analysis</h4>
                  <p className="text-xs text-gray-500">Detect customer sentiment in complaints</p>
                </div>
                <Switch id="ai-sentiment" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Response Suggestions</h4>
                  <p className="text-xs text-gray-500">Get AI-generated response suggestions</p>
                </div>
                <Switch id="ai-response" />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="api-key">AI API Key</Label>
                <input
                  id="api-key"
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your OpenAI API key"
                />
                <p className="text-xs text-gray-500 mt-1">Required for AI functionality. Your API key is stored securely.</p>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="ai-model">AI Model</Label>
                <select
                  id="ai-model"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="gpt-4o-mini"
                >
                  <option value="gpt-4o-mini">GPT-4o Mini</option>
                  <option value="gpt-4o">GPT-4o</option>
                  <option value="gpt-4.5-preview">GPT-4.5 Preview</option>
                  <option value="custom">Custom Model</option>
                </select>
              </div>
              
              <Button>Save AI Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
