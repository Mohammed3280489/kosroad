import { Card } from "antd";
import { useState, useContext  } from "react";
import GeneralTable from "../../utils/shared/table/index";
import { UseQuerygetAllVendorType } from "./opertation";
import Search from "../../utils/shared/search";
import { userContext } from "../general/contextProvider";
import { creationTime, dataOperations, vendorName } from "./dataTable";
import AddAndUpdateVendorType from './addAndUpdateVendorType';


const VendorType = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const UserContext = useContext(userContext);
  


  const getAllVendorType = UseQuerygetAllVendorType(page, search);
  const columns = [vendorName(), creationTime(), dataOperations()];

  return (
    <>
      <Card
        bordered={false}
        className={`criclebox tablespace mb-24 ${UserContext.lang==="ar" && "arFont"}`}
        title={`${UserContext.t(`VENDORTYPE`)}`}
        extra={
          <>
            <Search onChangeSearchResult={setSearch} />
          </>
        }
      >
        <GeneralTable
          columns={columns}
          getAll={getAllVendorType}
          pagination={getAllVendorType?.data?.pagination?.total}
          showPopupAddForm={UserContext.setShowPopUpForm}
          closePopupAddForm={UserContext.setShowPopUpForm}
          paginationConfig={setPage}
          addKind={`${UserContext.t('ADDNEWVENDORTYPE')}`}
          currentPage={page}
          ItemId={UserContext.id}
          setItemId={UserContext.setId}
        />
      </Card>
      {UserContext.showPopUpForm && (
        <AddAndUpdateVendorType
          showPopupForm={UserContext.showPopUpForm}
          closePoupForm={UserContext.setShowPopUpForm}
          vendorId={UserContext.id}
        />
      )}
    </>
  );
};
export default VendorType;
