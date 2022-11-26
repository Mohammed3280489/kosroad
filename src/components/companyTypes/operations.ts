import { FormInstance, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { Data, Type_Req } from "../../model/companyType";
import { Type_Res } from "../../model/vendorType";
import { companyTypeServices } from "../../services/companyTypes";
import { UseQueryClient } from "../../utils/shared/customHook/queryClient";
import { UserContext } from "../../utils/shared/customHook/userContext";
import {userHeaderConfig} from '../../utils/shared/headerConfig'

export const UseQuerygetAllCompanyType = (page: number, search: string) => {
  const config  = userHeaderConfig()
  return useQuery<Type_Res, string>(
    ["getAllCompanyType", page, search],
    () =>
      companyTypeServices.getAllType(page, search, config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQuerygetAllCompanyTypeWithoutPationation = () => {
  const config  = userHeaderConfig()
  return useQuery<Type_Res, string>(
    ["getAllCompanyTypeWithoutPationation"],
    () =>
      companyTypeServices.getAllTypeWithOutPationation(config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQuerygetCompanyTypeById = (id: number) => {
  const config  = userHeaderConfig()
  return useQuery<Data, string>(
    ["getCompanyTypeByID", id],
    () =>
      companyTypeServices.getTypeById(id, config),
    {
      enabled: id !== 0 ? true : false,
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQueryAddCompanyType = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<Data, string, { data: Type_Req; config: any }>(
    "addNewCompanyType",
    companyTypeServices.addNewType,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`Newcompanytypeaddsuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllCompanyType");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQueryUpdateCompanyType = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<Data, string, { data: Type_Req; id: number; config: any }>(
    "updateCompanyType",
    companyTypeServices.updateType,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`companytypeupdatesuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllCompanyType");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseMutationDeleteCompanyType = () => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<string, string, { id: number; config: any }>(
    "deleteCompanyType",
    companyTypeServices.deleteType,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`companytypeisdeletedsuccessfully`)}`);

        query.invalidateQueries("getAllCompanyType");
      },
      onError: (res) => {
        message.error(res);
      },
    }
  );
};
