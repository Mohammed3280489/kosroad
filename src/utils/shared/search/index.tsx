import { FunctionComponent } from "react";
import { UserContext } from "../customHook/userContext";
import { Input } from "antd";
interface SearchProps {
  onChangeSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FunctionComponent<SearchProps> = (props) => {
  const context = UserContext();
  const { Search } = Input;
  return (
    <Search
      placeholder={context.lang === "ar" ? "بحث" : "search"}
      className={`${context.lang ==='ar' && 'arFront'}`}
      onChange={(e) => props.onChangeSearchResult(e.target.value)}
    />
  );
};

export default Search;
