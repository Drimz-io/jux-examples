/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { useEffect, useMemo } from "react";
import { useLoadFonts } from "@jux/dui";

const fonts = [
  {
    family: "Alegreya",
    variants: [
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v35",
    lastModified: "2023-03-21",
    files: {
      "500":
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGxBUI_KCisSGVrw.ttf",
      "600":
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGKBII_KCisSGVrw.ttf",
      "700":
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGERII_KCisSGVrw.ttf",
      "800":
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGdhII_KCisSGVrw.ttf",
      "900":
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGXxII_KCisSGVrw.ttf",
      regular:
        "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hUI_KCisSGVrw.ttf",
      italic:
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlbgv6qmkySFr9V9.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlbSv6qmkySFr9V9.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlY-uKqmkySFr9V9.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlYHuKqmkySFr9V9.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlZguKqmkySFr9V9.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlZJuKqmkySFr9V9.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4_aqm.ttf",
  },
  {
    family: "Alegreya Sans",
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v24",
    lastModified: "2022-12-08",
    files: {
      "100":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUt9_-1phKLFgshYDvh6Vwt5TltuGdShm5bsg.ttf",
      "300":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5fFPmE18imdCqxI.ttf",
      "500":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5alOmE18imdCqxI.ttf",
      "700":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5eFImE18imdCqxI.ttf",
      "800":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5f1LmE18imdCqxI.ttf",
      "900":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5dlKmE18imdCqxI.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUv9_-1phKLFgshYDvh6Vwt7V9V3G1WpGtLsgu7.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VFE92jkVHuxKiBA.ttf",
      regular:
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUz9_-1phKLFgshYDvh6Vwt3V1nvEVXlm4.ttf",
      italic:
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUt9_-1phKLFgshYDvh6Vwt7V9tuGdShm5bsg.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VTE52jkVHuxKiBA.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VBEh2jkVHuxKiBA.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VGEt2jkVHuxKiBA.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VPEp2jkVHuxKiBA.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/alegreyasans/v24/5aUz9_-1phKLFgshYDvh6Vwt7VxtuA.ttf",
  },
  {
    family: "Archivo Narrow",
    variants: [
      "regular",
      "500",
      "600",
      "700",
      "italic",
      "500italic",
      "600italic",
      "700italic",
    ],
    subsets: ["latin", "latin-ext", "vietnamese"],
    version: "v30",
    lastModified: "2023-09-14",
    files: {
      "500":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvHlGKpHOtFCQ76Q.ttf",
      "600":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhv8laKpHOtFCQ76Q.ttf",
      "700":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvy1aKpHOtFCQ76Q.ttf",
      regular:
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvLFGKpHOtFCQ76Q.ttf",
      italic:
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BJi53mpNiEr6T6Y.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BJQ53mpNiEr6T6Y.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BK84HmpNiEr6T6Y.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/archivonarrow/v30/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BKF4HmpNiEr6T6Y.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/archivonarrow/v30/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvLFG6pXmp.ttf",
  },
  {
    family: "BioRhyme",
    variants: ["200", "300", "regular", "500", "600", "700", "800"],
    subsets: ["latin", "latin-ext"],
    version: "v17",
    lastModified: "2023-10-25",
    files: {
      "200":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OrIimiaki-gkRDE.ttf",
      "300":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4Omwimiaki-gkRDE.ttf",
      "500":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OgAimiaki-gkRDE.ttf",
      "600":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4Ouwlmiaki-gkRDE.ttf",
      "700":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OtUlmiaki-gkRDE.ttf",
      "800":
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OrIlmiaki-gkRDE.ttf",
      regular:
        "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OjIimiaki-gkRDE.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/biorhyme/v17/1cXeaULHBpDMsHYW_GZNh7loEHurwOIGadI205trrbeBgQs4OjIiqieujw.ttf",
  },
  {
    family: "Cardo",
    variants: ["regular", "italic", "700"],
    subsets: ["greek", "greek-ext", "latin", "latin-ext"],
    version: "v19",
    lastModified: "2022-09-22",
    files: {
      "700":
        "http://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-aQR82JHaTBX.ttf",
      regular:
        "http://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqiv_1oAZ2H5O.ttf",
      italic:
        "http://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv93IQ73W5OcCk.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv-3IQ.ttf",
  },
  {
    family: "Chivo",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: ["latin", "latin-ext", "vietnamese"],
    version: "v18",
    lastModified: "2022-11-18",
    files: {
      "100":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_vB7ul2DSFXjQiQ.ttf",
      "200":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_PB_ul2DSFXjQiQ.ttf",
      "300":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_4h_ul2DSFXjQiQ.ttf",
      "500":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_jh_ul2DSFXjQiQ.ttf",
      "600":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_Yhjul2DSFXjQiQ.ttf",
      "700":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_Wxjul2DSFXjQiQ.ttf",
      "800":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_PBjul2DSFXjQiQ.ttf",
      "900":
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjul2DSFXjQiQ.ttf",
      regular:
        "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_vB_ul2DSFXjQiQ.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFwG1WrWN33AiasJ.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFyG1GrWN33AiasJ.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFxY1GrWN33AiasJ.ttf",
      italic:
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFwG1GrWN33AiasJ.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFw01GrWN33AiasJ.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFzY02rWN33AiasJ.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFzh02rWN33AiasJ.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFyG02rWN33AiasJ.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFyv02rWN33AiasJ.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_vB_elmrW.ttf",
  },
  {
    family: "DM Sans",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: ["latin", "latin-ext"],
    version: "v14",
    lastModified: "2023-07-13",
    files: {
      "100":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAop1hTmf3ZGMZpg.ttf",
      "200":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIpxhTmf3ZGMZpg.ttf",
      "300":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhTmf3ZGMZpg.ttf",
      "500":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTmf3ZGMZpg.ttf",
      "600":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJthTmf3ZGMZpg.ttf",
      "700":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf",
      "800":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIpthTmf3ZGMZpg.ttf",
      "900":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAC5thTmf3ZGMZpg.ttf",
      regular:
        "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDG3zRmYJpso5.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8JDW3zRmYJpso5.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat_XDW3zRmYJpso5.ttf",
      italic:
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDW3zRmYJpso5.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW3zRmYJpso5.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9XCm3zRmYJpso5.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm3zRmYJpso5.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8JCm3zRmYJpso5.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/dmsans/v14/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8gCm3zRmYJpso5.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRT23z.ttf",
  },
  {
    family: "Fira Sans",
    variants: [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v17",
    lastModified: "2023-05-02",
    files: {
      "100":
        "http://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5Vn9IjOazP3dUTP.ttf",
      "200":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnWKnuQR37fF3Wlg.ttf",
      "300":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKruQR37fF3Wlg.ttf",
      "500":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKvuQR37fF3Wlg.ttf",
      "600":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzuQR37fF3Wlg.ttf",
      "700":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3uQR37fF3Wlg.ttf",
      "800":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7uQR37fF3Wlg.ttf",
      "900":
        "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnFK_uQR37fF3Wlg.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9A4kDNxMZdWfMOD5VvkrCqYTfVcFTPj0s.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAGQBf_XljGllLX.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBiQxf_XljGllLX.ttf",
      regular:
        "http://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VfkILKSTbndQ.ttf",
      italic:
        "http://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkojOazP3dUTP.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qhf_XljGllLX.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRRf_XljGllLX.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrByRBf_XljGllLX.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBuRxf_XljGllLX.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBKRhf_XljGllLX.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvkYjO.ttf",
  },
  {
    family: "IBM Plex Sans",
    variants: [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v19",
    lastModified: "2023-05-02",
    files: {
      "100":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX-KVElMYYaJe8bpLHnCwDKjbLeEKxIedbzDw.ttf",
      "200":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjR7_MIZmdd_qFmo.ttf",
      "300":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjXr8MIZmdd_qFmo.ttf",
      "500":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjSL9MIZmdd_qFmo.ttf",
      "600":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjQ76MIZmdd_qFmo.ttf",
      "700":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjWr7MIZmdd_qFmo.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX8KVElMYYaJe8bpLHnCwDKhdTmdKZMW9PjD3N8.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTm2Idscf3vBmpl8A.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRscf3vBmpl8A.ttf",
      regular:
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKtdbUFI5NadY.ttf",
      italic:
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX-KVElMYYaJe8bpLHnCwDKhdTeEKxIedbzDw.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTm5IVscf3vBmpl8A.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJscf3vBmpl8A.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdTmrINscf3vBmpl8A.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKhdfeEA.ttf",
  },
  {
    family: "Inter",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v13",
    lastModified: "2023-09-14",
    files: {
      "100":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
      "200":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
      "300":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
      "500":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      "600":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      "700":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      "800":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
      "900":
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
      regular:
        "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZlhjQ.ttf",
  },
  {
    family: "Karla",
    variants: [
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
    ],
    subsets: ["latin", "latin-ext"],
    version: "v31",
    lastModified: "2023-09-27",
    files: {
      "200":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDeJqqFENLR7fHGw.ttf",
      "300":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDppqqFENLR7fHGw.ttf",
      "500":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDypqqFENLR7fHGw.ttf",
      "600":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDJp2qFENLR7fHGw.ttf",
      "700":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDH52qFENLR7fHGw.ttf",
      "800":
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTDeJ2qFENLR7fHGw.ttf",
      regular:
        "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqqFENLR7fHGw.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNnCV0lPZbLXGxGR.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNkcV0lPZbLXGxGR.ttf",
      italic:
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlCV0lPZbLXGxGR.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlwV0lPZbLXGxGR.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNmcUElPZbLXGxGR.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNmlUElPZbLXGxGR.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/karla/v31/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNnCUElPZbLXGxGR.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/karla/v31/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaFUlP.ttf",
  },
  {
    family: "Lato",
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic",
    ],
    subsets: ["latin", "latin-ext"],
    version: "v24",
    lastModified: "2023-05-02",
    files: {
      "100":
        "http://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
      "300":
        "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
      "700":
        "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
      "900":
        "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
      regular:
        "http://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
      italic:
        "http://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxgwWw.ttf",
  },
  {
    family: "Libre Baskerville",
    variants: ["regular", "italic", "700"],
    subsets: ["latin", "latin-ext"],
    version: "v14",
    lastModified: "2022-09-22",
    files: {
      "700":
        "http://fonts.gstatic.com/s/librebaskerville/v14/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTjYwI8Gcw6Oi.ttf",
      regular:
        "http://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0pNeYRI4CN2V.ttf",
      italic:
        "http://fonts.gstatic.com/s/librebaskerville/v14/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcaxYaDc2V2ro.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNfaxY.ttf",
  },
  {
    family: "Libre Franklin",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: ["latin", "latin-ext", "vietnamese"],
    version: "v14",
    lastModified: "2023-09-14",
    files: {
      "100":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsSUB9rIb-JH1g.ttf",
      "200":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhrsWUB9rIb-JH1g.ttf",
      "300":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhcMWUB9rIb-JH1g.ttf",
      "500":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhHMWUB9rIb-JH1g.ttf",
      "600":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduh8MKUB9rIb-JH1g.ttf",
      "700":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhycKUB9rIb-JH1g.ttf",
      "800":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhrsKUB9rIb-JH1g.ttf",
      "900":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhh8KUB9rIb-JH1g.ttf",
      regular:
        "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsWUB9rIb-JH1g.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZ8RdDMTedX1sGE.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05ob8RNDMTedX1sGE.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oYiRNDMTedX1sGE.ttf",
      italic:
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZ8RNDMTedX1sGE.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZORNDMTedX1sGE.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oaiQ9DMTedX1sGE.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oabQ9DMTedX1sGE.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05ob8Q9DMTedX1sGE.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/librefranklin/v14/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05obVQ9DMTedX1sGE.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/librefranklin/v14/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsWkBtDM.ttf",
  },
  {
    family: "Lora",
    variants: [
      "regular",
      "500",
      "600",
      "700",
      "italic",
      "500italic",
      "600italic",
      "700italic",
    ],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    version: "v32",
    lastModified: "2023-02-22",
    files: {
      "500":
        "http://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787wsuyJGmKxemMeZ.ttf",
      "600":
        "http://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787zAvCJGmKxemMeZ.ttf",
      "700":
        "http://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787z5vCJGmKxemMeZ.ttf",
      regular:
        "http://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuyJGmKxemMeZ.ttf",
      italic:
        "http://fonts.gstatic.com/s/lora/v32/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-MoFkqh8ndeZzZ0.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/lora/v32/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-PgFkqh8ndeZzZ0.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/lora/v32/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-BQCkqh8ndeZzZ0.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/lora/v32/0QI8MX1D_JOuMw_hLdO6T2wV9KnW-C0Ckqh8ndeZzZ0.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJHkqg.ttf",
  },
  {
    family: "Merriweather",
    variants: [
      "300",
      "300italic",
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic",
    ],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    version: "v30",
    lastModified: "2022-09-22",
    files: {
      "300":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l521wRpX837pvjxPA.ttf",
      "700":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52xwNpX837pvjxPA.ttf",
      "900":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFpX837pvjxPA.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR7lXcf_hP3hPGWH.ttf",
      regular:
        "http://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5OeyxNV-bnrw.ttf",
      italic:
        "http://fonts.gstatic.com/s/merriweather/v30/u-4m0qyriQwlOrhSvowK_l5-eSZJdeP3r-Ho.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR71Wsf_hP3hPGWH.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf_hP3hPGWH.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-eiZJ.ttf",
  },
  {
    family: "Neuton",
    variants: ["200", "300", "regular", "italic", "700", "800"],
    subsets: ["latin", "latin-ext"],
    version: "v22",
    lastModified: "2023-08-25",
    files: {
      "200":
        "http://fonts.gstatic.com/s/neuton/v22/UMBQrPtMoH62xUZKAKkfegD5Drog6Q.ttf",
      "300":
        "http://fonts.gstatic.com/s/neuton/v22/UMBQrPtMoH62xUZKZKofegD5Drog6Q.ttf",
      "700":
        "http://fonts.gstatic.com/s/neuton/v22/UMBQrPtMoH62xUZKdK0fegD5Drog6Q.ttf",
      "800":
        "http://fonts.gstatic.com/s/neuton/v22/UMBQrPtMoH62xUZKaK4fegD5Drog6Q.ttf",
      regular:
        "http://fonts.gstatic.com/s/neuton/v22/UMBTrPtMoH62xUZyyII7civlBw.ttf",
      italic:
        "http://fonts.gstatic.com/s/neuton/v22/UMBRrPtMoH62xUZCyog_UC71B6M5.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/neuton/v22/UMBTrPtMoH62xUZCyYg_.ttf",
  },
  {
    family: "Open Sans",
    variants: [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v36",
    lastModified: "2023-09-14",
    files: {
      "300":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf",
      "500":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4nY1M2xLER.ttf",
      "600":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",
      "700":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
      "800":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4nY1M2xLER.ttf",
      regular:
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVcUwaERZjA.ttf",
      italic:
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVcUwaERZjA.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVcUwaERZjA.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVcUwaERZjA.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVcUwaERZjA.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVcUwaERZjA.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4maVc.ttf",
  },
  {
    family: "PT Sans",
    variants: ["regular", "italic", "700", "700italic"],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    version: "v17",
    lastModified: "2022-09-22",
    files: {
      "700":
        "http://fonts.gstatic.com/s/ptsans/v17/jizfRExUiTo99u79B_mh4OmnLD0Z4zM.ttf",
      regular:
        "http://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79P0WOxOGMMDQ.ttf",
      italic:
        "http://fonts.gstatic.com/s/ptsans/v17/jizYRExUiTo99u79D0eEwMOJIDQA-g.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/ptsans/v17/jizdRExUiTo99u79D0e8fOytKB8c8zMrig.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79D0SEwA.ttf",
  },
  {
    family: "PT Serif",
    variants: ["regular", "italic", "700", "700italic"],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    version: "v18",
    lastModified: "2023-05-02",
    files: {
      "700":
        "http://fonts.gstatic.com/s/ptserif/v18/EJRSQgYoZZY2vCFuvAnt65qVXSr3pNNB.ttf",
      regular:
        "http://fonts.gstatic.com/s/ptserif/v18/EJRVQgYoZZY2vCFuvDFRxL6ddjb-.ttf",
      italic:
        "http://fonts.gstatic.com/s/ptserif/v18/EJRTQgYoZZY2vCFuvAFTzrq_cyb-vco.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/ptserif/v18/EJRQQgYoZZY2vCFuvAFT9gaQVy7VocNB6Iw.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/ptserif/v18/EJRVQgYoZZY2vCFuvAFQzro.ttf",
  },
  {
    family: "Poppins",
    variants: [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
    subsets: ["devanagari", "latin", "latin-ext"],
    version: "v20",
    lastModified: "2022-09-22",
    files: {
      "100":
        "http://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf",
      "200":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf",
      "300":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
      "500":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf",
      "600":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
      "700":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
      "800":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf",
      "900":
        "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiAyp8kv8JHgFVrJJLmE3tFOvODSVFF.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmv1plEN2PQEhcqw.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21llEN2PQEhcqw.ttf",
      regular:
        "http://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
      italic:
        "http://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLed3FBGPaTSQ.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmg1hlEN2PQEhcqw.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19lEN2PQEhcqw.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15lEN2PQEhcqw.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm111lEN2PQEhcqw.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xlEN2PQEhcqw.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJHedw.ttf",
  },
  {
    family: "Proza Libre",
    variants: [
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
    ],
    subsets: ["latin", "latin-ext"],
    version: "v9",
    lastModified: "2022-09-22",
    files: {
      "500":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyELbV__fcpC69i6N.ttf",
      "600":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEL3UP_fcpC69i6N.ttf",
      "700":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKTUf_fcpC69i6N.ttf",
      "800":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKPUv_fcpC69i6N.ttf",
      regular:
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjGdGHgj0k1DIQRyUEyyHovftvXWYyz.ttf",
      italic:
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjEdGHgj0k1DIQRyUEyyEotdN_1XJyz7zc.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTCvceJSY8z6Np1k.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTAfbeJSY8z6Np1k.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTGPaeJSY8z6Np1k.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTH_ZeJSY8z6Np1k.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/prozalibre/v9/LYjGdGHgj0k1DIQRyUEyyEoudN8.ttf",
  },
  {
    family: "Raleway",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    version: "v29",
    lastModified: "2023-09-14",
    files: {
      "100":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvao4CPNLA3JC9c.ttf",
      "200":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaooCPNLA3JC9c.ttf",
      "300":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEooCPNLA3JC9c.ttf",
      "500":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCPNLA3JC9c.ttf",
      "600":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpYCPNLA3JC9c.ttf",
      "700":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCPNLA3JC9c.ttf",
      "800":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtapYCPNLA3JC9c.ttf",
      "900":
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtzpYCPNLA3JC9c.ttf",
      regular:
        "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCPNLA3JC9c.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjNPrQVIT9c2c8.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejMPrQVIT9c2c8.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4TbMPrQVIT9c2c8.ttf",
      italic:
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMPrQVIT9c2c8.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMPrQVIT9c2c8.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4bbLPrQVIT9c2c8.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4Y_LPrQVIT9c2c8.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejLPrQVIT9c2c8.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4cHLPrQVIT9c2c8.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCOPrQ.ttf",
  },
  {
    family: "Roboto",
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "900",
      "900italic",
    ],
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    version: "v30",
    lastModified: "2022-09-22",
    files: {
      "100":
        "http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgWxPKTM1K9nz.ttf",
      "300":
        "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vAx05IsDqlA.ttf",
      "500":
        "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
      "700":
        "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      "900":
        "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrIzcXLsnzjYk.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TjARc9AMX6lJBP.ttf",
      regular:
        "http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
      italic:
        "http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ABc9AMX6lJBP.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TzBhc9AMX6lJBP.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TLBBc9AMX6lJBP.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5GxP.ttf",
  },
  {
    family: "Rubik",
    variants: [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: [
      "arabic",
      "cyrillic",
      "cyrillic-ext",
      "hebrew",
      "latin",
      "latin-ext",
    ],
    version: "v28",
    lastModified: "2023-06-30",
    files: {
      "300":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-WYi1UE80V4bVkA.ttf",
      "500":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYi1UE80V4bVkA.ttf",
      "600":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-1UE80V4bVkA.ttf",
      "700":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-1UE80V4bVkA.ttf",
      "800":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-h4-1UE80V4bVkA.ttf",
      "900":
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-ro-1UE80V4bVkA.ttf",
      regular:
        "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UE80V4bVkA.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8sDE0UwdYPFkJ1O.ttf",
      italic:
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8tdE0UwdYPFkJ1O.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8tvE0UwdYPFkJ1O.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8uDFEUwdYPFkJ1O.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8u6FEUwdYPFkJ1O.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8vdFEUwdYPFkJ1O.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/rubik/v28/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8v0FEUwdYPFkJ1O.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFUUUw.ttf",
  },
  {
    family: "Space Mono",
    variants: ["regular", "italic", "700", "700italic"],
    subsets: ["latin", "latin-ext", "vietnamese"],
    version: "v13",
    lastModified: "2023-06-22",
    files: {
      "700":
        "http://fonts.gstatic.com/s/spacemono/v13/i7dMIFZifjKcF5UAWdDRaPpZYFKQHwyVd3U.ttf",
      regular:
        "http://fonts.gstatic.com/s/spacemono/v13/i7dPIFZifjKcF5UAWdDRUEZ2RFq7AwU.ttf",
      italic:
        "http://fonts.gstatic.com/s/spacemono/v13/i7dNIFZifjKcF5UAWdDRYER8QHi-EwWMbg.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/spacemono/v13/i7dSIFZifjKcF5UAWdDRYERE_FeaGy6QZ3WfYg.ttf",
    },
    category: "monospace",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/spacemono/v13/i7dPIFZifjKcF5UAWdDRYEd8QA.ttf",
  },
  {
    family: "Spectral",
    variants: [
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
    ],
    subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
    version: "v13",
    lastModified: "2023-01-06",
    files: {
      "200":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9v2s13GY_etWWIJ.ttf",
      "300":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9uSsF3GY_etWWIJ.ttf",
      "500":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9vKsV3GY_etWWIJ.ttf",
      "600":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9vmtl3GY_etWWIJ.ttf",
      "700":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9uCt13GY_etWWIJ.ttf",
      "800":
        "http://fonts.gstatic.com/s/spectral/v13/rnCs-xNNww_2s0amA9uetF3GY_etWWIJ.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qrXHafOPXHIJErY.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qtHEafOPXHIJErY.ttf",
      regular:
        "http://fonts.gstatic.com/s/spectral/v13/rnCr-xNNww_2s0amA-M-mHnOSOuk.ttf",
      italic:
        "http://fonts.gstatic.com/s/spectral/v13/rnCt-xNNww_2s0amA9M8kn3sTfukQHs.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qonFafOPXHIJErY.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qqXCafOPXHIJErY.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qsHDafOPXHIJErY.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/spectral/v13/rnCu-xNNww_2s0amA9M8qt3AafOPXHIJErY.ttf",
    },
    category: "serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/spectral/v13/rnCr-xNNww_2s0amA9M_kn0.ttf",
  },
  {
    family: "Work Sans",
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    subsets: ["latin", "latin-ext", "vietnamese"],
    version: "v19",
    lastModified: "2023-09-14",
    files: {
      "100":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nWNigDp6_cOyA.ttf",
      "200":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K8nXNigDp6_cOyA.ttf",
      "300":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32KxfXNigDp6_cOyA.ttf",
      "500":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNigDp6_cOyA.ttf",
      "600":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNigDp6_cOyA.ttf",
      "700":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QNigDp6_cOyA.ttf",
      "800":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K8nQNigDp6_cOyA.ttf",
      "900":
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K-DQNigDp6_cOyA.ttf",
      regular:
        "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNigDp6_cOyA.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3moJo43ZKyDSQQ.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUXmsJo43ZKyDSQQ.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUgGsJo43ZKyDSQQ.ttf",
      italic:
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3msJo43ZKyDSQQ.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7GsJo43ZKyDSQQ.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUAGwJo43ZKyDSQQ.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUOWwJo43ZKyDSQQ.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUXmwJo43ZKyDSQQ.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUd2wJo43ZKyDSQQ.ttf",
    },
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "http://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBikJow.ttf",
  },
];

export const useFonts = (selectedFontFamilies: string[] = []) => {
  const relevantFonts = useMemo(
    () => fonts.filter((font) => selectedFontFamilies.includes(font.family)),
    [selectedFontFamilies]
  );

  const { loadFonts } = useLoadFonts(relevantFonts);

  useEffect(() => {
    if (!window) return;
    loadFonts(window);
  }, [loadFonts]);
};
