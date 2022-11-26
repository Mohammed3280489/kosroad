import { Card } from "antd";
import { useState , useContext   } from "react";
import GeneralTable from "../../utils/shared/table/index";
import Search from "../../utils/shared/search";
import {
  UseQuerygetAllMemberShip,
} from "./operation";

import {
  MemberShipName,
  memberShipDescription,
  memberShipActivePeriod,
  memberShipPrice,
  creationTime,
  dataOperations,
} from "./dataTable";
import {userContext} from '../general/contextProvider'
import { useTranslation } from "react-i18next";
import AddAndUpdateMemberShip from './addAndUpdateMemberShip';



const MemberShip = () => {

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const UserContext = useContext(userContext);
  const {t} = useTranslation();

  const getAllMemberShip = UseQuerygetAllMemberShip(page, search);
 

  const columns = [
    MemberShipName(),
    memberShipDescription(),
    memberShipActivePeriod(),
    memberShipPrice(),
    creationTime(),
    dataOperations(),
  ];
  console.log('lock')

  return (
    <>
      <Card
        bordered={false}
        className={`criclebox tablespace mb-24 ${UserContext.lang==="ar" && "arFont"}`}
        title={`${t('MEMBERSHIPS')}`}
        extra={
          <>
            <Search onChangeSearchResult={setSearch} />
          </>
        }
      >
        <GeneralTable
          columns={columns}
          getAll={getAllMemberShip}
          pagination={getAllMemberShip.data?.pagination.total}
          showPopupAddForm={UserContext.setShowPopUpForm}
          closePopupAddForm={UserContext.setShowPopUpForm}
          paginationConfig={setPage}
          addKind={`${t('ADDNEWMEMBERSHIP')}`}
          currentPage={page}
          ItemId={UserContext.id}
          setItemId={UserContext.setId}
        />
      </Card>
      {UserContext.showPopUpForm && (
        <AddAndUpdateMemberShip
          closePoupForm={UserContext.setShowPopUpForm}
          memberShipId={UserContext.id}
          showPopupForm={UserContext.showPopUpForm}
        />
      )}
    </>
  );
};
export default MemberShip;
