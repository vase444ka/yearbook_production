import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    content: {
        padding: '50px 40px 40px'
    },
});

export const PageContent: FC = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.content}>{children}</div>
    )
}
