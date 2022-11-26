import { FormItemProps, message } from "antd";
import { enRegEx } from "../../../../regEx";
import { UserContext } from "../../../customHook/userContext";
export const enDescValidatorFunction = () => {

  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t('thedesc-enisRequired')}`,
    },
    () => ({
      validator(_:any, value:any) {
        let reqex =enRegEx
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t('pleasetheInputmustbeinEnglish')+'');
          return Promise.reject(
            new Error(context.t('TheinputmustbeEnglish')+'')
          );
        } else {
          return Promise.resolve();
        }
      },
    }),
  ]
}

  export const FormItemTextAreaEnConfigFunction =  () => {

    const context =UserContext();
     const FormItemTextAreaEnConfigFunction:FormItemProps<any> = 
    {
      label:`${context.t('DescriptionEn')}`,
      name:"description_en",
      rules:enDescValidatorFunction(),
      labelCol:{span:24},
      className:`${context.lang === 'ar' ? 'lableAr' : ""}`
    }

    return FormItemTextAreaEnConfigFunction;

  }
  