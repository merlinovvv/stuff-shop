import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MainContent,
  ProductList,
  Categories,
  Sale,
} from '../../components/index';
import { filterByPrice } from '../../features/products/productsSlice';

function Home() {
  const dispatch = useDispatch();

  const {
    products: { list, isLoading, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <MainContent />
      <ProductList
        products={list}
        isLoading={isLoading}
        amount={5}
        title={'Trending'}
      />
      <Categories
        categories={categories.list}
        isLoading={categories.isLoading}
        amount={5}
      />
      <Sale />
      <ProductList
        products={filtered}
        isLoading={isLoading}
        amount={5}
        title={'Less than 100$'}
      />
    </>
  );
}

export default Home;
