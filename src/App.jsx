import Header from "./components/header";
import "./global.css"
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jonas o brabo"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repudiandae nemo suscipit? Aut, quibusdam iusto consequuntur doloribus repellendus magnam eum odio quaerat quam possimus! Magnam nesciunt eius vel ab minima."
      />
    </div>
  );
}

export default App;
