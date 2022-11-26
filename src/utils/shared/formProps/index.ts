import { SelectProps } from "antd";
import { CSSProperties } from "react";

import {UserContext} from '../customHook/userContext';

export const selectPropsFunction = ()=> {
  
  const context = UserContext();
  let cssProperties:CSSProperties | undefined;
  const dropdownStyleFunction = ()=> {
    if (context.lang ==='ar'){
      cssProperties = {
        textAlign:"right",
        fontFamily:'Cairo'
      }
      return cssProperties
    }else {return cssProperties}
  }

  const selectProps: SelectProps<any, any> = {
    showSearch: true,
    optionFilterProp: "children",
    className:` ${context.lang==='ar' ? 'inputAr' : ""}`,
    dropdownStyle:{...dropdownStyleFunction()},
    filterOption: (input: any, option: any) => option!.children.includes(input),
    filterSort: (optionA: any, optionB: any) =>
      optionA!.children
        .toLowerCase()
        .localeCompare(optionB!.children.toLowerCase()),
        
  };

  return selectProps;
}