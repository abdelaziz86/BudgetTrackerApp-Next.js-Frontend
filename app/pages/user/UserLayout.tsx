import React from 'react';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body style={{
        margin: 0, /* Reset default margin */
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', /* Set minimum height to cover the viewport */
        background: 'linear-gradient(#e66465, #9198e5)', /* Apply background gradient */
      }}>
        <div className="user-layout">
          {children}
        </div>
      </body>
    </html>
  );
};

export default UserLayout;
