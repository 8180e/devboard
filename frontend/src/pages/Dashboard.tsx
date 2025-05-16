import DraggableWidgets from "@/components/DraggableWidgets";
import { getCookie } from "@/utils/cookies";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  if (!getCookie("accessToken")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <DraggableWidgets />
    </div>
  );
};

export default Dashboard;
