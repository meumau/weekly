import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import TodoCard from "./TodoCard.jsx";
import AddTask from "../components/AddTask.jsx";

export default function Day( {weekDay, userId} ) {

    const [todos, setTodos] = useState([]);
    
    //Fetching To do -data from supabase
    useEffect(() => {
        if (!userId) return;

        async function fetchTodos() {
        const { data, error } = await supabase
            .from("todos")
            .select("*")
            .eq("day", weekDay)
            .eq("user_id", userId)
            .order("created_at", { ascending: true });

        if (error) {
            console.error("Error:", error);
        } else {
            setTodos(data);
        }
        }

        fetchTodos();
    }, [weekDay, userId]);

    //Adding new task to the to do list
    function handleAdd(newTodo) {
        setTodos((prev) => [...prev, newTodo]);
    }
    
    return (
        <div className="w-[240px] md:w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
            <div className="bg-violet-500 text-white font-semibold text-center py-2">
                {weekDay}
            </div>
            <div className="p-4 h-32 flex flex-col gap-2">
                {/* Displaying each to do of the day */}
                {todos.map((todo) => (
                    <TodoCard key={todo.id} text={todo.text} />
                ))}
            <AddTask weekDay={weekDay} userId={userId} onAdd={handleAdd}/>
                
            </div>
        </div>
    )
}