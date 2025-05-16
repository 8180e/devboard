import UserContext from "@/contexts/UserContext";
import { getUser } from "@/firebase/database";
import { setCookie } from "@/utils/cookies";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url = new URL(window.location.href);

const RedirectPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = url.searchParams.get("accessToken");
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUser(user);
      }
    };
    if (accessToken) {
      setCookie("accessToken", accessToken, 1);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      fetchUser();
    }
    navigate("/dashboard");
  });

  return <div>Redirecting...</div>;
};

export default RedirectPage;
