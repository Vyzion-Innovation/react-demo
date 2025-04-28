import React from "react";
import { AsyncSelect, Calendar, Dropdown, InputText, InputTextarea, Password } from "../../libraries";


import { FileUpload } from "primereact/fileupload";

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
            case "calendar":
                return (
                    <Calendar
                        name={name}
                        value={value}
                        onChange={onChange}
                        showIcon
                        showButtonBar
                        placeholder={placeholder}
                        dateFormat="dd/mm/yy"

                        {...rest}
                    />
                );
            case "dropdown":
                return (
                    <Dropdown
                        name={name}
                        value={value}
                        onChange={onChange}
                        options={optionsLoader}
                        placeholder={placeholder}

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
                        {...rest}
                    />
                );
            case "fileUpload":
                return (
                    <FileUpload
                        name="logo"
                        accept="image/*"
                        maxFileSize={1000000} // 1MB limit (optional)
                        customUpload
                        uploadHandler={onChange}
                        mode="basic"
                        auto
                        chooseLabel="Upload Logo"
                    />
                )
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
        <div className="field col-6 mt-2">
            {label && <label htmlFor={id} className="text__capital">{label}</label>}
            {renderInput()}
            {error && <small id={id} className="p-error">{error}</small>}
        </div>
    );

};

export default FormInput;
