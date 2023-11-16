import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';

function Carousel(){

    const images = ["/image/pexels-pixabay-52500.jpg","/image/pexels-jean-alves-2123766.jpg","/image/pexels-helena-lopes-1996333.jpg"]

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(goToNext, 3000); // 3초마다 goToNext 호출
    
        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 정리
      }, [currentIndex]);

    const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return(
        <div className={styles.conatiner}>
            <img className={styles.image} src={images[currentIndex]} alt="carousel" />
            <div className={styles.big_title}>
                처음 말을 만나는 날<br/>
                양평 승마랜드.
            </div>
        </div>
    )
}
export default Carousel;