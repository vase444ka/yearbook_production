import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { serviceInstance as yearbookService } from '../../api/services/YearbookService';
import { Page } from '../Page';
import { Yearbook } from '../../domain/yearbook';
import { Button, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Input } from './Input';
import { MyDatePicker } from './MyDatePicker';
import { Class } from '../../domain/class';
import { useSnackbar } from 'notistack';

type YearbookChangeableFields = keyof Omit<Yearbook, 'id' | 'yearbookType' | 'class' | 'created' | 'updated' | 'version'>
type ClassChangeableFields = keyof Omit<Class, 'id' | 'version'>
type ChangeableFields = YearbookChangeableFields | ClassChangeableFields

type ValidationError = {
    fieldName: string
    message: string
}

const useStyles = makeStyles({
    form: {

    },
    subtitle: {
        marginTop: '30px'
    },
    saveButton: {
        marginTop: '40px'
    }
});

type EditYearbookPageRouteParams = {
    id: string
}
export const EditYearbookPage: FC = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams<EditYearbookPageRouteParams>()

    const [yearbook, setYearbook] = useState<Yearbook | null>(null)
    useEffect(() => {
        const loadYearbook = async () => {
            try {
                const loadedYearbook = await yearbookService.getYearbook(id!)
                setYearbook(loadedYearbook)
                console.log(loadedYearbook)
            } catch (error) {
                console.error(error)
                enqueueSnackbar(
                    `Oops! Failed to load yearbook, maybe it doesn't exist? ;)`,
                    { variant: 'error' }
                )
            }
        }
        void loadYearbook()
    }, [id])


    const [errors, setErrors] = useState<ValidationError[]>([])
    const getError = (fieldName: ChangeableFields) => errors.find(error => error.fieldName === fieldName)

    const handleNewValidationError = (newError: ValidationError) => {
        setErrors(errors.concat(newError))
    }
    const handleValidationErrorElimination = (fieldName: string) => {
        setErrors(errors.filter(error => error.fieldName !== fieldName))
    }

    const handleYearbookFieldChange = (fieldName: YearbookChangeableFields, newValue: Date | null) => {
        const fieldError = getError(fieldName)
        if (!newValue && !fieldError) {
            handleNewValidationError({
                fieldName,
                message: `Invalid date`
            })
        } else if (newValue && fieldError) {
            handleValidationErrorElimination(fieldName)
        }

        setYearbook({
            ...(yearbook!),
            [fieldName]: newValue
        })
    }

    const handleClassFieldChange = <Value extends string | number>(
        fieldName: ClassChangeableFields, newValue: Value
    ) => {
        const fieldError = getError(fieldName)
        if (!newValue && !fieldError) {
            handleNewValidationError({
                fieldName,
                message: `Invalid value`
            })
        } else if (newValue && fieldError) {
            handleValidationErrorElimination(fieldName)
        }

        setYearbook({
            ...(yearbook!),
            class: {
                ...yearbookClass,
                [fieldName]: newValue,
            }
        })
    }

    const handleSave = async () => {
        try {
            const updatedYearbook = yearbook ? await yearbookService.updateYearbook(yearbook) : yearbook
            setYearbook(updatedYearbook)
            enqueueSnackbar(
                'Success! The yearbook is saved',
                { variant: 'success' }
            )
        } catch (error) {
            enqueueSnackbar(
                'Oops! Something went wrong, the yearbook is not saved;(',
                { variant: 'error'}
            )
        }
    }

    if (!yearbook) {
        return (
            <Page>
                <Page.Header />
                <Page.LoadingContent text='Loading the yearbook...' />
            </Page>
        )
    }
    const { class: yearbookClass, yearbookType } = yearbook

    return (
      <Page>
          <Page.Header />
          <Page.Content>
              <Page.Title text={yearbook.title} />
              <Grid container spacing={10}>
                  <Grid item xs={6}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Typography className={classes.subtitle} component='h3' color='textSecondary'>Edit yearbook fields:</Typography>
                          <form className={classes.form}>
                              <MyDatePicker
                                  id='next-meeting'
                                  label="Next meeting"
                                  value={yearbook.nextMeeting}
                                  invalid={Boolean(getError('nextMeeting'))}
                                  onChange={newValue => {
                                      handleYearbookFieldChange('nextMeeting', newValue)
                                  }}
                              />
                              <MyDatePicker
                                  id="payed"
                                  label="Payed"
                                  value={yearbook.payed}
                                  invalid={Boolean(getError('payed'))}
                                  onChange={newValue => {
                                      handleYearbookFieldChange('payed', newValue)
                                  }}
                              />
                              <MyDatePicker
                                  id="prepayed"
                                  label="Prepayed"
                                  value={yearbook.prepayed}
                                  invalid={Boolean(getError('prepayed'))}
                                  onChange={newValue => {
                                      handleYearbookFieldChange('prepayed', newValue)
                                  }}
                              />
                              <MyDatePicker
                                  id="deadline"
                                  label="Deadline"
                                  value={yearbook.deadline}
                                  invalid={Boolean(getError('deadline'))}
                                  onChange={newValue => {
                                      handleYearbookFieldChange('deadline', newValue)
                                  }}
                              />
                          </form>
                      </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography className={classes.subtitle} component='h3' color='textSecondary'>Edit class fields:</Typography>
                      <form className={classes.form}>
                          <Input
                              type="number"
                              id="grade"
                              label="Grade"
                              value={yearbookClass.grade}
                              invalid={Boolean(getError('grade'))}
                              onChange={newGrade => {
                                  handleClassFieldChange('grade', newGrade)
                              }}

                          />
                          <Input
                              type="text"
                              id="name"
                              label="Name"
                              value={yearbookClass.name}
                              invalid={Boolean(getError('name'))}
                              onChange={newName => {
                                  handleClassFieldChange('name', newName)
                              }}
                          />
                          <Input
                              type="text"
                              id="school"
                              label="School"
                              value={yearbookClass.school}
                              invalid={Boolean(getError('school'))}
                              onChange={newSchool => {
                                  handleClassFieldChange('school', newSchool)
                              }}
                          />
                      </form>
                  </Grid>
              </Grid>
              <Button
                  className={classes.saveButton}
                  variant='outlined'
                  size='large'
                  color='primary'
                  disabled={Boolean(errors.length)}
                  onClick={handleSave}
              >
                  Save
              </Button>
          </Page.Content>
      </Page>
    )
}