import { FormInstance, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { MemberShip_Res ,MemberShip_Req  , Data } from "../../model/memberShip";
import { memberShipServices } from "../../services/memeberShips";
import { UseQueryClient } from "../../utils/shared/customHook/queryClient";
import { UserContext } from "../../utils/shared/customHook/userContext";
import { userHeaderConfig } from "../../utils/shared/headerConfig";


export const UseQuerygetAllMemberShip = (page: number, search: string) => {
  const config =  userHeaderConfig();

  return useQuery<MemberShip_Res, string>(
    ["getAllMemberShip", page, search],
    () =>
    memberShipServices.getAllMemberShip(page, search, config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQuerygetMemberShipById = (id: number) => {
  const config =  userHeaderConfig();
  return useQuery<Data, string>(
    ["getMemberShipByID", id],
    () =>
    memberShipServices.getMemberShipById(id,config),
    {
      enabled: id !== 0 ? true : false,
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQueryAddMemberShip = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<Data, string, { data: MemberShip_Req; config: any }>(
    "addNewMemberShip",
    memberShipServices.addNewMemberShip,
    {
      onSuccess: (res) => {
        message.success(`${ context.t(`newmembershipaddsuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllMemberShip");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQueryUpdateMemberShip = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<Data, string, { data: MemberShip_Req; id: number; config: any }>(
    "updateMemberShip",
    memberShipServices.updateMemberShip,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`membershipupdatesuccessfully`)}`);
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllMemberShip");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseMutationDeleteMemberShip = () => {

  const query = UseQueryClient();
  const context = UserContext();
  return useMutation<string, string, { id: number; config: any }>(
    "deleteMemberShip",
    memberShipServices.deleteMemberShip,
    {
      onSuccess: (res) => {
        message.success(`${context.t(`membershipisdeletedsuccessfully`)}`);

        query.invalidateQueries("getAllMemberShip");
      },
      onError: (res) => {
        message.error(res);
      },
    }
  );
};

