import { automativeProductsSubtitles, automativeTypeData } from "./en/data/automaticeProductsData"
import { packagingTypeData } from "./en/data/plasticProductsData"
import { packagingTypeDataTR } from "./tr/data/plasticProductsDataTR"

export const en_to_tr_dict: { [id : string ] : string } = {
    "/en/corporate/about-us": "/tr/kurumsal/hakkimizda",
    "/en/corporate/our-policy": "/tr/kurumsal/politikamiz",
    "/en/corporate/sustainability": "/tr/kurumsal/surdurulebilirlik",
    "/en/corporate/social-responsibility": "/tr/kurumsal/sosyal-sorumluluk",
    "/en/corporate/board-members": "/tr/kurumsal/yonetim-kurulu",

    "/en/products/plastic-products-and-production": "/tr/urunlerimiz/plastik-urunler-ve-uretimi",
    "/en/products/food-and-agriculture": "/tr/urunlerimiz/gida-ve-tarim",
    "/en/products/automative-and-sub-industry": "/tr/urunlerimiz/otomotiv-ve-yan-sanayi",

    "/en/media/news": "/tr/medya/haberler",
    "/en/media/gallery": "/tr/medya/galeri",

    "/en/human-resources/our-principles": "/tr/insan-kaynaklari/prensiplerimiz",
    "/en/human-resources/recruitment": "/tr/insan-kaynaklari/ise-alim",
    "/en/human-resources/internship": "/tr/insan-kaynaklari/staj",

    "/en/contact": "/tr/iletisim",

    "/en/products/food-and-agriculture/foods": "/tr/urunlerimiz/gida-ve-tarim/gidalar",
    "/en/products/automative-and-sub-industry/tires" : "/tr/urunlerimiz/otomotiv-ve-yan-sanayi/tekerlekler",
}

packagingTypeData.map((p, idx) => en_to_tr_dict[`/en/products/plastic-products-and-production/${p.url}`] = `/tr/urunlerimiz/plastik-urunler-ve-uretimi/${packagingTypeDataTR[idx].url}`)
automativeTypeData.map((a, idx) => {
    en_to_tr_dict[`/en/products/automative-and-sub-industry/${a.url}`] = `/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${packagingTypeDataTR[idx].url}`

    automativeProductsSubtitles.filter((b) => b.category == a.title).map((d) => {
        en_to_tr_dict[`/en/products/automative-and-sub-industry/${a.url}/${d.url}`] = `/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${packagingTypeDataTR[idx].url}`
    })
})



export const tr_to_en_dict: { [id : string ] : string } = {
    "/tr/kurumsal/hakkimizda": "/en/corporate/about-us",
    "/tr/kurumsal/politikamiz": "/en/corporate/our-policy",
    "/tr/kurumsal/surdurulebilirlik": "/en/corporate/sustainability",
    "/tr/kurumsal/sosyal-sorumluluk": "/en/corporate/social-responsibility",
    "/tr/kurumsal/yonetim-kurulu": "/en/corporate/board-members",

    "/tr/urunlerimiz/plastik-urunler-ve-uretimi": "/en/products/plastic-products-and-production",
    "/tr/urunlerimiz/gida-ve-tarim": "/en/products/food-and-agriculture",
    "/tr/urunlerimiz/otomotiv-ve-yan-sanayi": "/en/products/automative-and-sub-industry",

    "/tr/medya/haberler": "/en/media/news",
    "/tr/medya/galeri": "/en/media/gallery",

    "/tr/insan-kaynaklari/prensiplerimiz": "/en/human-resources/our-principles",
    "/tr/insan-kaynaklari/ise-alim": "/en/human-resources/recruitment",
    "/tr/insan-kaynaklari/staj": "/en/human-resources/internship",

    "/tr/iletisim": "/en/contact",

    "/tr/urunlerimiz/gida-ve-tarim/gidalar": "/en/products/food-and-agriculture/foods",
    "/tr/urunlerimiz/otomotiv-ve-yan-sanayi/tekerlekler": "/en/products/automative-and-sub-industry/tires"
}


packagingTypeDataTR.map((p, idx) => tr_to_en_dict[`/tr/urunlerimiz/plastik-urunler-ve-uretimi/${p.url}`] = `/en/products/plastic-products-and-production/${packagingTypeData[idx].url}`)