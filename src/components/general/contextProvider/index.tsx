import React, { createContext, FunctionComponent, useEffect, useState } from "react";
import Main from "../layout/Main";
import {useTranslation} from 'react-i18next'
import { useCookies } from "react-cookie";
interface ContextProviderProps {
  children: React.ReactNode;
}

export const userContext = createContext({
  showPopUpForm: false,
  id: 0,
  setShowPopUpForm: () => {},
  setId: (id: number) => {},
  lang: "eng",
  setLang: (lang: string) => {},
  I18n:{},
  t:(l:string)=> {}
});

const ContextProvider: FunctionComponent<ContextProviderProps> = (props) => {
  const [showPopUpForm, setShowPopUpForm] = useState<boolean>(false);
  const [Languges, setLangCookies] = useCookies(["LANGUAGES"]);
  const [id, setId] = useState<number>(0);
  const [lang, setLang] = useState<string>('en');
  const {t,i18n} = useTranslation();
  const showPopUpFormHandler = () => {
    setShowPopUpForm((prev) => !prev);
  };

  

  const setLanguages = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
    setLangCookies('LANGUAGES',lang)

  };

  const setIdHandler = (id: number) => {
    setId(id);
  };
   
  useEffect(()=> { 
    if(Languges.LANGUAGES === 'ar') {
      setLang(Languges.LANGUAGES);
    }
  } , [Languges.LANGUAGES])

  return (
    <userContext.Provider
      value={{
        id,
        setId: setIdHandler,
        setShowPopUpForm: showPopUpFormHandler,
        showPopUpForm,
        lang,
        setLang:setLanguages,
        I18n:i18n,
        t:t
      }}
    >
      <Main />
    </userContext.Provider>
  );
};

export default ContextProvider;
