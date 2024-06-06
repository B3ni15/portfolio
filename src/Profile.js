import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/2">
        <h1 className="text-4xl font-bold mb-4">Profilom</h1>
        <div className="mb-4">
          <p className="text-lg"><span className="font-semibold">Felhasználónév:</span> benappdata</p>
        </div>
        <div className="mb-4">
          <p className="text-lg"><span className="font-semibold">Rangja:</span> benappdata</p>
        </div>
        <div className="mb-4">
          <p className="text-lg"><span className="font-semibold">IC Név:</span> benappdata</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Vissza
        </button>
      </div>
    </div>
  );
}

export default Profile;
