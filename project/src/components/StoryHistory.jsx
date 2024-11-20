import React from 'react';
import { History, Calendar, Clock } from 'lucide-react';

// Mock data - replace with actual data from your backend
const mockHistory = [
  {
    id: 1,
    title: "The Lost Kingdom",
    date: "2024-03-10",
    duration: "45 minutes",
    progress: "Completed chapter 1"
  },
  {
    id: 2,
    title: "Stellar Dreams",
    date: "2024-03-09",
    duration: "30 minutes",
    progress: "Character development"
  }
];

function StoryHistory() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <History className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">Story History</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Writing Sessions</h2>
          
          <div className="space-y-6">
            {mockHistory.map((session) => (
              <div key={session.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{session.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{session.progress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mockHistory.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No writing sessions recorded yet.</p>
        </div>
      )}
    </div>
  );
}

export default StoryHistory;