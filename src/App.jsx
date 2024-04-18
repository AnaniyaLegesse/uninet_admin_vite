import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Student from "./pages/list/Users/Student";
import Almuni from "./pages/list/Users/Almuni";
import Faculty from "./pages/list/Users/Faculty";
import Coordinator from "./pages/list/Users/Coordinator";
import Post from "./pages/list/Contents/Post";
import News from "./pages/list/Contents/News";
import Announcment from "./pages/list/Contents/Announcment";
import Event from "./pages/list/Contents/Event";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

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
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />

              <Route
                path="student"
                element={
                  <RequireAuth>
                    <Student/>
                  </RequireAuth>
                }
              />
              <Route
                path="coordinator"
                element={
                  <RequireAuth>
                    <Coordinator/>
                  </RequireAuth>
                }
              />
              <Route
                path="almuni"
                element={
                  <RequireAuth>
                    <Almuni/>
                  </RequireAuth>
                }
              />
              
              <Route
                path="faculty"
                element={
                  <RequireAuth>
                    <Faculty/>
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
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />

              <Route
                path="post"
                element={
                  <RequireAuth>
                    <Post/>
                  </RequireAuth>
                }
              />
              <Route
                path="news"
                element={
                  <RequireAuth>
                    <News/>
                  </RequireAuth>
                }
              />
              <Route
                path="announcment"
                element={
                  <RequireAuth>
                    <Announcment/>
                  </RequireAuth>
                }
              />
              
              <Route
                path="event"
                element={
                  <RequireAuth>
                    <Event/>
                  </RequireAuth>
                }
              />

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
                    <New inputs={userInputs} title="Add New Content" />
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
