import { Card } from "antd";
import { useContext, useState } from "react";
import GeneralTable from "../../utils/shared/table/index";

import { UseQuerygetAllVendor } from "./operation";
import Search from "../../utils/shared/search";
import {
  dataOperations,
  vendorApproved,
  vendorCompany,
  vendorEmail,
  vendorName,
  vendorPhone,
  vendorVendorType,
} from "./dataTable";
import { userContext } from "../general/contextProvider";
import AddAndUpdateVendor from './addAndUpdateVendor'
const VendorType = () => {

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const UserContext = useContext(userContext);


 

  const getAllVendor = UseQuerygetAllVendor(page, search);

  const columns = [
    vendorName(),
    vendorEmail(),
    vendorPhone(),
    vendorCompany(),
    vendorVendorType(),
    vendorApproved(),
    dataOperations(),
  ];

  return (
    <>
      <Card
        bordered={false}
        className={`criclebox tablespace mb-24 ${
          UserContext.lang === "ar" && "arFont"
        }`}
        title={`${UserContext.t("VENDOR")}`}
        extra={
          <>
            <Search onChangeSearchResult={setSearch} />
          </>
        }
      >
        <GeneralTable
          columns={columns}
          getAll={getAllVendor}
          pagination={getAllVendor?.data?.pagination?.total}
          showPopupAddForm={UserContext.setShowPopUpForm}
          closePopupAddForm={UserContext.setShowPopUpForm}
          paginationConfig={setPage}
          addKind={`${UserContext.t("addnewvendor")}`}
          currentPage={page}
          ItemId={UserContext.id}
          setItemId={UserContext.setId}
        />
      </Card>
      {UserContext.showPopUpForm && (
        <AddAndUpdateVendor
          showPopupForm={UserContext.showPopUpForm}
          closePoupForm={UserContext.setShowPopUpForm}
          vendorId={UserContext.id}
        />
      )}
    </>
  );
};
export default VendorType;
