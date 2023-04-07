import React, { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
 sidemenuOpen:boolean;
}

const UI_INITIAL_STATE:UIState={
  sidemenuOpen:false,
}






const UiProvider:FC<PropsWithChildren> = ({children}) => {

  const [state,dispatch] =  useReducer(uiReducer,UI_INITIAL_STATE);

  const openSideMenu = () =>{
    dispatch({type:'UI - Open Siderbav'});
  }

  const closeSideMenu = () =>{
    dispatch({type:'UI - Close Siderbav'});
  }

 return (
   <UIContext.Provider
     value={{
        ...state,
        //Methods
        openSideMenu,
        closeSideMenu
     }}
   >
       {children}
   </UIContext.Provider>
 )
}

export default UiProvider