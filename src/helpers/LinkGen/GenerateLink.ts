import {useRouter} from "next/router";

interface NewParameters {
  basePath?: string;
  queryParameters?: { [key: string]: string | number | boolean | null |number[]} | null;
  slug?:string;
  doNotSaveParams?:boolean
}

export function GenerateLink(router: ReturnType<typeof useRouter>, newParams: NewParameters): string {
  const { basePath, queryParameters, slug,doNotSaveParams } = newParams;

  let newPath = basePath || router.asPath.split('?')[0];


  if(newPath[0] != '/') newPath = '/'+newPath

  let query = new URLSearchParams();

  // Add existing query parameters to the new query
  if(!doNotSaveParams) for (const [key, value] of Object.entries(router.query)) {if(value!=undefined)query.set(key, value.toString());}

  if(basePath === undefined && slug != undefined){
    const lastIndex = newPath.lastIndexOf('/');
    if (lastIndex !== -1) {
      newPath = newPath.substring(0, lastIndex + 1);
    }
  }

  if(slug != undefined){
    if(newPath[newPath.length-1] != '/') newPath+='/'
    newPath+=slug;
  }

  if(newPath[newPath.length-1] === '/') newPath = newPath.slice(0, -1)

  // Replace query parameters if provided
  if (queryParameters !== undefined) {
    if (queryParameters === null) query = new URLSearchParams();

    // Replace and add
    //@ts-ignore
    for (const [key, value] of Object.entries(queryParameters)) {
      if (value !== undefined && value !== null) {
        if(query.has(key)) query.delete(key)
        if (Array.isArray(value)) {
          if(value.length === 0) query.delete(key)
          else query.set(key, value.join(','));
        } else {
          query.set(key, value.toString());
        }
      }
    }

    if (query.has('slug')) query.delete("slug");

    const queryString = query.toString();
    if (queryString) {
      newPath += `?${queryString}`;
    }
  }

  return newPath;
}
