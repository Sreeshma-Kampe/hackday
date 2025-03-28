import React from 'react';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

function CalendarComponent() {
  const events = [
    {
      id: 1,
      title: "Quality Inspection",
      date: "2024-03-15",
      time: "10:00 AM",
      type: "inspection"
    },
    {
      id: 2,
      title: "Farmer Meeting",
      date: "2024-03-15",
      time: "2:00 PM",
      type: "meeting"
    },
    {
      id: 3,
      title: "Equipment Maintenance",
      date: "2024-03-16",
      time: "9:00 AM",
      type: "maintenance"
    },
    {
      id: 4,
      title: "Training Session",
      date: "2024-03-18",
      time: "11:00 AM",
      type: "training"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Calendar</h1>
          <p className="text-gray-600">Schedule and manage events</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Calendar Widget */}
        <div className="col-span-3 bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">March 2024</h2>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-lg bg-blue-50 text-blue-600">Month</button>
                <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-50">Week</button>
                <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-50">Day</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 text-center text-sm font-medium text-gray-500">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 35 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-24 p-2 border border-gray-100 rounded-lg ${
                    index === 14 ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="text-sm font-medium">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
          </div>
          <div className="p-6 space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-500">
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="font-medium">{event.title}</div>
                <div className="mt-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.type === 'inspection' ? 'bg-blue-50 text-blue-600' :
                    event.type === 'meeting' ? 'bg-green-50 text-green-600' :
                    event.type === 'maintenance' ? 'bg-orange-50 text-orange-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;