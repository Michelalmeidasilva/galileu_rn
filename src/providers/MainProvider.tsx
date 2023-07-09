import React from 'react';

import {UserProvider, NavigationProvider} from './';

const MainProvider = () => {
  return (
    <UserProvider>
      <NavigationProvider />
    </UserProvider>
  );
};

export default MainProvider;
