import { useState } from 'react';
import style from './style.module.css';
import {
  Header,
  Sidebar,
  MainContent,
  ProductList,
  Recommend,
  Sale,
  Footer,
  ProductCard,
  Registration,
  ProductCatalog,
  Cart,
} from '../index';

function App() {
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  const toggleForm = (event) => {
    setRegisterIsOpen(event);
  };

  document.body.style.overflow = registerIsOpen ? 'hidden' : 'visible';

  return (
    <div className={style.page}>
      <Registration toggleForm={toggleForm} registerIsOpen={registerIsOpen} />
      <div className={style.container}>
        <Header toggleForm={toggleForm} />
        <div className={style.main}>
          <Sidebar />
          <MainContent />
          {/* <ProductCard/> */}
          {/* <Cart/> */}
        </div>
        <ProductList title={'Trending'} />
        <Recommend />
        <Sale />
        <ProductList title={'Less than 100$'} />
        {/* <ProductCatalog/> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
