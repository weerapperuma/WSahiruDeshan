import {Navbar} from "./components/NavBar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/laptop_bg2.jpg')",
        }}
        >
            <Navbar/>

            <main className="pt-16">
                <Outlet />
            </main>
            <Footer/>

        </div>
    );
};

export default App;
