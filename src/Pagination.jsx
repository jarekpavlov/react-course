import React from 'react';
import {getPagesArray} from "./utils/pages";

const Pagination = ({changePage, page, totalPages}) => {

    const pagesArr = getPagesArray(totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArr.map((p)=>(
                <span
                    key={p}
                    onClick={() =>changePage(p)}
                    className={page===p ? 'page page__current' : 'page'}>{p}</span>
            ))}
        </div>
    );
};

export default Pagination;