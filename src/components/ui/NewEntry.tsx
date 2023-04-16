import { Box, Button, TextField } from '@mui/material'
import React, { useState,ChangeEvent } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useContext } from 'react';
import { EntriesContext } from '@/context/entries';

const NewEntry = () => {


    const [isAdding,setIsAdding] = useState(false);
    const [inputValue,setInputValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);
    const {addNewEntry} = useContext(EntriesContext);

    const onTextFieldChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value);
    }

    const onSave=() =>{
        if(inputValue.length === 0 )return;
        addNewEntry(inputValue);
        setIsAdding(false);
        setIsTouched(false);
        setInputValue('');
    }
  return (
    <Box
        sx={{marginBottom:2,paddingX:2}}
    >

        {
            isAdding?(
                <>
                    <TextField
                        fullWidth
                        sx={{marginTop:2,marginBottom:1}}
                        placeholder='nueva entrada'
                        autoFocus
                        multiline
                        label='nueva entrada'
                        helperText={inputValue.length<=0 && isTouched && 'Ingrese un valor'}
                        error={inputValue.length<=0 && isTouched}
                        value={inputValue}
                        onChange={onTextFieldChange}
                        onBlur={()=>setIsTouched(true)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='text'
                            color='primary'
                            onClick={()=>setIsAdding(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant='outlined'
                            color='primary'
                            endIcon={<SaveIcon/>}
                            onClick={()=>onSave()}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            )
            :(
                <Button
                    startIcon={<PostAddIcon/>}
                    fullWidth
                    variant='outlined'
                    onClick={()=>setIsAdding(true)}
                >
                    Agregar Task
                </Button>
            )
        }
        
        
    </Box>
  )
}

export default NewEntry