import "./App.css";
import BookData from "./Data.json";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Bookmarks from "./components/Bookmarks";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
           <Route path="/" element={<Home />} />
    //       <Route path="/explore" element={<Explore />} />
    //       <Route path="/notifications" element={<Notifications />} />
    //       <Route path="/messages" element={<Messages />} />
    //       <Route path="/bookmarks" element={<Bookmarks />} />
    //       <Route path="/connections" element={<Connections />} />
    //       <Route path="/profile" element={<Profile />} />
             <Route path="/logout" element={<Logout />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
         
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          {/* <Route path="/contact" element={<Contact />} /> */}
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
    </>
  );
};
  
export default App;