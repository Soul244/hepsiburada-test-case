import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'contexts/AppContext/AppContext';

function SidebarItem({ name, value, isOrderFilter, count }) {
  const { state, handleOrder, filterProducts } = useContext(AppContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (isOrderFilter) {
      handleOrder(value);
    } else {
      filterProducts({ value, name });
    }
  };

  useEffect(() => {
    if (state.order === value || state.filter === name) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [state.order, state.filter, name, value]);

  return (
    <li className={`sidebar__list-item ${isSelected ? 'sidebar__list-item--selected' : ''}`} onClick={handleClick}>
      {`${name} ${count ? `(${count})` : ''}`}
    </li>
  );
}

SidebarItem.propTypes = {};

export default SidebarItem;
