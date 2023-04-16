import { Entry } from '@/interfaces'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React ,{FC}from 'react'

interface Props{
    entry:Entry;
}

const EntryCard:FC<Props> = ({entry}) => {
  return (
    <Card
        sx={{marginBottom:1}}
        //eventos drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{witheSpace:'pre-line'}} >{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
                <Typography variant='body-2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

export default EntryCard