import React from 'react';

const MySelect = ({defaultValue, optionsList, value, onChange}) => {
    return (
        <select
        value={value}
        onChange={(e)=>onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {optionsList.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default MySelect;