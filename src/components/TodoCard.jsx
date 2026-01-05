import CardMenu from "./CardMenu.jsx";

export default function TodoCard( {text}) {

    return (
        <div className="relative ">
          
            {/* To do -card*/}
            <div className="flex items-center gap-3 justify-between bg-stone-100 p-3 rounded-xl">
                <p className="overflow-hidden text-ellipsis">{text}</p>
                <CardMenu />
            </div>

            {/* Menu */}
            
        </div>
    );
}