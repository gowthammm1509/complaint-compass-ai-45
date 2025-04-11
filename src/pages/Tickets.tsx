
import { useState } from "react";
import KanbanBoard from "@/components/tickets/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Inbox, List, Kanban, Calendar, Search, Filter } from "lucide-react";

const Tickets = () => {
  const [viewMode, setViewMode] = useState("kanban");

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tickets</h1>
          <p className="text-gray-500 mt-1">Manage and track customer complaints</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="kanban" className="flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="kanban" onClick={() => setViewMode("kanban")}>
              <Kanban className="h-4 w-4 mr-2" />
              Board
            </TabsTrigger>
            <TabsTrigger value="list" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4 mr-2" />
              List
            </TabsTrigger>
            <TabsTrigger value="inbox" onClick={() => setViewMode("inbox")}>
              <Inbox className="h-4 w-4 mr-2" />
              Inbox
            </TabsTrigger>
            <TabsTrigger value="calendar" onClick={() => setViewMode("calendar")}>
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="kanban" className="flex-1 mt-6">
          <KanbanBoard />
        </TabsContent>
        
        <TabsContent value="list" className="flex-1 mt-6">
          <div className="bg-white rounded-md shadow-sm p-8 text-center">
            <h3 className="text-lg font-medium text-gray-700">List View</h3>
            <p className="text-gray-500 mt-2">
              The list view will be implemented in the next phase.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="inbox" className="flex-1 mt-6">
          <div className="bg-white rounded-md shadow-sm p-8 text-center">
            <h3 className="text-lg font-medium text-gray-700">Inbox View</h3>
            <p className="text-gray-500 mt-2">
              The inbox view will be implemented in the next phase.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="calendar" className="flex-1 mt-6">
          <div className="bg-white rounded-md shadow-sm p-8 text-center">
            <h3 className="text-lg font-medium text-gray-700">Calendar View</h3>
            <p className="text-gray-500 mt-2">
              The calendar view will be implemented in the next phase.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tickets;
