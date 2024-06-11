import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/45457305?v=4.png" alt='' />

            <div className={styles.commentBox}>
                <div style={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago de Souza</strong>
                            <time title='11 de Junho de 2024 às 09:15' dateTime="2024-06-11 09:15:32">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário"><Trash size={20} /></button>
                    </header>
                    <p>Muito bom Devon, parabéns!! {' '} 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Apladir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}