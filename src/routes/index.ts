import { Express } from "express";
import { profile } from "./profile";
import { project } from "./projects";
import { task } from "./tasks";

export const routes = (app: Express) => {
  project(app);
  task(app);
  profile(app);
};
