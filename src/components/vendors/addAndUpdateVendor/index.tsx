import { FunctionComponent } from "react";
import {
  Form,
  Input,
  Button,
  Modal,
  Select,

  Switch,
  Row,
  Col,
} from "antd";
import classes from "./index.module.css";
import { Vendor_Req } from "../../../model/vendor";
import { spinerLoading } from "../../../utils/shared/loading";
import { UserContext } from "../../../utils/shared/customHook/userContext";
import {
  FormItemTrncInputConfigFunction,
  FormItemEmailInputConfigFunction,
  FormItemNameInputConfigFunction,
  FormItemPhoneInputConfigFunction,
  FormItemSelectCompanyConfigFunction,
  FormItemSelectCountriesConfigFunction,
  FormItemSelectVendorTypeConfigFunction,
  FormItemSelectVendorTypeProductConfigFunction,
  FormItemApprovedInputConfigFunction,
} from "./localValidation";
import {
  UseQueryAddVendor,
  UseQuerygetVendorById,
  UseQueryUpdateVedor,
} from "../operation";
import { userHeaderConfig } from "../../../utils/shared/headerConfig";
import { selectPropsFunction } from "../../../utils/shared/formProps";
import { UseQuerygetAllCompanyTypeWithoutPationation } from "../../companyTypes/operations";
import { UseQuerygetAllVendorTypeOutPagination } from "../../vendorTypes/opertation";
import { UseQuerygetAllCountriesWithOutPationation } from "../../countries/operations";


interface AddAndUpdateVendorProps {
  showPopupForm: boolean;
  closePoupForm: () => void;
  vendorId: number;
}

const AddAndUpdateVendor: FunctionComponent<AddAndUpdateVendorProps> = (
  props
) => {
  const [form] = Form.useForm();
  const config = userHeaderConfig();
  const context = UserContext();
  const getVendorByID = UseQuerygetVendorById(props.vendorId);

  const addVendor = UseQueryAddVendor(form, props.closePoupForm);
  const updateVendor = UseQueryUpdateVedor(form, props.closePoupForm);

  const getAllCountries = UseQuerygetAllCountriesWithOutPationation();
  const getAllCompanyType = UseQuerygetAllCompanyTypeWithoutPationation();
  const getAllVendorType = UseQuerygetAllVendorTypeOutPagination();

  const { Option } = Select;
  const onFinishHandler = (data: Vendor_Req) => {
     if (data.is_approved ===undefined)data.is_approved=0
     if(data.is_approved)data.is_approved=1
    if (props.vendorId === 0) {
      addVendor.mutateAsync({
        data,
        config,
      });
    } else {
      data._method = "PUT";
      updateVendor.mutateAsync({
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
      title={`${
        props.vendorId === 0 ? context.t("ADDNEW") : context.t("UPDATE")
      }   ${context.t("VENDORS")}`}
      centered
      width={700}
      className={`${context.lang === "ar" && "arFont"}`}
    >
      {getVendorByID &&
        getVendorByID.isLoading &&
        props.vendorId !== 0 &&
        spinerLoading}
      {((getVendorByID && !getVendorByID.isLoading) ||
        props.vendorId === 0) && (
        <Form
          onFinish={onFinishHandler}
          form={form}
          initialValues={props.vendorId !== 0 ? getVendorByID.data : {}}
        >
          <Form.Item {...FormItemNameInputConfigFunction()}>
            <Input className={`${context.lang === "ar" && "inputAr"}`}></Input>
          </Form.Item>
          <Form.Item {...FormItemEmailInputConfigFunction()}>
            <Input
              type="email"
              className={`${context.lang === "ar" && "inputAr"}`}
            ></Input>
          </Form.Item>
          <Form.Item {...FormItemPhoneInputConfigFunction()}>
            <Input className={`${context.lang === "ar" && "inputAr"}`}></Input>
          </Form.Item>

          <Form.Item {...FormItemSelectCompanyConfigFunction()}>
            <Select
              {...selectPropsFunction()}
              dropdownStyle={
                context.lang === "ar"
                  ? { textAlign: "right", fontFamily: "Cairo" }
                  : {}
              }
            >
              {getAllCompanyType?.data?.data?.map((ele) => {
                return (
                  <Option value={ele.id} key={ele.id}>
                    {ele.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item {...FormItemSelectVendorTypeConfigFunction()}>
            <Select {...selectPropsFunction()}>
              {getAllVendorType?.data?.data?.map((ele) => {
                return (
                  <Option value={ele.id} key={ele.id}>
                    {ele.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item {...FormItemSelectVendorTypeProductConfigFunction()}>
            <Select {...selectPropsFunction()}>
              {getAllVendorType?.data?.data?.map((ele) => {
                return (
                  <Option value={ele.id} key={ele.id}>
                    {ele.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item {...FormItemSelectCountriesConfigFunction()}>
            <Select {...selectPropsFunction()}>
              {getAllCountries?.data?.data?.map((ele) => {
                return (
                  <Option value={ele.id} key={ele.id}>
                    {ele.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Row justify="space-between">
           
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item {...FormItemTrncInputConfigFunction()}>
                <Input
                  className={`${context.lang === "ar" && "inputAr"}`}
                ></Input>
              </Form.Item>
            </Col>
             <Col xs={24} sm={24} md={24} lg={24}>
              <div  className={`${context.lang === "ar" && "SwitchAr"}`} >
                <Form.Item {...FormItemApprovedInputConfigFunction()}>
                  <Switch
                    checkedChildren={`${context.t(`Approved`)}`}
                    unCheckedChildren={`${context.t(`NOTApproved`)}`}
                    defaultChecked={getVendorByID.data?.is_approved ===1 ? true : false}
                  />
                </Form.Item>
              </div>
            </Col>
          </Row>

          <Form.Item>
            <div className={classes.submitBtn}>
              <Button
                htmlType="submit"
                loading={addVendor.isLoading || updateVendor.isLoading}
                className={`${classes.addBtn} ${
                  context.lang === "ar" && "arFont"
                }`}
              >
                {`${
                  props.vendorId === 0
                    ? context.t("ADDNEW")
                    : context.t("UPDATE")
                }   ${context.t("VENDORS")}`}
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddAndUpdateVendor;
