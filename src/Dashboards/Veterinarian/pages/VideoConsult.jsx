import React from 'react';
import { Calendar, Clock, User, Phone, Video as VideoIcon, MessageSquare } from 'lucide-react';

function VideoConsult() {
  const upcomingConsults = [
    {
      id: 1,
      farm: "Green Meadows Farm",
      date: "2024-03-15",
      time: "09:00 AM",
      contact: "John Smith",
      phone: "+1 (555) 123-4567",
      status: "Scheduled"
    },
    {
      id: 2,
      farm: "Sunrise Valley Ranch",
      date: "2024-03-15",
      time: "02:30 PM",
      contact: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      status: "Waiting Room"
    }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Video Consultations</h1>
        <p className="text-gray-600">Manage your virtual appointments and consultations</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Next Consultation</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                <VideoIcon size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Sunrise Valley Ranch</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    Today
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    02:30 PM
                  </div>
                </div>
              </div>
              <button className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg">
                Join Call
              </button>
            </div>
            <div className="flex gap-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1">
                <User size={16} />
                Sarah Johnson
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                +1 (555) 987-6543
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Consultations</h2>
            <div className="space-y-4">
              {upcomingConsults.map((consult) => (
                <div key={consult.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <VideoIcon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{consult.farm}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {consult.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {consult.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      consult.status === "Waiting Room"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {consult.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 p-3 text-left rounded-lg hover:bg-gray-50">
                <VideoIcon size={20} className="text-gray-400" />
                Start Instant Call
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left rounded-lg hover:bg-gray-50">
                <MessageSquare size={20} className="text-gray-400" />
                Send Message
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Call Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Enable HD Video
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Mute Notifications During Calls
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Auto-record Consultations
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoConsult;