import { Express } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getAllTasks,
  getTaskByID,
} from "../../handlers";

export const task = (app: Express) => {
  //get task by id
  app.get("/projects/:projectID/:taskID", getTaskByID);
  //get all tasks
  app.get("/projects/:projectID", getAllTasks);
  //create task
  app.post("/projects/:projectID", createTask);
  //edit task
  app.patch("/projects/:projectID/:taskID", editTask);
  //delete task
  app.delete("/projects/:projectID/:taskID", deleteTask);
};
