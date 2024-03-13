import { getAuth, signOut } from "firebase/auth";
import SignOutButtonStyle from "./SignOutButtonStyle";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const onClick = () => {
    signOut(getAuth()).catch((error) => {
      toast(error.message);
    });
  };

  return <SignOutButtonStyle onClick={onClick}>Sign out</SignOutButtonStyle>;
};

export default SignOutButton;
