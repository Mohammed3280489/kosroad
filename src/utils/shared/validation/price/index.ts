import { FormItemProps } from "antd";
import { UserContext } from "../../customHook/userContext";


export const PriceValidatorFunction = ()=> {
  const context =UserContext();
  return [
    {
      required: true,
      message: `${context.t(`thepriceisRequired`) }`
    },
    () => ({
      validator(_:any, value:any) {
        
        if (value <0) {
          return Promise.reject(
            new Error("The price must be > 0")
          );
        } else {
          return Promise.resolve();
        }
      },
    }),
  ]
}

export const FormItemPriceConfigFunction = () => {
  const context =UserContext();
  const FormItemPriceConfig:FormItemProps<any>  = {
    label:`${context.t('PRICE')}`,
    name:"price",
    labelCol:{ span: 24 },
    rules:PriceValidatorFunction(),
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
} 
return FormItemPriceConfig
}