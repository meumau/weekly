import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import TodoCard from "./TodoCard.jsx";
import AddTask from "../components/AddTask.jsx";

export default function TodoSection({ userId }) {

    const [todos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);
        
    
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

    //Adding new task to the to do list
    function handleAdd(newTodo) {
        setTodos((prev) => [...prev, newTodo]);
    }

    return (
        <div className="min-w-[270px] min-h-auto md:min-h-[400px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
            <div className="bg-violet-500 text-white font-semibold text-center py-2 px-3 flex items-center justify-between">
                <div className="w-10"></div>
                <div><p>To do</p></div>
                <div className="w-10">
                    {/* In mobile version, to do section is closed by default, opened by button click */}
                    <button className="block md:hidden" onClick={() => setOpen((o) => !o)}>    
                        {open 
                        ?
                        ( <FontAwesomeIcon icon={faAngleUp} /> ) 
                        : 
                        ( <FontAwesomeIcon icon={faAngleDown} /> )}
                    </button>
                </div>
             
            </div>
            <div className={`p-4 ${open ? "flex" : "hidden"} md:flex flex-col gap-2`}>
                {/* Displaying each to do of the section */}
                {todos.map((todo) => (
                        <TodoCard key={todo.id} text={todo.text} />
                ))}
                <AddTask weekDay="todo" userId={userId} onAdd={handleAdd}/>
            </div>
        </div>
    )
}