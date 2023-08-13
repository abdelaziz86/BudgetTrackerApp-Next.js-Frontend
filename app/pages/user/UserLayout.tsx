import React from 'react';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
      <div className="user-layout" style={{
          "background": "linear-gradient(#e66465, #9198e5)" 
      }}>
           
          <center>
            <div className="card lg:card-side bg-base-100 shadow-xl" style={{"width" : "60%", "marginTop" : "10%"}}> 
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    {children}
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
            </div>
        </center>
      
    </div>
  );
};

export default UserLayout;
