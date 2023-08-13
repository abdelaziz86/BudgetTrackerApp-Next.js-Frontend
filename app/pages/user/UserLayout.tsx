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
        background: 'linear-gradient(#9BEE95, #95EED3)', /* Apply background gradient */
      }}>
        <div className="user-layout">
          <center>
            <div className="card lg:card-side bg-base-100 shadow-xl" style={{"width" : "50%", "marginTop" : "10%"}}> 
                <div className="card-body">
                    {children}
                  
                    <div className="card-actions justify-center">
                    
                </div>
            </div>
            </div>
        </center>
        </div>
      </body>
    </html>
  );
};

export default UserLayout;
