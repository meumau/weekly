import Header from "../components/Header.jsx";

export default function Myweek() {
  


  return (
    <div className="bg-stone-50 font-display">
    
    <Header />

      <main className="py-15 px-20 bg-stone-200 rounded-t-4xl relative">
        <div className="flex gap-4 pb-2">

          {/* TO DO */}
          <div className="min-w-[270px] min-h-[400px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
            <div className="bg-violet-500 text-white font-semibold text-center py-2">
              To do
            </div>
            <div className="p-4 h-32"></div>
          </div>

          {/* DAYS */}
          <div className="flex gap-4 overflow-x-auto w-full bg-violet-200 shadow rounded-2xl pt-5">
          
            <div className="flex gap-4 overflow-x-auto w-full pb-5 px-5 custom-scroll">

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Monday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Tuesday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Wednesday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Thursday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Friday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Saturday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

                <div className="min-w-[270px] shrink-0 bg-white rounded-2xl shadow overflow-hidden">
                  <div className="bg-violet-500 text-white font-semibold text-center py-2">
                    Sunday
                  </div>
                  <div className="p-4 h-32"></div>
                </div>

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