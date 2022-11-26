import { Row, Space, Spin } from "antd";

export const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);


export const spinerLoading = (
  <Row
    style={{
      width: "100%",
      height: "434px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <i
      className="fas fa-circle-notch fa-spin"
      style={{ fontSize: 25, color: "#9fa1a1" }}
    ></i>
  </Row>
);

export const tableLoading =   <Space size={"middle"}>
<Spin size="default" style={{ color: "black !important" }}></Spin>
</Space>
