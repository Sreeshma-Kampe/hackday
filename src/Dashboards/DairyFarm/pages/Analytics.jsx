import React from 'react';
import { TrendingUp, TrendingDown, Calendar, ArrowRight, Filter } from 'lucide-react';

function Analytics() {
  const metrics = [
    {
      title: "Total Production",
      current: "85,250L",
      previous: "82,150L",
      change: "+3.8%",
      isPositive: true
    },
    {
      title: "Average Quality",
      current: "Grade A",
      previous: "Grade A",
      change: "0%",
      isPositive: true
    },
    {
      title: "Revenue",
      current: "₹38.5L",
      previous: "₹36.2L",
      change: "+6.3%",
      isPositive: true
    },
    {
      title: "Operating Costs",
      current: "₹12.8L",
      previous: "₹11.5L",
      change: "+11.3%",
      isPositive: false
    }
  ];

  const qualityTrends = [
    { metric: "Fat Content", current: "4.2%", target: "3.5%", status: "above" },
    { metric: "SNF", current: "8.5%", target: "8.2%", status: "above" },
    { metric: "Protein", current: "3.3%", target: "3.1%", status: "above" },
    { metric: "Density", current: "1.028", target: "1.027", status: "above" }
  ];

  const topFarmers = [
    { name: "Rajesh Kumar", production: "3,650L", quality: "Grade A", efficiency: "98%" },
    { name: "Priya Singh", production: "3,120L", quality: "Grade A", efficiency: "97%" },
    { name: "Amit Patel", production: "2,980L", quality: "Grade A", efficiency: "96%" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Analytics</h1>
          <p className="text-gray-600">Monitor performance metrics and trends</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar size={20} />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            Filter
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-sm text-gray-500 mb-2">{metric.title}</h3>
            <div className="text-2xl font-semibold mb-2">{metric.current}</div>
            <div className="flex items-center gap-2">
              <span className={metric.isPositive ? 'text-green-600' : 'text-red-600'}>
                {metric.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              </span>
              <span className={`text-sm ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </span>
              <span className="text-sm text-gray-500">vs {metric.previous}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Quality Trends */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Quality Trends</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View Report
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {qualityTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{trend.metric}</div>
                  <div className="text-sm text-gray-500">Target: {trend.target}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{trend.current}</div>
                  <div className={`text-sm ${trend.status === 'above' ? 'text-green-600' : 'text-red-600'}`}>
                    {trend.status === 'above' ? '↑ Above Target' : '↓ Below Target'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Top Performers</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {topFarmers.map((farmer, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{farmer.name}</div>
                  <div className="text-sm text-gray-500">Production: {farmer.production}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">{farmer.quality}</div>
                  <div className="text-sm text-gray-500">Efficiency: {farmer.efficiency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Monthly Trends</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-lg bg-blue-50 text-blue-600">Production</button>
            <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-50">Revenue</button>
            <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-50">Quality</button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          [Chart Component Would Go Here]
        </div>
      </div>
    </div>
  );
}

export default Analytics;