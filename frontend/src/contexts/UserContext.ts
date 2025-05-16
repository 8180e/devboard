import { createContext } from "react";

const defaultUser: User = {
  theme: "light",
  language: "javascript",
  todos: [],
  widgets: [],
};

const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}>({ user: defaultUser, setUser: () => {} });

export default UserContext;
