import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { supabase } from "../supabaseClient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  //If a user is logged in, navigating to myweek
  if (user) return <Navigate to="/myweek" />;
  

  async function signInWithEmail(e) {

    e.preventDefault();

    setError("");

    //Signing in with Supabase Auth
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    //If the user writes wrong email or password, this error shows up
    if (signInError) {
      setError("Email or password incorrect.");
      return;
    }

   //Navigating to my week -page after logging in
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
            <h1 className="text-2xl font-semibold mb-6 text-center">Log in</h1>

            <form onSubmit={signInWithEmail} className="flex flex-col gap-4">
              <input
                type="email"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-500"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-500"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-violet-500 text-white py-2 rounded-lg font-medium hover:bg-violet-700 transition cursor-pointer"
              >
                Log in
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Don't have an account yet?
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="mt-2 w-full border border-violet-500 text-violet-500 py-2 rounded-lg hover:bg-violet-50 transition cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
