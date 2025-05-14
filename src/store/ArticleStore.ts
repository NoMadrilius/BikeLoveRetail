import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import Quill, { Delta } from "quill";
import { ArticleFeed } from "@/dataTransferObjects/response/article/ArticleFeed";

class ArticleStore{

  article:ArticleFeed|null = null

  name:string = ""
  short:string = ""

  delta:Delta | null = null

  constructor() {
    makeAutoObservable(this)
    if(typeof window !== "undefined"){
      makePersistable(this, {
        name: "articleStore",
        properties: ["delta","article", "name", "short"],
        storage:window.localStorage
      })
    }
  }

  setName(v:string){this.name = v}
  setShort(v:string){this.short = v}

  setDelta(data:Delta | null){this.delta = data}

  setArticle(data:ArticleFeed | null){
    this.article = data
    this.delta = JSON.parse(data?.delta["ua"] as string)
    this.name = data?.name["ua"] as string
    this.short = data?.short["ua"] as string
  }
}

const articleStore = new ArticleStore();
export default articleStore;