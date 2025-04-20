import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center h-full py-6">
      <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;