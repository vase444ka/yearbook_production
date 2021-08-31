import React, { FC } from 'react';
import { CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { PageContent } from './PageContent';

const useStyles = makeStyles({
    loader: {
        marginTop: '15px'
    },
});

type PageLoadingContentProps = {
    text: string
}
export const PageLoadingContent: FC<PageLoadingContentProps> = ({ text }) => {
    const classes = useStyles()

    return (
        <PageContent>
            <Typography color='textPrimary'>{text}</Typography>
            <CircularProgress className={classes.loader} />
        </PageContent>
    )
}
