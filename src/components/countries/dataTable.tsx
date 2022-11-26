import { Avatar, Popconfirm } from "antd";
import Title from "antd/lib/typography/Title";
import Moment from "moment";
import { UseMutationDeleteCountry } from "./operations";
import { DeleteOutlined } from "@ant-design/icons";
import { userHeaderConfig } from "../../utils/shared/headerConfig";
import { UserContext } from "../../utils/shared/customHook/userContext";

export const countryName = () => {
  const context = UserContext ();
  return {
    title: `${context.t(`NAME`)}`,
    dataIndex: "name",
    key: "name",
    width: "40%",
    render: (name: string) => {
      return (
        <div style={{display:'flex' , justifyContent:'center'}}>
          <Avatar.Group>
      
            <div className="avatar-info">
              <Title level={5}> {name}</Title>
           
            </div>
          </Avatar.Group>{" "}
        </div>
      );
    },
  };
};

export const sluges = () => {
  const context = UserContext ();
  return {
    title: `${context.t(`SLUG`)}`,
    key: "slug",
    dataIndex: "slug",
    width: "40%",
    render: (slug: string) => {
      return <p style={{textAlign:'center'}}>{`${slug !== null ? slug : "_"}`}</p>;
    },
  };
};
export const creationTime = () => {
  const context = UserContext ();
  return {
    title: `${context.t(`CREATIONTIME`)}`,
    key: "created",
    dataIndex: "created",
    width: "40%",
    render: (date: Date) => {
      return <p style={{textAlign:'center'}}>{Moment(date + "").format("MMMM Do YYYY")}</p>;
    },
  };
};

export const dataOperations = () => {

  const deleteCompanyType  = UseMutationDeleteCountry();
  const config = userHeaderConfig();
  const userContext = UserContext();
  return {
    title: "",
    key: "id",
    dataIndex: "id",
    width: "20%",
    render: (id: number) => {
      return (
        <div
          style={{
            width: "100%",
            cursor: "pointer",
            display: "flex",
            gap: 20,
          }}
        >
          <div
            onClick={() => {
              userContext.setId(id);
              userContext.setShowPopUpForm();
            }}
          >
            <i className="fa fa-edit" style={{ color: "#47ad7d" }}></i>
          </div>

          <Popconfirm
            placement="topLeft"
            title={"Are you sure to delete this country"}
            onConfirm={() => {
              deleteCompanyType.mutateAsync({
                id,
                config
              });
            }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              style={{ color: "red", marginTop: 5 }}
            ></DeleteOutlined>
          </Popconfirm>
        </div>
      );
    },
  };
};
