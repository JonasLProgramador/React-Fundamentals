import styles from "./index.module.css";

import igniteLogo from "../../assets/Ignite-simbol.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt=" Logo do Ignite" />
    </header>
  );
};
