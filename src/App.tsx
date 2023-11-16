import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import EyeShop from './pages/EyeShop';
import Bottom from './pages/Bottom';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<EyeShop/>} />
    </Routes>
      <Bottom/>
    </div>
  );
}

export default App;
