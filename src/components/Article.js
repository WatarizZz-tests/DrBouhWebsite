import './ArticleCardStyles.css';
import React from 'react';
import ArticleCard from './ArticleCard';
import ArticleCardData from './ArticleCardData';

const Article = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>
            Articles
        </h1>
        <div className='project-container'>
            {ArticleCardData.map((val,ind) =>{
                return (
                    <ArticleCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} link={val.link}
                     />
                )
            })}
            

        </div>
      
    </div>
  )
}

export default Article
