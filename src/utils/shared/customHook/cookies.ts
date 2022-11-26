import { useCookies } from "react-cookie";

export const UseCookies = () => {
  return useCookies(["TOKEN"]);
};
