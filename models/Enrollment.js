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
  // Firebase doesn't require predefined models.
  // Use Firestore directly in controllers or create helper functions here.
  // Collection name: "enrollment"

  import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Enrollment = sequelize.define("Enrollment", {
  studentId: { type: DataTypes.INTEGER, allowNull: false, },
  subjectId: { type: DataTypes.INTEGER, allowNull: false, },
  schoolYear: { type: DataTypes.STRING, allowNull: false, },
  semester: { type: DataTypes.STRING, allowNull: false, },
  status: { type: DataTypes.STRING, allowNull: false, },
  dateEnrolled: { type: DataTypes.DATEONLY, allowNull: false, },
});

export const insertEnrollment = async (data) => {
  return await Enrollment.create(data);
};

export const selectAllEnrollments = async () => {
  return await Enrollment.findAll();
};

export const selectEnrollmentById = async (id) => {
  return await Enrollment.findByPk(id);
};