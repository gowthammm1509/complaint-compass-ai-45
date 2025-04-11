
import { useState } from "react";
import KanbanBoard from "@/components/tickets/KanbanBoard";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tickets = () => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tickets</h1>
          <p className="text-gray-500 mt-1 dark:text-gray-400">Manage and track customer complaints</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 hover-improve-light"
            />
          </div>
          <Button variant="outline" size="icon" className="dark:border-gray-600 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 dark:text-gray-300" />
          </Button>
        </div>
      </div>

      <div className="flex-1 mt-6">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Tickets;
