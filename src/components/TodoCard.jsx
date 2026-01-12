import deleteTask from "./DeleteTask.jsx";
import CardMenu from "./CardMenu.jsx";
import toggleDone from "./ToggleDone.jsx";

export default function TodoCard({ id, text, state, onRemove, onToggle}) {

    //Confirming delete & calling deleteTask function
    async function handleDelete() {
        const confirmed = window.confirm("Do you want to delete this task?");
        if (!confirmed) return;

        try {
            await deleteTask(id);
            onRemove(id); 
        } catch (err) {
            alert("Delete failed");
        }
    }

    //Changing the state of the card
    async function handleToggleDone() {
        try {
            await toggleDone(id, !state);
            onToggle(id);
        } catch {
            alert("Failed to update task");
        }
    }

    return (
        <div className="relative ">
          
            {/* To do -card*/}
            <div className={`flex items-center gap-3 justify-between p-3 rounded-xl min-h-[60px]
                ${state ? "bg-emerald-200" : "bg-stone-100"}
            `}>
                <p className="overflow-hidden text-ellipsis">{text}</p>
                <CardMenu cardState={state} onDelete={handleDelete} onToggleDone={handleToggleDone} />
            </div>

            {/* Menu */}
            
        </div>
    );
}