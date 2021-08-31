import React, { FC } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

type DatePickerProps = {
    id: string
    label: string
    value: Date
    onChange: (newValue: Date | null) => void
    invalid?: boolean
}
export const DatePicker: FC<DatePickerProps> = props => {
    const { id, value, invalid, label, onChange } = props

    return (
        <KeyboardDatePicker
            fullWidth
            required
            variant="dialog"
            inputVariant="outlined"
            size='small'
            format="MM/dd/yyyy"
            margin="normal"
            error={invalid}
            id={id}
            label={label}
            value={value}
            onChange={(newValue: Date | null) => {
                onChange(newValue)
            }}
        />
    )
}
