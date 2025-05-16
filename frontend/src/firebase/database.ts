import axios from "axios";
import { database } from "./firebase-config";
import { update, get, ref } from "firebase/database";
import { getCookie } from "@/utils/cookies";

const axiosInstance = axios.create();

const getDbRef = async () => {
  try {
    const {
      data: { id },
    } = await axiosInstance.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
    });

    const dbRef = ref(database, `users/${id}`);

    return dbRef;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (data: Record<string, unknown>) => {
  const dbRef = await getDbRef();
  if (dbRef) {
    await update(dbRef, data);
  }
};

const getUser = async () => {
  try {
    const dbRef = await getDbRef();
    if (dbRef) {
      const snapshot = await get(dbRef);
      return snapshot.val() as User;
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateUser, getUser };
