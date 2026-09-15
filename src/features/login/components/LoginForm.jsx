import { useEffect, useState } from "react";
import Button from "../../../components/comon/Button";
import styles from "./LoginForm.module.css";
import { PasswordInput, TextInput } from "@mantine/core";
import { useAuth } from "../../../contexts/AuthContext";
import Loader from "../../../components/comon/Loader";
import ErrMsg from "./ErrMsg";
import { useNavigate } from "react-router-dom";
import facebookLogo from "../../../../assets/facebook.webp"
import googleLogo from "../../../../assets/google-logo.webp"
export default function LoginForm() {
  const [email, setEmail] = useState("moaz@cimascope.com");
  const [password, setPassword] = useState("123456");
  const [errMsg, setErrMsg] = useState(null);
  const { login, isLoading, errMsg: authErr, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/cimascope", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e) {
    setErrMsg(null);
    e.preventDefault();
    if (!password || !email) {
      setErrMsg("Required");
      return;
    }
    try {
      await login(email, password);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      {isLoading && <Loader />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormHead />
        <div className={styles.inputs}>
          <TextInput
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            variant="unstyled"
            label="Email"
            placeholder="Type your Email"
            classNames={{
              root: styles.inputRoot,
              input: styles.customInputBox,
              label: styles.inputLabel,
            }}
          />
          {(errMsg ||
            (authErr && authErr !== "Unauthorized: No valid session")) && (
            <div>
              {errMsg && <ErrMsg>{errMsg}</ErrMsg>}
              {authErr && authErr !== "Unauthorized: No valid session" && (
                <ErrMsg>{authErr}</ErrMsg>
              )}
            </div>
          )}
          <PasswordInput
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            variant="unstyled"
            label="Password"
            placeholder="Type Your Password"
            classNames={{
              root: styles.passwordRoot,
              input: styles.customPasswordInputBox,
              label: styles.inputLabel,
              visibilityToggle: styles.eyeButton,
            }}
          />
          {(errMsg ||
            (authErr && authErr !== "Unauthorized: No valid session")) && (
            <div>
              {errMsg && <ErrMsg>{errMsg}</ErrMsg>}
              {authErr && authErr !== "Unauthorized: No valid session" && (
                <ErrMsg>{authErr}</ErrMsg>
              )}
            </div>
          )}
        </div>
        <Button customClass={styles.loginBtn}>Log in</Button>
        <FormSeparator />
        <FormBtns />
      </form>
    </>
  );
}
function FormHead() {
  return (
    <div className={styles.head}>
      <h2>Welcome Back to CIMASCOPE</h2>
      <p>Sign in to continue your cinematic journey</p>
    </div>
  );
}

function FormSeparator() {
  return <span>or</span>;
}

function FormBtns() {
  return (
    <div className={styles.loginBtns}>
      <Button type="button">
        <img src={googleLogo} />
        Continue with google
      </Button>
      <Button type="button">
        <img src={facebookLogo} />
        Continue with facebook
      </Button>
    </div>
  );
}
