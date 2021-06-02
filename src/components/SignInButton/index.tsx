import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi"


export function SignInButton() {
  const isUserLoggerIn = true;
  return isUserLoggerIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"></FaGithub>
      Reverson Thaiam
      <FiX color="#737380" className={styles.closeIcon}> </FiX>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"></FaGithub>
      Sign in with GitHub
    </button>
  );
}
