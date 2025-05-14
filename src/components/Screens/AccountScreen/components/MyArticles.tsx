import React, { useEffect } from "react";
import { ArticleAPI } from "@/api/ArticleAPI";
import { ArticlePreview } from "@/dataTransferObjects/response/article/ArticlePreview";
import { Button, CircularProgress, TextField } from "@mui/material";

const MyArticles = () => {

  const [loading, setLoading] = React.useState(false);
  const [data,setData] = React.useState<ArticlePreview[]>([]);

  useEffect(() => {
    setLoading(true);
    ArticleAPI.MyArticles("ua").then(r=>setData(r.data)).finally(() => setLoading(false));
  }, []);

  return (
    <div className={"text-black w-full flex flex-col gap-4"}>
      <Button variant={"outlined"} onClick={()=>{
        ArticleAPI.CreateArticle({Name:"Kwakkwakw"}, "ua")
      }}>Create</Button>
      {
        loading?<CircularProgress/>:
          <div className={"flex flex-col gap-4"}>
            {data.map(n=>
              <div className={"flex flex-col gap-4 border-pink p-4 border-solid border rounded-xl hover:bg-red-100"}>
                <div>
                  <div className={"text-neutral-500"}>Назва:</div>
                  <div>{n.name}</div>
                </div>
                <div>
                  <div className={"text-neutral-500"}>Статус:</div>
                  <div>{"status"}</div>
                </div>
                <div>
                  <div className={"text-neutral-500"}>Перегляди:</div>
                  <div>{0}</div>
                </div>
                <div>
                  <div className={"text-neutral-500"}>Вподобайки:</div>
                  <div>{n.likes}</div>
                </div>
                <div>
                  <div className={"text-neutral-500"}>Коментарі:</div>
                  <div>{0}</div>
                </div>
                <div className={"flex gap-4"}>
                  <Button size={"small"} variant={"outlined"} onClick={()=>window.open("/article-edit/"+1)}>Редагувати</Button>
                  <Button size={"small"} variant={"outlined"} onClick={()=>window.open("/")}>Переглянути</Button>
                  <Button size={"small"} variant={"outlined"} onClick={()=>window.open("/")}>Опублікувати</Button>
                </div>

              </div>
            )}
          </div>
      }
    </div>
  );
};

export default MyArticles;