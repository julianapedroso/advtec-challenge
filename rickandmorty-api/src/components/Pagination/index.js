import React from 'react'
import {Pagination} from './styles';

const Pagination = ({props, boundaryRange, defaultActivePage, ellipsisItem, firstItem, lastItem, siblingRange, totalPages }) => (
  <SemanticPagination
    boundaryRange={boundaryRange}
    defaultActivePage={defaultActivePage}
    ellipsisItem={ellipsisItem}
    firstItem={firstItem}
    lastItem={lastItem}
    siblingRange={siblingRange}
    totalPages={totalPages}
  />
)

export default Pagination;