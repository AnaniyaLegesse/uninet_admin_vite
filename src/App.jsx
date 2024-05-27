import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { contentInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/setting/Setting";
import Notification from "./pages/notification/Notification";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

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
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path="users">

              <Route
                path="student"
                element={
                  <RequireAuth>
                    <List DBcollection="users" docType="student" />
                  </RequireAuth>
                }
              />
              <Route
                path="almuni"
                element={
                  <RequireAuth>
                    <List DBcollection="users" docType="almuni" />
                  </RequireAuth>
                }
              />
              
              <Route
                path="faculty"
                element={
                  <RequireAuth>
                    <List DBcollection="users" docType="faculty" />
                  </RequireAuth>
                }
              />

              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="contents">

              <Route
                path="post"
                element={
                  <RequireAuth>
                    <List DBcollection="contents" docType="post" />
                  </RequireAuth>
                }
              />
              <Route
                path="news"
                element={
                  <RequireAuth>
                    <List DBcollection="contents" docType="news" />
                  </RequireAuth>
                }
              />
              <Route
                path="announcment"
                element={
                  <RequireAuth>
                    <List DBcollection="contents" docType="announcment" />
                  </RequireAuth>
                }
              />
              
              {/* <Route
                path="event"
                element={
                  <RequireAuth>
                    <List DBcollection="contents" docType="event" />
                  </RequireAuth>
                }
              /> */}

              <Route
                path=":contentId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={contentInputs} title="Add New Content" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="service">

            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            
            {/* <Route
              path="notification"
              element={
                <RequireAuth>
                  <Notification />
                </RequireAuth>
              }
            /> */}
            
            <Route
              path="setting"
              element={
                <RequireAuth>
                  <Setting />
                </RequireAuth>
              }
            />


            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
