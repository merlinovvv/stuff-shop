import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';
import style from './style.module.css';
import AppRoutes from '../Routes/Routes';
import {
  Header,
  Sidebar,
  MainContent,
  ProductList,
  Categories,
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    // <div className={style.page}>
    //   <Registration toggleForm={toggleForm} registerIsOpen={registerIsOpen} />
    //   <div className={style.container}>
    //     <Header toggleForm={toggleForm} />
    //     <div className={style.main}>
    //       <Sidebar />
    //       <MainContent />
    //       {/* <ProductCard/> */}
    //       {/* <Cart/> */}
    //     </div>
    //     <ProductList title={'Trending'} />
    //     <Recommend />
    //     <Sale />
    //     <ProductList title={'Less than 100$'} />
    //     {/* <ProductCatalog/> */}
    //     <Footer />
    //   </div>
    // </div>
    <div className={style.app}>
      <Registration toggleForm={toggleForm} registerIsOpen={registerIsOpen} />
      <div className={style.container}>
        <Header toggleForm={toggleForm} />
        <div className={style.main}>
          <Sidebar />
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
