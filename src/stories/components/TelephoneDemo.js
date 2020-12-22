import React, { useState } from 'react'
import useMask from '../../useMask'


export default function TelephoneDemo({ onChange }) {
    const [ value, setValue ] = useState('')

    function handleChange(value) {
        onChange?.(value)
        setValue(value)
    }
    const maskProps = useMask(
        value,
        handleChange,
        '(###)-###-####',
        '(___)-___-____',
    )

    return (
        <label>
            Sample input with phone mask:
            <input
                name="test"
                type="tel"
                {...maskProps}
            />
        </label>
    );
}