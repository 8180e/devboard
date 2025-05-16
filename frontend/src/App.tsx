import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { getCookie } from "@/utils/cookies";
import UserContext from "@/contexts/UserContext";
import { lazy, Suspense, useEffect, useState } from "react";
import { getUser } from "@/firebase/database";
import PageLoader from "@/components/PageLoader";

const Header = lazy(() => import("@/components/Header"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const GitHubLogin = lazy(() => import("@/pages/GitHubLogin"));
const RedirectPage = lazy(() => import("@/pages/RedirectPage"));
const MainMenu = lazy(() => import("@/pages/MainMenu"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const defaultUser: User = {
  theme: "light",
  language: "javascript",
  todos: [],
  widgets: [],
};

const App = () => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<MainMenu />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<GitHubLogin />} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
  "accessToken",
)}`;

export default App;
