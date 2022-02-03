import React, { FC } from 'react'
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { format } from 'date-fns'

import { Yearbook } from '../../domain/yearbook';
import { Link } from 'react-router-dom';
import { YearbookType } from '../../domain/yearbook-type';

const styles = {
    card: {
    },
    titleAndTypeContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
    },
    typeContainer: {
        padding: '0 5px',
    },
    chip: {//TODO
        /*background: (props: YearbookType) => {
            if (props.name === 'Mini')
                return '#30fc03'
            if (props.name === 'Maxi')
                return '#fcf403'
            if (props.name === 'Mega')
                return '#fca903'
        },*/
    },
    dueDate: {
        marginTop: '10px'
    },
    button: {
        marginTop: '10px'
    }
};

type YearbookCardProps = {
    yearbook: Yearbook
}
export const YearbookCard: FC<YearbookCardProps> = ({ yearbook }) => {
    const { yearbookType } = yearbook

    return (
        <Card sx={styles.card}>
            <CardContent>
                <Box sx={styles.titleAndTypeContainer}>
                    <Typography sx={styles.title} color="textPrimary">
                        {yearbook.title}
                    </Typography>
                    <Chip sx={styles.chip} size='small' label={(
                        <Box sx={styles.typeContainer}>{yearbookType.name}</Box>
                    )} />
                </Box>
                <Typography sx={styles.dueDate} color="textSecondary">
                    Due date: {format(yearbook.deadline, 'E, do MMM, y')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={styles.button}
                    size="small"
                    color='primary'
                    variant='outlined'
                    startIcon={<EditIcon />}
                    component={Link}
                    to={`/yearbooks/${yearbook.id}`}
                >
                    Edit yearbook
                </Button>
            </CardActions>
        </Card>
    )
}
