import NavBar from "./components/NavBar/NavBar";
import Chats from "./screens/Chats/Chats";
import Coures from "./screens/Courses/Courses";
import Posts from "./screens/Posts/Posts";
import Profile from "./screens/Profile/Profile";

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <Posts />
            <Chats />
            <Coures />
            <Profile />
            <NavBar />
        </>
    );
};

export default App;
