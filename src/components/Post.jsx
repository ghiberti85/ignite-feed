import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ghiberti85.png" />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Ghiberti</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="30 de Outubro às 15:28h" dateTime="2023-10-30 15:28:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Hello World Dev!</p>
                <p><a href="#">Hello World Dev!</a></p>
                <p><a href="#">Hello World Dev!</a></p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea  placeholder="Deixe um comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    );
}