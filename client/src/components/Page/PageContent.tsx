import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

const style = {
    padding: '50px 40px 40px'
}

export const PageContent: FC = ({ children }) => {
    return (
        <Box sx={style}>{children}</Box>
    )
}
