import React from 'react';

const Card = ({cata}) => {
    
    const {strCategory,strCategoryThumb,strCategoryDescription} = cata;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={strCategoryThumb} alt="" />
    <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strCategory}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{strCategoryDescription}</p>
    </div>
</div>
    );
}

export default Card;
