import React from 'react';
import TopNav from './TopNav';

const Dashbord = ({sideBarToggole , setSideBarToggole}) => {
    return (
        <>
         <div className={`${sideBarToggole ? "w-64" : "w-full"}`}>
         <TopNav
         sideBarToggole = {sideBarToggole} 
         setSideBarToggole = {setSideBarToggole}
         />  
         </div>
        </>
    );
};

export default Dashbord;