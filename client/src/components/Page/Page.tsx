import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    page: {},
});

export const Page: FC = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.page}>{children}</div>
    )
}
