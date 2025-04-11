
import { useState } from "react";
import TicketCard, { Ticket } from "./TicketCard";

// Sample data
const initialTickets: Ticket[] = [
  {
    id: "T-1001",
    title: "Website login issues after recent update",
    customerName: "John Doe",
    category: "Technical Support",
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
    title: "Questions about product compatibility",
    customerName: "Robert Garcia",
    category: "Product Inquiry",
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
    title: "Feature suggestion for mobile app",
    customerName: "Emily Wilson",
    category: "Feedback/Suggestions",
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
    title: "Return request for damaged product",
    customerName: "David Thompson",
    category: "Return/Exchange",
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
              <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">
                ({getTicketsByStatus(column.id).length})
              </span>
            </div>
            <div className="bg-gray-50 rounded-md p-3 flex-1 overflow-y-auto dark:bg-gray-800 dark:border dark:border-gray-700">
              <div className="space-y-3">
                {getTicketsByStatus(column.id).map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
