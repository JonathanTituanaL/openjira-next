import { List, Paper } from '@mui/material'
import React ,{FC, useContext, useMemo}from 'react'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries';

interface Props{
    status :EntryStatus;
}

const EntryList:FC<Props> = ({status}) => {

    //lee el contexto
    const {entries} = useContext(EntriesContext);
    const entriesByStatus = useMemo(()=>
        entries.filter(entry => entry.status === status)
    ,
    [entries])
    
  return (
    
    <div

    >
        <Paper
            sx={{height:'calc(100vh - 200px)',overflow:'',backgroundColor:'transparent',padding:'1px 5px'}}
        >
            <List
                sx={{opacity:1}}
            >
                {
                    entriesByStatus.map((entry) =>( <EntryCard key={entry._id} entry={entry} />))
                }
                
            </List>

        </Paper>
    </div>
  )
}

export default EntryList