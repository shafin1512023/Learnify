import NavBar from "./components/NavBar/NavBar";
import Chats from "./screens/Chats/Chats";
import Courses from "./screens/Courses/Courses";
import Posts from "./screens/Posts/Posts";
import Profile from "./screens/Profile/Profile";

import {
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<h1>Under Construction</h1>} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <NavBar />
        </>
    );
};

export default App;
