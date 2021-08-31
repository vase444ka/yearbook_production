import React, { FC, PropsWithChildren } from 'react';
import { TextField } from '@material-ui/core';

type InputProps<Value> = {
    type: 'number' | 'text'
    id: string
    label: string
    value: Value
    invalid?: boolean
    onChange: (newValue: Value) => void
}
export const Input = <Value extends number | string>(props: PropsWithChildren<InputProps<Value>>) => {
    const { type, id, invalid, value, label, onChange } = props

    return (
        <TextField
            fullWidth
            required
            size='small'
            margin='normal'
            type={type}
            id={id}
            label={label}
            error={invalid}
            variant="outlined"
            value={value || ''}
            onChange={event => {
                const { value: newValueString } = event.target
                const newValue = type === 'number' ? Number(newValueString) : newValueString
                onChange(newValue as Value)
            }}
        />
    )
}
