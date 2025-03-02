import styles from './Post.module.css';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/45457305?v=4.png" />
                    <div className={styles.authorInfo}>
                        <strong>Thiago de Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Junho de 2024 às 09:15' dateTime="2024-06-11 09:15:32">Publicado a 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href="">jane.design/doctorcare</a> {' '}</p>
                <p>
                    <a href="">#novoprojeto</a> {' '}
                    <a href="">#nlw</a> {' '}
                    <a href="">#rocketseat</a> {' '}
                </p>
            </div>
        </article>
    )
}