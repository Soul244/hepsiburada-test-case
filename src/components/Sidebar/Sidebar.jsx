import React, { useContext, Fragment } from 'react';
import './Sidebar.scss';
import PropTypes from 'prop-types';
import AppContext from 'contexts/AppContext/AppContext';

function Sidebar(props) {
  const { state } = useContext(AppContext);

  return (
    <div className="sidebar">
      {state.filters.map((filter) => (
        <Fragment key={`filter-${filter.id}`}>
          <h3 className="sidebar__title">{filter.name}</h3>
          <ul className="sidebar__list">
            {filter.items.map((filterItem) => (
              <li className="sidebar__list-item" key={`filter-item-${filterItem.id}`}>
                {filterItem.name}
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
