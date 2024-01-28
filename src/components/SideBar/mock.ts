import i18next from "i18next";



export const TITLES = [
    { title: i18next.t('header.catalog'), openArrow: true },
    { title: i18next.t('header.about'), openArrow: true, href: "/about" },
    { title: i18next.t('header.workshop'), openArrow: true, href: "/workshop" },
    { title: i18next.t('header.blog'), openArrow: false, href: "/blog" },
    { title: i18next.t('header.contacts'), openArrow: false, href: "/contacts" },
];
export const TITLES2 = [
    { title: i18next.t('cart.cart'), icon: "/images/home/icons/Cart.png", href: "#" },
    {
        title: i18next.t('header.about'),
        icon: "/images/home/icons/Invoice.png",
        href: "/about",
    },
    {
        title: i18next.t('header.contacts'),
        icon: "/images/home/icons/Heart.png",
        href: "/workshop",
    },
    { title: i18next.t('header.blog'), icon: "/images/home/icons/Eye.png", href: "/blog" },
];
