
import { useState } from "react";
import { MessageSquare, Folder, AlertTriangle, Clock, Zap, Tag, CreditCard, Wrench, Package, User, RotateCcw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Dummy complaints data
const complaintsByCategory = {
  "Billing": [
    { id: 1, title: "Double charged for subscription", date: "2025-04-10", status: "Open" },
    { id: 2, title: "Refund not processed", date: "2025-04-04", status: "In Review" },
  ],
  "Technical Support": [
    { id: 3, title: "Website login not working", date: "2025-04-08", status: "Open" },
    { id: 4, title: "App crashes when uploading photos", date: "2025-04-06", status: "In Review" },
    { id: 5, title: "Unable to complete checkout", date: "2025-04-01", status: "Resolved" },
  ],
  "Product Inquiry": [
    { id: 6, title: "Compatibility with third-party devices", date: "2025-04-09", status: "Open" },
    { id: 7, title: "Product specifications request", date: "2025-04-05", status: "Open" },
  ],
  "Account/Login Issues": [
    { id: 8, title: "Cannot reset password", date: "2025-04-03", status: "Open" },
    { id: 9, title: "Account locked after multiple attempts", date: "2025-04-02", status: "Resolved" },
  ],
  "Return/Exchange": [
    { id: 10, title: "Defective smartphone screen", date: "2025-04-07", status: "Open" },
    { id: 11, title: "Wrong item delivered", date: "2025-03-31", status: "In Review" },
  ],
  "Feedback/Suggestions": [
    { id: 12, title: "Feature request for mobile app", date: "2025-03-30", status: "Open" },
  ]
};

// Category icons mapping
const categoryIcons = {
  "Billing": CreditCard,
  "Technical Support": Wrench,
  "Product Inquiry": Package,
  "Account/Login Issues": User,
  "Return/Exchange": RotateCcw,
  "Feedback/Suggestions": MessageCircle
};

const Inbox = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Function to go back to categories view
  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Inbox</h1>
          <p className="text-gray-500 mt-1">View and manage complaints by category</p>
        </div>
      </div>

      {selectedCategory ? (
        // Show complaints for selected category
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={handleBackClick} className="h-8 px-2">
              ← Back to Categories
            </Button>
            <h2 className="text-xl font-semibold">{selectedCategory}</h2>
          </div>
          
          <div className="grid gap-4">
            {complaintsByCategory[selectedCategory as keyof typeof complaintsByCategory].map(complaint => (
              <Card key={complaint.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{complaint.title}</h3>
                    <p className="text-sm text-gray-500">Submitted on {complaint.date}</p>
                  </div>
                  <div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      complaint.status === "Open" ? "bg-blue-100 text-blue-800" :
                      complaint.status === "In Review" ? "bg-yellow-100 text-yellow-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {complaint.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        // Show categories
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(complaintsByCategory).map(([category, complaints]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <Card 
                key={category} 
                className="p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category}</h3>
                    <p className="text-sm text-gray-500 mt-1">{complaints.length} complaints</p>
                    <div className="mt-2 flex space-x-2">
                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        {complaints.filter(c => c.status === "Open").length} open
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">
                        {complaints.filter(c => c.status === "In Review").length} in review
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Inbox;
