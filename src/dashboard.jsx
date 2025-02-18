import React from 'react';
import { BookOpen, Play, Users, Book } from 'lucide-react';

const StudentDashboard = () => {
  const dashboardItems = [
    { icon: <BookOpen className="w-8 h-8" />, title: 'Notice' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Material' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Test' },
    { icon: <Play className="w-8 h-8" />, title: 'Video[cal]' },
    { icon: <Users className="w-8 h-8" />, title: 'Group Discussion' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Mentoring' },
    { icon: <Book className="w-8 h-8" />, title: 'Assignment' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'vOSP(c)E' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'My Logbook' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Project Submission' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Result' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Feedback' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="/path-to-your-logo.png"
                alt="Bhavnagar Medical College Logo"
              />
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Students Dashboard</h1>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dashboardItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center aspect-square cursor-pointer"
              >
                <div className="mb-2">
                  {item.icon}
                </div>
                <p className="text-sm text-center font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
