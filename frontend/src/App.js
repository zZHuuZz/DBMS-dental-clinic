import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./screens/About.js";
import Service from "./screens/Service.js";
import Login from "./screens/Login.js";
import Signup from "./screens/Signup.js";
import Footer from "./components/footer.js";
import Main from "./components/main.js";
import Header from "./components/header.js";
import Forgetpass from "./screens/Forgetpass.js";
import ServiceDetails from "./screens/Service_detail.js";
import Resetpass from "./screens/Resetpass.js";
import MainPatient from "./screens/Patient/Main_patient.js";
import DetailPatient from "./screens/Patient/Detail_patient.js";
import SetdatePatient from "./screens/Patient/Setdate_patient.js";
import DentistPatient from "./screens/Patient/Dentist_patient.js";
import ProfilePatient from "./screens/Patient/Profile_patient.js";
import PaymentPatient from "./screens/Patient/Payment_patient.js";
import MainDentist from "./screens/Dentist/Main_dentist.js";
import DetailDentist from "./screens/Dentist/Detail_dentist.js";
import SearchDentist from "./screens/Dentist/Dentist_search.js";
import ListDate from "./screens/Dentist/ListDate_dentist.js";
import ListMed from "./screens/Dentist/ListMed_dentist.js";
import Schedule from "./screens/Dentist/Schedule_dentist.js";
import UpdatePatient from "./screens/Dentist/UpdateProfile_patient.js";
import MainEmployee from "./screens/Employee/Main_employee.js";
import CreateProfile from "./screens/Employee/CreateProfile_employee.js";
import DetailEmployee from "./screens/Employee/Detail_employee.js";
import ListMedEmployee from "./screens/Employee/ListMed_employee.js";
import PaymentEmployee from "./screens/Employee/Payment_employee.js";
import SearchEmployee from "./screens/Employee/Search_employee.js";
import SearchProfileEmployee from "./screens/Employee/SearchProfile_employee.js";
import SetdateEmployee from "./screens/Employee/Setdate_employee.js";
import UpdatePatientEmployee from "./screens/Employee/UpdatePatient_employee.js";

import MainAdmin from "./screens/Admin/Main_admin.js";
import DetailAdmin from "./screens/Admin/Detail_admin.js";
import AccountManage from "./screens/Admin/AccountManagement.js";
import Dashboard from "./screens/Admin/Dashboard.js";
import InfoAppo from "./screens/Admin/InfoAppointement.js";
import StoreMed from "./screens/Admin/StoreMed.js";
import SidebarPatient from "./components/sidebar_patient.js";
import SidebarEmployee from "./components/sidebar.employee.js";
import SidebarDentist from "./components/sidebar_dentist.js";
import SidebarAdmin from "./components/sidebar_admin.js";
import { useContext } from "react";
import { Store } from "./Store.js";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';

const USER_TYPES = {
	PUBLIC: "Public User",
	ADMIN_USER: "Admin User",
	PATIENT_USER: "Patient User",
	EMPLOYEE_USER: "Employee User",
	DENTIST_USER: "Dentist User",
};

//Chỉnh cái này để chuyển router
// const CURRENT_USER_TYPE = USER_TYPES.DENTIST_USER; //USER_TYPES.DENTIST_USER
// const isPublicElement = CURRENT_USER_TYPE === USER_TYPES.PUBLIC;
// const isAdminElement = CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER;
// const isPatientElement = CURRENT_USER_TYPE === USER_TYPES.PATIENT_USER;
// const isDentistElement = CURRENT_USER_TYPE === USER_TYPES.DENTIST_USER;
// const isEmployeeElement = CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE_USER;
const isPublicElement = USER_TYPES.PUBLIC;
const isAdminElement = USER_TYPES.ADMIN_USER;
const isPatientElement = USER_TYPES.PATIENT_USER;
const isDentistElement = USER_TYPES.DENTIST_USER;
const isEmployeeElement = USER_TYPES.EMPLOYEE_USER;

