import React, { useState } from 'react';

const initialRecords = [
  {
    id: 1,
    cropName: 'Wheat',
    landArea: '5 acres',
    diseaseName: 'Leaf Rust',
    pesticideName: 'Propiconazole',
    pesticideQuantity: '2L',
    status: 'started',
  },
  {
    id: 2,
    cropName: 'Rice',
    landArea: '3 acres',
    diseaseName: 'Blast',
    pesticideName: 'Tricyclazole',
    pesticideQuantity: '1.5L',
    status: 'half-done',
  },
];

function RunningList({ searchQuery, statusFilter }) {
  const [records, setRecords] = useState(initialRecords);

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      searchQuery === '' ||
      record.cropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.pesticideName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    setRecords(
      records.map((record) =>
        record.id === id ? { ...record, status: newStatus } : record
      )
    );
  };

  const handleComplete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'done':
        return 'bg-green-100 text-green-800';
      case 'half-done':
        return 'bg-yellow-100 text-yellow-800';
      case 'started':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Crop Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Land Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Disease Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pesticide Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pesticide Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.cropName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.landArea}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.diseaseName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.pesticideName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.pesticideQuantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={record.status}
                    onChange={(e) => handleStatusChange(record.id, e.target.value)}
                    className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                      record.status
                    )}`}
                  >
                    <option value="started">Started</option>
                    <option value="half-done">Half-done</option>
                    <option value="done">Done</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleComplete(record.id)}
                    className={`rounded-full px-4 py-1 text-sm font-medium ${
                      record.status === 'done'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {record.status === 'done' ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RunningList;
