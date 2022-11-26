import { FormItemProps, message } from "antd";
import { enRegEx } from "../../../../../utils/regEx/";
import {UserContext} from '../../../customHook/userContext';

export const enNameValidatorFunction = () => {
  const context =UserContext();

  return [
    {
      required: true,
      message: `${context.t('thename-enisRequired')}`,
    },
    () => ({
      validator(_: any, value: any) {
        let reqex = enRegEx;
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t("pleasetheInputmustbeinEnglish")+"");
          return Promise.reject(new Error(context.t("TheinputmustbeEnglish") + ""));
        } else {
          return Promise.resolve();
        }
      },
    }),
  ];
};

export const FormItemInputEnConfigFunction = () => {
  const context =UserContext();

  const FormItemInputEnConfig: FormItemProps<any> = {
    label: `${context.t("NameEn")}`,
    name: "name_en",
    rules: enNameValidatorFunction(),
    labelCol: { span: 24 },
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
    
  };

  return FormItemInputEnConfig;
};
