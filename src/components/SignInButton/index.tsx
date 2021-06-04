import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/client";

export function SignInButton() {
  const [session] = useSession();

  console.log(session)

  return session ? (
    <button type="button" className={styles.signInButton} onClick={ () => signOut() }>
      <FaGithub color="#04d361"></FaGithub>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}>
        {" "}
      </FiX>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417"></FaGithub>
      Sign in with GitHub
    </button>
  );
}
