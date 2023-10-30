import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'



export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fernando Ghiberti"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          />

          <Post
            author="Gabriel Ghiberti"
            content="Sou um post muito legal!"
          />
        </main>
      </div>
    </div>
  )
}
