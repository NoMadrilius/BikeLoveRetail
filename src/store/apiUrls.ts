interface ApiUrls {
    category: string,
    productCardByCategory: string,
    product: string,
    register: string,
    login: string,
    search: string,
    orderPublicCreate: string
}

export const apiUrls: ApiUrls = {
    category: 'https://bikeshop.1gb.ua/api/public/getcategories',
    productCardByCategory: 'https://bikeshop.1gb.ua/api/public/catalogproducts',
    product: 'https://bikeshop.1gb.ua/api/public/getproductcardbyid',
    register: 'https://bikeshop.1gb.ua/api/auth/register',
    login: 'https://bikeshop.1gb.ua/api/auth/login',
    search: 'https://bikeshop.1gb.ua/api/public/search',
    orderPublicCreate: 'https://bikeshop.1gb.ua/api/order/publiccreate',
}