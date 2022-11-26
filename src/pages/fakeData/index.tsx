import { ExclamationOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Tooltip } from "antd";
import { mins, cart, dollor, heart, profile ,  } from "../icon";
import ava1 from "../../assets/images/logo-shopify.svg";
import ava2 from "../../assets/images/logo-atlassian.svg";
import ava3 from "../../assets/images/logo-slack.svg";
import ava4 from "../../assets/images/logo-spotify.svg";
import ava5 from "../../assets/images/logo-jira.svg";
import ava6 from "../../assets/images/logo-invision.svg";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";


export const data = [
  {
    title: "March, 01, 2021",
    description: "#MS-415646",
    amount: "$180",
  },
  {
    title: "February, 12, 2021",
    description: "#RV-126749",
    amount: "$250",
  },
  {
    title: "April, 05, 2020",
    description: "#FB-212562",
    amount: "$550",
  },
  {
    title: "June, 25, 2019",
    description: "#QW-103578",
    amount: "$400",
  },
  {
    title: "March, 03, 2019",
    description: "#AR-803481",
    amount: "$700",
  },
];

export const information = [
  {
    title: "Oliver Liam",
    description: "Viking Burrito",
    address: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    title: "Lucas Harper",
    description: "Stone Tech Zone",
    address: "lucas@syone-tech.com",
    vat: "FRB1235476",
  },
  {
    title: "Oliver Liam",
    description: "ethan@fiber.com",
    vat: "NumberFRB1235476",
  },
];

export const newest = [
  {
    headding: <h6>NEWEST</h6>,
    avatar: mins,
    title: "Netflix",
    description: "27 March 2021, at 12:30 PM",
    amount: "- $2,500",
    textclass: "text-light-danger",
    amountcolor: "text-danger",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Apple",
    description: "27 March 2021, at 04:30 AM",
    amount: "+ $2,000",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
];
export const yesterday = [
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Stripe",
    description: "26 March 2021, at 12:30 AM",
    amount: "+ $750",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "HubSpot",
    description: "26 March 2021, at 11:30 AM",
    amount: "+ $1,050",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Creative Tim",
    description: "26 March 2021, at 07:30 AM",
    amount: "+ $2,400",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <ExclamationOutlined style={{ fontSize: 10 }} />,
    title: "Webflow",
    description: "26 March 2021, at 04:00 AM",
    amount: "Pending",
    textclass: "text-warning",
    amountcolor: "text-warning-b",
  },
];

///                      HOME                       //

export const count = [
  {
    today: "Today’s Sales",
    title: "$53,000",
    persent: "+30%",
    icon: dollor,
    bnb: "bnb2",
  },
  {
    today: "Today’s Users",
    title: "3,200",
    persent: "+20%",
    icon: profile,
    bnb: "bnb2",
  },
  {
    today: "New Clients",
    title: "+1,200",
    persent: "-20%",
    icon: heart,
    bnb: "redtext",
  },
  {
    today: "New Orders",
    title: "$13,200",
    persent: "10%",
    icon: cart,
    bnb: "bnb2",
  },
];

export const list = [
  {
    img: ava1,
    Title: "Soft UI Shopify Version",
    bud: "$14,000",
    progress: <Progress percent={60} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team2} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <img className="tootip-img" src={team3} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Jessica Doe">
          <img className="tootip-img" src={team4} alt="" />
        </Tooltip>
      </div>
    ),
  },
  {
    img: ava2,
    Title: "Progress Track",
    bud: "$3,000",
    progress: <Progress percent={10} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
  },
  {
    img: ava3,
    Title: "Fix Platform Errors",
    bud: "Not Set",
    progress: <Progress percent={100} size="small" status="active" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <img className="tootip-img" src={team3} alt="" />
        </Tooltip>
      </div>
    ),
  },
  {
    img: ava4,
    Title: "Launch new Mobile App",
    bud: "$20,600",
    progress: <Progress percent={100} size="small" status="active" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
  },
  {
    img: ava5,
    Title: "Add the New Landing Page",
    bud: "$4,000",
    progress: <Progress percent={80} size="small" />,
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team2} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Alexander Smith">
          <img className="tootip-img" src={team3} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Jessica Doe">
          <img className="tootip-img" src={team4} alt="" />
        </Tooltip>
      </div>
    ),
  },

  {
    img: ava6,
    Title: "Redesign Online Store",
    bud: "$2,000",
    progress: (
      <Progress
        percent={100}
        size="small"
        status="exception"
        format={() => "Cancel"}
      />
    ),
    member: (
      <div className="avatar-group mt-2">
        <Tooltip placement="bottom" title="Ryan Tompson">
          <img className="tootip-img" src={team1} alt="" />
        </Tooltip>
        <Tooltip placement="bottom" title="Romina Hadid">
          <img className="tootip-img" src={team2} alt="" />
        </Tooltip>
      </div>
    ),
  },
];

export const timelineList = [
  {
    title: "$2,400 - Redesign store",
    time: "09 JUN 7:20 PM",
    color: "green",
  },
  {
    title: "New order #3654323",
    time: "08 JUN 12:20 PM",
    color: "green",
  },
  {
    title: "Company server payments",
    time: "04 JUN 3:10 PM",
  },
  {
    title: "New card added for order #4826321",
    time: "02 JUN 2:45 PM",
  },
  {
    title: "Unlock folders for development",
    time: "18 MAY 1:30 PM",
  },
  {
    title: "New order #46282344",
    time: "14 MAY 3:30 PM",
    color: "gray",
  },
];
