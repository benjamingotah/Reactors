import React, { useState, useEffect } from 'react';
import { Star, Heart, MapPin, Search, Filter, Bed, Bath, Ruler } from 'lucide-react';

const HouseListing = () => {
  // Changed from products to houses
  const houses = [
    {
      "id": "h1",
      "address": "123 Oak Street",
      "price": 349999,
      "type": "Single Family",
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 1850,
      "listed": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "location": "Ajah"
    },
    {
      "id": "h2",
      "address": "456 Maple Avenue",
      "price": 499999,
      "type": "Townhouse",
      "bedrooms": 4,
      "bathrooms": 2.5,
      "sqft": 2200,
      "listed": true,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "location": "Sangotedo"
    },
    {
      "id": "h3",
      "address": "789 Pine Road",
      "price": 279999,
      "type": "Condo",
      "bedrooms": 2,
      "bathrooms": 1,
      "sqft": 1200,
      "listed": false,
      "rating": 4.2,
      "image": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      "location": "Badore"
    },
    {
      "id": "h4",
      "address": "101 Birch Lane",
      "price": 589999,
      "type": "Single Family",
      "bedrooms": 5,
      "bathrooms": 3,
      "sqft": 3200,
      "listed": true,
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
      "location": "mainland"
    },
    {
      "id": "h5",
      "address": "202 Cedar Court",
      "price": 419999,
      "type": "Duplex",
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 2100,
      "listed": true,
      "rating": 2.3,
      "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "location": "Lekki"
    }
    
  ];

  const [filteredHouses, setFilteredHouses] = useState(houses);
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showListedOnly, setShowListedOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Get unique property types and locations
  const propertyTypes = ['All', ...new Set(houses.map(house => house.type))];
  const locations = ['All', ...new Set(houses.map(house => house.location))];

  // Filter houses based on search, type, location, and listing status
  useEffect(() => {
    let filtered = houses;

    // Filter by search term (address)
    if (searchTerm) {
      filtered = filtered.filter(house =>
        house.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (selectedType !== 'All') {
      filtered = filtered.filter(house => house.type === selectedType);
    }

    // Filter by location
    if (selectedLocation !== 'All') {
      filtered = filtered.filter(house => house.location === selectedLocation);
    }

    // Filter by listing status
    if (showListedOnly) {
      filtered = filtered.filter(house => house.listed);
    }

    setFilteredHouses(filtered);
  }, [searchTerm, selectedType, showListedOnly, selectedLocation, houses]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  // Format price as currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Real Estate Listings</h1>
          <p className="text-gray-600">Find your dream home from our curated collection</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by address..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Property Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Listed Only Filter */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showListedOnly}
                onChange={(e) => setShowListedOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Available Only</span>
            </label>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredHouses.length} of {houses.length} properties
          </p>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHouses.map(house => (
            <div key={house.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* House Image */}
              <div className="relative">
                <img
                  src={house.image}
                  alt={house.address}
                  className="w-full h-64 object-cover"
                />
                {!house.listed && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Under Contract
                  </div>
                )}
                {house.listed && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Available
                  </div>
                )}
                <button className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
              </div>

              {/* House Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {house.type}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(house.rating)}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {house.address}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{house.location}</span>
                </div>

                {/* House Features */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{house.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{house.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{house.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>

                {/* Price and Contact */}
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(house.price)}
                  </span>
                  <button
                    disabled={!house.listed}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      house.listed
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredHouses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseListing;