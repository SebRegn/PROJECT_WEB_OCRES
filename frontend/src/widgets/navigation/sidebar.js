import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';



const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  },
};

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        key: 'key1',
        url: '/',
        iconProps: {
          iconName: 'News',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Admin',
        key: 'key2',
        url: '/Admin',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];


class Navigation extends React.Component {

  render() {
    initializeIcons();
    return (
      //<div><Button><Link to="/Admin">Admin</Link></Button>
      <Nav
        groups={links}
        selectedKey='key1'
        styles={navigationStyles}
      />
    );
  }
}

export default Navigation;