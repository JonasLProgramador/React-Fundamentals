import styles from "./index.module.css";
import { PencilLine } from "@phosphor-icons/react";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1582258514015-1be36bef6e19?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjAlNUR8ZW58MHx8MHx8fDA%3D" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/172916273?v=4"/>
        <strong>Jonas Leite</strong>
        <span>Web Developer</span>
      </div>

      <footer>
     
        <a href="#"> <PencilLine size={20} /> Editar Seu Perfil</a>
      </footer>
    </aside>
  );
};
