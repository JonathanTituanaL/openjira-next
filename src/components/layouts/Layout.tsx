import { Box } from '@mui/material'
import Head from 'next/head'
import { FC } from 'react'
import Navbar from '../ui/Navbar';

interface Props{
    title?:string;
    children:JSX.Element;
}

const Layout:FC<Props> = ({title='OpenJitra',children}) => {
  return (
    <Box
        sx={{flexFlow:1}}
    >
        <Head>
            <title>{title}</title>
        </Head>
    <Navbar/>
        <Box
            sx={{paddingTpo:'10px 20px'}}
        >
            {children}
        </Box>
    </Box>
  )
}

export default Layout