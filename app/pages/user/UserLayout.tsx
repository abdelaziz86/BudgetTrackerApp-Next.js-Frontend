import React from 'react';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="user-layout">
      <div>I'm a navbar</div>
      {children}
    </div>
  );
};

export default UserLayout;
