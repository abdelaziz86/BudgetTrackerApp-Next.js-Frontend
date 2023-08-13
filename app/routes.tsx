// app/routes.tsx
import React from 'react';
import { Route } from 'react-router-dom';  
import UserLayout from './pages/user/UserLayout';
import LoginPage from './pages/user/login';
import SignupPage from './pages/user/signup';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/login">
        fff
      </Route>
      <Route path="/signup">
        <UserLayout>
          <SignupPage />
        </UserLayout>
      </Route>
    </>
  );
};

export default Routes;
