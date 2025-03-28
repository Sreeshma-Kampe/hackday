import React, { useState } from 'react';
import { Clock, Video as VideoIcon, Phone, X } from 'lucide-react';

function Availability() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [startTime, setStartTime] = useState('9:00 AM');
  const [endTime, setEndTime] = useState('10:00 AM');
  const [consultationType, setConsultationType] = useState('Video Call');
  const [timeSlots, setTimeSlots] = useState([
    { id: '1', startTime: '9:00 AM', endTime: '10:00 AM', type: 'Video Call' },
    { id: '2', startTime: '11:00 AM', endTime: '12:00 PM', type: 'Video Call' },
    { id: '3', startTime: '2:00 PM', endTime: '3:00 PM', type: 'Phone Call' },
  ]);

  const timeOptions = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  ];

  const handleAddTimeSlot = () => {
    const newSlot = {
      id: Date.now().toString(),
      startTime,
      endTime,
      type: consultationType,
    };
    setTimeSlots([...timeSlots, newSlot]);
  };

  const handleRemoveTimeSlot = (id) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">Availability Settings</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Available</span>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
              isAvailable ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                isAvailable ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-8">Set your available time slots</p>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2"
            >
              {timeOptions.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2"
            >
              {timeOptions.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Type</label>
            <select
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2"
            >
              <option value="Video Call">Video Call</option>
              <option value="Phone Call">Phone Call</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAddTimeSlot}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Time Slot
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Your Current Availability</h2>
          <div className="space-y-3">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {slot.type === 'Video Call' ? (
                    <VideoIcon className="text-blue-600" size={20} />
                  ) : (
                    <Phone className="text-blue-600" size={20} />
                  )}
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <span>{slot.startTime} - {slot.endTime}</span>
                  </div>
                  <span className="text-sm text-gray-500">{slot.type}</span>
                </div>
                <button
                  onClick={() => handleRemoveTimeSlot(slot.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Availability;