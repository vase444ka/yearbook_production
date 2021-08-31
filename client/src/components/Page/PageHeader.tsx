import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
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
});

export const PageHeader: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <Link to='/' className={classes.logoLink}>
                <Typography className={classes.logo} component='h1' color='textPrimary'>Yebooks production</Typography>
            </Link>
        </header>
    )
}
