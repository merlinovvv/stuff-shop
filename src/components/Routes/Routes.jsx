import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { Cart, Home, ProductCard, Profile } from '../../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.PRODUCT} element={<ProductCard/>} />
      <Route path={ROUTES.PROFILE} element={<Profile/>} />
    </Routes>
  );
};

export default AppRoutes;
