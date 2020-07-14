import React from 'react';
const Pagination = () => {
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;