import React, { FC } from 'react'
import { Button, Card, CardActions, CardContent, Chip, makeStyles, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { format } from 'date-fns'

import { Yearbook } from '../../domain/yearbook';
import { Link } from 'react-router-dom';

const yearbookTypeToClassNameMap = {
    'Mini': 'miniType',
    'Mega': 'maxiType',
    'Maxi': 'megaType',
}

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
    miniType: {
        background: '#30fc03',
    },
    maxiType: {
        background: '#fcf403',
    },
    megaType: {
        background: '#fca903',
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
    const classes = useStyles()
    const { yearbookType } = yearbook
    const chipClassName = yearbookTypeToClassNameMap[yearbookType.name]

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.titleAndTypeContainer}>
                    <Typography className={classes.title} color="textPrimary">
                        {yearbook.title}
                    </Typography>
                    <Chip className={classes[chipClassName]} size='small' label={(
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
