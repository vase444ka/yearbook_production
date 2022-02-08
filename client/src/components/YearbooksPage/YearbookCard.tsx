import React, { FC } from 'react'
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { format } from 'date-fns'

import { Yearbook } from '../../domain/yearbook';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

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
    dueDate: {
        marginTop: '10px'
    },
    button: {
        marginTop: '10px'
    }
};

const StyledChip = styled(Chip)((props: { name: string }) => {
    if (props.name === 'Mini')
        return { background: '#30fc03' }
    if (props.name === 'Maxi')
        return { background: '#fcf403' }
    if (props.name === 'Mega')
        return { background: '#fca903' }
});

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
                    <StyledChip name={yearbookType.name} size='medium' label={(
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
