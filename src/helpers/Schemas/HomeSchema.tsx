import React from 'react';

const HomeSchema = () => {
    const ldJson = {
        "@context": "http://www.schema.org",
        "@type": "BikeStore",
        "name": "BikeLove",
        "url": "https://bikelove.com.ua/",
        "logo": "https://bikelove.com.ua/images/logo/logo.svg",
        "image": "https://bikelove.com.ua/images/logo/logo.svg",
        "description": "Любов до кожної деталі вашого велосипеду - ось що визначає BikeLove. У нашому магазині ви знайдете широкий вибір найкращих моделей велосипедів, аксесуарів та екіпірування для всіх видів їзди. Наші експерти допоможуть вам знайти ідеальне спорядження, а наша любов до велосипедів зробить ваші поїздки ще більш приємними та комфортними. Приєднуйтесь до нашої спільноти BikeLove та відчуйте справжню любов до їзди!",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "вул. Щербаківського 59",
            "addressLocality": "Київ",
            "postalCode": "04111",
            "addressCountry": "Україна"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.47859184922369",
            "longitude": "30.40536527166876"
        },
        "hasMap": "https://maps.app.goo.gl/PxTr98ptFs9qote2A",
        "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 10:00-20:00",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Телефон",
            "telephone": "+380932118930"
        }
    }

    const ldJson2 = {
        "@context": "http://www.schema.org",
        "@type": "WebSite",
        "name": "BikeLove",
        "alternateName": "Веломагазин BikeLove",
        "url": "https://bikelove.com.ua/"
    }

    return (
        <>
        <script type='application/ld+json'>
            {JSON.stringify(ldJson)}
        </script>
            <script type='application/ld+json'>
                {JSON.stringify(ldJson2)}
            </script>
        </>
    );
};

export default HomeSchema;