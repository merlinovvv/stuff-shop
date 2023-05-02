import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import Loading from '../../components/Loading/Loading';
import Product from './Product';
import SkeletonCard from '../../components/Skeleton/SkeletonCard';
import { ProductList } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getReletedProducts } from '../../features/products/productsSlice';

function ProductCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const dispatch = useDispatch();
  const { releted } = useSelector(({ products }) => products);
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  useEffect(() => {
    if (data) {
      dispatch(getReletedProducts(data.category.id));
    }
  }, [data, dispatch]);



  return isLoading && !data ? (
    <SkeletonCard />
  ) : (
    <>
      <Product {...data} />
      {releted && data && (
        <ProductList
          products={releted}
          isLoading={isLoading}
          amount={5}
          title={'Releted products'}
        />
      )}
    </>
  );
}

export default ProductCard;
