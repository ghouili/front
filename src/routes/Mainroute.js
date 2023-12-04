import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register, Users } from "../containers";

const Mainroute = () => {
    return (
        <div className={`h-screen px-4 md:px-6 xl:px-10`} >
            <div className="w-full h-full flex flex-row ">
                <div className={`w-full flex flex-col`} >
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users" element={ <Users /> } />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Mainroute;
