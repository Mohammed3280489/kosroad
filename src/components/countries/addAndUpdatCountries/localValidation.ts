import { FormItemProps } from "antd";
import { UserContext } from "../../../utils/shared/customHook/userContext";

export const NameValidatorFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t("thecountrynameisRequired")}`,
    },
  ];
};

export const FormItemNameInputConfigFunction = () => {
  const context = UserContext();

  const FormItemNameInputConfig: FormItemProps<any> = {
    label: `${context.t("NAME")}`,
    name: "name",
    rules: NameValidatorFunction(),
    labelCol: { span: 24 },
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };
  return FormItemNameInputConfig;
};

export const SlugValidatorFunction = () => {
  const context = UserContext();
  return [
    {
      required: true,
      message: `${context.t(`theslugisRequired`)}`,
    },
  ];
};

export const FormItemSelectSlugConfigFunction = () => {
  const context = UserContext();
  const FormItemSelectConfig: FormItemProps<any> = {
    label: `${context.t('SLUG')}`,
    name: "slug",
    labelCol: { span: 24 },
    rules: SlugValidatorFunction(),
    className: `${context.lang === "ar" ? "lableAr" : ""}`,
  };
  return FormItemSelectConfig;
};
