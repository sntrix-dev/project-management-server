import { Express } from "express";
import {
  createProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProjectByID,
} from "../../handlers";

export const project = (app: Express) => {
  //get project by id
  app.get("/projects/:projectID", getProjectByID);
  //get all projects
  app.get("/projects", getAllProjects);
  //create project
  app.post("/projects", createProject);
  //edit project
  app.patch("/projects/:projectID", editProject);
  //delete project
  app.delete("/projects/:projectID", deleteProject);
};
