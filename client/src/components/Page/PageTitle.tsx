import React, { FC } from 'react';
import { Typography } from '@mui/material';


const styles = {
    title: {
        fontSize: '23px',
    },
};


type PageTitleProps = {
    text: string
}
export const PageTitle: FC<PageTitleProps> = ({ text }) => {
     
    return (
        <Typography sx={styles.title} component='h2'>{text}</Typography>
    )
}
