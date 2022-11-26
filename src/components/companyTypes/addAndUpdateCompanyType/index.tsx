import { FunctionComponent, useContext } from "react";
import { Form, Input, Button, Modal } from "antd";
import classes from "./index.module.css";
import { Type_Req } from "../../../model/companyType";
import { spinerLoading } from "../../../utils/shared/loading";
import { useTranslation } from "react-i18next";
import { FormItemInputArConfigFunction } from "../../../utils/shared/validation/ar/nameFiled";
import { FormItemInputEnConfigFunction } from "../../../utils/shared/validation/en/nameField";
import { FormItemInputGeConfigFunction } from "../../../utils/shared/validation/ge/nameFiled";
import { userHeaderConfig } from "../../../utils/shared/headerConfig";

import {
  UseQuerygetCompanyTypeById,
  UseQueryAddCompanyType,
  UseQueryUpdateCompanyType,
} from "../operations";
import { userContext } from "../../general/contextProvider";

interface AddAndUpdateCompanyTypeProps {
  showPopupForm: boolean;
  closePoupForm: () => void;
  vendorId: number;
}

const AddAndUpdateCompanyType: FunctionComponent<
  AddAndUpdateCompanyTypeProps
> = (props) => {
  const [form] = Form.useForm();
  const config = userHeaderConfig();
  const { t } = useTranslation();
  const UserContext = useContext(userContext);
  const getCompanyTypeByID = UseQuerygetCompanyTypeById(props.vendorId);
  const addCompanyType = UseQueryAddCompanyType(form, props.closePoupForm);

  const updateCompanyType = UseQueryUpdateCompanyType(
    form,
    props.closePoupForm
  );

  const onFinishHandler = (data: Type_Req) => {
    if (props.vendorId === 0) {
      addCompanyType.mutateAsync({
        data,
        config,
      });
    } else {
      data._method = "PUT";
      updateCompanyType.mutateAsync({
        data,
        id: props.vendorId,
        config,
      });
    }
  };

  return (
    <Modal
      visible={props.showPopupForm}
      onOk={() => {
        props.closePoupForm();
        form.resetFields();
      }}
      onCancel={() => {
        props.closePoupForm();
        form.resetFields();
      }}
      title={`${props.vendorId === 0 ? t("ADDNEW") : t("UPDATE")}   ${t(
        "TYPE"
      )}`}
      centered
      width={700}
      className={`${UserContext.lang === "ar" && "arFont"}`}
    >
      {getCompanyTypeByID &&
        getCompanyTypeByID.isLoading &&
        props.vendorId !== 0 &&
        spinerLoading}
      {((getCompanyTypeByID && !getCompanyTypeByID.isLoading) ||
        props.vendorId === 0) && (
        <Form
          onFinish={onFinishHandler}
          form={form}
          initialValues={props.vendorId !== 0 ? getCompanyTypeByID.data : {}}
        >
          <Form.Item {...FormItemInputEnConfigFunction()}>
            <Input
              className={`${UserContext.lang === "ar" && "inputAr"}`}
            ></Input>
          </Form.Item>
          <Form.Item {...FormItemInputGeConfigFunction()}>
            <Input
              className={`${UserContext.lang === "ar" && "inputAr"}`}
            ></Input>
          </Form.Item>
          <Form.Item {...FormItemInputArConfigFunction()}>
            <Input
              className={`${UserContext.lang === "ar" && "inputAr"}`}
            ></Input>
          </Form.Item>
          <Form.Item>
            <div className={classes.submitBtn}>
              <Button
                htmlType="submit"
                loading={
                  addCompanyType.isLoading || updateCompanyType.isLoading
                }
                className={`${classes.addBtn} ${
                  UserContext.lang === "ar" && "arFont"
                }`}
              >
                {props.vendorId === 0 ? t("ADDNEW") : t("UPDATE")} {t("TYPE")}
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddAndUpdateCompanyType;
