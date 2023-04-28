import style from './style.module.css';
import {
  Header,
  Sidebar,
  MainContent,
  ProductList,
  Recommend,
  Sale,
  Footer,
} from '../index';

function App() {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <Header />
        <div className={style.main}>
          <Sidebar />
          <MainContent />
        </div>
        <ProductList title={'Trending'} />
        <Recommend />
        <Sale />
        <ProductList title={'Less than 100$'} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
