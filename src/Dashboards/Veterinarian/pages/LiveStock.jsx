import React from 'react';
import { Plus, Filter, ArrowUpDown, MoreVertical, Tag, Activity, Search } from 'lucide-react';

function Livestock() {
  const livestock = [
    {
      id: 1,
      tag: "COW-001",
      breed: "Holstein",
      age: "4 years",
      status: "Healthy",
      lastCheckup: "2024-03-10",
      farm: "Green Meadows Farm"
    },
    {
      id: 2,
      tag: "COW-002",
      breed: "Jersey",
      age: "3 years",
      status: "Under Treatment",
      lastCheckup: "2024-03-12",
      farm: "Sunrise Valley Ranch"
    },
    {
      id: 3,
      tag: "SHEEP-001",
      breed: "Merino",
      age: "2 years",
      status: "Healthy",
      lastCheckup: "2024-03-08",
      farm: "Highland Pastures"
    }
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Livestock Records</h1>
          <p className="text-gray-600">Manage and monitor livestock health records</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add New Record
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
              <ArrowUpDown size={16} />
              Sort
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search records..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[300px]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tag ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Breed</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Age</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Last Checkup</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Farm</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {livestock.map((animal) => (
                <tr key={animal.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Tag size={16} className="text-gray-400" />
                      {animal.tag}
                    </div>
                  </td>
                  <td className="px-6 py-4">{animal.breed}</td>
                  <td className="px-6 py-4">{animal.age}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Activity size={16} className={animal.status === "Healthy" ? "text-green-500" : "text-yellow-500"} />
                      {animal.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">{animal.lastCheckup}</td>
                  <td className="px-6 py-4">{animal.farm}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Livestock;