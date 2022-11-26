import { FormItemProps, message } from "antd";
import { arRegEx } from "../../../../../utils/regEx";
import { UserContext } from "../../../customHook/userContext";



export const arNameValidatorFunction = () => {
  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t('thename-arisRequired')}`,
    },
    () => ({
      validator(_: any, value: any) {
        let reqex = arRegEx;
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t("pleasetheInputmustbeinArabic")+'');
          return Promise.reject(new Error(context.t('TheinputmustbeArabic')+''));
        } else {
          return Promise.resolve();
        }
      },
    }),
  ];
};

export const FormItemInputArConfigFunction = () => {

  const context =UserContext();
  const FormItemInputArConfig: FormItemProps<any> = {
    label: `${context.t("NameAr")}`,
    name: "name_ar",
    rules: arNameValidatorFunction(),
    labelCol: { span: 24 },
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };

  return FormItemInputArConfig;
};