function App() {
	const { user } = useSelector((state) => state.user);
	const [isPublicElement, setIsPublicElement] = useState(false);
	const [isAdminElement, setIsAdminElement] = useState(false);
	const [isPatientElement, setIsPatientElement] = useState(false);
	const [isDentistElement, setIsDentistElement] = useState(false);
	const [isEmployeeElement, setIsEmployeeElement] = useState(false);
	
	useEffect(() => {
		if (user) {
			setIsPublicElement(user.userType === USER_TYPES.PUBLIC);
			setIsAdminElement(user.userType === USER_TYPES.ADMIN_USER);
			setIsPatientElement(user.userType === USER_TYPES.PATIENT_USER);
			setIsDentistElement(user.userType === USER_TYPES.DENTIST_USER);
			setIsEmployeeElement(user.userType === USER_TYPES.EMPLOYEE_USER);
		}
	}, [user]);

	return (
		<BrowserRouter>
			{isPublicElement && <Header />}
			{isPatientElement && <SidebarPatient />}
			{isAdminElement && <SidebarAdmin />}
			{isDentistElement && <SidebarDentist />}
			{isEmployeeElement && <SidebarEmployee />}
			<Routes>
				<Route
					path='/'
					element={
						<PublicElement>
							{" "}
							<Main />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/about'
					element={
						<PublicElement>
							{" "}
							<About />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/service'
					element={
						<PublicElement>
							{" "}
							<Service />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/login'
					element={
						<PublicElement>
							{" "}
							<Login />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/signup'
					element={
						<PublicElement>
							{" "}
							<Signup />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/forgetpass'
					element={
						<PublicElement>
							{" "}
							<Forgetpass />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/resetpass'
					element={
						<PublicElement>
							{" "}
							<Resetpass />{" "}
						</PublicElement>
					}
				/>
				<Route
					path='/service/:number'
					element={
						<PublicElement>
							{" "}
							<ServiceDetails />{" "}
						</PublicElement>
					}
				/>

				<Route
					path='/patient'
					element={
						<PatientElement>
							{" "}
							<MainPatient />{" "}
						</PatientElement>
					}
				/>
				<Route
					path='/patient/detail'
					element={
						<PatientElement>
							{" "}
							<DetailPatient />{" "}
						</PatientElement>
					}
				/>
				<Route
					path='/patient/setdate'
					element={
						<PatientElement>
							{" "}
							<SetdatePatient />{" "}
						</PatientElement>
					}
				/>
				<Route
					path='/patient/dentist'
					element={
						<PatientElement>
							{" "}
							<DentistPatient />{" "}
						</PatientElement>
					}
				/>
				<Route
					path='/patient/profile'
					element={
						<PatientElement>
							{" "}
							<ProfilePatient />{" "}
						</PatientElement>
					}
				/>
				<Route
					path='/patient/payment'
					element={
						<PatientElement>
							{" "}
							<PaymentPatient />{" "}
						</PatientElement>
					}
				/>

				<Route
					path='/dentist'
					element={
						<DentistElement>
							{" "}
							<MainDentist />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/detail'
					element={
						<DentistElement>
							{" "}
							<DetailDentist />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/search'
					element={
						<DentistElement>
							{" "}
							<SearchDentist />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/listdate'
					element={
						<DentistElement>
							{" "}
							<ListDate />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/listmed'
					element={
						<DentistElement>
							{" "}
							<ListMed />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/schedule'
					element={
						<DentistElement>
							{" "}
							<Schedule />{" "}
						</DentistElement>
					}
				/>
				<Route
					path='/dentist/updatepatient'
					element={
						<DentistElement>
							{" "}
							<UpdatePatient />{" "}
						</DentistElement>
					}
				/>

				<Route
					path='/employee'
					element={
						<EmployeeElement>
							{" "}
							<MainEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/create'
					element={
						<EmployeeElement>
							{" "}
							<CreateProfile />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/detail'
					element={
						<EmployeeElement>
							{" "}
							<DetailEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/listmed'
					element={
						<EmployeeElement>
							{" "}
							<ListMedEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/payment'
					element={
						<EmployeeElement>
							{" "}
							<PaymentEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/search'
					element={
						<EmployeeElement>
							{" "}
							<SearchEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/searchprofile'
					element={
						<EmployeeElement>
							{" "}
							<SearchProfileEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/setdate'
					element={
						<EmployeeElement>
							{" "}
							<SetdateEmployee />{" "}
						</EmployeeElement>
					}
				/>
				<Route
					path='/employee/updatepatient'
					element={
						<EmployeeElement>
							{" "}
							<UpdatePatientEmployee />{" "}
						</EmployeeElement>
					}
				/>

				<Route
					path='/admin'
					element={
						<AdminElement>
							{" "}
							<MainAdmin />{" "}
						</AdminElement>
					}
				/>
				<Route
					path='/admin/detail'
					element={
						<AdminElement>
							{" "}
							<DetailAdmin />{" "}
						</AdminElement>
					}
				/>
				<Route
					path='/admin/account'
					element={
						<AdminElement>
							{" "}
							<AccountManage />{" "}
						</AdminElement>
					}
				/>
				<Route
					path='/admin/dashboard'
					element={
						<AdminElement>
							{" "}
							<Dashboard />{" "}
						</AdminElement>
					}
				/>
				<Route
					path='/admin/infoappo'
					element={
						<AdminElement>
							{" "}
							<InfoAppo />{" "}
						</AdminElement>
					}
				/>
				<Route
					path='/admin/storemed'
					element={
						<AdminElement>
							{" "}
							<StoreMed />{" "}
						</AdminElement>
					}
				/>

				<Route path='*' element={<div>Page Not Found!</div>}></Route>
			</Routes>
			<hr id='hrduoi'></hr>
			<Footer />
		</BrowserRouter>
	);
}

function PublicElement({ children }) {
	if (isPublicElement) {
		return <>{children}</>;
	} else {
		return <Navigate to={"/"} />;
	}
}

function AdminElement({ children }) {
	if (isAdminElement) {
		return <>{children}</>;
	} else {
		return <Navigate to={"/"} />;
	}
}

function PatientElement({ children }) {
	if (isPatientElement) {
		return <>{children}</>;
	} else {
		return <div>You do not have access to this page!</div>;
	}
}

function EmployeeElement({ children }) {
	if (isEmployeeElement) {
		return <>{children}</>;
	} else {
		return <div>You do not have access to this page!</div>;
	}
}

function DentistElement({ children }) {
	if (isDentistElement) {
		return <>{children}</>;
	} else {
		return <div>You do not have access to this page!</div>;
	}
}
export default App;
