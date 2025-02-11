import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProviders';

const Profile = () => {
      const { user, signOutUser } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">Please Sign In</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
                <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold">{user.displayName || "No Name"}</h2>
                <p className="text-gray-600">{user.email}</p>
                <button
                    onClick={signOutUser}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
