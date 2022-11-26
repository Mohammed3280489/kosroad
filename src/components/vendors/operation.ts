import { FormInstance, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { Data, Vendor_Req, Vendor_Res } from "../../model/vendor";
import { vendorServices } from "../../services/vendors";
import { UseQueryClient } from "../../utils/shared/customHook/queryClient";
import { UserContext } from "../../utils/shared/customHook/userContext";
import { userHeaderConfig } from "../../utils/shared/headerConfig";

export const UseQuerygetAllVendor = (page: number, search: string) => {
  const config = userHeaderConfig();

  return useQuery<Vendor_Res, string>(
    ["getAllVendor", page, search],
    () => vendorServices.getAllVendor(page, search, config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQuerygetVendorById = (id: number) => {
  const config = userHeaderConfig();
  return useQuery<Data, string>(
    ["getVendorByID", id],
    () => vendorServices.getVendorById(id, config),
    {
      enabled: id !== 0 ? true : false,
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQueryAddVendor = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<Data, string, { data: Vendor_Req; config: any }>(
    "addNewVendor",
    vendorServices.addNewVendor,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`Newvendoraddsuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllVendor");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQueryUpdateVedor = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();

  return useMutation<
    Data,
    string,
    { data: Vendor_Req; id: number; config: any }
  >("updateVendor", vendorServices.updateVendor, {
    onSuccess: (res) => {
      message.success(`${context.t(`vendorupdatesuccessfully`)}`);
      form.resetFields();
      closePoupForm();
      query.invalidateQueries("getAllVendor");
    },
    onError: (res) => {
      message.error(res + "");
    },
  });
};


export const UseMutationDeleteVendor = () => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<string, string, { id: number; config: any }>(
    "deleteVendor",
    vendorServices.deleteVendor,
    {
      onSuccess: (res) => {
        message.success(` ${context.t(`vendorisdeletedsuccessfully`)}`);

        query.invalidateQueries("getAllVendor");
      },
      onError: (res) => {
        message.error(res);
      },
    }
  );
};
