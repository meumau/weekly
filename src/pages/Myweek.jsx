import Header from "../components/Header.jsx";
import Day from "../components/Day.jsx";
import TodoSection from "../components/TodoSection.jsx";
import useAuth from "../hooks/useAuth.jsx";

export default function Myweek() {
  
  const { user } = useAuth();
  const userId = user?.id;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


  return (
    <div className="bg-white font-display">
    
    <Header />

      <main className="py-10 px-10 md:py-15 md:px-20 bg-stone-200 rounded-t-4xl relative inset-shadow-xs/10">
        <div className="flex flex-col md:flex-row gap-4 pb-2">

          {/* TO DO */}
          <TodoSection userId={userId}/>

          {/* DAYS */}
          <div className="flex gap-4 min-h-[450px] md:min-h-auto overflow-x-auto w-full bg-violet-200 shadow rounded-2xl pt-5">
            <div className="flex gap-4 overflow-x-auto w-full pb-5 px-5 custom-scroll">
                    {/* Displaying each day */}
                    {days.map((day) => (
                      <Day key={day} weekDay={day} userId={userId} />
                    ))}
            </div>
          </div>
          
        </div>
      </main>

      <footer className=" bg-linear-to-t from-sky-200 to-violet-500 px-20 h-50 text-center py-15">
          <p>© Weekly 2025</p>
      </footer>
   

    </div>
  );
}