import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider, db } from "./firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); 

  
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      // Try login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });

      // Store in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // Create account if not found
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          setUser({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          });

          // Store in Firestore
          await setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          });
        } catch (err) {
          alert(err.message);
        }
      } else {
        alert(error.message);
      }
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const gUser = result.user;

      // Store in Firestore
      await setDoc(doc(db, "users", gUser.uid), {
        name: gUser.displayName,
        email: gUser.email,
        photo: gUser.photoURL,
        uid: gUser.uid,
      });

      setUser({
        name: gUser.displayName,
        email: gUser.email,
        photo: gUser.photoURL,
        uid: gUser.uid,
      });
    } catch (error) {
      console.error("Google login error:", error);
      alert(error.message);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Real Estate"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-white text-lg max-w-xs">
              Explore the best properties with ease and confidence. Start your
              journey today!
            </p>
          </div>
        </div>

        {/* Login form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center items-center w-full bg-[#100E2C]">
          {!user ? (
            <>
              <h2 className="text-2xl text-white font-bold mb-1 text-center">
                Welcome Back!
              </h2>
              <p className="text-white mb-8 text-center">
                Sign in to your account
              </p>

              {/* Form */}
              <form
                onSubmit={handleEmailLogin}
                className="space-y-5 w-full max-w-md"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border rounded-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border rounded-full"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700"
                >
                  Login / Sign Up
                </button>
              </form>

              <div className="my-6 text-center text-sm text-gray-200">
                Or continue with
              </div>

              {/* Google login */}
              <div className="flex gap-4 w-full max-w-md">
                <button
                  onClick={handleGoogleLogin}
                  className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-full font-semibold text-white hover:text-black hover:bg-gray-100"
                >
                  <FcGoogle className="text-xl" />
                  Google
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              {user.photo && (
                <img
                  src={user.photo}
                  alt={user.name}
                  className="mx-auto w-24 h-24 rounded-full mb-4"
                />
              )}
              <h2 className="text-3xl font-bold mb-2">
                Welcome, {user.name || user.email}!
              </h2>
              <p className="text-gray-500 mb-6">You are now logged in.</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
