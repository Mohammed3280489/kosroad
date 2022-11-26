import { Card } from "antd";
import { useState , useContext} from "react";
import GeneralTable from "../../utils/shared/table/index";
import { companyName, creationTime, dataOperations } from "./dataTable";
import {userContext, } from '../general/contextProvider';
import Search from "../../utils/shared/search";
import {
  UseQuerygetAllCompanyType,
} from "./operations";
import {useTranslation} from 'react-i18next'
import AddAndUpdateCompanyType from './addAndUpdateCompanyType';


const CompanyType = () => {

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  
  const UserContext = useContext(userContext);
  const {t} = useTranslation();
  const getAllCompanyTypes = UseQuerygetAllCompanyType(page, search);
  const columns = [companyName(), creationTime(), dataOperations()];

  
  console.log('lock');

  return (
    <>
      <Card
        bordered={false}
        className={`criclebox tablespace mb-24 ${UserContext.lang==="ar" && "arFont"}`}
        title={t(`COMPANYTYPE`)}
        extra={
          <>
            <Search onChangeSearchResult={setSearch}  />
          </>
        }
        
      >
        <GeneralTable
          columns={columns}
          getAll={getAllCompanyTypes}
          pagination={getAllCompanyTypes?.data?.pagination?.total}
          showPopupAddForm={UserContext.setShowPopUpForm}
          closePopupAddForm={UserContext.setShowPopUpForm}
          paginationConfig={setPage}
          addKind={t(`ADDNEWCOMPANYTYPE`)}
          currentPage={page}
          ItemId={UserContext.id}
          setItemId={UserContext.setId}
        />
      </Card>

      {UserContext.showPopUpForm && (
        <AddAndUpdateCompanyType
          showPopupForm={UserContext.showPopUpForm}
          closePoupForm={UserContext.setShowPopUpForm}
          vendorId={UserContext.id}
        />
      )}
    </>
  );
};
export default CompanyType;
