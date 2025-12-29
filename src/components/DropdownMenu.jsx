import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import useAuth from "../hooks/useAuth.jsx";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  //Log out
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      setOpen(false);
      navigate("/");
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* User button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-stone-300 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-stone-400 transition cursor-pointer"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg overflow-hidden z-10 shadow-black/10">
          {!user ? (
            // If user is not logged in
            <>
              <button
                onClick={() => { navigate("/login"); setOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => { navigate("/signup"); setOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Sign up
              </button>
            </>
          ) 
          :
          (
            // If user is logged in
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Log out
            </button>
          )}
        </div>
      )}
    </div>
  );
}
