import React from "react";
import { useState } from "react";
import Navigation from "../resources/js/components/Navigation";
import CreateMiracle from "../resources/js/components/CreateMiracle";
import Login from "../resources/js/components/Login";
import Miracles from "../resources/js/components/Miracles";
import Registration from "../resources/js/components/Registration";
import Home from "../resources/js/components/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
    const [content, setContent] = useState("");
    return (
        <main>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/miracles" element={<Miracles />} />
                <Route path="/create" element={<CreateMiracle />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </main>
    );
}
