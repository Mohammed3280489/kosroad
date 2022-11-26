import { FormItemProps, message } from "antd";
import { arRegEx } from "../../../../regEx";
import { UserContext } from "../../../customHook/userContext";

export const arDescValidatorFunction = () => {

  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t('thedesc-arisRequired ')}`,
    },
    () => ({
      validator(_: any, value: any) {
        let reqex = arRegEx;
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t(`pleasetheInputmustbeinArabic`)+'');
          return Promise.reject(new Error(context.t('TheinputmustbeArabic')+''));
        } else {
          return Promise.resolve();
        }
      },
    }),
  ];
};

export const FormItemTextAreaArConfigFunction = () => {
  const context =UserContext();
  const FormItemTextAreaArConfig: FormItemProps<any> = {
    label: `${context.t('DescriptionAr')}`,
    name: "description_ar",
    rules: arDescValidatorFunction(),
    labelCol: { span: 24 },
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };

  return FormItemTextAreaArConfig
};
