import dynamic from "next/dynamic";
import { Button, TextField } from "@mui/material";
import { Delta } from "quill";
import articleStore from "@/store/ArticleStore";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { ArticleAPI } from "@/api/ArticleAPI";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import { toast } from "react-toastify";
import success = toast.success;
import error = toast.error;
import { useEffect, useState } from "react";

function deltaToHtml(delta: Delta) {
  const ar = delta.ops.map(op=>{
    if(op?.insert?.image){
      const imgData = {...op.insert.image}
      return {insert:{image:imgData.src+"\" style=\""+imgData.style}}
    }
    return op
  })

  const converter = new QuillDeltaToHtmlConverter(ar, {inlineStyles:true});
  return converter.convert().replaceAll("&quot;", "\"")
}

const ArticleEditor = dynamic(() => import('@/components/ArticleEditor/ArticleEditor'), { ssr: false });

const ArticleEdit = () => {

  const r = useRouter()
  const id = r.query.id as unknown as number
  const [loadUpdate, setLoadUpdate] = useState<boolean>(false);

  useEffect(() => {
    console.log("ini",articleStore.article?.id,id)
    if(articleStore.article?.id != id){
      console.log("load")
      ArticleAPI.ById(id).then(r=>{
        console.log(r.data)
        articleStore.setArticle(r.data)
      })
    }
  }, [r.query.id]);

  return (
    <div className={"w-4/5 text-black p-4 h-full"}>
      <div className={"flex flex-col gap-4 w-full"}>
        <TextField value={articleStore.name} onChange={e=>articleStore.setName(e.target.value)} size={"small"} label={"Назва статті"}/>
        <TextField value={articleStore.short} onChange={e=>articleStore.setShort(e.target.value)} multiline rows={3} size={"small"} label={"Короткий опис"}/>
        <ArticleEditor data={articleStore.delta} setData={e=>articleStore.setDelta(e)}/>
        <Button loading={loadUpdate} onClick={()=>{
          setLoadUpdate(true)
          ArticleAPI.UpdateArticle({Name:articleStore.name, Short:articleStore.short, HTML:deltaToHtml(articleStore.delta!), Delta:JSON.stringify(articleStore.delta!), Id:articleStore.article!.id, Image:null},"ua").then(()=>success("Статтю оновлено")).catch(()=>error("Статтю НЕ оновлено")).finally(()=>setLoadUpdate(false))
        }} variant={"contained"}>Зберегти</Button>
      </div>
    </div>
  )
};

export default observer(ArticleEdit);