import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { FunctionComponent, useContext } from "react";
import { UseQueryResult } from "react-query";
import { userContext } from "../../../components/general/contextProvider";
import { tableLoading } from "../loading";
import classes from "./index.module.css";

interface GeneralTableProps {
  getAll?: UseQueryResult<any | undefined, string>;
  columns: ColumnsType<any> | undefined;
  currentPage: number;
  ItemId: number;
  setItemId: (id: number) => void;
  pagination?: number | undefined;
  showPopupAddForm: () => void;
  closePopupAddForm: () => void;
  paginationConfig: React.Dispatch<React.SetStateAction<number>>;
  addKind: string;
}

const GeneralTable: FunctionComponent<GeneralTableProps> = (props) => {
  const showPopupForm = () => {
    if (props.ItemId !== 0) props.setItemId(0);
    props.showPopupAddForm();
  };

  const changePageHandler = (e: any) => {
    props.paginationConfig((prev) => e);
  };

  const UserContext = useContext(userContext);

  return (
    <div className="table-responsive">
      <Table
        columns={props?.columns}
        dataSource={props?.getAll?.data?.data}
        loading={{
          indicator: tableLoading,
          spinning: props?.getAll?.isLoading,
        }}
        pagination={false}
        className={`ant-border-space ${UserContext.lang === "ar" && "arFont"}`}
        sticky
        tableLayout="fixed"
        rowKey={"id"}
      />
      <div className={classes.tableFooter}>
        <div
          className={`${classes.addBtn} ${
            UserContext.lang === "ar" && "arFont"
          }`}
          onClick={showPopupForm}
        >
          <i
            className={`fa fa-plus-circle ${classes.addIcon}`}
            aria-hidden="true"
          ></i>
          {props.addKind}
        </div>
        <Pagination
          current={props?.currentPage}
          total={props?.pagination}
          pageSize={10}
          onChange={(e) => changePageHandler(e)}
          hideOnSinglePage={true}
          className={`${UserContext.lang === "ar" && "arFont"} `}
        />
      </div>
    </div>
  );
};

export default GeneralTable;
