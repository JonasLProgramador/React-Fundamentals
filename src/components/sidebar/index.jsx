import styles from "./index.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1582258514015-1be36bef6e19?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjAlNUR8ZW58MHx8MHx8fDA%3D" />
      <div className={styles.profile}>
        <strong>Jonas Leite</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar Seu Perfil</a>
      </footer>
    </aside>
  );
};
