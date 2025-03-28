import React from 'react';
import { FileSpreadsheet, Download, Calendar, Filter, ArrowRight } from 'lucide-react';

function Reports() {
  const reports = [
    {
      title: "Daily Collection Summary",
      type: "Production",
      date: "Today",
      size: "245 KB",
      format: "XLSX"
    },
    {
      title: "Quality Analysis Report",
      type: "Quality",
      date: "Yesterday",
      size: "180 KB",
      format: "PDF"
    },
    {
      title: "Farmer Payment Statement",
      type: "Financial",
      date: "Mar 14, 2024",
      size: "320 KB",
      format: "XLSX"
    },
    {
      title: "Monthly Performance Review",
      type: "Analytics",
      date: "Mar 01, 2024",
      size: "420 KB",
      format: "PDF"
    }
  ];

  const scheduledReports = [
    {
      title: "Daily Collection Report",
      frequency: "Daily",
      nextRun: "Tomorrow, 6:00 AM",
      recipients: 3
    },
    {
      title: "Weekly Quality Summary",
      frequency: "Weekly",
      nextRun: "Mon, 9:00 AM",
      recipients: 5
    },
    {
      title: "Monthly Financial Statement",
      frequency: "Monthly",
      nextRun: "Apr 1, 9:00 AM",
      recipients: 4
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Reports</h1>
          <p className="text-gray-600">Generate and manage reports</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar size={20} />
            Date Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FileSpreadsheet size={20} />
            Generate Report
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-medium">{report.title}</div>
                  <div className="text-sm text-gray-500">
                    {report.type} • {report.date} • {report.size}
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <Download size={20} />
                {report.format}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Scheduled Reports</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
            Manage Schedules
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {scheduledReports.map((report, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div>
                <div className="font-medium">{report.title}</div>
                <div className="text-sm text-gray-500">
                  {report.frequency} • Next run: {report.nextRun}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-500">
                  {report.recipients} recipients
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-medium mb-4">Production Reports</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Daily Collection Summary</li>
            <li>Shift-wise Analysis</li>
            <li>Quality Metrics Report</li>
            <li>Production Trends</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-medium mb-4">Financial Reports</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Payment Statements</li>
            <li>Revenue Analysis</li>
            <li>Cost Breakdown</li>
            <li>Profit Margins</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-medium mb-4">Farmer Reports</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Individual Performance</li>
            <li>Quality Tracking</li>
            <li>Payment History</li>
            <li>Attendance Records</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reports;