import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
// Auth
import SignIn from "./components/backend/auth/sign-in/SignIn";
import SignUp from "./components/backend/auth/sign-up/SignUp";
// Dashboard
import Dashboard from "./components/backend/dashboard/Dashboard";
// Crafter
import DashboardCrafterList from "./components/backend/crafter/List";
import DashboardCrafterAdd from "./components/backend/crafter/Add";
import DashboardCrafterDetail from "./components/backend/crafter/Detail";
import DashboardCrafterEdit from "./components/backend/crafter/Edit";
// Island
import DashboardIslandList from "./components/backend/island/List";
import DashboardIslandAdd from "./components/backend/island/Add";
import DashboardIslandDetail from "./components/backend/island/Detail";
import DashboardIslandEdit from "./components/backend/island/Edit";
// House
import DashboardHouseList from "./components/backend/house/List";
import DashboardHouseAdd from "./components/backend/house/Add";
import DashboardHouseDetail from "./components/backend/house/Detail";
import DashboardHouseEdit from "./components/backend/house/Edit";
// Place
import DashboardPlaceList from "./components/backend/place/List";
import DashboardPlaceAdd from "./components/backend/place/Add";
import DashboardPlaceDetail from "./components/backend/place/Detail";
import DashboardPlaceEdit from "./components/backend/place/Edit";
// Station
import DashboardStationList from "./components/backend/station/List";
import DashboardStationAdd from "./components/backend/station/Add";
import DashboardStationDetail from "./components/backend/station/Detail";
import DashboardStationEdit from "./components/backend/station/Edit";
// Task
import DashboardTaskList from "./components/backend/task/List";
import DashboardTaskAdd from "./components/backend/task/Add";
import DashboardTaskEdit from "./components/backend/task/Edit";
import DashboardTaskDetail from "./components/backend/task/Detail";
// Chest
import DashboardChestList from "./components/backend/chest/List";
import DashboardChestAdd from "./components/backend/chest/Add";
import DashboardChestDetail from "./components/backend/chest/Detail";
import DashboardChestEdit from "./components/backend/chest/Edit";
// Item
import DashboardItemList from "./components/backend/item/List";
import DashboardItemAdd from "./components/backend/item/Add";
import DashboardItemEdit from "./components/backend/item/Edit";
import DashboardItemDetail from "./components/backend/item/Detail";
// Setting
import DashboardSettingDetail from "./components/backend/setting/Detail";
import DashboardSettingEdit from "./components/backend/setting/Edit";
// Frontend
import CrafterDetail from "./components/frontend/crafter/Detail";
import CrafterList from "./components/frontend/crafter/List";
import Home from "./components/frontend/home/Home";

import { AUTH } from "./components/routes/auth";
import { DASHBOARD } from "./components/routes/backend";
import FrontURLs, { CRAFTERS } from "./components/routes/frontend";

// Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Toastify

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Frontend */}
          <Route exact path={FrontURLs.APP_HOME} component={Home} />
          <Route exact path={CRAFTERS.LIST} component={CrafterList} />
          <Route
            exact
            path={CRAFTERS.LIST + "/:ign"}
            component={CrafterDetail}
          />
          {/* Auth */}
          <Route exact path={AUTH.SIGN_IN} component={SignIn} />
          <Route exact path={AUTH.SIGN_UP} component={SignUp} />
          {/* Dashboard */}
          <Route exact path={DASHBOARD.INDEX} component={Dashboard} />
          {/* Crafter */}
          <Route
            exact
            path={DASHBOARD.CRAFTERS}
            component={DashboardCrafterList}
          />
          <Route
            exact
            path={DASHBOARD.CRAFTERS + "-add"}
            component={DashboardCrafterAdd}
          />
          <Route
            exact
            path={DASHBOARD.CRAFTERS + "/:ign"}
            component={DashboardCrafterDetail}
          />
          <Route
            exact
            path={DASHBOARD.CRAFTERS + "/:ign" + "/edit"}
            component={DashboardCrafterEdit}
          />
          {/* Island */}
          <Route
            exact
            path={DASHBOARD.ISLANDS}
            component={DashboardIslandList}
          />
          <Route
            exact
            path={DASHBOARD.ISLANDS + "-add"}
            component={DashboardIslandAdd}
          />
          <Route
            exact
            path={DASHBOARD.ISLANDS + "/:id"}
            component={DashboardIslandDetail}
          />
          <Route
            exact
            path={DASHBOARD.ISLANDS + "/:id" + "/edit"}
            component={DashboardIslandEdit}
          />
          {/* House */}
          <Route exact path={DASHBOARD.HOUSES} component={DashboardHouseList} />
          <Route
            exact
            path={DASHBOARD.HOUSES + "-add"}
            component={DashboardHouseAdd}
          />
          <Route
            exact
            path={DASHBOARD.HOUSES + "/:id"}
            component={DashboardHouseDetail}
          />
          <Route
            exact
            path={DASHBOARD.HOUSES + "/:id" + "/edit"}
            component={DashboardHouseEdit}
          />
          {/* Place */}
          <Route exact path={DASHBOARD.PLACES} component={DashboardPlaceList} />
          <Route
            exact
            path={DASHBOARD.PLACES + "-add"}
            component={DashboardPlaceAdd}
          />
          <Route
            exact
            path={DASHBOARD.PLACES + "/:id"}
            component={DashboardPlaceDetail}
          />
          <Route
            exact
            path={DASHBOARD.PLACES + "/:id" + "/edit"}
            component={DashboardPlaceEdit}
          />
          {/* Station */}
          <Route
            exact
            path={DASHBOARD.STATIONS}
            component={DashboardStationList}
          />
          <Route
            exact
            path={DASHBOARD.STATIONS + "-add"}
            component={DashboardStationAdd}
          />
          <Route
            exact
            path={DASHBOARD.STATIONS + "/:id"}
            component={DashboardStationDetail}
          />
          <Route
            exact
            path={DASHBOARD.STATIONS + "/:id" + "/edit"}
            component={DashboardStationEdit}
          />
          {/* Task */}
          <Route exact path={DASHBOARD.TASKS} component={DashboardTaskList} />
          <Route
            exact
            path={DASHBOARD.TASKS + "-add"}
            component={DashboardTaskAdd}
          />
          <Route
            exact
            path={DASHBOARD.TASKS + "/:id"}
            component={DashboardTaskDetail}
          />
          <Route
            exact
            path={DASHBOARD.TASKS + "/:id" + "/edit"}
            component={DashboardTaskEdit}
          />
          {/* Chest */}
          <Route exact path={DASHBOARD.CHESTS} component={DashboardChestList} />
          <Route
            exact
            path={DASHBOARD.CHESTS + "-add"}
            component={DashboardChestAdd}
          />
          <Route
            exact
            path={DASHBOARD.CHESTS + "/:id"}
            component={DashboardChestDetail}
          />
          <Route
            exact
            path={DASHBOARD.CHESTS + "/:id" + "/edit"}
            component={DashboardChestEdit}
          />
          {/* Item */}
          <Route exact path={DASHBOARD.ITEMS} component={DashboardItemList} />
          <Route
            exact
            path={DASHBOARD.ITEMS + "-add"}
            component={DashboardItemAdd}
          />
          <Route
            exact
            path={DASHBOARD.ITEMS + "/:id"}
            component={DashboardItemDetail}
          />
          <Route
            exact
            path={DASHBOARD.ITEMS + "/:id" + "/edit"}
            component={DashboardItemEdit}
          />
          {/* Setting */}
          <Route
            exact
            path={DASHBOARD.SETTINGS}
            component={DashboardSettingDetail}
          />
          <Route
            exact
            path={DASHBOARD.SETTINGS + "-edit"}
            component={DashboardSettingEdit}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
