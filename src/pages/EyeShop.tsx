import Carousel from '../components/Carousel';
import styles from './EyeShop.module.scss'

function EyeShop(){

    const menu_list = ["추천", "경주마", "승용마", "조랑말", "목장", "기수"];

    return(
        <div>
        <div className={styles.top_container}>
            <div className={styles.title}>말 구경</div>
            <div>
                <a href="/">
                    <img className={styles.btn} src="/image/favorite.png" alt=""/>
                </a>
                <a href="/">
                    <img className={styles.search} src="/image/search-interface-symbol.png" alt=""/>
                </a>
            </div>
        </div>
        <div className={styles.tap_container}>
            {menu_list.map((item) => (
                <div className={styles.tap}>{item}</div>
            ))}
        </div>
        <Carousel/>
        <div className={styles.container}>
            <div className={styles.small_title}>경주마</div>
            <div className={styles.image_grid}>
            <div className={styles.image_column}>
                <a href="/content/1">
                <img src="/image/3.jpg" alt="이미지1"/>
                <div>클리어검 | 경주마 | 상금 3억 2천<br/>서울경마공원</div>
                <div>경주마 <p className={styles.percentage}>89%</p> 수익형</div>
                </a>
                <a href="/content/2">
                <img src="/image/2.jpg" alt="이미지2"/>
                <div>청담도끼 | 경주마 | 5세 | 상금22억<br/>서울경마공원</div>
                <div>경주마 <p className={styles.percentage}>120%</p> 수익형</div>
                </a>
            </div>
        </div>
        </div>
        <div className={styles.container}>
            <div className={styles.small_title}>승용마</div>
            <div className={styles.image_grid}>
            <div className={styles.image_column}>
                <a href="/content/1">
                <img src="/image/1.jpg" alt="이미지1"/>
                <div>말, 어디까지 아니?</div>
                </a>
                <a href="/content/2">
                <img src="/image/4.jpg" alt="이미지2"/>
                <div>말 키우는 돈 &lt; 사람 키우는 돈?</div>
                </a>
            </div>
        </div>
        </div>
    </div>
    )
}
export default EyeShop