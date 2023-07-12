import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear the token and any other user-related data from local storage
    localStorage.removeItem("admin");
    // Redirect to the login page or any other desired destination
    router.push("/Admin/login");
  }, []);

  return null; // Render nothing or a loading indicator
};

export default Logout;
