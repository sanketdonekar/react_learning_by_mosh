import React from 'react';
import PropTypes from 'prop-types'; //Runtime type checking for React props and similar objects.
import _ from 'lodash';
const Pagination = (props) => {

    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1)


    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

Pagination.propTypes = {                        //while using reusable components, propTypes is used to catch bugs related to typechecking & it also gives u kinda documentation to ur component
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;