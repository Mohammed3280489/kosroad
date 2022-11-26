import { FormItemProps } from "antd";
import { UserContext } from "../../../utils/shared/customHook/userContext";




export const NameValidatorFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t("thefullNameisRequired")}`,
    },
  ];
};


export const FormItemNameInputConfigFunction = () => {
  const context = UserContext();

  const FormItemNameInputConfig: FormItemProps<any> = {
    label: `${context.t("FULLNAME")}`,
    name: "full_name",
    rules: NameValidatorFunction(),
    labelCol: { span: 24 },
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };
  return FormItemNameInputConfig;
};





export const phoneValidatorFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t("thephoneisRequired")}`,
    },
  ];
};

export const FormItemPhoneInputConfigFunction = () => {
  const context = UserContext();

  const FormItemPhoneInputConfig: FormItemProps<any> = {
    label: `${context.t("PHONE")}`,
    name: "phone",
    rules: phoneValidatorFunction(),
    labelCol: { span: 24 },
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };
  return FormItemPhoneInputConfig;
};


export const emailValidatorFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t("theemailisRequired")}`,
    },
  ];
};

export const FormItemEmailInputConfigFunction = () => {
  const context = UserContext();

  const FormItemEmailInputConfig: FormItemProps<any> = {
    label: `${context.t("EMAIL")}`,
    name: "email",
    rules: emailValidatorFunction(),
    labelCol: { span: 24 },
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };
  return FormItemEmailInputConfig;
};






export const CountriesTypeValidationFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`thecountryisRequired`)}`,
    },
  ];
};

export const FormItemSelectCountriesConfigFunction = () => {
  const context = UserContext();
  const FormItemSelectConfig: FormItemProps<any> = {
    label: `${context.t(`COUNTRY`)}`,
    name: "country_id",
    labelCol: { span: 24 },
    rules: CountriesTypeValidationFunction(),
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };

  return FormItemSelectConfig;
};




export const CompanyTypeValidationFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`thecompanytypeisRequired`)}`,
    },
  ];
};

export const FormItemSelectCompanyConfigFunction = () => {
  const context = UserContext();
  const FormItemSelectConfig: FormItemProps<any> = {
    label: `${context.t(`COMPANYTYPE`)}`,
    name: "company_type",
    labelCol: { span: 24 },
    rules: CompanyTypeValidationFunction(),
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };

  return FormItemSelectConfig;
};





export const VendorTypeValidationFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`thevenodrtypeisRequired`)}`,
    },
  ];
};
export const FormItemSelectVendorTypeConfigFunction = () => {
  const context = UserContext();
  const FormItemSelectConfig: FormItemProps<any> = {
    label: `${context.t(`VENDOR`)}`,
    name: "vendor_type",
    labelCol: { span: 24 },
    rules: CompanyTypeValidationFunction(),
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };

  return FormItemSelectConfig;
};



export const VendorTypeProductValidationFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`thevenodrtypeproductisRequired`)}`,
    },
  ];
};
export const FormItemSelectVendorTypeProductConfigFunction = () => {
  const context = UserContext();
  const FormItemSelectConfig: FormItemProps<any> = {
    label: `${context.t("VENDORPRODUCT")}`,
    name: "vendor_product_type",
    labelCol: { span: 24 },
    rules: VendorTypeProductValidationFunction(),
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };

  return FormItemSelectConfig;
};




export const trncValidatorFunction = () => {
    const context = UserContext();
    return [
      {
        required: true,
        message: `${context.t("theTRNCisRequired")}`,
      },
    ];
  };
  
  
  export const FormItemTrncInputConfigFunction = () => {
    const context = UserContext();
  
    const FormItemNameInputConfig: FormItemProps<any> = {
      label: `${context.t("TRNC")}`,
      name: "trnc",
      rules: trncValidatorFunction(),
      labelCol: { span: 24 },
      className: `${context.lang === "ar"? "lableAr" : ""}`,
    };
    return FormItemNameInputConfig;
  };
  

  export const FormItemApprovedInputConfigFunction = () => {
    const context = UserContext();
  
    const FormItemNameInputConfig: FormItemProps<any> = {
     
      name: "is_approved",
      labelCol: { span: 24 },
      className: `${context.lang === "ar" ? "lableAr" : ""}`,
    };
    return FormItemNameInputConfig;
  };