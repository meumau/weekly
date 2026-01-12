import { supabase } from "../supabaseClient";

export default async function deleteTask(taskId) {

    //Deleting task with taskId from supabase
    const { error } = await supabase
        .from("todos")      
        .delete()             
        .eq("id", taskId)
        

    if (error) {
        console.error("Error:", error);
        return;
    }
}