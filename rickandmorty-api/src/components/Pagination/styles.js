import styled from 'styled-components';
import { Pagination as SemanticPagination } from 'semantic-ui-react';

export const Pagination = styled(SemanticPagination)`
  display: flex;
  flex: 1;
  background: #fff;

  &.ui.pagination.menu {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  &.ui.pagination.menu .item {
    max-width: 3em;
    text-align: center;
}

  &.ui.menu:last-child {
    margin-bottom: 0;
  }

  &.ui.menu {
    font-size: 1rem;
  }

  &.ui.menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 1rem 0;
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    background: #fff;
    font-weight: 400;
    border: 1px solid rgba(34, 36, 38, 0.15);
    -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    border-radius: 0.28571429rem;
    min-height: 2.85714286em;
  }

  &.ui.menu > .item:first-child {
    border-radius: 0.28571429rem 0 0 0.28571429rem;
  }

  &.ui.menu:not(.vertical) .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &.ui.menu .item {
    position: relative;
    vertical-align: middle;
    line-height: 1;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: 0 0;
    padding: 0.92857143em 1.14285714em;
    text-transform: none;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    -webkit-transition: background 0.1s ease, color 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    transition: background 0.1s ease, color 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;
    transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease,
      -webkit-box-shadow 0.1s ease;
  }

  &.ui.menu .item:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: rgba(34, 36, 38, 0.1);
  }

  & a.item:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
    color: rgba(0, 0, 0, 0.95);
  }
`;
