(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_page_jsx_430fe3._.js", {

"[project]/src/app/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const ScrollableCards = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex overflow-x-scroll space-x-4 p-4 scrollbar-cute border-2 border-gray lg:justify-center rounded-xl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = ScrollableCards;
const Card = ({ title, description, chair, co_chair, imgUrl })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden p-3  w-64 lg:w-[26vw] border bg-white bg-opacity-50 backdrop-blur-4xl  shadow-md shadow-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imgUrl,
                alt: title,
                className: "w-full h-64 object-cover object-center rounded-[40px] lg:h-[45vh]  shadow-lg shadow-black"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-2 text-center",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "text-xs font-bold text-gray-500 text-center h-10",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            title === 'UNHRC' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/UNHRC",
                className: "flex items-center px-4 py-2 bg-yellow-100 text-white-800 rounded-lg shadow hover:bg-gray-200 transition justify-center border  shadow-xl shadow-black",
                children: " Explore/Join"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            title === 'UNCOPUOS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/UNCOPUOS",
                className: "flex items-center px-4 py-2 bg-yellow-100 text-white-800 rounded-lg shadow hover:bg-gray-200 transition justify-center border shadow-xl shadow-black",
                children: " Explore/Join"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            title === 'NYP' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/NYP",
                className: "flex items-center px-4 py-2 bg-yellow-100 text-white-800 rounded-lg shadow hover:bg-gray-200 transition justify-center border shadow-xl shadow-black",
                children: " Explore/Join"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c1 = Card;
const cardsData = [
    {
        title: 'UNHRC',
        description: 'United Nations Human Rights Council',
        imgUrl: 'UNHRC.jpg'
    },
    {
        title: 'UNCOPUOS',
        description: 'United Nations Committee on the Peaceful Uses of Outer Space',
        imgUrl: 'UNCOPUOS.jpg'
    },
    {
        title: 'NYP',
        description: 'National Youth Parliament',
        imgUrl: 'NYP.jpg'
    }
];
function Home() {
    _s();
    const { status, data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const loa574 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loa574.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loading('checking authentication');
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (status !== 'loading') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dismiss(loa574.current);
            }
        }
    }["Home.useEffect"], [
        status
    ]);
    const [id, setid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paid, setpaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comt, setcomt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [country, setcountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handsub = async (e)=>{
        e.preventDefault();
        const added = await addtofs(id, paid, comt, country);
        if (added) {
            setid("");
            setpaid('');
            setcomt('');
            setcountry('');
            alert("data uploaded");
        }
    };
    function downloadPDF() {
        const link = document.createElement('a');
        link.href = 'broc.pdf'; // Path to the PDF file
        link.download = 'broc.pdf'; // Name of the file to be saved as
        link.click();
    }
    const getUdata = async ()=>{
        const res = await fetch("/api/clicked", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: session?.user?.email
            })
        });
        const resjson = await res.json();
        console.log(resjson);
        if (resjson?.college === 'your college' || resjson?.mobile === '0000000000') {
            window.location.href = '/profile';
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (session?.user) {
                getUdata();
            }
        }
    }["Home.useEffect"], [
        session?.user
    ]);
    const slidesData = [
        {
            slideno: 1,
            imgurl: 'g20-1.jpg',
            title: 'MUN 2024',
            description: 'g20'
        },
        {
            slideno: 2,
            imgurl: 'g20-2.jpg',
            title: 'MUN 2025',
            description: '21st - 23rd FEB'
        }
    ];
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Custom arrow components
    const NextArrow = ({ onClick })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-10 text-white shadow-lg cursor-pointer rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center",
            onClick: onClick,
            "aria-label": "Next",
            children: "❯"
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    };
    const PrevArrow = ({ onClick })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-10 text-white shadow-lg cursor-pointer rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center",
            onClick: onClick,
            "aria-label": "Previous",
            children: "❮"
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-8 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white backdrop-blur-4xl bg-opacity-50 rounded-xl text-white py-2 mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scrolling-text text-xl font-semibold",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "🚨 Thank you for being a part of IIST MUN '25 🚨 || \"Stay tuned for IIST MUN '26 – coming soon!\""
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center container border w-4/5 mx-auto rounded-lg p-5 mb-10  shadow-xl shadow-black overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "favicon.ico",
                                alt: "logo",
                                className: "h-20"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg lg:text-2xl font-bold text-gray-900 mb-4",
                        children: "Welcome to IIST Model United Nations"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "slideshow-container mx-auto relative pb-10 rounded-2xl border border-black max-h-[20vh] lg:max-h-[50vh] max-w-3xl overflow-hidden  shadow-xl shadow-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ref: sliderRef,
                                ...settings,
                                children: slidesData.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full max-h-[20vh]  lg:max-h-[50vh]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                loading: "lazy",
                                                style: {
                                                    backgroundImage: `url(${slide.imgurl})`
                                                },
                                                className: ` bg-center bg-cover h-[20vh] lg:h-[50vh] overflow-hidden`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-1 lg:py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white text-md lg:text-5xl font-bold",
                                                        children: slide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-sm lg:text-lg",
                                                        children: slide.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, slide.slideno, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NextArrow, {
                                onClick: ()=>sliderRef.current.slickNext()
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrevArrow, {
                                onClick: ()=>sliderRef.current.slickPrev()
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg  shadow-xl shadow-black p-5 border bg-white bg-opacity-50 backdrop-blur-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-gray-900 pl-0 lg:pl-16 text-center lg:text-left",
                            children: "About IIST"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4 text-sm ",
                                            children: "Indian Institute of Space Science and Technology (IIST) is a government-aided institute and deemed university for the study and research of space science in Thiruvananthapuram, India. IIST was set up in 2007 by the Indian Space Research Organisation (ISRO) under the Department of Space, Government of India. Indian Institute of Space Science and Technology Thiruvananthapuram is Asia's first space university. It was inaugurated on 14 September 2007 by G. Madhavan Nair, the then Chairman of ISRO. A. P. J. Abdul Kalam, former President of India, was the first Chancellor of IIST. IIST offers regular engineering undergraduate, postgraduate and doctorate programmes with focus on space science, technology and applications."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Located in Thiruvananthapuram, Kerala, IIST is Asia's first Space University, nurturing exceptional talent for the future of space exploration and research."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "iistpic.jpg",
                                        alt: "IIST Campus",
                                        className: "rounded-lg shadow-md object-center h-[40vh] lg:h-[60vh] object-cover w-full mx-auto "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg lg:w-3/5  p-4 mx-10  shadow-xl shadow-black lg:mx-auto my-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center text-white text-4xl",
                        children: "Chief Guest"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "guest.png",
                        alt: "",
                        className: "rounded-xl w-3/5 mx-auto my-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center text-gray-300 text-3xl",
                        children: "Amb. T.P. Sreenivasan IFS (Rtd.)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center text-gray-400  text-sm",
                        children: "Thettalil Parameswaran Pillai Sreenivasan ,an Indian former diplomat and is the head of the Council for Higher Education of the State of Kerala and also an adjunct professor of eminence at Somaiya Vidyavihar University."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-16 mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center my-auto pb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                className: "h-12 w-12 text-blue-600 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Our Sponsors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mt-2",
                                children: "Proud partners supporting the future of diplomatic excellence"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white hidden border-b-2 m-2 w-1/2 mx-auto mb-4 text-center lg:block",
                        children: "Title Sponsor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md overflow-hidden mx-10 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl flex-row shadow-xl shadow-black hidden lg:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://imgs.search.brave.com/LJpx2Sb3lmmXusU1tBFHeyfP5a02U7c55jAkpARojb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjUw/MzY3MTRzLnBuZw",
                                alt: "LIC",
                                className: "w-1/2 h-48 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-gray-900 mb-2",
                                        children: "LIC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "The Life Insurance Corporation (LIC) of India is a government-owned insurance company offering various life insurance products and services."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white hidden m-2 text-center border-b-2 mx-auto w-1/2 mb-4 lg:block",
                        children: "Sponsors"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center justify-center lg:h-[50vh] gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-white block border-b-2 m-2 w-1/2 text-center lg:hidden",
                                children: "Title Sponsor"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden lg:w-1/3 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl  shadow-xl shadow-black block lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://imgs.search.brave.com/LJpx2Sb3lmmXusU1tBFHeyfP5a02U7c55jAkpARojb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjUw/MzY3MTRzLnBuZw",
                                        alt: "IEEE",
                                        className: "max-w-[300px] w-full h-auto object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 313,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: "LIC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "The Life Insurance Corporation (LIC) of India is a government-owned insurance company offering various life insurance products and services."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-white block m-2 w-1/2 mx-auto text-center border-b-2 lg:hidden",
                                children: "Sponsors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden lg:w-1/3 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl  shadow-xl shadow-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://content.jdmagicbox.com/comp/thiruvananthapuram/i4/0471px471.x471.001079582788.l7i4/catalogue/time-institute-sreekaryam-thiruvananthapuram-tutorials-for-entrance-examination-07cusanafv.jpg",
                                        alt: "time",
                                        className: "w-full h-48 object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 333,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-2",
                                                children: "T.I.M.E"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "The Time Triumphant Institute of Management and Education offers management and education programs, focusing on skill development and career advancement."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden lg:w-1/3 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl  shadow-xl shadow-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "ieee.jpg",
                                        alt: "IEEE",
                                        className: "w-full h-48 object-contain bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-2",
                                                children: "IEEE IIST"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "IEEE (Institute of Electrical and Electronics Engineers) is a global organization advancing technology, innovation, and standards in engineering and computing."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden lg:w-1/3 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl  shadow-xl shadow-black ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/media/18/03/2013/1363539652036250400.jpg",
                                        alt: "malabar",
                                        className: "w-full h-48 object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-2",
                                                children: "Malabar Gold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Malabar Gold & Diamonds is a leading jewelry retailer, offering a wide range of gold, diamond, and precious stone collections."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-white block border-b-2 mb-4 m-2 lg:w-1/2 text-center block lg:hidden",
                                children: "Food Partner"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden bg-white lg:w-1/3 lg:h-full bg-opacity-50 backdrop-blur-4xl  shadow-xl shadow-black block lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAB//9k=",
                                        alt: "Pizza Hut",
                                        className: "w-full h-48 object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: "Pizza Hut"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Pizza Hut is a popular global chain known for its delicious pizzas, pasta, wings, and unique crusts, providing a variety of flavors."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white hidden border-b-2 mb-4 m-2 lg:w-1/2  mx-auto text-center lg:block",
                        children: "Food Partner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md overflow-hidden mx-10 lg:h-full bg-white bg-opacity-50 backdrop-blur-4xl flex-row shadow-xl shadow-black hidden lg:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYADY2AA2NgANjYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAAwMAAMDAADAwAB//9k=",
                                alt: "Pizza Hut",
                                className: "w-1/2 h-48 object-cover border rounded-t-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-2",
                                        children: "Pizza Hut"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Pizza Hut is a popular global chain known for its delicious pizzas, pasta, wings, and unique crusts, providing a variety of flavors."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "committee",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollableCards, {
                    children: cardsData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            title: card.title,
                            description: card.description,
                            imgUrl: card.imgUrl,
                            chair: card.chair,
                            co_chair: card.co_chair
                        }, index, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("object", {
                data: "broc.pdf",
                type: "application/pdf",
                className: "items-center  justify-center w-[60vw] lg:w-[70vw] h-[40vh] lg:h-[70vh] m-5 rounded-lg mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center flex-col gap-5 items-center  w-full  border border-white rounded-lg mx-auto m-5 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-center text-2xl text-white font bold",
                            children: [
                                "BROCHURE : ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 428,
                                    columnNumber: 24
                                }, this),
                                "IIST MUN 2025"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-center text-xs text-white font bold",
                            children: "Your browser doesn't support to view PDFs*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: 'broc.pdf',
                            className: "border rounded-lg flex px-4 py-5 text-center bg-green-600 text-white text-lg gap-2 lg:text-2xl font-bold bg-opacity-50 backdrop-blur-4xl",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                                    className: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                "Download it"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(Home, "Z/1CcLXlWyIet/jvrKKIaYk2kv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c2 = Home;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ScrollableCards");
__turbopack_refresh__.register(_c1, "Card");
__turbopack_refresh__.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_page_jsx_430fe3._.js.map