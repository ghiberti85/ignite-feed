import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <Post
        author="Fernando Ghiberti"
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit."
      />

      <Post
        author="Gabriel Ghiberti"
        content="Sou um post muito legal!"
      />
    </>
  )
}
