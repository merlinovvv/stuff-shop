import React from 'react';
import style from './style.module.css'
import RecommendBlock from '../RecommendBlock/RecommendBlock';

function Recommend() {
  return (
    <div className={style.recommend}>
        <h3 className={style.title}>Worth seeing</h3>
        <div className={style.recommend_list}>
            <RecommendBlock/>
            <RecommendBlock/>
            <RecommendBlock/>
            <RecommendBlock/>
            <RecommendBlock/>
        </div>
    </div>
  )
}

export default Recommend