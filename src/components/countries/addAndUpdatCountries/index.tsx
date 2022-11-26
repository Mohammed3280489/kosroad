import { FunctionComponent, useContext } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import classes from "./index.module.css";
import { Countries_Req } from "../../../model/countries";
import { spinerLoading } from "../../../utils/shared/loading";
import {
  FormItemNameInputConfigFunction,
  FormItemSelectSlugConfigFunction,
} from "./localValidation";
import { userHeaderConfig } from "../../../utils/shared/headerConfig";
import { selectPropsFunction } from "../../../utils/shared/formProps";

import {
  UseQueryAddCountries,
  UseQueryUpdateCountries,
  UseQuerygetCountriesById,
  UseQuerygetAllCountriesSlug,
} from "../operations";
import { useTranslation } from "react-i18next";
import { userContext } from "../../general/contextProvider";

interface AddAndUpdateCountriesProps {
  showPopupForm: boolean;
  closePoupForm: () => void;
  vendorId: number;
}

const AddAndUpdateCountries: FunctionComponent<AddAndUpdateCountriesProps> = (
  props
) => {
  const [form] = Form.useForm();
  const config = userHeaderConfig();
  const getCountriesByID = UseQuerygetCountriesById(props.vendorId);
  const addCountry = UseQueryAddCountries(form, props.closePoupForm);
  const updateCountry = UseQueryUpdateCountries(form, props.closePoupForm);
  const getAllCountriesSluge = UseQuerygetAllCountriesSlug();
  const UserContext = useContext(userContext);
  const { t } = useTranslation();
  const { Option } = Select;
  
  const onFinishHandler = (data: Countries_Req) => {
    if (props.vendorId === 0) {
      addCountry.mutateAsync({
        data,
        config,
      });
    } else {
      data._method = "PUT";
      updateCountry.mutateAsync({
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
        "COUNTRY"
      )}`}
      centered
      width={700}
      className={`${UserContext.lang === "ar" && "arFont"}`}
    >
      {getCountriesByID &&
        getCountriesByID.isLoading &&
        props.vendorId !== 0 &&
        spinerLoading}
      {((getCountriesByID && !getCountriesByID.isLoading) ||
        props.vendorId === 0) && (
        <Form
          onFinish={onFinishHandler}
          form={form}
          initialValues={props.vendorId !== 0 ? getCountriesByID.data : {}}
        >
          <Form.Item {...FormItemNameInputConfigFunction()}>
            <Input  className={`${UserContext.lang === "ar" && "inputAr"}`}></Input>
          </Form.Item>
          <Form.Item {...FormItemSelectSlugConfigFunction()}>
            <Select {...selectPropsFunction()}>
              {getAllCountriesSluge.data?.map((ele) => {
                return (
                  <Option value={ele.country} key={ele.country}>
                    {ele.country}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <div className={classes.submitBtn}>
              <Button
                htmlType="submit"
                loading={addCountry.isLoading || updateCountry.isLoading}
                className={classes.addBtn}
              >
                {`${props.vendorId === 0 ? t("ADDNEW") : t("UPDATE")}   ${t(
                  "COUNTRY"
                )}`}
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddAndUpdateCountries;
