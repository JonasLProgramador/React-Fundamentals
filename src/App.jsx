import { Header } from "./components/header";
import { Post } from "./Post";
import { SideBar } from "./components/sidebar";

import styles  from "./app.module.css"
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <SideBar/>
        <main>
        <Post
          author="Jonas o brabo"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repudiandae nemo suscipit? Aut, quibusdam iusto consequuntur doloribus repellendus magnam eum odio quaerat quam possimus! Magnam nesciunt eius vel ab minima."
        />

        <Post author="Jair the programmer" content="Eu programo isso aí" />
        </main>
      </div>
    </div>
  );
}

export default App;
