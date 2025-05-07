import { Navbar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-900 text-gray-100">
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-zinc-800/80 shadow-md">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-800 border-t border-zinc-700 mt-12 py-6">
                <Footer />
            </footer>
        </div>
    );
};

export default App;
