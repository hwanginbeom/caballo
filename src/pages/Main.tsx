import Carousel from '../components/Carousel'
import styles from './Main.module.scss'

function Main(){
    return(
        <div>
            <Carousel/>
        <div className={styles.container}>
            <div className={styles.small_title}>Horstory.</div>
            <div>세상의 모든 말에 대한 이야기</div>
            <div className={styles.image_grid}>
            <div className={styles.image_column}>
                <a href="/content/1">
                <img src="/image/1.jpg" alt="이미지1"/>
                <div>말, 어디까지 아니?</div>
                </a>
                <a href="/content/2">
                <img src="/image/2.jpg" alt="이미지2"/>
                <div>말 키우는 돈 &lt; 사람 키우는 돈?</div>
                </a>
            </div>

            <div className={styles.image_column}>
                <a href="/content/3">
                <img src="/image/3.jpg" alt="이미지4"/>
                <div>세계의 말 모두 모았다!</div>
                </a>
                <a href="/content/4">
                <img src="/image/4.jpg" alt="이미지4"/>
                <div>억대 연봉 장제사가 뭔데?</div>
                </a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Main