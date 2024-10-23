import { makeAutoObservable } from "mobx";
import { Work } from "@/dataTransferObjects/entities/Work";
import { WorkGroup } from "@/dataTransferObjects/entities/WorkGroup";
import { PublicAPI } from "@/api/PublicAPI";
import { WorkshopDataResponse } from "@/dataTransferObjects/response/WorkshopDataResponse";

class WorkshopStore{
  works:Work[] = []
  groups:WorkGroup[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setWorks(works:Work[]) {this.works = works}
  setGroups(groups:WorkGroup[]) {this.groups = groups}

  setData(data:WorkshopDataResponse){
    this.setWorks(data.works)
    this.setGroups(data.groups)
    console.log(data)
  }

  async loadData():Promise<WorkshopDataResponse|null>{
    return (await PublicAPI.GetWorkshopData()).data??null
  }

}
const workshopStore = new WorkshopStore()
export default workshopStore