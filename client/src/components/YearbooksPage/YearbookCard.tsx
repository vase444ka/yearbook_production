import React, { FC } from 'react'
import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import EditIcon from '@mui/icons-material/Edit'
import { format } from 'date-fns'

import { Yearbook } from '../../domain/yearbook';
import { Link } from 'react-router-dom';
import { YearbookType } from '../../domain/yearbook-type';

const useStyles = makeStyles({
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
    chip: {
        background: (props: YearbookType) => {
            if (props.name === 'Mini')
                return '#30fc03'
            if (props.name === 'Maxi')
                return '#fcf403'
            if (props.name === 'Mega')
                return '#fca903'
        },
    },
    dueDate: {
        marginTop: '10px'
    },
    button: {
        marginTop: '10px'
    }
});

type YearbookCardProps = {
    yearbook: Yearbook
}
export const YearbookCard: FC<YearbookCardProps> = ({ yearbook }) => {
    const { yearbookType } = yearbook
    const classes = useStyles(yearbookType)

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.titleAndTypeContainer}>
                    <Typography className={classes.title} color="textPrimary">
                        {yearbook.title}
                    </Typography>
                    <Chip className={classes.chip} size='small' label={(
                        <div className={classes.typeContainer}>{yearbookType.name}</div>
                    )} />
                </div>
                <Typography className={classes.dueDate} color="textSecondary">
                    Due date: {format(yearbook.deadline, 'E, do MMM, y')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    className={classes.button}
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
