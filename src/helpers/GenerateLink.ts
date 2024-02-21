export function GenerateLink(baseURL: string, queryParams: any) {
  let queryString = "";
  // Проверяем, есть ли параметры в объекте queryParams
  if (Object.keys(queryParams).length !== 0) {
    if (Object.keys(queryParams).includes("id"))
      queryString = queryString += "/" + queryParams.id;

    queryString = queryString += "?";

    // Проходимся по всем свойствам объекта queryParams
    for (let key in queryParams) {
      if (key != "id") {
        // Проверяем, является ли значение массивом
        if (Array.isArray(queryParams[key])) {
          // Если значение - массив, добавляем каждый элемент массива как отдельный параметр
          queryString +=
            `${encodeURIComponent(key)}=` + queryParams[key].join("%2C") + "&";
        } else {
          // Если значение не массив, добавляем его как параметр
          queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
            queryParams[key]
          )}&`;
        }
      }
    }

    // Убираем последний символ '&'
    queryString = queryString.slice(0, -1);
  }

  // Возвращаем конкатенированную строку базового URL и строки запроса
  return baseURL + queryString;
}
