import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/ghiberti85.png" />
            <div className={styles.commentBox}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Fernando Ghiberti</strong>
                        <time title="30 de Outubro às 15:28h" dateTime="2023-10-30 15:28:30">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash  size={20} />
                    </button>
                </header>

                <p>Muito bom, parabéns!!!</p>
            </div>

            <footer>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </footer>
        </div>
    );
}