import { SelfUpdateRequest } from "@/dataTransferObjects/request/SelfUpdateRequest";
import { AxiosResponse } from "axios";
import { User } from "@/dataTransferObjects/entities/User";
import axiosInstance from "@/api/axiosInstance";
import { ArticlePreview } from "@/dataTransferObjects/response/article/ArticlePreview";
import { ArticleFeed } from "@/dataTransferObjects/response/article/ArticleFeed";
import { CreateArticleRequest } from "@/dataTransferObjects/request/article/CreateArticleRequest";
import { UpdateArticleRequest } from "@/dataTransferObjects/request/article/UpdateArticleRequest";

export const ArticleAPI = {
  LoadImage(data:FormData):Promise<AxiosResponse<string>>{
    return axiosInstance.post<string>("/article/load-image",data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  MyArticles(locale:string):Promise<AxiosResponse<ArticlePreview[]>>{
    return axiosInstance.get<ArticlePreview[]>("/article/my-articles", {params:{locale:locale}});
  },

  CreateArticle(dto:CreateArticleRequest, locale:string):Promise<AxiosResponse<ArticleFeed>>{
    return axiosInstance.post<ArticleFeed>("/article/create-article",dto, {params:{locale:locale}});
  },

  UpdateArticle(dto:UpdateArticleRequest, locale:string):Promise<AxiosResponse<ArticleFeed>>{
    return axiosInstance.put<ArticleFeed>("/article/update-article",dto, {params:{locale:locale}});
  },

  ById(id:number):Promise<AxiosResponse<ArticleFeed>>{
    return axiosInstance.get<ArticleFeed>("/article/by-id", {params:{id:id}});
  },
}