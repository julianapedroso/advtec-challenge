import React from 'react';
import { Pagination as StyledPagination } from './styles';

const Pagination = ({
  boundaryRange,
  defaultActivePage,
  ellipsisItem,
  firstItem,
  lastItem,
  siblingRange,
  totalPages,
  onPageChange,
}) => (
  <StyledPagination
    boundaryRange={boundaryRange}
    defaultActivePage={defaultActivePage}
    ellipsisItem={ellipsisItem}
    firstItem={firstItem}
    lastItem={lastItem}
    siblingRange={siblingRange}
    totalPages={totalPages}
    onPageChange={onPageChange}
  />
);

export default Pagination;
