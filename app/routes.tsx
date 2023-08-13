// app/routes.tsx
import React from 'react';
import { Route } from 'react-router-dom';  
import UserLayout from './pages/user/UserLayout'; 
import SignupPage from './pages/signup/page';

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
