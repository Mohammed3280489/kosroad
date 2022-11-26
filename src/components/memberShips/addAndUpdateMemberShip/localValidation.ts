import { FormItemProps } from "antd";
import {UserContext} from '../../../utils/shared/customHook/userContext';
export const ActivePeriodValidatorFunction = () => {

  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`theActivePeriodisRequired`)}`,
    },
  ];
};

export const FormItemActivePeriodConfigFunction = () => {
  const context = UserContext();

  const FormItemActivePeriodConfig: FormItemProps<any> = {
    label: `${context.t(`ActivePeriod`)}`,
    name: "active_period",
    rules: ActivePeriodValidatorFunction(),
    labelCol: { span: 24 },
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };

  return FormItemActivePeriodConfig;
};


export const TypeValidatorFunction = ()=> {
  const context = UserContext();
  return [
  {
    required: true,
    message: `${context.t(`theTypeisRequired`)}`,
  },
];
}
export const FormItemTypeConfigFunction = ()=> {
  const context = UserContext();
  const FormItemTypeConfig: FormItemProps<any> = {
    label: `${context.t('TYPE')}`,
    name: "type",
    rules: TypeValidatorFunction(),
    labelCol: { span: 24 },
    
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };
  return   FormItemTypeConfig;
};

export const ValueValidatorFunction = ()=> {
  const context = UserContext();
  return [
  {
    required: true,
    message: `${context.t(`theValueisRequired`)}`,
  },
];
}

export const FormItemValueConfigFunction =  ()=> {
  const context = UserContext();
  const ValueValidator : FormItemProps<any> = {
    label: `${context.t('VALUE')}`,
    name: "value",
    rules: ValueValidatorFunction(),
    labelCol: { span: 24 },
    
    className:`${context.lang === 'ar' ? 'lableAr' : ""}`
  };

  return ValueValidator ;
}
