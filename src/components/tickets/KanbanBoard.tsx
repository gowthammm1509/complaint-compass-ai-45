
import { useState } from "react";
import TicketCard, { Ticket } from "./TicketCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const initialTickets: Ticket[] = [
  {
    id: "T-1001",
    title: "Website login issues after recent update",
    customerName: "John Doe",
    category: "Technical",
    priority: "high",
    status: "todo",
    assignee: undefined,
    attachments: 2,
    comments: 3,
    createdAt: "2h ago",
  },
  {
    id: "T-1002",
    title: "Billing discrepancy on March invoice",
    customerName: "Sarah Johnson",
    category: "Billing",
    priority: "medium",
    status: "todo",
    assignee: {
      name: "Alex Smith",
      avatar: "",
    },
    attachments: 1,
    comments: 2,
    createdAt: "3h ago",
  },
  {
    id: "T-1003",
    title: "Request for refund on premium subscription",
    customerName: "Michael Brown",
    category: "Billing",
    priority: "low",
    status: "inprogress",
    assignee: {
      name: "Jane Wilson",
      avatar: "",
    },
    attachments: 0,
    comments: 5,
    createdAt: "1d ago",
  },
  {
    id: "T-1004",
    title: "Service outage reported in downtown area",
    customerName: "Robert Garcia",
    category: "Service",
    priority: "critical",
    status: "inprogress",
    assignee: {
      name: "Chris Taylor",
      avatar: "",
    },
    attachments: 4,
    comments: 8,
    createdAt: "5h ago",
  },
  {
    id: "T-1005",
    title: "Poor customer service experience",
    customerName: "Emily Wilson",
    category: "Feedback",
    priority: "medium",
    status: "resolved",
    assignee: {
      name: "Alex Smith",
      avatar: "",
    },
    attachments: 0,
    comments: 2,
    createdAt: "2d ago",
  },
  {
    id: "T-1006",
    title: "App crashes when uploading photos",
    customerName: "David Thompson",
    category: "Technical",
    priority: "high",
    status: "resolved",
    assignee: {
      name: "Jane Wilson",
      avatar: "",
    },
    attachments: 3,
    comments: 4,
    createdAt: "1d ago",
  },
];

const KanbanBoard = () => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const columns = [
    { id: "todo", title: "To Do", color: "bg-status-todo" },
    { id: "inprogress", title: "In Progress", color: "bg-status-inprogress" },
    { id: "resolved", title: "Resolved", color: "bg-status-resolved" },
  ];

  const getTicketsByStatus = (status: string) => {
    return tickets.filter((ticket) => ticket.status === status);
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-3 gap-6 h-full">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className={`h-3 w-3 rounded-full ${column.color} mr-2`}></div>
              <h2 className="font-medium">{column.title}</h2>
              <span className="text-gray-500 text-sm ml-2">
                ({getTicketsByStatus(column.id).length})
              </span>
            </div>
            <div className="bg-gray-50 rounded-md p-3 flex-1 overflow-y-auto">
              <div className="space-y-3">
                {getTicketsByStatus(column.id).map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
                {column.id === "todo" && (
                  <Button 
                    variant="outline" 
                    className="w-full border-dashed text-gray-500 hover:text-primary hover:border-primary"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    <span>Add Ticket</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
