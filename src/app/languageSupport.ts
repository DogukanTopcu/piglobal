import { automativeProductsSubtitles, automativeTypeData } from "./en/data/automativeProductsData"
import { foodTypeData } from "./en/data/foodProductsData"
import { packagingTypeData } from "./en/data/plasticProductsData"
import { automativeProductsSubtitlesTR, automativeTypeDataTR } from "./tr/data/automativeProductsDataTR"
import { foodTypeDataTR } from "./tr/data/foodProductsDataTR"
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
}

packagingTypeData.map((p, idx) => en_to_tr_dict[`/en/products/plastic-products-and-production/${p.url}`] = `/tr/urunlerimiz/plastik-urunler-ve-uretimi/${packagingTypeDataTR[idx].url}`)

foodTypeData.map((p, idx) => en_to_tr_dict[`/en/products/food-and-agriculture/${p.url}`] = `/tr/urunlerimiz/food-and-agriculture/${foodTypeDataTR[idx].url}`)

automativeTypeData.map((a, idx) => {
    en_to_tr_dict[`/en/products/automative-and-sub-industry/${a.url}`] = `/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${automativeTypeDataTR[idx].url}`

    automativeProductsSubtitles.filter((b) => b.category == a.title).map((d) => {
        en_to_tr_dict[`/en/products/automative-and-sub-industry/${a.url}/${d.url}`] = `/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${automativeTypeDataTR[idx].url}/${d.toTR}`
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
}


packagingTypeDataTR.map((p, idx) => tr_to_en_dict[`/tr/urunlerimiz/plastik-urunler-ve-uretimi/${p.url}`] = `/en/products/plastic-products-and-production/${packagingTypeData[idx].url}`)

automativeTypeDataTR.map((a, idx) => {
    tr_to_en_dict[`/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${a.url}`] = `/en/products/automative-and-sub-industry/${automativeTypeData[idx].url}`

    automativeProductsSubtitlesTR.filter((b) => b.category == a.title).map((d) => {
        tr_to_en_dict[`/tr/urunlerimiz/otomotiv-ve-yan-sanayi/${a.url}/${d.url}`] = `/en/products/automative-and-sub-industry/${automativeTypeData[idx].url}/${d.toEng}`
    })
})