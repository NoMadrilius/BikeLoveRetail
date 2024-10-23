import { Work } from "../entities/Work";
import { WorkGroup } from "../entities/WorkGroup";

export interface WorkshopDataResponse{
  works:Work[]
  groups:WorkGroup[]
}