
import { Bell, HelpCircle, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user had previously set dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };
  
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h1 className="text-xl font-semibold dark:text-white">Complaint Management</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <HelpCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
};

export default Header;
