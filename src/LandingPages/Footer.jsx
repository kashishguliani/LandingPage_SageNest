// import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

    
    <div className="h-20 w-full bg-customBlue flex items-center justify-between"> {/* Flex container with justify-between */}
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4"> {/* Ensure space on both sides with px-4 */}
        {/* Logo */}
        <div>
          <h1 className="font-bold text-white" style={{ fontSize: '2rem' }}>SageNest</h1>
          <p className='text-white'>Made in india for the world</p>
        </div>
  <div>
     

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row  ">
        <div className="flex flex-col md:flex-row -mb-2">
                       {/* Add Links Component here  */}
                       <p className="mx-4 text-md text-white font-medium">About</p>
                       <p className="mx-4 text-md text-white font-medium">Help</p>
                       <p className="mx-4 text-md text-white font-medium">Privacy Policy</p>
                       <p className="mx-4 text-md text-white font-medium">Terms of Services</p>
                  
            
          </div>
          <p className='text-white'>contact@globalfluent.com</p>
         
        </div>
        </div>
        
      </div>
    </div>


        <div className='text-center'>
            <p>Copyright © 2024 GloFluent VidyaTech Pvt. Ltd. All rights reserved</p>
        </div>
</div>
  );
  
  
};

export default Footer;
