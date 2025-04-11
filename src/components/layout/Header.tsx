import { Bell, HelpCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold">Complaint Management</h1>
      </div>
      <div className="flex items-center space-x-4">
        
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <HelpCircle className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>;
};
export default Header;