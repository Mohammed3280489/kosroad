import { Avatar, Tag, Popconfirm, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import face2 from "../../assets/images/face-2.jpg";
import { UseMutationDeleteVendor } from "./operation";
import { DeleteOutlined } from "@ant-design/icons";
import { userHeaderConfig } from "../../utils/shared/headerConfig";
import { UserContext } from "../../utils/shared/customHook/userContext";


export const vendorName = () => {
  const context = UserContext();
  return {
    title: `${context.t("NAME") + ""}`,
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name: string) => {
      return (
        <div style={{ display: "flex", gap: 30 }}>
          <Avatar.Group style={{ gap: 30 }}>
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
export const vendorEmail = () => {
  const { Paragraph } = Typography;
  const context = UserContext();
  return {
    title: `${context.t(`EMAIL`)}`,
    dataIndex: "email",
    key: "email",
    width: "45%",
    render: (email: string) => {
      return (
        <>
          <div className="avatar-info">
            <Paragraph
              ellipsis={{
                rows: 2,
              }}
            >
              <Title level={5} style={{ textAlign: "center" }}>
                {" "}
                {email}
              </Title>
            </Paragraph>
          </div>
        </>
      );
    },
  };
};

export const vendorPhone = () => {
  const context = UserContext();
  return {
    title: `${context.t(`PHONE`)}`,
    key: "phone",
    dataIndex: "phone",
    width: "25%",
    render: (phone: string) => {
      return <p style={{ textAlign: "center" }}>{phone}</p>;
    },
  };
};
export const vendorCompany = () => {
  const context = UserContext();
  return {
    title: `${context.t(`COMPANY`)}`,
    key: "company_type",
    dataIndex: "company_type",
    width: "25%",
    render: (company_type: string) => {
      return <p style={{ textAlign: "center" }}>{company_type}</p>;
    },
  };
};
export const vendorVendorType = () => {
  const context = UserContext();
  return {
    title: `${context.t(`VENDOR`)}`,
    key: "vendor_type",
    dataIndex: "vendor_type",
    width: "25%",
    render: (vendor_type_id: string) => {
      return <p style={{ textAlign: "center" }}>{vendor_type_id}</p>;
    },
  };
};

export const vendorApproved = () => {
  const context = UserContext();
  return {
    title: `${context.t("is_approved")}`,
    key: "is_approved",
    dataIndex: "is_approved",
    width: "40%",
    render: (is_approved: boolean) => {
      return (
        <p style={{ textAlign: "center" }}>
          {is_approved ? (
            <Tag color="green">{`${context.t('Approved')}`}</Tag>
          ) : (
            <Tag color="red">{`${context.t('NOTApproved')}`}</Tag>
          )}
        </p>
      );
    },
  };
};


export const dataOperations = () => {
  const deleteMemberShip = UseMutationDeleteVendor();
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
