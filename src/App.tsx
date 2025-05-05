import {Navbar} from "./components/NavBar.tsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        >
            <Navbar/>
            {/*<div className="backdrop-blur-sm bg-white/70 min-h-screen">*/}
            {/*    <Outlet />*/}
            {/*</div>*/}
            <Outlet/>

        </div>
    );
};

export default App; // ✅ default export
