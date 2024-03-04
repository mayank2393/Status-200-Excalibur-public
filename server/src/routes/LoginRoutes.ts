import { Router } from "express";
import { login_student, signup_student } from "../controllers/Student";
import { login_technician } from "../controllers/Technician";
import { login_hostelAdmin } from "../controllers/HostelAdmin";
import { login_collegeAdmin } from "../controllers/CollegeAdmin";

const LoginRoutes:Router = Router();

LoginRoutes.post('/student',login_student);
LoginRoutes.post('/technician',login_technician);
LoginRoutes.post('/admin/hostel',login_hostelAdmin);
LoginRoutes.post('/admin/college',login_collegeAdmin);

export default LoginRoutes;