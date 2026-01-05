import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import TodoCard from "./TodoCard.jsx";

export default function TodoSection({ userId }) {

    const [todos, setTodos] = useState([]);
        
    
    useEffect(() => {
        if (!userId) return;
    
        //Fetching data from supabase with day = todo 
        async function fetchTodos() {
            const { data, error } = await supabase
                .from("todos")
                .select("*")
                .eq("day", "todo")
                .eq("user_id", userId)
                .order("created_at", { ascending: true });
    
            if (error) {
                console.error("Error:", error);
            } else {
                setTodos(data);
            }
        }
    
            fetchTodos();
    }, [userId]);


    return (
        <div className="min-w-[270px] min-h-[400px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
            <div className="bg-violet-500 text-white font-semibold text-center py-2">
              To do
        </div>
        <div className="p-4 h-32">
            {/* Displaying each to do of the section */}
            {todos.map((todo) => (
                    <TodoCard key={todo.id} text={todo.text} />
            ))}
        </div>
        </div>
    )
}