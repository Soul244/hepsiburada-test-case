import React, { useContext, Fragment } from 'react';
import './Sidebar.scss';
import PropTypes from 'prop-types';
import AppContext from 'contexts/AppContext/AppContext';

function Sidebar(props) {
  const { state, handleOrder } = useContext(AppContext);

  const handleClick = (filterItem) => {
    if (filterItem.isOrderFilter) {
      handleOrder(filterItem.value);
    }
  };

  return (
    <div className="sidebar">
      {state.filters.map((filter) => (
        <Fragment key={`filter-${filter.id}`}>
          <h3 className="sidebar__title">{filter.name}</h3>
          <ul className="sidebar__list">
            {filter.items.map((filterItem) => (
              <li
                className="sidebar__list-item"
                key={`filter-item-${filterItem.id}`}
                onClick={() => handleClick(filterItem)}
              >
                {`${filterItem.name} ${filterItem.count ? `(${filterItem.count})` : ''}`}
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
