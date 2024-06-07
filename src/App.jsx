import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SingleUser from "./pages/single/SingleUser";
import SingleContent from "./pages/single/SingleContent";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { contentInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Setting from "./pages/setting/Setting";
import CSVUploader from "./pages/CSVUploader/CSVUploader";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={ <RequireAuth> <Home /> </RequireAuth> } />

            <Route path="users">

              <Route path="student"
                element={ <RequireAuth><List DBcollection="users" docType="student" /></RequireAuth>} />
              
              <Route path="almuni"
                element={ <RequireAuth><List DBcollection="users" docType="almuni" /></RequireAuth> }/>             
             
              <Route path="faculty"
                element={<RequireAuth><List DBcollection="users" docType="faculty" /></RequireAuth>}/>             
               
              <Route path="campus"
                element={<RequireAuth><List DBcollection="users" docType="campus" /></RequireAuth>}/>
             
              <Route path=":userId" element={<RequireAuth> <SingleUser /></RequireAuth>} />
            </Route>


            <Route path="contents">

              <Route  path="post"
                element={<RequireAuth><List DBcollection="contents" docType="post" /> </RequireAuth>}/>

              <Route path="news"
                element={ <RequireAuth> <List DBcollection="contents" docType="news" /> </RequireAuth>}/>
              
              <Route path="announcment"
                element={<RequireAuth><List DBcollection="contents" docType="announcment" /> </RequireAuth>}/>
              
              <Route path="event"
                element={<RequireAuth><List DBcollection="contents" docType="event" /></RequireAuth>}/>

              <Route path=":postId" element={<RequireAuth><SingleContent /></RequireAuth>} />

            </Route>

            <Route path="service">

              <Route path="uploadCsv" element={<RequireAuth><CSVUploader /> </RequireAuth>} />
              <Route path="setting" element={<RequireAuth><Setting /></RequireAuth> }/>
              <Route path="addUser"
                element={ <RequireAuth> <New inputs={userInputs} title="Add New User" /> </RequireAuth> } />            
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
