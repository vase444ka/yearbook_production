import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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
