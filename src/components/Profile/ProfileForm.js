import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx=useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventdefault();

    const enterNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBmNIsWtO9zU2AbLgHBoaOJJbsYK4WaLHQ"{
        method:'POST',
        body:JSON.stringify({
          idToken:authCtx.token,
          password:enterNewPassword,
          retuenSecureToken:false
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7"  ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
