(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{219:function(e,t,a){"use strict";a.r(t);var r=a(6),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"writing-an-isf-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-an-isf-module"}},[e._v("#")]),e._v(" Writing an ISF Module")]),e._v(" "),t("p",[e._v("We're going to write a Module which works with the built-in "),t("code",[e._v("isf")]),e._v(" Renderer.")]),e._v(" "),t("p",[e._v("To follow this guide, we'd recommend having some experience with:")]),e._v(" "),t("ul",[t("li",[e._v("JavaScript (ES6+)")]),e._v(" "),t("li",[e._v("GLSL\n"),t("ul",[t("li",[e._v("if you don't already have experience with GLSL then we recommend ???")])])]),e._v(" "),t("li",[e._v("Interactive Shader Format")])]),e._v(" "),t("h2",{attrs:{id:"what-is-isf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-isf"}},[e._v("#")]),e._v(" What is ISF?")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("I")]),e._v("nteractive "),t("strong",[e._v("S")]),e._v("hader "),t("strong",[e._v("F")]),e._v("ormat is a GLSL format which provides helpful method, common uniforms and also includes a JSON block at the top of the file, defining inputs which can be parsed to create user editable controls.")]),e._v(" "),t("p",[e._v("ISF's JSON block also defines the author, description of the shader and render passes. You can learn more about the Interactive Shader Format specification on their website: "),t("a",{attrs:{href:"https://www.interactiveshaderformat.com/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.interactiveshaderformat.com/spec"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_1-create-a-new-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-file"}},[e._v("#")]),e._v(" 1. Create a new file")]),e._v(" "),t("p",[e._v("Save a blank JavaScript file in the "),t("RouterLink",{attrs:{to:"/guide/mediaManager.html#media-folder"}},[e._v("Media Manager's media directory")]),e._v(". This will need to be placed in a "),t("code",[e._v("module")]),e._v(" folder within a Project folder. e.g. "),t("code",[e._v("[media path]/[project]/module")]),e._v(".")],1),e._v(" "),t("p",[e._v("By saving your Module here the Media Manager will compile your code and send it to modV on every file save. If you've placed your Module within a Layer already, you'll need to remove it from the Layer and drag your Module in again from the Gallery to use the updated Module.")]),e._v(" "),t("h2",{attrs:{id:"_2-export-an-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-export-an-object"}},[e._v("#")]),e._v(" 2. Export an Object")]),e._v(" "),t("p",[e._v("Let's get started by exporting an Object. modV Modules are written out as a plain Object.")]),e._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"_3-set-up-the-meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-up-the-meta"}},[e._v("#")]),e._v(" 3. Set up the Meta")]),e._v(" "),t("p",[e._v("Next up, we'll need to describe our Module with a meta Object block.\nLet's define the Module type as "),t("code",[e._v("isf")]),e._v(" and give our Module a name.")]),e._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("meta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// this tells modV our Module should be used with the isf renderer")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'isf'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// our Module's name")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Echo Trace'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"_4-define-our-shaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-define-our-shaders"}},[e._v("#")]),e._v(" 4. Define our Shaders")]),e._v(" "),t("p",[e._v("In "),t("code",[e._v("isf")]),e._v(" type Modules, there are two properties on the Module body to define the Shaders we want to use:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("fragmentShader")])]),e._v(" "),t("li",[t("code",[e._v("vertexShader")])])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("fragmentShader")]),e._v(" is required, but the "),t("code",[e._v("vertexShader")]),e._v(" is optional. Both variables only accept Strings.")]),e._v(" "),t("p",[e._v("If you have a larger shader or require syntax highlighting, you may import your shaders using:")]),e._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" fragmentShader "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'circles.frag'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" vertexShader "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'circles.vert'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("We'll only be using the "),t("code",[e._v("fragmentShader")]),e._v(" property in this guide:")]),e._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// meta: { ... },")]),e._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("fragmentShader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\n    /*{\n      "DESCRIPTION": "Pixel with brightness levels below the threshold do not update.",\n      "CREDIT": "by VIDVOX",\n      "CATEGORIES": [\n        "Glitch"\n      ],\n      "INPUTS": [\n        {\n          "NAME": "inputImage",\n          "TYPE": "image"\n        },\n        {\n          "NAME": "thresh",\n          "LABEL": "Threshold",\n          "TYPE": "float",\n          "MIN": 0,\n          "MAX": 1,\n          "DEFAULT": 0.25\n        },\n        {\n          "NAME": "gain",\n          "LABEL": "Gain",\n          "TYPE": "float",\n          "MIN": 0,\n          "MAX": 2,\n          "DEFAULT": 1\n        },\n        {\n          "NAME": "hardCutoff",\n          "LABEL": "Hard Cutoff",\n          "TYPE": "bool",\n          "DEFAULT": true\n        },\n        {\n          "NAME": "invert",\n          "LABEL": "Invert",\n          "TYPE": "bool",\n          "DEFAULT": false\n        }\n      ],\n      "PASSES": [\n        {\n          "TARGET": "bufferVariableNameA",\n          "persistent": true\n        },\n        {}\n      ]\n    }*/\n\n    void main() {\n        vec4 freshPixel = IMG_PIXEL(inputImage,gl_FragCoord.xy);\n        vec4 stalePixel = IMG_PIXEL(bufferVariableNameA,gl_FragCoord.xy);\n        float brightLevel = (freshPixel.r + freshPixel.b + freshPixel.g) / 3.0;\n        if (invert) {\n\t\t  brightLevel = 1.0 - brightLevel;\n        }\n        brightLevel = brightLevel * gain;\n        if (hardCutoff)\t{\n          if (brightLevel < thresh) {\n            brightLevel = 1.0;\n          } else {\n           brightLevel = 0.0;\n          }\n        }\n        gl_FragColor = mix(freshPixel,stalePixel, brightLevel);\n    }\n  ')]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"_5-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-props"}},[e._v("#")]),e._v(" 5. Props")]),e._v(" "),t("p",[t("code",[e._v("isf")]),e._v(" Modules' props are primarily auto-generated from the JSON block at the top of the file. However, if custom controls are required, props may be defined with the same uniform name as in the shader.")]),e._v(" "),t("p",[e._v("Please refer to section 4 of Writing A Shader Module for prop syntax.")]),e._v(" "),t("h2",{attrs:{id:"_6-putting-everything-together"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-putting-everything-together"}},[e._v("#")]),e._v(" 6. Putting everything together")]),e._v(" "),t("p",[e._v("The following code puts together everything from above:")]),e._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("meta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'isf'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Echo Trace'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("fragmentShader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\n    /*{\n      "DESCRIPTION": "Pixel with brightness levels below the threshold do not update.",\n      "CREDIT": "by VIDVOX",\n      "CATEGORIES": [\n        "Glitch"\n      ],\n      "INPUTS": [\n        {\n          "NAME": "inputImage",\n          "TYPE": "image"\n        },\n        {\n          "NAME": "thresh",\n          "LABEL": "Threshold",\n          "TYPE": "float",\n          "MIN": 0,\n          "MAX": 1,\n          "DEFAULT": 0.25\n        },\n        {\n          "NAME": "gain",\n          "LABEL": "Gain",\n          "TYPE": "float",\n          "MIN": 0,\n          "MAX": 2,\n          "DEFAULT": 1\n        },\n        {\n          "NAME": "hardCutoff",\n          "LABEL": "Hard Cutoff",\n          "TYPE": "bool",\n          "DEFAULT": true\n        },\n        {\n          "NAME": "invert",\n          "LABEL": "Invert",\n          "TYPE": "bool",\n          "DEFAULT": false\n        }\n      ],\n      "PASSES": [\n        {\n          "TARGET": "bufferVariableNameA",\n          "persistent": true\n        },\n        {}\n      ]\n    }*/\n\n    void main() {\n        vec4 freshPixel = IMG_PIXEL(inputImage,gl_FragCoord.xy);\n        vec4 stalePixel = IMG_PIXEL(bufferVariableNameA,gl_FragCoord.xy);\n        float brightLevel = (freshPixel.r + freshPixel.b + freshPixel.g) / 3.0;\n        if (invert) {\n\t\t  brightLevel = 1.0 - brightLevel;\n        }\n        brightLevel = brightLevel * gain;\n        if (hardCutoff)\t{\n          if (brightLevel < thresh) {\n            brightLevel = 1.0;\n          } else {\n           brightLevel = 0.0;\n          }\n        }\n        gl_FragColor = mix(freshPixel,stalePixel, brightLevel);\n    }\n  ')]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);