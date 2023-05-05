import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import Skeleton from '../Skeleton/Skeleton';
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';
function ProductCatalog() {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 20,
    offset: 0,
    ...defaultValues,
  };
  const [isEnd, setIsEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;
    setValues(defaultValues)
    setItems([]);
    setIsEnd(false)
    setParams({ ...defaultParams, categoryId: id });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setItems((_items) => [..._items, ...data])
      if( isLoading && !data.length){
        setIsEnd(true)
      } 
    } else {return}

  }, [isLoading, data]);

  useEffect(() => {
    if (!id || !list.length) {
      return;
    }
    const category = list.find((item) => item.id === id * 1);
    setCat(category);
  }, [id, list]);

  function handleChange({ target: { value, name } }) {
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems([]);
    setIsEnd(false)
    setParams({ ...params, ...values });
  }

  function seeMore() {
    setParams({...params, offset: params.offset + params.limit})
  }

  function resetValues() {
    setValues(defaultValues)
    setParams(defaultParams)
    setIsEnd(false)
  }

  return (
    <div className={style.product_catalog}>
      <h3 className={style.title}>{cat?.name}</h3>
      <form className={style.filter} onSubmit={handleSubmit}>
        <h4 className={style.form_title}>Filters:</h4>
        <input
          placeholder="Product name"
          name="title"
          className={`${style.filter_input} ${style.filter_name}`}
          type="text"
          onChange={handleChange}
          value={values.title}
        />
        <input
          placeholder="Price from"
          name="price_min"
          className={`${style.filter_input} ${style.filter_price}`}
          type="number"
          onChange={handleChange}
          value={values.price_min}
        />
        <input
          placeholder="Price up to"
          name="price_max"
          className={`${style.filter_input} ${style.filter_price}`}
          type="number"
          onChange={handleChange}
          value={values.price_max}
        />
        <button className={style.submit_filters} type="submit">Apply</button>
        {/* <button onClick={() => setValues(defaultValues)} className={style.submit_filters}>Reset</button> */}
      </form>

      {isLoading ? (
        <div className={style.catalog}>
          {Array.from({ length: 10 }, (_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : !items.length || !isSuccess ? (
        <div className={style.result_block}>
          <p className={style.title_result}>No result</p>
          <button onClick={resetValues} className={style.reset_options}>Reset</button>
        </div>
      ) : (
        <ProductList
          style={{ padding: '0px 0px 0px' }}
          title=""
          amount={items.length}
          products={items}
          isLoading={isLoading}
          seeMore={seeMore}
          isEnd={isEnd}
        />
      )}
    </div>
  );
}

export default ProductCatalog;
