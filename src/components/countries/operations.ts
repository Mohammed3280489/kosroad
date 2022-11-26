import { FormInstance, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { Countries_Res  , Countries_Req , Data} from "../../model/countries";
import {Slug_Data} from '../../model/countrySlugs'
import { countriesServices } from "../../services/countries";
import { UseQueryClient } from "../../utils/shared/customHook/queryClient";
import {userHeaderConfig} from '../../utils/shared/headerConfig'

export const UseQuerygetAllCountries = (page: number, search: string) => {
  const config  = userHeaderConfig()
  return useQuery<Countries_Res, string>(
    ["getAllCountries", page, search],
    () =>
    countriesServices.getAllCountries(page, search, config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};
export const UseQuerygetAllCountriesWithOutPationation = () => {
  const config  = userHeaderConfig()
  return useQuery<Countries_Res, string>(
    ["getAllCountriesWithOutPationation"],
    () =>
    countriesServices.getAllCountriesWithOutPationation(config),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQuerygetAllCountriesSlug = () => {
  return useQuery<Slug_Data[], string>(
    ["getAllCountriesSlugs"],
    () =>
    countriesServices.getAllSlugsCountries(),
    {
      onSuccess: (res) => {},
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};

export const UseQuerygetCountriesById = (id: number) => {
  const config  = userHeaderConfig()
  return useQuery<Data, string>(
    ["getCountriesByID", id],
    () =>
    countriesServices.getCountriesById(id, config),
    {
      enabled: id !== 0 ? true : false,
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQueryAddCountries = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  return useMutation<Data, string, { data: Countries_Req; config: any }>(
    "addNewCountries",
    countriesServices.addNewCountry,
    {
      onSuccess: (res) => {
        message.success("New country add successfully ");
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllCountries");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseQueryUpdateCountries = (
  form: FormInstance<any>,
  closePoupForm: () => void
) => {
  const query = UseQueryClient();
  return useMutation<Data, string, { data: Countries_Req; id: number; config: any }>(
    "updateCountries",
    countriesServices.updateCountry,
    {
      onSuccess: (res) => {
        message.success(" country update successfully ");
        form.resetFields();
        closePoupForm();
        query.invalidateQueries("getAllCountries");
      },
      onError: (res) => {
        message.error(res + "");
      },
    }
  );
};


export const UseMutationDeleteCountry = () => {
  const query = UseQueryClient();
  return useMutation<string, string, { id: number; config: any }>(
    "deleteCountry",
    countriesServices.deleteCountry,
    {
      onSuccess: (res) => {
        message.success("country is deleted successfully");

        query.invalidateQueries("getAllCountries");
      },
      onError: (res) => {
        message.error(res);
      },
    }
  );
};
