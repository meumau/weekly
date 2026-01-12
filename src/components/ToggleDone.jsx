import { supabase } from "../supabaseClient";

//Changing the state of the card in supabase
export default async function toggleDone(taskId, newState) {
    const { error } = await supabase
        .from("todos")
        .update({ state: newState })
        .eq("id", taskId);

    if (error) {
        console.error("Error:", error);
        return;
    }
}