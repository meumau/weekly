import { Navigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import useAuth from "../hooks/useAuth.jsx";

export default function Home() {
  
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    //If a user is logged in, navigating to myweek
    if (user) return <Navigate to="/myweek" />;

    return (
        <div className="bg-stone-50 font-display">
        
            <Header />

            <main>
                <section className="flex items-center justify-between bg-linear-to-t from-sky-200 to-violet-500 px-20 h-150 rounded-t-4xl">
                    <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                        <h1 className="font-bold w-lg text-6xl text-white text-left">Your weekly reminder to do your tasks.</h1>
                        <div className="w-lg"><img src="./src/assets/app-placeholder.png"></img></div>
                    </div>

                </section>

                <section className="text-center pt-15 pb-5">
                    <h2 className="font-bold text-4xl">Get stuff done, weekly.</h2>
                    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto py-15">

                        <div className="bg-stone-200 text-left rounded-3xl p-15">
                            <h3 className="font-bold text-xl pb-2">To do</h3>
                            <p>Keep all the important tasks in your personal To do -list.</p>
                        </div>

                        <div className="bg-stone-200 text-left rounded-3xl p-15">
                            <h3 className="font-bold text-xl pb-2">Weekly view</h3>
                            <p>Assign tasks for every day of the week.</p>
                        </div>

                        <div className="bg-stone-200 text-left rounded-3xl p-15">
                            <h3 className="font-bold text-xl pb-2">Actions</h3>
                            <p>We won’t let you forget your tasks. Where do you want to move the unfinished ones?</p>
                        </div>

                    </div>

                </section>
            </main>

            <footer className=" bg-linear-to-t from-sky-200 to-violet-500 px-20 h-50 text-center py-15">
                <p>© Weekly 2025</p>
            </footer>
    

        </div>
    );
}