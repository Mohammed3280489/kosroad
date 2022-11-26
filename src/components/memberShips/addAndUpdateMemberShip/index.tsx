import { FunctionComponent, useContext } from "react";
import { Form, Input, Button, Modal } from "antd";
import classes from "./index.module.css";
import { MemberShip_Req } from "../../../model/memberShip";
import { spinerLoading } from "../../../utils/shared/loading";
import {
  UseQueryAddMemberShip,
  UseQueryUpdateMemberShip,
  UseQuerygetMemberShipById,
} from "../operation";
import { FormItemInputArConfigFunction } from "../../../utils/shared/validation/ar/nameFiled";
import { FormItemInputEnConfigFunction } from "../../../utils/shared/validation/en/nameField";
import { FormItemInputGeConfigFunction } from "../../../utils/shared/validation/ge/nameFiled";
import { FormItemTextAreaArConfigFunction } from "../../../utils/shared/validation/ar/descField";
import { FormItemTextAreaEnConfigFunction } from "../../../utils/shared/validation/en/descField";
import { FormItemTextAreaGeConfigFunction } from "../../../utils/shared/validation/ge/descField";
import { FormItemPriceConfigFunction } from "../../../utils/shared/validation/price";
import { userHeaderConfig } from "../../../utils/shared/headerConfig";
import {FormItemActivePeriodConfigFunction } from './localValidation'
import { useTranslation } from "react-i18next";
import { userContext } from "../../general/contextProvider";
interface addAndUpdateMemberShipProps {
  showPopupForm: boolean;
  closePoupForm: () => void;
  memberShipId: number;
}

const AddAndUpdateMemberShip: FunctionComponent<addAndUpdateMemberShipProps> = (
  props
) => {
  const [form] = Form.useForm();
  const config = userHeaderConfig();
  const { TextArea } = Input;

  const getMemberShipByID = UseQuerygetMemberShipById(props.memberShipId);
  const addMemberShip = UseQueryAddMemberShip(form, props.closePoupForm);
  const updateMemberShip = UseQueryUpdateMemberShip(form, props.closePoupForm);
  const UserContext = useContext(userContext);
  const {t} = useTranslation();

  const onFinishHandler = (data: MemberShip_Req) => {
    if (props.memberShipId === 0) {
      addMemberShip.mutateAsync({
        data,
        config,
      });
    } else {
      data._method = "PUT";
      updateMemberShip.mutateAsync({
        data,
        id: props.memberShipId,
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
      title={`${props.memberShipId === 0 ? t('ADDNEW') : t('UPDATE') } ${t('MemberShip')}`}
      centered
      width={700}
      className={`${UserContext.lang === "ar" && 'arFont'}`} 
    >
      {getMemberShipByID &&
        getMemberShipByID.isLoading &&
        props.memberShipId !== 0 &&
        spinerLoading}
      {((getMemberShipByID && !getMemberShipByID.isLoading) ||
        props.memberShipId === 0) && (
        <Form
          onFinish={onFinishHandler}
          form={form}
          initialValues={props.memberShipId !== 0 ? getMemberShipByID.data : {}}
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
          <Form.Item {...FormItemTextAreaEnConfigFunction()}>
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item {...FormItemTextAreaGeConfigFunction()}>
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item {...FormItemTextAreaArConfigFunction()}>
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item {...FormItemPriceConfigFunction()}>
            <Input type="number"></Input>
          </Form.Item>
          <Form.Item {...FormItemActivePeriodConfigFunction()}>
            <Input ></Input>
          </Form.Item>
         

          <Form.Item>
            <div className={classes.submitBtn}>
              <Button
                htmlType="submit"
                loading={addMemberShip.isLoading || updateMemberShip.isLoading}
                className={`${classes.addBtn} ${UserContext.lang==='ar' && 'arFont'}`}
              >
               {`${props.memberShipId === 0 ? t('ADDNEW') : t('UPDATE') } ${t('MemberShip')}`}
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddAndUpdateMemberShip;
