import React, { useContext, useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material';
import { Yearbook } from '../../domain/yearbook';
import { serviceInstance as yearbookService } from '../../api/services/YearbookService';
import { PhotographerContext } from '../../contexts/PhotographerContext';
import { YearbookCard } from './YearbookCard';
import { Page } from '../Page';
import { toDomain as yearbookToDomain } from '../../api/mappers/yearbook';

const styles = {
    title: {
        fontSize: '23px',
    },
    yearbooksList: {
        marginTop: '15px'
    }
}

export const YearbooksPage = () => {
    const { photographer } = useContext(PhotographerContext)
    const [yearbooks, setYearbooks] = useState<Yearbook[] | null>(null)
     
    useEffect(() => {
        const loadYearbooks = async () => {
            if (photographer) {
                const loadedYearbooks = await yearbookService.queryYearbooks({ photographerId: photographer.id })
                setYearbooks(loadedYearbooks)
                console.log(loadedYearbooks)
            }
        }
        void loadYearbooks()
    }, [photographer?.id])

    if (!yearbooks) {
        return (
            <Page>
                <Page.Header />
                <Page.LoadingContent text='Loading yearbooks...' />
            </Page>
        )
    }

    return (
        <Page>
            <Page.Header />
            <Page.Content>
                <Page.Title text='Your yebooks' />
                <Grid sx={styles.yearbooksList} container spacing={4}>
                    {yearbooks.map(yearbook => (
                        <Grid key={yearbook.id} item xs={6} md={4} lg={3}>
                            <YearbookCard yearbook={yearbook} />
                        </Grid>
                    ))}
                </Grid>
            </Page.Content>
        </Page>
    )
}
