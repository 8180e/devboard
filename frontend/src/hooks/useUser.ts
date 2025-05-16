import UserContext from "@/contexts/UserContext";
import { updateUser } from "@/firebase/database";
import { useContext } from "react";

const useUser = <T extends keyof User>(
  information: T,
  defaultValue: User[T],
): [User[T], (value: User[T]) => void] => {
  const { user, setUser } = useContext<{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
  }>(UserContext);
  return [
    user[information] ?? defaultValue,
    (value: User[T]) => {
      setUser({ ...user, [information]: value });
      updateUser({ [information]: value });
    },
  ];
};

export default useUser;
