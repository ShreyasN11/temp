import  Sidebar  from "./Sidebar";
import  Header  from "./Header";
import  UserProfile  from "./UserProfile";
import  ActivityOverview  from "./ActivityOverview";
import  HealthMetrics  from "./HealthMetrics";
import  WorkoutHistory  from "./WorkoutHistory";
import  NutritionSummary  from "./NutritionSummary";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 pt-24">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-x-hidden">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <UserProfile />
              <ActivityOverview />
              <HealthMetrics />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WorkoutHistory />
              <NutritionSummary />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
