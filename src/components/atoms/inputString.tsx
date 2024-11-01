import React, { useState } from 'react';

interface InputStringProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const InputString: React.FC<InputStringProps> = ({ label, value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <label>
                {label}
                <input type="text" defaultValue={value} onChange={handleChange} />
            </label>
        </div>
    );
};

export default InputString;