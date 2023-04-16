import React, { FC, PropsWithChildren, useReducer } from 'react'
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { type } from 'os';

export interface EntriesState {
 entries:Entry[];
}

const ENTRIES_INITIAL_STATE:EntriesState={
  entries:[
    {
        _id: uuidv4(),
        description:'Pendiente: Loren ipsunt',
        status:'pending',
        createdAt:Date.now()
    },
    {
        _id: uuidv4(),
        description:'En-Progreso: Loren ipsunt',
        status:'in-progress',
        createdAt:Date.now()-1000000
    },
    {
        _id: uuidv4(),
        description:'Completada: Loren ipsunt',
        status:'finished',
        createdAt:Date.now()-100000
    }
  ],
}



const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

  const [state,dispatch] =  useReducer(entriesReducer,ENTRIES_INITIAL_STATE)

  const addNewEntry =(description:string) =>{

    const newEntry :Entry ={
        _id:uuidv4(),
        description:description,
        createdAt:Date.now(),
        status:'pending'
    }
    dispatch({type:'[Entry] - add-entry',payload:newEntry});
  }

 return (
   <EntriesContext.Provider
     value={{
       ...state,
       //methods
       addNewEntry
     }}
   >
       {children}
   </EntriesContext.Provider>
 )
}

export default EntriesProvider