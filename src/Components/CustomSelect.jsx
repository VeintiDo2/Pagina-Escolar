import React, { useState } from 'react';

const CustomSelect = ({ options, onSelect, placeholder, setOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
        setOption(option.components);
    };

    return (
        <div className="custom-select-container">
            <div className="custom-select" onClick={toggleDropdown}>
                <div className="custom-select-selected">
                    {/* {selectedOption ? selectedOption.label : placeholder} */}
                    Información
                </div>
                <div className="custom-select-arrow">{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && (
                <div className="custom-select-dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="custom-select-option"
                            onClick={() => handleSelect(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
