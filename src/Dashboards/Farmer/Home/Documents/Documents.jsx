import React, { useState, useCallback } from 'react';
import { Search, Upload, FileText, Download, Trash2, AlertCircle } from 'lucide-react';

const DOCUMENT_TYPES = ['Sale Deed', 'Property Tax', 'Title Deed', 'Lease Agreement', 'Mortgage', 'Other'];

function Documents() {
  const [activeTab, setActiveTab] = useState('documents');
  const [documents, setDocuments] = useState([
    {
      id: '1',
      name: 'Sale Deed 2024',
      landTitle: 'Green Acres Plot 123',
      type: 'Sale Deed',
      uploadDate: '2024-03-10',
      status: 'Verified'
    },
    {
      id: '2',
      name: 'Property Tax 2023',
      landTitle: 'Riverside Estate',
      type: 'Property Tax',
      uploadDate: '2024-02-15',
      status: 'Pending'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('dateAdded');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    landTitle: '',
    type: '',
    expiryDate: '',
    file: null,
  });

  // Filter documents based on search term and category
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchTerm === '' ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.landTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === '' || doc.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort documents
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'dateAdded':
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      case 'documentType':
        return a.type.localeCompare(b.type);
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Handle file drop
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  }, []);

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDocument = {
      id: Date.now().toString(),
      name: formData.name,
      landTitle: formData.landTitle,
      type: formData.type,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'Pending',
      file: formData.file || undefined
    };

    setDocuments(prev => [...prev, newDocument]);
    console.log('New document added:', newDocument);

    // Reset form
    setFormData({
      name: '',
      landTitle: '',
      type: '',
      expiryDate: '',
      file: null,
    });

    // Switch to documents tab
    setActiveTab('documents');
  };

  // Handle document actions
  const handleView = (doc) => {
    console.log('Viewing document:', doc);
    if (doc.file) {
      const url = URL.createObjectURL(doc.file);
      window.open(url, '_blank');
    }
  };

  const handleDownload = (doc) => {
    console.log('Downloading document:', doc);
    if (doc.file) {
      const url = URL.createObjectURL(doc.file);
      const a = document.createElement('a');
      a.href = url;
      a.download = doc.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleDelete = (docId) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      setDocuments(prev => prev.filter(doc => doc.id !== docId));
      console.log('Document deleted:', docId);
    }
  };

  return (
    <div className="p-8">
      {/* Gradient Balls */}
      <div className="gradient-ball from-green-300 to-green-500 w-96 h-96 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-blue-300 to-blue-500 w-96 h-96 left-[65%] top-3/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-yellow-300 to-orange-500 w-48 h-48 right-[5%] top-[15%]" />
      <div className="gradient-ball from-pink-300 to-red-500 w-56 h-56 left-[25%] bottom-[5%]" />
      <div className="gradient-ball from-teal-300 to-cyan-500 w-72 h-72 right-[8%] top-[8%]" />
      {/* Content */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Documents</h1>
      <div className="glass p-6 rounded-xl">

        {/* Navigation */}
        <nav className="glass pb-2 rounded-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-x-8">
              <button
                onClick={() => setActiveTab('documents')}
                className={`py-4 px-1 relative ${activeTab === 'documents'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                My Documents
                {activeTab === 'documents' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-4 px-1 relative ${activeTab === 'upload'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Upload New Document
                {activeTab === 'upload' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'documents' ? (
            <>
              {/* Filters and Controls */}
              <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                <div className="flex-1 max-w-lg">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by document name, type, or land title"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {DOCUMENT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="dateAdded">Date Added</option>
                    <option value="documentType">Document Type</option>
                    <option value="alphabetical">Alphabetical Order</option>
                  </select>

                  <button
                    onClick={() => setActiveTab('upload')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Upload size={20} />
                    <span>New Document</span>
                  </button>
                </div>
              </div>

              {/* Documents Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">

                    <thead className="bg-gray-50">

                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Document Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Land Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Upload Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>

                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedDocuments.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FileText className="flex-shrink-0 h-5 w-5 text-gray-400" />
                              <span className="ml-2 text-sm font-medium text-gray-900">{doc.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doc.landTitle}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doc.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doc.uploadDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${doc.status === 'Verified'
                                ? 'bg-green-100 text-green-800'
                                : doc.status === 'Pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-3">
                              <button
                                onClick={() => handleView(doc)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                View
                              </button>
                              <button
                                onClick={() => handleDownload(doc)}
                                className="text-gray-600 hover:text-gray-900"
                              >
                                <Download size={18} />
                              </button>
                              <button
                                onClick={() => handleDelete(doc.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>
            </>
          ) : (
            // Upload Form
            <div className="max-w-3xl mx-auto">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <AlertCircle className="flex-shrink-0 h-5 w-5 text-yellow-400" />
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Ensure that uploaded documents are clear and in PDF or image format.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass shadow rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                  >
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-1 text-sm text-gray-600">
                      {formData.file ? formData.file.name : 'Drag and drop your file here, or click to select file'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Supports PDF, JPG, PNG, and DOC formats
                    </p>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Document Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Land Title/Property Name
                      </label>
                      <input
                        type="text"
                        name="landTitle"
                        value={formData.landTitle}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Document Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a type</option>
                        {DOCUMENT_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry Date (Optional)
                      </label>
                      <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <Upload size={20} />
                      <span>Upload Document</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Documents;