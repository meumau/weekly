import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis} from "@fortawesome/free-solid-svg-icons";

//Card options menu
export default function CardMenu({ onDelete, cardState, onToggleDone }) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        {/* Tree dots button */}
            <button
                onClick={() => setMenuOpen((o) => !o)}
                className="bg-stone-700 p-2 rounded-full text-white w-9 h-9 flex items-center justify-center hover:bg-stone-400 transition cursor-pointer"
                >
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            {/* Menu open */}
            {menuOpen && (
                <div className="absolute top-full right-0 bw-40 bg-white rounded-xl shadow-lg overflow-hidden z-10 shadow-black/10 mt-1">
                    <button
                        onClick={() => { 
                            setMenuOpen(false); 
                            onToggleDone();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        {cardState ? "Not done" : "Done"}
                    </button>
                    <button
                        onClick={() => { 
                            setMenuOpen(false);
                            
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        Move to...
                    </button>
                    <button
                        onClick={() => { 
                            setMenuOpen(false);
                            onDelete();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            )}
        </>
    )
}