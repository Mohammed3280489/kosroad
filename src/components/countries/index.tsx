import { Card } from "antd";
import { useState, useContext } from "react";
import GeneralTable from "../../utils/shared/table/index";
import { countryName, sluges, creationTime, dataOperations } from "./dataTable";
import { userContext } from "../general/contextProvider";
import Search from "../../utils/shared/search";
import { UseQuerygetAllCountries  } from "./operations";
import AddAndUpdateCountries from './addAndUpdatCountries';

const Countries = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const UserContext = useContext(userContext);

  const getAllCountries = UseQuerygetAllCountries(page, search);

  const columns = [countryName(), sluges(), creationTime(), dataOperations()];

  return (
    <>
      <Card
        bordered={false}
        className={`criclebox tablespace mb-24 ${UserContext.lang==="ar" && "arFont"}`}
        title={`${UserContext.t('COUNTRYES')}`}
        extra={
          <>
            <Search onChangeSearchResult={setSearch} />
          </>
        }
      >
        <GeneralTable
          columns={columns}
          getAll={getAllCountries}
          pagination={getAllCountries?.data?.pagination?.total}
          showPopupAddForm={UserContext.setShowPopUpForm}
          closePopupAddForm={UserContext.setShowPopUpForm}
          paginationConfig={setPage}
          addKind={`${UserContext.t('addNewCountry')}`}
          currentPage={page}
          ItemId={UserContext.id}
          setItemId={UserContext.setId}
        />
      </Card>

      {UserContext.showPopUpForm && (
        <AddAndUpdateCountries
          showPopupForm={UserContext.showPopUpForm}
          closePoupForm={UserContext.setShowPopUpForm}
          vendorId={UserContext.id}
        />
      )}
    </>
  );
};
export default Countries;
