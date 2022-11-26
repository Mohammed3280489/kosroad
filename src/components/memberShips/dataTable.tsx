import { Avatar, Popconfirm, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import face2 from "../../assets/images/face-2.jpg";
import Moment from "moment";
import { UseMutationDeleteMemberShip } from "./operation";
import { DeleteOutlined } from "@ant-design/icons";
import { userHeaderConfig } from "../../utils/shared/headerConfig";
import { UserContext } from "../../utils/shared/customHook/userContext";

export const MemberShipName = () => {
  const context = UserContext ();
  return {
    title: `${context.t('NAME')+''}`,
    dataIndex: "name",
    key: "name",
    width: "40%",
    render: (name: string) => {
      return (
        <div style={{display:'flex' , gap:30}}>
          <Avatar.Group style={{gap:30}}>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}> {name}</Title>
              <p>start</p>
            </div>
          </Avatar.Group>{" "}
        </div>
      );
    },
  };
};
export const memberShipDescription = () => {
  const { Paragraph } = Typography;
  const context = UserContext ();
  return {
    title: `${context.t(`DESCRIPTION`)}`,
    dataIndex: "description",
    key: "description",
    width: "25%",
    render: (description: string) => {
      return (
        <>
          <div className="avatar-info">
            <Paragraph
              ellipsis={{
                rows: 2,
              }}
            >
              <Title level={5} style={{textAlign:'center'}}> {description}</Title>
            </Paragraph>
          </div>
        </>
      );
    },
  };
};

export const memberShipPrice = () => {
  const context = UserContext ();
  return {
    title: `${context.t(`PRICE`)}`,
    key: "price",
    dataIndex: "price",
    width: "25%",
    render: (price: string) => {
      return <p style={{textAlign:'center'}}>{price}</p>;
    },
  };
};
export const memberShipActivePeriod = () => {
  const context = UserContext ();
  return {
    title: `${context.t(`ACTIVE_PERIOD`)}`,
      key: "active_period",
      dataIndex: "active_period",
      width: "25%",
      render: (active_period: string) => {
        return <p style={{textAlign:'center'}}>{active_period}</p>;
      },
  };
};

export const creationTime = () => {
  const context = UserContext ();
  return {
    title: `${context.t('CREATIONTIME')}`,
    key: "created_at",
    dataIndex: "created_at",
    width: "40%",
    render: (date: Date) => {
      return <p style={{textAlign:'center'}}>{Moment(date + "").format("MMMM Do YYYY")}</p>;
    },
  };
};

export const dataOperations = () => {
  const deleteMemberShip = UseMutationDeleteMemberShip();
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
            title={"Are you sure to delete this member ship"}
            onConfirm={() => {
              deleteMemberShip.mutateAsync({
                id,
                config,
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
