import React, { FC } from 'react';
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    title: {
        fontSize: '23px',
    },
});


type PageTitleProps = {
    text: string
}
export const PageTitle: FC<PageTitleProps> = ({ text }) => {
    const classes = useStyles()

    return (
        <Typography className={classes.title} component='h2'>{text}</Typography>
    )
}
