import React from 'react';
import Loading from './Loading';

export default function ImagePreview({ uploaded, enhanced, loading }) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            alt="Original upload preview"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Image Selected!
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Enhanced Image
        </h2>
        {loading ? (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            <Loading />
          </div>
        ) : enhanced ? (
          <img
            src={enhanced}
            alt="Enhanced result preview"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image!
          </div>
        )}
      </div>

    </div>
  );
}
