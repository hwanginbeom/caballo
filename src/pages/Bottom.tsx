import styles from './Bottom.module.scss';

function Bottom (){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>caballo.</div>
            <div className={styles.btn_group}>
                <a href="/">
                    <img className={styles.image} src="/image/horse.png" alt=""/>
                </a>
                <a href="/">
                    <img className={styles.image} src="/image/favorite.png" alt=""/>
                </a>
                <a href="/">
                    <img className={styles.image} src="/image/avatar.png" alt=""/>
                </a>
                <a href="/">
                    <img className={styles.image} src="/image/square.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
export default Bottom;