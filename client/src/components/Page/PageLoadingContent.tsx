import React, { FC } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { PageContent } from './PageContent';

const styles = {
    loader: {
        marginTop: '15px'
    },
}

type PageLoadingContentProps = {
    text: string
}
export const PageLoadingContent: FC<PageLoadingContentProps> = ({ text }) => {
    return (
        <PageContent>
            <Typography color='textPrimary'>{text}</Typography>
            <CircularProgress sx={styles.loader} />
        </PageContent>
    )
}
