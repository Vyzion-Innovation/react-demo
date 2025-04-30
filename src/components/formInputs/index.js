import React from "react";
import { InputText ,Password } from "../../libraries";



const FormInput = ({
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
        <div className="field col-12 col-sm-12 col-md-6 mt-2">
            {label && <label htmlFor={id} className="text__capital input__valid" >{label}</label>}
            {renderInput()}
            {error && <small id={id} className="p-error">{error}</small>}
        </div>
    );

};

export default FormInput;
