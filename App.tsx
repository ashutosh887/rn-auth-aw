import React from 'react';
import {Router} from './src/routes/Router';
import {AppwriteProvider} from './src/appwrite/AppwriteContext';

const App = () => {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
};

export default App;
