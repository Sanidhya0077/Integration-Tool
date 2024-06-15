import React from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import AddEditFunctionalityDetails from "./admin/AddEditFunctionalityDetails";
import FunctionalityDetailsTable from "./admin/FunctionalityDetailsTable";
import UserManagment from "./admin/UserManagement";
import AdminLandingPage from "./admin/AdminLandingPage";
import Functionality from "./Functionality";
import FunctionalityView from "./FunctionalityView";
import ManageSubscription from "./ManageSubscription";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route
            path="admin/functionalityDetails/add"
            element={<AddEditFunctionalityDetails mode="add" />}
          />
          <Route
            path="admin/functionalityDetails/edit/:itemId"
            element={<AddEditFunctionalityDetails mode="edit" />}
          />
          <Route
            path="admin/functionalityDetails/listing"
            element={<FunctionalityDetailsTable />}
          />
          <Route path="admin/userManagement" element={<UserManagment />} />
          <Route path="admin" element={<AdminLandingPage />} />
          <Route path="functionality" element={<Functionality />} />
          <Route path="subscriptions" element={<ManageSubscription />} />
          <Route path="functionalityview" element={<FunctionalityView />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default Layout;
