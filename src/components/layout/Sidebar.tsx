
import { Home, Inbox, BarChart2, Users, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [{
    icon: Home,
    label: "Dashboard",
    path: "/"
  }, {
    icon: Inbox,
    label: "Inbox",
    path: "/inbox"
  }, {
    icon: Inbox,
    label: "Tickets",
    path: "/tickets"
  }, {
    icon: Users,
    label: "Team",
    path: "/team"
  }, {
    icon: BarChart2,
    label: "Reports",
    path: "/reports"
  }];

  return <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="h-8 w-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold">MV</span>
          </span>
          <span className="font-bold text-xl dark:text-white">MAX VERSTAPPEN</span>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search tickets..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 hover-improve-light" 
          />
        </div>
      </div>

      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {navItems.map(item => <li key={item.label}>
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center space-x-3 px-4 py-2.5 rounded-md transition-colors ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}`}>
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>)}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 p-2 rounded-md hover-improve">
          <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">JS</span>
          </div>
          <div>
            <p className="text-sm font-medium dark:text-white">John Smith</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>;
};

export default Sidebar;
