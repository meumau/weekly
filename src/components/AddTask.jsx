import { useState } from "react";
import { supabase } from "../supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddTask({weekDay, userId, onAdd}) {

    const [inputOpen, setInputOpen] = useState(false);
    const [task, setTask] = useState("");


    //Saving new task
    async function handleSubmit(e) {
        e.preventDefault();

        if (!task.trim()) return;

        //Inserting new task to supabase table
        const { data, error } = await supabase.from("todos").insert({
            text: task,
            day: weekDay,
            user_id: userId,
        }).select(); 

        if (error) {
        console.error("Error:", error);
        return;
        }

        //Passing the newest task to the parent component to update the list
        onAdd(data[0]);

        //Clearing task and closing inputOpen
        setTask("");
        setInputOpen(false);
    }

    return (
        <div>
            {inputOpen ? 
            ( 
                //If the input is open, showing text field
                <form className="flex items-center gap-3 justify-between bg-stone-100 p-3 rounded-xl min-h-[60px]" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="New task" 
                        className="bg-white border-2 border-stone-300 rounded-lg w-[160px] h-[40px] p-2" 
                        value={task}
                        onChange={(e) => setTask(e.target.value)}>
                    </input>
                    <button
                        type="submit" 
                        className="bg-stone-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center hover:bg-stone-400 transition cursor-pointer">
                            <FontAwesomeIcon icon={faPlus} />
                    </button> 
                </form>
            ) 
            : 
            ( 
                //If the input is closed (default) showing the add task -card
                <div 
                    className="flex items-center gap-3 justify-between bg-stone-100 p-3 rounded-xl min-h-[60px]" 
                    onClick={() => setInputOpen((o) => !o)}> 
                        <p className="overflow-hidden text-ellipsis">Add task</p>
                        <button className="bg-stone-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center hover:bg-stone-400 transition cursor-pointer"><FontAwesomeIcon icon={faPlus} /></button> 
                </div>
            )}          
        </div>
    )
}