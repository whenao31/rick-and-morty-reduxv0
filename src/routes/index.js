import Login from "../container/Login";
import ConnectedDashboard from "../container/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import { store } from "../config/store"
import { Provider } from "react-redux";


function RoutedApp(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light"/>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<ConnectedDashboard />} />
                </Routes>
            </BrowserRouter>         
        </Provider>        
    )
}

export default RoutedApp;