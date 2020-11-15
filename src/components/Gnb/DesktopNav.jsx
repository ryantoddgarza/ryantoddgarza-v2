import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import { TITLE, HOME_PATH } from '~/constants';
import { List, ListMenu, Home, StyledLink } from './styled';

const DesktopNav = ({ navLists }) => {
  const catNavList = Object.values(navLists).flat();

  return (
    <List>
      <ListMenu>
        <StyledLink to={HOME_PATH}>
          <Home>{TITLE}</Home>
        </StyledLink>
      </ListMenu>
      {catNavList.map(({ name, url, isActive, subMenu }) => {
        if (subMenu) {
          return (
            <ListMenu key={name}>
              <StyledLink to={url} className={isActive ? 'active' : ''}>
                {`${name} `}
                {subMenu.list.length > 0 ? <FaCaretDown /> : null}
              </StyledLink>
              {subMenu.component}
            </ListMenu>
          );
        }

        return (
          <ListMenu key={name}>
            <StyledLink to={url} className={isActive ? 'active' : ''}>
              {name}
            </StyledLink>
          </ListMenu>
        );
      })}
    </List>
  );
};

DesktopNav.propTypes = {
  navLists: PropTypes.shape({}).isRequired,
};

export default DesktopNav;