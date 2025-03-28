import React, { useEffect, useState } from 'react';
import { Eye, Sprout, TrendingUp, X } from 'lucide-react';

function App() {
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        land: '',
        location: '',
        soilType: '',
        startMonth: '',
        endMonth: '',
        manager: '',
        managerId: '',
        contact: ''
    });

    // Sample crop data
    const [cropData, setCropData] = useState({
        id: '1',
        name: 'Wheat Crop',
        land: '3.5',
        location: 'North Field',
        soilType: 'Loamy',
        startMonth: 'March',
        endMonth: 'September',
        manager: 'John Doe',
        managerId: 'MGR001',
        contact: '1234567890',
        progress: 78,
        marketPrice: '₹2400 per 100kg',
        marketStatus: 'High'
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(78);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing crop data
            setCropData(prev => ({
                ...prev,
                ...formData
            }));
        }
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
        setIsEditing(false);
        // Reset form
        setFormData({
            name: '',
            land: '',
            location: '',
            soilType: '',
            startMonth: '',
            endMonth: '',
            manager: '',
            managerId: '',
            contact: ''
        });
    };

    const handleEdit = () => {
        setFormData({
            name: cropData.name,
            land: cropData.land,
            location: cropData.location,
            soilType: cropData.soilType,
            startMonth: cropData.startMonth,
            endMonth: cropData.endMonth,
            manager: cropData.manager,
            managerId: cropData.managerId,
            contact: cropData.contact
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="relative min-h-screen p-8">
            {/* Gradient Balls */}
            <div className="gradient-ball from-green-300 to-green-500 w-96 h-96 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
            <div className="gradient-ball from-blue-300 to-blue-500 w-96 h-96 left-[65%] top-3/4 -translate-x-1/2 -translate-y-1/2" />
            <div className="gradient-ball from-yellow-300 to-orange-500 w-48 h-48 right-[5%] top-[15%]" />
            <div className="gradient-ball from-pink-300 to-red-500 w-56 h-56 left-[25%] bottom-[5%]" />
            <div className="gradient-ball from-teal-300 to-cyan-500 w-72 h-72 right-[8%] top-[8%]" />

            {/* Content */}
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
                    <button
                        onClick={() => {
                            setIsEditing(false);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                    >
                        <Sprout className="w-5 h-5" />
                        Add Crop
                    </button>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={() => {
                        setIsModalOpen(false);
                        setIsEditing(false);
                    }}>
                        <div 
                            className="glass p-6 rounded-2xl w-full max-w-2xl mx-4" 
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {isEditing ? 'Edit Crop' : 'Add New Crop'}
                                </h2>
                                <button
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setIsEditing(false);
                                    }}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Crop Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Cultivation Land (Acres)
                                        </label>
                                        <input
                                            type="number"
                                            name="land"
                                            value={formData.land}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Soil Type
                                        </label>
                                        <input
                                            type="text"
                                            name="soilType"
                                            value={formData.soilType}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Start Month
                                        </label>
                                        <select
                                            name="startMonth"
                                            value={formData.startMonth}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select Month</option>
                                            {months.map(month => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            End Month
                                        </label>
                                        <select
                                            name="endMonth"
                                            value={formData.endMonth}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select Month</option>
                                            {months.map(month => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Manager
                                        </label>
                                        <input
                                            type="text"
                                            name="manager"
                                            value={formData.manager}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Manager ID
                                        </label>
                                        <input
                                            type="text"
                                            name="managerId"
                                            value={formData.managerId}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                            placeholder="e.g., MGR001"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Contact
                                        </label>
                                        <input
                                            type="tel"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                                    >
                                        {isEditing ? 'Save Changes' : 'Save Crop'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass w-full p-6 rounded-2xl relative overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">{cropData.name}</h2>
                            <button
                                onClick={handleEdit}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Edit crop"
                            >
                                <Eye className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Data Cards */}
                            <div className="space-y-4">
                                <div className="glass p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Sprout className="text-green-600" size={24} />
                                            <div>
                                                <h3 className="font-semibold text-gray-700">Cultivated Land</h3>
                                                <p className="text-gray-600">{cropData.land} Acres</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="text-blue-600" size={24} />
                                            <div>
                                                <h3 className="font-semibold text-gray-700">Market Price</h3>
                                                <p className="text-gray-600">{cropData.marketPrice}</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                                            {cropData.marketStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Circle */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            className="text-gray-200"
                                            strokeWidth="8"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                        />
                                        <circle
                                            className="text-green-500 transition-all duration-1000"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                            strokeDasharray={`${2 * Math.PI * 40}`}
                                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - cropData.progress / 100)}`}
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold text-gray-800">{cropData.progress}%</span>
                                        <span className="text-sm text-gray-600">{cropData.startMonth}-{cropData.endMonth}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;