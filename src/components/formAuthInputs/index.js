import React from "react";
import { AsyncSelect, InputText, InputTextarea, Password } from "../../libraries";



const FormAuthInput = ({
    type = "text",
    id,
    name,
    value,
    onChange,
    label,
    placeholder,
    error,
    optionsLoader,
    isClearable = true,
    ...rest
}) => {


    const renderInput = () => {
        switch (type) {
            case "password":
                return (
                    <Password
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        toggleMask
                        feedback={false}
                        {...rest}
                    />
                );
            case "textarea":
                return (
                    <InputTextarea
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        rows={3}
                        {...rest}
                    />
                );
            case "select":
                return (
                    <AsyncSelect
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        loadOptions={optionsLoader}
                        isClearable={isClearable}
                        defaultOptions
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e.id}
                        {...rest}
                    />
                );
            default:
                return (
                    <InputText
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        {...rest}
                    />
                );
        }
    };

    return (
        <div className="field col-12 mt-2">
            {label && <label htmlFor={id} className="text__capital">{label}</label>}
            {renderInput()}
            {error && <small id={id} className="p-error">{error}</small>}
        </div>
    );

};

export default FormAuthInput;
