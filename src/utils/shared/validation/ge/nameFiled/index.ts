import { FormItemProps, message } from "antd";
import { enRegEx } from "../../../../../utils/regEx/";
import { UserContext } from "../../../customHook/userContext";

export const GeNameValidatorFunction = () => {
  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t('thename-geisRequired')}`,
    },
    () => ({
      validator(_: any, value: any) {
        let reqex = enRegEx;
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t("TheinputmustbeGermany")+"");
          return Promise.reject(new Error(context.t("TheinputmustbeGermany") + ""));
        } else {
          return Promise.resolve();
        }
      },
    }),
  ];
};

export const FormItemInputGeConfigFunction = () => {
 
  const context =UserContext();
  
  const FormItemInputGeConfig: FormItemProps<any> = {
    label: `${context.t('NameGE')}`,
    name: "name_ge",
    rules: GeNameValidatorFunction(),
    labelCol: { span: 24 },
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };

  return FormItemInputGeConfig;
};
