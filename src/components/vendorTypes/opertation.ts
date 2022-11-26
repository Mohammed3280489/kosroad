import { FormInstance, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { Type_Req,DataVendor, Type_Res } from "../../model/vendorType";
import { vendorTypeServices } from "../../services/vendorTypes";
import { UseQueryClient } from "../../utils/shared/customHook/queryClient";
import { userHeaderConfig } from "../../utils/shared/headerConfig";
import {UserContext} from '../../utils/shared/customHook/userContext'


export const UseQuerygetAllVendorType = (page: number, search: string) => {
  const config =  userHeaderConfig();

  return useQuery<Type_Res, string>(
    ["getAllVendorType", page, search],
    () =>
    vendorTypeServices.getAllType(page, search, config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQuerygetAllVendorTypeOutPagination = () => {
  const config =  userHeaderConfig();

  return useQuery<Type_Res, string>(
    ["getAllVendorTypeWithoutPatination"],
    () =>
    vendorTypeServices.getAllTypeWithOutPationation(config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQuerygetVendorTypeById = (id: number) => {
  const config =  userHeaderConfig();
  return useQuery<DataVendor, string>(
    ["getVendorTypeByID", id],
    () =>
    vendorTypeServices.getTypeById(id,config),
    {
      enabled: id !== 0 ? true : false,
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQueryAddVendorType = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<DataVendor, string, { data: Type_Req; config: any }>(
    "addNewVendorType",
    vendorTypeServices.addNewType,
    {
      onSuccess: (res) => {
        message.success(`${context.t('Newvendortypeaddsuccessfully')}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllVendorType");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQueryUpdateVedorType = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<DataVendor, string, { data: Type_Req; id: number; config: any }>(
    "updateVendorType",
    vendorTypeServices.updateType,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`vendortypeupdatesuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllVendorType");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseMutationDeleteVendorType = () => {

  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<string, string, { id: number; config: any }>(
    "deleteVendorType",
    vendorTypeServices.deleteType,
    {
      onSuccess: (res) => {
        message.success(`${ context.t(`vendortypeisdeletedsuccessfully`)}`);

        query.invalidateQueries("getAllVendorType");
      },
      onError: (res) => {
        message.error(res);
      },
    }
  );
};

