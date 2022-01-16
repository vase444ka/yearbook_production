import React, { FC } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

type DatePickerProps = {
    id: string
    label: string
    value: Date
    onChange: (newValue: Date | null) => void
    invalid?: boolean
}
export const MyDatePicker: FC<DatePickerProps> = props => {
    const { id, value, invalid, label, onChange } = props

    return (
        <DatePicker
            renderInput={(props) => <TextField 
                {...props} />}
            label={label}
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={(newValue: Date | null) => {
                onChange(newValue)
            }}
        />
    )
}
