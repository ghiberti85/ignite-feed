import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ghiberti85.png',
      name: 'Fernando Ghiberti',
      role: 'Software Engineer @+A Educação',
    },
    content: [
      { 
        type: 'paragraph', 
        content: 'Hey Dude!Im trying to code here!'
      },
      { 
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      { 
        type: 'link', 
        content: 'linkedin.com/in/fernando-ghiberti'
      },
    ],
    publishedAt: new Date('2023-10-31 09:52:30'),
  },  
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ghiberti85.png',
      name: 'Gabriel Ghiberti',
      role: 'Tech Lead @+A Educação',
    },
    content: [
      { 
        type: 'paragraph', 
        content: 'Hey Dude!Im trying to code here!'
      },
      { 
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      { 
        type: 'link', 
        content: 'linkedin.com/in/fernando-ghiberti'
      },
    ],
    publishedAt: new Date('2023-10-31 10:59:30'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
