
import { BarChart3, MailOpen, Clock, CheckCircle } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import TicketsByCategory from "@/components/dashboard/TicketsByCategory";
import TicketTrend from "@/components/dashboard/TicketTrend";
import ComplaintCategoriesGraph from "@/components/dashboard/ComplaintCategoriesGraph";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of complaint management metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Tickets"
          value={152}
          description="Total active tickets"
          icon={<MailOpen className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="In Progress"
          value={43}
          description="Tickets being handled"
          icon={<Clock className="h-5 w-5" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Resolved"
          value={98}
          description="Tickets completed"
          icon={<CheckCircle className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketTrend />
        <TicketsByCategory />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ComplaintCategoriesGraph />
      </div>
    </div>
  );
};

export default Dashboard;
