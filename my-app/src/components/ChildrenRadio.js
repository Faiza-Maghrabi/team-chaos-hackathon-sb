import React, { useState } from 'react';

function RadioGroup() {
    const [selectedOption, setSelectedOption] = useState('yes');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h>Do you have children?</h>
            <div>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={selectedOption === 'yes'}
                        onChange={handleOptionChange}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={selectedOption === 'no'}
                        onChange={handleOptionChange}
                    />
                    No
                </label>
            </div>
        </div>
    );
}

export default RadioGroup;
