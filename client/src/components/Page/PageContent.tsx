import React, { FC } from 'react';
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

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
