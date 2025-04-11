
import { Clock, MessageSquare, Paperclip } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Ticket {
  id: string;
  title: string;
  customerName: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  status: "todo" | "inprogress" | "resolved";
  assignee?: {
    name: string;
    avatar: string;
  };
  attachments: number;
  comments: number;
  createdAt: string;
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  const priorityColors = {
    low: "bg-priority-low/10 text-priority-low",
    medium: "bg-priority-medium/10 text-priority-medium",
    high: "bg-priority-high/10 text-priority-high",
    critical: "bg-priority-critical/10 text-priority-critical",
  };

  const categoryColors = {
    "Billing": "bg-blue-100 text-blue-800",
    "Technical": "bg-purple-100 text-purple-800",
    "Service": "bg-orange-100 text-orange-800",
    "Feedback": "bg-green-100 text-green-800",
    "Other": "bg-gray-100 text-gray-800",
  };

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-medium line-clamp-2">{ticket.title}</h3>
        {ticket.assignee ? (
          <div className="h-6 w-6 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
            {ticket.assignee.avatar ? (
              <img
                src={ticket.assignee.avatar}
                alt={ticket.assignee.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-primary text-white text-xs">
                {ticket.assignee.name.charAt(0)}
              </div>
            )}
          </div>
        ) : (
          <div className="h-6 w-6 rounded-full border border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-xs">+</span>
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-xs text-gray-500">From: {ticket.customerName}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="secondary" className={priorityColors[ticket.priority]}>
          {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
        </Badge>
        
        <Badge 
          variant="secondary" 
          className={categoryColors[ticket.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"}
        >
          {ticket.category}
        </Badge>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          {ticket.attachments > 0 && (
            <div className="flex items-center">
              <Paperclip className="h-3 w-3 mr-1" />
              <span>{ticket.attachments}</span>
            </div>
          )}
          {ticket.comments > 0 && (
            <div className="flex items-center">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>{ticket.comments}</span>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
