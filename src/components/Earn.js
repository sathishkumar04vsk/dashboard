import * as React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForumIcon from "@mui/icons-material/Forum";

export const Earn = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 600],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#018e94" : "#2ebabf",
    },
  }));
  return (
    <div className="row earn-contain">
      <div className="earn-mon col-fluid-xl-4 col-lg-md-2  earn">
        <div>
          <p className="earn-mon-con earn-list">EARNINGS(MONTHLY)</p>
          <h5 className="value">$40,000</h5>
        </div>
        <CalendarTodayTwoToneIcon sx={{ fontSize: 40 }} />
      </div>
      <div className="earn-annual col-fluid-xl-4 col-lg-md-2 earn">
        <div>
          <p className="earn-annual-con earn-list">EARNINGS(ANNUAL)</p>
          <h5 className="value">$215,000</h5>
        </div>
        <AttachMoneyIcon sx={{ fontSize: 40 }} />
      </div>

      <div className="row persent earn">
        <div className="col-3">
          <p className="persent-con earn-list">TASK</p>
          <h5 className="value">50%</h5>
        </div>
        <div className="col-6 mt-4">
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <div className="col-3 pl-0">
          <AssignmentIcon sx={{ fontSize: 40 }} />
        </div>
      </div>

      <div className="pending col-fluid-xl-4 col-lg-md-2 earn">
        <div>
          <p className="pending-con earn-list">PENDING REQUESTS</p>
          <h5 className="value">18</h5>
        </div>
        <ForumIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
};
