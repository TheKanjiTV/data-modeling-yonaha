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
import {
  insertRoom,
  selectAllRooms,
  selectRoomById,
} from "../models/Room.js";

const roomcontroller = {

  insert: async (req, res) => {
    try {
      const room = await insertRoom(req.body);

      res.status(201).json({
        message: "Room inserted successfully",
        data: room,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  selectAll: async (req, res) => {
    try {
      const rooms = await selectAllRooms();

      res.status(200).json({
        message: "All rooms retrieved successfully",
        data: rooms,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  selectById: async (req, res) => {
    try {
      const room = await selectRoomById(req.params.id);

      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }

      res.status(200).json({
        message: "Room retrieved successfully",
        data: room,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

};

export { roomcontroller };