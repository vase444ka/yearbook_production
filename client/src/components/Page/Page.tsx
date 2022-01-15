import React, { FC } from 'react'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    page: {},
});

export const Page: FC = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.page}>{children}</div>
    )
}
