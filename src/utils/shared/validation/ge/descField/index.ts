import { FormItemProps, message } from "antd";
import { enRegEx } from "../../../../regEx";
import { UserContext } from "../../../customHook/userContext";

export const geDescValidatorFunction = () => {
  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t('thedesc-GeisRequired')}`,
    },
    () => ({
      validator(_:any, value:any) {
        let reqex =enRegEx
        if (!reqex.test(value)) {
          message.destroy();
          message.warning(context.t('pleasetheInputmustbeinGermany')+"");
          return Promise.reject(
            new Error(context.t('TheinputmustbeGermany')+'')
          );
        } else {
          return Promise.resolve();
        }
      },
    }),
  ]
}

  export const FormItemTextAreaGeConfigFunction =  () => {

    const context =UserContext();
     const FormItemTextAreaGeConfigFunction:FormItemProps<any> = 
    {
      label:`${context.t('DescriptionGe')}`,
      name:"description_ge",
      rules:geDescValidatorFunction(),
      labelCol:{span:24},
      className:`${context.lang === 'ar' ? 'lableAr' : ""}`
    }

    return FormItemTextAreaGeConfigFunction;

  }
  