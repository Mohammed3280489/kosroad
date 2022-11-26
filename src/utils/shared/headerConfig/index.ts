import { UseCookies } from "../customHook/cookies";
import { UseTranslation } from "../customHook/languages";
export const userHeaderConfig = () => {
  const [USER_TOKEN] = UseCookies();
  const {  i18n } = UseTranslation();
  const config = {
    headers: {
      Authorization: `Bearer ${USER_TOKEN.TOKEN + ""}`,
      lang: i18n.language,
    },
  };

  return config;
};
