import React, { FC } from 'react'
import { Box } from '@mui/material';

const style = {
}

export const Page: FC = ({ children }) => {

    return (
        <Box sx={style}>{children}</Box>
    )
}
