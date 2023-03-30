import { Express } from "express";
import {
  createProfile,
  deleteProfile,
  editProfile,
  getAllProfiles,
  getProfileByID,
} from "../../handlers";

export const profile = (app: Express) => {
  //get profile by id
  app.get("/profiles/:profileID", getProfileByID);
  //get all profiles and filter applicable
  app.get("/profiles", getAllProfiles);
  //create profile
  app.post("/profiles", createProfile);
  //edit profile
  app.patch("/profiles/:profileID", editProfile);
  //delete profile
  app.delete("/profiles/:profileID", deleteProfile);
};
