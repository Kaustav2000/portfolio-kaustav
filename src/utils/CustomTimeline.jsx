import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import wiproImage from "../assets/Wipro_Primary Logo_Color_RGB.svg";
import kreetiImage from "../assets/Kreeti-image.jpeg";
import cbnitsImage from "../assets/cbnits_logo.jpeg";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          <p className="dark:text-white"> Timeline- 09/2020 - 03/2022</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="bg-slate-100 ml-5 w-80 min-h-40 p-5 m-auto flex flex-col justify-center items-center shadow-2xl dark:bg-dark-secondary dark:shadow-none rounded-lg">
            <div className="bg-white h-28 w-28 rounded-full flex justify-center items-center overflow-clip ">
              <img src={wiproImage} alt="wipro-logo" />
            </div>
            <div className="my-5 text-xl text-primary-dark dark:text-white">
              Project Engineer
            </div>
            <div className="text-xs dark:text-white px-5">
              <ul className="list-disc">
                <li>
                  Troubleshoot and analyze problem reports to help determine
                  root cause of the reported issue and was able to increase the
                  efficiency of the approval portal by 30%
                </li>
                <li>Used Redux in frontend for state management</li>
                <li>Updated styles of the Payment Portal</li>
              </ul>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }}>
          <p className="dark:text-white"> Timeline- 03/2022 - 10/2022</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">{/* <LaptopMacIcon /> */}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="bg-slate-100 mr-5 w-80 min-h-40 p-5 m-auto flex flex-col justify-center items-center shadow-2xl dark:bg-dark-secondary dark:shadow-none rounded-lg">
            <div className="bg-white h-28 w-28 rounded-full flex justify-center items-center overflow-clip ">
              <img src={kreetiImage} alt="wipro-logo" />
            </div>
            <div className="my-5 text-xl text-primary-dark dark:text-white">
              Front End Developer
            </div>
            <div className="text-xs dark:text-white px-5">
              <ul className="list-disc text-left">
                <li>
                  Developed a Job search and Listing Web application helping
                  employers to create job posts, manage candidate applications,
                  conduct video interviews, and analytical dashboard for job
                  post management with an end to end hiring process
                </li>
                <li>
                  Used React along with redux toolkit such as thunk and slice to
                  manipulate redux store in the app Job Alley
                </li>
                <li>
                  Participated in various phases of feature delivery from user
                  story grooming, preparing prototypes, feasibility checks,
                  design reviews, implementation, and testing.{" "}
                </li>
                <li>
                  Responsible for developing multiple features forthe employer
                  portal, worker application, and video interviews
                </li>
              </ul>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }}>
          <p className="dark:text-white"> Timeline- 10/2022 - Present</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">{/* <HotelIcon /> */}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="bg-slate-100 ml-5 w-80 min-h-40 p-5 m-auto flex flex-col justify-center items-center shadow-2xl dark:bg-dark-secondary dark:shadow-none rounded-lg">
            <div className="bg-white h-28 w-28 rounded-full flex justify-center items-center overflow-clip ">
              <img src={cbnitsImage} alt="wipro-logo" />
            </div>
            <div className="my-5 text-xl text-primary-dark dark:text-white">
              Front End Developer
            </div>
            <div className="text-xs dark:text-white px-5">
              <ul className="list-disc text-left">
                <li>
                  Zeullig Pharma- Worked on a Healthcare app in South Eastern
                  Asia which has a 2.5 million monthly users. Redux toolkit
                  features such as slice and thunk were used to store and
                  manipulate data. To manage the load time of the application,
                  used dynamic bundling.
                </li>
                <li>
                  Cloud Armour - Started from scratch and developed a cloud
                  security platform in Reactjs. Used highcharts library for data
                  visualization and risk analysis of potential threat
                </li>
                <li>
                  Liberty Mutual- Responsible for the frontend maintenance and
                  development of new features of an insurance Organization.
                  Created a new version of payment portal with link to CashFree
                  integration as well as Gpay
                </li>
              </ul>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
