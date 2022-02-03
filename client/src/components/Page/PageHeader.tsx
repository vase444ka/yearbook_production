import React, { FC, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link, Typography } from '@mui/material';

import { UserContext, UserContextType } from '../../contexts/UserContext/UserContext';
import { Box } from '@mui/system';

const styles = {
    header: {
        display: 'flex',
        padding: '0 50px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 10px -1px black',
        height: '70px',
        backgroundColor: 'rgba(52, 186, 235, .2)'
    },
    logoLink: {
        textDecoration: 'none',
    },
    logo: {
        fontSize: '25px',
        fontFamily: `'ZCOOL KuaiLe', cursive`
    }
}

export const PageHeader: FC = () => {
    const userContext: UserContextType = useContext(UserContext)

    return (
        <Box component={'header'} sx={styles.header}>
            <Link component={RouterLink} to='/' sx={styles.logoLink}>
                <Typography sx={styles.logo} component='h1' color='textPrimary'>Yebooks production</Typography>
            </Link>
            <Button
                onClick={() => userContext.logout()}
            >
                Log out
            </Button>
        </Box>
    )
}
