import React from 'react';
import { Plus, Calendar as CalendarIcon, Clock, MapPin, User, Phone, Video as VideoIcon } from 'lucide-react';

function Appointments() {
  const appointments = [
    {
      id: 1,
      date: "2024-03-15",
      time: "09:00 AM",
      type: "In-person",
      farm: "Green Meadows Farm",
      contact: "John Smith",
      phone: "+1 (555) 123-4567",
      status: "Upcoming"
    },
    {
      id: 2,
      date: "2024-03-15",
      time: "02:30 PM",
      type: "Video",
      farm: "Sunrise Valley Ranch",
      contact: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      status: "Upcoming"
    },
    {
      id: 3,
      date: "2024-03-14",
      time: "11:00 AM",
      type: "In-person",
      farm: "Highland Pastures",
      contact: "Mike Brown",
      phone: "+1 (555) 456-7890",
      status: "Completed"
    }
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Appointments</h1>
          <p className="text-gray-600">Manage your upcoming and past appointments</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          New Appointment
        </button>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`bg-white rounded-lg border border-gray-200 p-6 ${
              appointment.status === "Completed" ? "opacity-75" : ""
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  {appointment.type === "Video" ? (
                    <VideoIcon size={24} className="text-blue-600" />
                  ) : (
                    <CalendarIcon size={24} className="text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{appointment.farm}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={16} />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {appointment.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {appointment.type}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <span
                  className={`px-3 py-1 rounded-full ${
                    appointment.status === "Upcoming"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {appointment.contact}
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  {appointment.phone}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Appointments;