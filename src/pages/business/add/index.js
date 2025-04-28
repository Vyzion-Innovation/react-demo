import React, { useEffect, useLayoutEffect } from "react";
import { BottomButtons, ButtonLabels, ErrorMessages, FormInput, HeadingComponent, HeadingName, InputHeading, Placeholder, RoutingPaths } from "../../../components";
import { toast, ToastContainer, useState } from "../../../libraries";
import { useLocation, useNavigate } from "react-router-dom";


function BusinessPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [buttonLabel, setButtonLabel] = useState(ButtonLabels.saveLabel);
    const [businessHeading, setBusinessHeading] = useState(HeadingName.business.add);
    const [businessID, setBusinessID] = useState();
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [businessData, setBusinessData] = useState({
        business_name: "",
        email: "",
        phone: "",
        country_id: "",
        state: "",
        city: "",
        postal_code: "",
        street_address: "",
        gstin: "",
        tax: "",
    });

    const [errors, setErrors] = useState({
        business_name: "",
        email: "",
        phone: "",
        country_id: "",
        state: "",
        city: "",
        postal_code: "",
        street_address: "",
        tax: "",
    });

    // MARK: Use Effect Method
    useEffect(() => {
        if (location.state) {
            setEditBusinessFunction();
        }
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    // MARK: Use Layout Method
    useLayoutEffect(() => {
        document.title = location.state
            ? HeadingName.business.edit
            : HeadingName.business.add
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    // MARK: Validation
    const validateErrors = (data) => {
        const errors = {};

        if (!data.business_name) {
            errors.business_name = ErrorMessages.businessName;
        }
        if (!data.email) {
            errors.email = ErrorMessages.email;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = ErrorMessages.emailPattern;
        }
        if (!data.phone) {
            errors.phone = ErrorMessages.phone;
        } else if (!/^\d*$/.test(data.phone)) {
            errors.phone = ErrorMessages.phoneNumber;
        }
        if (!data.country_id) {
            errors.country_id = ErrorMessages.country;
        }
        if (!data.state) {
            errors.state = ErrorMessages.state;
        }
        if (!data.city) {
            errors.city = ErrorMessages.city;
        }
        if (!data.postal_code) {
            errors.postal_code = ErrorMessages.postalCode;
        }
        if (!data.street_address) {
            errors.street_address = ErrorMessages.address;
        }
        if (!data.tax) {
            errors.tax = ErrorMessages.tax;
        }

        return errors;
    };

    const inputChange = (e) => {
        var { name, value } = e.target;

        setBusinessData({
            ...businessData,
            [name]: value,
        });
    };


    // this function is working when we submit the form by clicking on save button
    const tapOnSave = () => {
        const newErrors = validateErrors(businessData);
        setErrors(newErrors);
        setIsSubmitted(true);
        if (Object.keys(newErrors).length === 0) {
            setLoading1(true);
            if (location.state) {
                updateApi();
            } else {
                createApi();
            }
        }
    };

    // this function is working when we submit the form by clicking on save andnext button
    const tapOnSaveNext = () => {
        const newErrors = validateErrors(businessData);
        setErrors(newErrors);
        setIsSubmitted(true);
        if (Object.keys(newErrors).length === 0) {
            setLoading2(true);
            createApi();
        }
    };

    async function setEditBusinessFunction() {



        setBusinessData((prevState) => ({
            ...prevState,
            business_name: location.state.business_name,
            email: location.state.email,
            phone: location.state.phone,
            state: location.state.state,
            city: location.state.city,
            postal_code: location.state.postal_code,
            street_address: location.state.street_address,
            gstin: location.state.gstin,
            tax: location.state.tax,
        }));

        setBusinessHeading(HeadingName.business.edit);
        setButtonLabel(ButtonLabels.updateLabel);
        setBusinessID(location.state.id);
    }

    function payload() {
        const object = {
            ...businessData,
        };

        object.business_name = businessData.business_name.toLowerCase();
        object.email = businessData.email;
        object.phone = businessData.phone;
        object.state = businessData.state.toLowerCase();
        object.city = businessData.city.toLowerCase();
        object.postal_code = businessData.postal_code.toLowerCase();
        object.street_address = businessData.street_address.toLowerCase();
        object.gstin = businessData.gstin.toLowerCase();
        object.tax = businessData.tax.toLowerCase();

        return object;
    }

    // MARK: API call

    async function createApi() {
        const session = localStorage.getItem("session");
        const writePayload = payload();
        if (session) {
            localStorage.setItem("businessData", JSON.stringify(writePayload));
        }
    }

    async function updateApi() {
        const session = localStorage.getItem("session");
        const updatePayload = payload();
        if (session) {
            localStorage.setItem("businessData", JSON.stringify(updatePayload));
        }
    }

    return (
        <div className="modules__main__div">
            <div className="col-12">
                <div className="card modules__card">
                    <HeadingComponent
                        headingName={businessHeading}
                        classname="mb-3 mt-3"
                    />

                    <HeadingComponent
                        headingName={HeadingName.business.personalInfo}
                        classname="mb-3 mt-3"
                    />
                    <div className="p-fluid row modules__row">
                        <div className="row modules__row">

                            <FormInput type="text"
                                id="business_name"
                                name="business_name"
                                value={businessData.business_name}
                                onChange={inputChange}
                                label={InputHeading.business.name}
                                placeholder={Placeholder.business.name}
                                error={isSubmitted && errors.business_name} optionsLoader={undefined} />

                            <FormInput
                                id="email"
                                name="email"
                                value={businessData.email}
                                onChange={inputChange}
                                label={InputHeading.business.email}
                                placeholder={Placeholder.business.email}
                                error={isSubmitted && errors.email} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="phone"
                                name="phone" maxLength={10}
                                value={businessData.phone}
                                onChange={inputChange}
                                label={InputHeading.business.phone}
                                placeholder={Placeholder.business.phone}
                                error={isSubmitted && errors.phone} optionsLoader={undefined} />

                        </div>
                        <div className="row modules__row">
                            <HeadingComponent
                                headingName={HeadingName.business.addressInfo}
                                classname="mb-3 mt-3"
                            />


                            <FormInput type="text"
                                id="state"
                                name="state"
                                value={businessData.state}
                                onChange={inputChange}
                                label={InputHeading.business.state}
                                placeholder={Placeholder.business.state}
                                error={isSubmitted && errors.state} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="city"
                                name="city"
                                value={businessData.city}
                                onChange={inputChange}
                                label={InputHeading.business.city}
                                placeholder={Placeholder.business.city}
                                error={isSubmitted && errors.city} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="postal_code"
                                name="postal_code"
                                value={businessData.postal_code}
                                onChange={inputChange}
                                label={InputHeading.business.code}
                                placeholder={Placeholder.business.postalCode}
                                error={isSubmitted && errors.postal_code} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="street_address"
                                name="street_address"
                                value={businessData.street_address}
                                onChange={inputChange}
                                label={InputHeading.business.address}
                                placeholder={Placeholder.business.address}
                                error={isSubmitted && errors.street_address} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="tax"
                                name="tax"
                                value={businessData.tax}
                                onChange={inputChange}
                                label={InputHeading.business.tax}
                                placeholder={Placeholder.business.taxId}
                                error={isSubmitted && errors.tax} optionsLoader={undefined} />

                            <FormInput type="text"
                                id="gstin"
                                name="gstin"
                                value={businessData.gstin}
                                onChange={inputChange}
                                label={InputHeading.business.gst_no}
                                placeholder={Placeholder.business.gstNo}
                                error={undefined} optionsLoader={undefined} />
                        </div>

                    </div>

                    <BottomButtons
                        label={buttonLabel}
                        loading1={loading1}
                        save={tapOnSave}
                        saveNext={tapOnSaveNext}
                        loading2={loading2}
                    />
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
}

export default BusinessPage;
