import { ErrorMessages } from "../../components";

export const validateBusiness = (data) => {
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
    if (!data.gstin) {
        errors.gstin = ErrorMessages.gstNumber;
    }
    if (!data.tax) {
        errors.tax = ErrorMessages.tax;
    }

    return errors;
};

export const validateLogin = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = ErrorMessages.email;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = ErrorMessages.emailPattern;
    }
    if (!data.password) {
      errors.password = ErrorMessages.password;
    }

    return errors;
  };