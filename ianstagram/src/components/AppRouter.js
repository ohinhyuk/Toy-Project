import React from "react";
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Detail from "../routes/detail/Detail";
import Home from "../routes/home/Home";
import Message from "../routes/message/Message";
import Profile from "../routes/profile/Profile";
import Story from "../routes/story/Story";
import Footer from "./Footer";
import Header from "./Header";

const AppRouter = () =>{

    return(
        <Router>
            <Header />
            <Routes>
                <>
                <Route path="/" element={<Home />}/>
                <Route path="/message" element={<Message />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/story" element={<Story />}/>
                <Route path="/detail" element={<Detail />}/>
                </>
            </Routes>
            <Footer />
        </Router>
    );

}

export default AppRouter;