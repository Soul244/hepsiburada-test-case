import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'contexts/AppContext/AppContext';

function SidebarItem({ filterItem }) {
  const { state, handleOrder } = useContext(AppContext);

  const handleClick = (filterItem) => {
    if (filterItem.isOrderFilter) {
      handleOrder(filterItem.value);
    }
  };

  return (
    <li
      className={`sidebar__list-item ${state.order === filterItem.value ? 'sidebar__list-item--selected' : ''}`}
      onClick={() => handleClick(filterItem)}
    >
      {`${filterItem.name} ${filterItem.count ? `(${filterItem.count})` : ''}`}
    </li>
  );
}

SidebarItem.propTypes = {};

export default SidebarItem;
