import { FunctionComponent, useContext } from "react";
import { Form, Input, Button, Modal } from "antd";
import classes from "./index.module.css";
import { Type_Req } from "../../../model/vendorType";
import { spinerLoading } from "../../../utils/shared/loading";
import {
  UseQueryAddVendorType,
  UseQueryUpdateVedorType,
  UseQuerygetVendorTypeById,
} from "../opertation";

import { FormItemInputArConfigFunction } from "../../../utils/shared/validation/ar/nameFiled";
import { FormItemInputEnConfigFunction } from "../../../utils/shared/validation/en/nameField";
import { FormItemInputGeConfigFunction } from "../../../utils/shared/validation/ge/nameFiled";
import { userHeaderConfig } from "../../../utils/shared/headerConfig";
import { useTranslation } from "react-i18next";
import { userContext } from "../../general/contextProvider";

interface AddAndUpdateVendorTypeProps {
  showPopupForm: boolean;
  closePoupForm: () => void;
  vendorId: number;
}

const AddAndUpdateVendorType: FunctionComponent<AddAndUpdateVendorTypeProps> = (
  props
) => {
  const [form] = Form.useForm();
  const config = userHeaderConfig();

  const getVendorTypeByID = UseQuerygetVendorTypeById(props.vendorId);
  const addVendorType = UseQueryAddVendorType(form, props.closePoupForm);
  const updateVendorType = UseQueryUpdateVedorType(form, props.closePoupForm);
  const UserContext = useContext(userContext);

  const {t} = useTranslation();

  const onFinishHandler = (data: Type_Req) => {
    if (props.vendorId === 0) {
      addVendorType.mutateAsync({
        data,
        config,
      });
    } else {
      data._method = "PUT";
      updateVendorType.mutateAsync({
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
      title={`${props.vendorId === 0 ? t('ADDNEW') : t('UPDATE')}   ${t('TYPE')}`}
      centered
      width={700}
      className={`${UserContext.lang === "ar" && "arFont"}`}
    >
      {getVendorTypeByID &&
        getVendorTypeByID.isLoading &&
        props.vendorId !== 0 &&
        spinerLoading}
      {((getVendorTypeByID && !getVendorTypeByID.isLoading) ||
        props.vendorId === 0) && (
        <Form
          onFinish={onFinishHandler}
          form={form}
          initialValues={props.vendorId !== 0 ? getVendorTypeByID.data : {}}
        >
          <Form.Item {...FormItemInputEnConfigFunction()}>
            <Input></Input>
          </Form.Item>
          <Form.Item {...FormItemInputGeConfigFunction()}>
            <Input></Input>
          </Form.Item>
          <Form.Item {...FormItemInputArConfigFunction()}>
            <Input></Input>
          </Form.Item>
          <Form.Item>
            <div className={classes.submitBtn}>
              <Button
                htmlType="submit"
                loading={addVendorType.isLoading || updateVendorType.isLoading}
                className={`${classes.addBtn} ${UserContext.lang==='ar' && 'arFont'}`}
              >
                {props.vendorId === 0 ?  t('ADDNEW') : t('UPDATE')} {t('TYPE')} 
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddAndUpdateVendorType;
