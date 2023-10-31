import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=50&w=500" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/ghiberti85.png" />
                <strong>Fernando Ghiberti</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu  perfil
                </a>
            </footer>
        </aside>
    );
}