import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { supabase } from "../supabaseClient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  //If a user is logged in, navigating to myweek
  if (user) return <Navigate to="/myweek" />;

  async function signUpNewUser(e) {

    e.preventDefault();
    setError("");

    //If password isn't same as confirm password & if password isn't 6 or more characters, error shows up

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    if (password.length < 6) {
      setError("Password has to be at least 6 letters.");
      return;
    }

    //Signing in with Supabase Auth
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    //If sign up doesn't succeed, error shows up
    if (signUpError) {
      setError("Error. Try again.");
      return;
    }

    //When the user has signed up succesfully, app navigates to my week page
    navigate("/myweek");

  }


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <div className="bg-violet-500 px-4 py-3 flex items-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-white hover:text-violet-100 transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Sign up
            </h1>

            <form onSubmit={signUpNewUser} className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-500"
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-500"
              />

              <input
                type="password"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-500"
              />

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-violet-500 text-white py-2 rounded-lg font-medium hover:bg-violet-700 transition cursor-pointer"
              >
                Sign up
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Already have an account?
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-2 w-full border border-violet-500 text-violet-500 py-2 rounded-lg hover:bg-violet-50 transition cursor-pointer"
            >
              Log in
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
