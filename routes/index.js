
  /*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    
import express from "express";
import { studentcontroller } from "../controllers/studentController.js";
import { instructorcontroller } from "../controllers/instructorController.js";
import { subjectcontroller } from "../controllers/subjectController.js";
import { roomcontroller } from "../controllers/roomController.js";
import { enrollmentcontroller } from "../controllers/enrollmentController.js";
import { homePage } from "../controllers/homeController.js";
const router = express.Router();
router.get("/", homePage);

import { loginPage, registerPage, forgotPasswordPage, dashboardPage, loginUser, registerUser, logoutUser } from "../controllers/authController.js";

router.get("/login", loginPage);
router.post("/login", loginUser);
router.get("/register", registerPage);
router.post("/register", registerUser);
router.get("/forgot-password", forgotPasswordPage);
router.get("/dashboard", dashboardPage);
router.get("/logout", logoutUser);

// Student
router.post("/students", studentcontroller.insert);
router.get("/students", studentcontroller.selectAll);
router.get("/students/:id", studentcontroller.selectById);

// Instructor
router.post("/instructors", instructorcontroller.insert);
router.get("/instructors", instructorcontroller.selectAll);
router.get("/instructors/:id", instructorcontroller.selectById);

//Subject
router.post("/subjects", subjectcontroller.insert);
router.get("/subjects", subjectcontroller.selectAll);
router.get("/subjects/:id", subjectcontroller.selectById);

//Rooms
router.post("/rooms", roomcontroller.insert);
router.get("/rooms", roomcontroller.selectAll)
router.get("/rooms/:id", roomcontroller.selectById);

//Enrollments
router.post("/enrollments", enrollmentcontroller.insert);
router.get("/enrollments", enrollmentcontroller.selectAll);
router.get("/enrollments/:id", enrollmentcontroller.selectById);


export default router;
