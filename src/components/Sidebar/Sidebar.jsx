import React, { useContext, Fragment } from 'react';
import './Sidebar.scss';
import PropTypes from 'prop-types';
import AppContext from 'contexts/AppContext/AppContext';
import SidebarItem from './SidebarItem';

function Sidebar(props) {
  const { state } = useContext(AppContext);

  return (
    <div className="sidebar">
      {state.filters.map((filter) => (
        <Fragment key={`filter-${filter.id}`}>
          <h3 className="sidebar__title">{filter.name}</h3>
          <ul className="sidebar__list">
            {filter.items.map((filterItem) => (
              <SidebarItem key={`filter-item-${filterItem.id}`} filterItem={filterItem}></SidebarItem>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
