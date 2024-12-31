import React from "react";

function ProfilePage() {
  return (
    <div className="min-h-screen bg-blue-600 text-white">
      {/* Header */}


      {/* Banner Section */}
      <div className="relative bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Welcome to Your Profile</h2>
        <p className="text-lg mt-2">Manage your tasks and account settings</p>
      </div>

      {/* Profile Section */}
      <main className="py-16 px-8">
        <div className="bg-white text-black rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <div className="space-y-4">
            <div className="flex justify-start">
              <p className="font-semibold">Name:</p>
              <p>John Doe</p>
            </div>
            <div className="flex justify-start">
              <p className="font-semibold">Email:</p>
              <p>johndoe@example.com</p>
            </div>
            <div className="flex justify-start">
              <p className="font-semibold">Role:</p>
              <p>Normal User</p>
            </div>
            <div className="flex justify-start">
              <p className="font-semibold">Tasks Completed:</p>
              <p>25</p>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </main>


    </div>
  );
}

export default ProfilePage;

