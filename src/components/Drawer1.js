import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableViewIcon from "@mui/icons-material/TableView";
import { ListSubheader } from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Route } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useHistory } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Utilities from "./utilities";
import Components from "./components";
import Chartsection from "./chart";
import Pages from "./page";

import Tables from "./table";

export const Drawer1 = () => {
  const datas = [
    {
      name: "Components",
      icon: <SettingsIcon />,
      handler: "/components",
    },
    {
      name: "Utilities",
      icon: <BuildIcon />,
      handler: "/utilities",
    },
  ];
  const datas1 = [
    {
      name: "Pages",
      icon: <InsertDriveFileIcon />,
      handler: "/pages",
    },
    {
      name: "Charts",
      icon: <BarChartIcon />,
      handler: "/charts",
    },
    {
      name: "Tables",
      icon: <TableViewIcon />,
      handler: "/tables",
    },
  ];
  const drawerWidth = 200;
  const history = useHistory();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="top-nav p-2"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div class=" d-flex input-group-top">
          <input
            type="text"
            class="form-control"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <SearchIcon />
            </span>
          </div>
        </div>

        <IconButton className="ml-auto">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon color="disabled" />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={7} color="error">
            <EmailIcon color="disabled" />
          </Badge>
        </IconButton>
        <div className="macgee">
          <button className="btn border-0 p-2 bg-white">
            Douglas MacGee
            <AccountCircleIcon />
          </button>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Tooltip title="SB ADMIN" placement="right">
            <List>
              <button
                onClick={() => history.push("/")}
                type="button"
                className="buttons btn btn-light"
              >
                <TagFacesIcon />
                <span>SB ADMIN</span>
              </button>
            </List>
          </Tooltip>
          <Divider />
          <Tooltip title="Dashboard" placement="right">
            <List>
              <button
                onClick={() => history.push("/dashboard")}
                type="button"
                className="buttons btn btn-light"
              >
                <DashboardIcon />
                <span>Dashboard</span>
              </button>
            </List>
          </Tooltip>
          <Divider />
          <List className="list-button">
            <ListSubheader>INTERFACE</ListSubheader>
            {datas.map(({ name, icon, handler }, index) => (
              <Tooltip key={index} title={name} placement="right">
                <button
                  onClick={() => history.push(handler)}
                  type="button"
                  className="buttons btn btn-light"
                >
                  {icon}
                  <span>{name}</span>
                </button>
              </Tooltip>
            ))}
          </List>
          <Divider />
          <List>
            <ListSubheader>ADDONS</ListSubheader>
            {datas1.map(({ name, icon, handler }, index) => (
              <Tooltip title={name} placement="right">
                <button
                  onClick={() => history.push(handler)}
                  type="button"
                  className="buttons btn btn-light"
                >
                  {icon}
                  <span>{name}</span>
                </button>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box className="main" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route path={"/"} exact>
            <Dashboard />
          </Route>
          <Route path={"/dashboard"}>
            {" "}
            <Dashboard />{" "}
          </Route>
          <Route path={"/components"}>
            <Components />
          </Route>
          <Route path={"/utilities"}>
            <Utilities />
          </Route>
          <Route path={"/pages"}>
            <Pages />
          </Route>
          <Route path={"/charts"}>
            <Chartsection />
          </Route>
          <Route path={"/tables"}>
            <Tables />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};
