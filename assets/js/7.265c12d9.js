(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(t,e,a){t.exports=a.p+"assets/img/modV_isf_guide_code_editor.dba79ab4.jpg"},204:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"writing-an-isf-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-an-isf-module"}},[t._v("#")]),t._v(" Writing an ISF Module")]),t._v(" "),s("p",[t._v("We're going to write a Module which works with the built-in "),s("code",[t._v("isf")]),t._v(" Renderer.")]),t._v(" "),s("p",[t._v("To follow this guide, we'd recommend having some experience with:")]),t._v(" "),s("ul",[s("li",[t._v("JavaScript (ES6+)")]),t._v(" "),s("li",[t._v("GLSL\n"),s("ul",[s("li",[t._v("if you don't already have experience with GLSL then we recommend "),s("a",{attrs:{href:"https://thebookofshaders.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Book of Shaders"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://isf.video/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interactive Shader Format"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"what-is-isf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-isf"}},[t._v("#")]),t._v(" What is ISF?")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("I")]),t._v("nteractive "),s("strong",[t._v("S")]),t._v("hader "),s("strong",[t._v("F")]),t._v("ormat is a GLSL format which provides helpful method, common uniforms and also includes a JSON block at the top of the file, defining inputs which can be parsed to create user editable controls.")]),t._v(" "),s("p",[t._v("ISF's JSON block also defines the author, description of the shader and render passes. You can learn more about the Interactive Shader Format specification on their website: "),s("a",{attrs:{href:"https://docs.isf.video/ref_index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.isf.video"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_1-create-a-new-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-file"}},[t._v("#")]),t._v(" 1. Create a new file")]),t._v(" "),s("p",[t._v("Save a blank JavaScript file in the "),s("RouterLink",{attrs:{to:"/guide/mediaManager.html#media-folder"}},[t._v("Media Manager's media directory")]),t._v(". This will need to be placed in a "),s("code",[t._v("module")]),t._v(" folder within a Project folder. e.g. "),s("code",[t._v("[media path]/[project]/module")]),t._v(".")],1),t._v(" "),s("p",[t._v("By saving your Module here the Media Manager will compile your code and send it to modV on every file save. If you've placed your Module within a Group already, you'll need to remove it from the Group and drag your Module in again from the Gallery to use the updated Module.")]),t._v(" "),s("h2",{attrs:{id:"_2-export-an-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-export-an-object"}},[t._v("#")]),t._v(" 2. Export an Object")]),t._v(" "),s("p",[t._v("Let's get started by exporting an Object. modV Modules are written out as a plain Object.")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-set-up-the-meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-up-the-meta"}},[t._v("#")]),t._v(" 3. Set up the Meta")]),t._v(" "),s("p",[t._v("Next up, we'll need to describe our Module with a meta Object block.\nLet's define the Module type as "),s("code",[t._v("isf")]),t._v(" and give our Module a "),s("code",[t._v("name")]),t._v(" + "),s("code",[t._v("author")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this tells modV our Module should be used with the isf renderer")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name of the Module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name of the Author'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-parametrize-debug-your-shader-using-the-isf-web-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-parametrize-debug-your-shader-using-the-isf-web-editor"}},[t._v("#")]),t._v(" 4. Parametrize & debug your shader using the ISF web editor")]),t._v(" "),s("p",[t._v("If you already have a shader that you want to transform into ISF, it makes the most sense to use the official "),s("a",{attrs:{href:"https://editor.isf.video/shaders/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISF web editor"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("When you create a new project there, you will see the following default code in the code editor (click on the icon to open it).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(184),alt:"Where to find the ISF Code Editor"}})]),t._v(" "),s("ol",[s("li",[t._v("The first section, which is commented out with "),s("code",[t._v("/* */")]),t._v(" is the ISF JSON block (configuration) with some meta data about the shader, the properties and render passes.")]),t._v(" "),s("li",[t._v("The second part is the code of the shader")])]),t._v(" "),s("p",[t._v("You can remove everything and use this as a starting point for your shader as it already defines some defaults and explains the difference to shadertoy for time and resolution. The "),s("a",{attrs:{href:"https://editor.isf.video/shaders/5fd9d15fd4849b0013135c0e",target:"_blank",rel:"noopener noreferrer"}},[t._v("interactive demo can also be found"),s("OutboundLink")],1),t._v(" to play with.")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*{\n\t"DESCRIPTION": "",\n\t"CREDIT": "",\n\t"ISFVSN": "2",\n\t"CATEGORIES": [\n\t\t"XXX"\n\t],\n\t"INPUTS": [\n\t\t{\n\t\t\t"NAME": "alpha",\n\t\t\t"TYPE": "float",\n\t\t\t"DEFAULT": 0.5,\n\t\t\t"MIN": 0.0,\n\t\t\t"MAX": 1.0\n\t\t}\n\t]\n}*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We can't use")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// void mainImage( out vec4 fragColor, in vec2 fragCoord )")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as we would do in shadertoy, but use main() instead")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ISF is using RENDERSIZE instead of iResolution")]),t._v("\n  vec2 uv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl_FragCoord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RENDERSIZE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ISF is using TIME instead of iTime")]),t._v("\n  float iTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following line is the default code for a shader")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// created in shadertoy")]),t._v("\n  vec3 col "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("uv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xyx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tgl_FragColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If there are any errors the ISF editor will show them to you, which improves debugging a lot. If you still have problems to convert your shader into ISF, you can look into "),s("a",{attrs:{href:"https://docs.isf.video/quickstart.html#converting-non-isf-glsl-shaders-to-isf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Converting Non-ISF GLSL Shaders to ISF"),s("OutboundLink")],1),t._v(" as this covers other differences in the code. And you might want to look at the "),s("a",{attrs:{href:"https://github.com/mrRay/ISF_Spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISF Specification"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"_5-define-your-shader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-define-your-shader"}},[t._v("#")]),t._v(" 5. Define your shader")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("isf")]),t._v(" type Modules, there are two properties on the Module body to define the Shaders we want to use:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("fragmentShader")])]),t._v(" "),s("li",[s("code",[t._v("vertexShader")])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("fragmentShader")]),t._v(" is required, but the "),s("code",[t._v("vertexShader")]),t._v(" is optional. Both variables only accept Strings.")]),t._v(" "),s("p",[t._v("If you have a larger shader or require syntax highlighting, you may import your shaders using:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fragmentShader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gradient.frag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vertexShader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gradient.vert'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("We'll only be using the "),s("code",[t._v("fragmentShader")]),t._v(" property in this guide:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// meta: { ... },")]),t._v("\n\n  fragmentShader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n    /*{\n      "DESCRIPTION": "Get started with ISF using the default shadertoy shader",\n      "CREDIT": "shadertoy",\n      "ISFVSN": "2",\n      "CATEGORIES": [\n        "gradient"\n      ],\n      "INPUTS": [\n        {\n          "NAME": "alpha",\n          "TYPE": "float",\n          "DEFAULT": 0.5,\n          "MIN": 0.0,\n          "MAX": 1.0\n        }\n      ]\n    }*/\n\n    // We can\'t use\n    // void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    // as we would do in shadertoy, but use main() instead\n    void main()\t{\n      // ISF is using RENDERSIZE instead of iResolution\n      vec2 uv = gl_FragCoord.xy/RENDERSIZE.xy;\n\n      // ISF is using TIME instead of iTime\n      float iTime = TIME;\n\n      // The following line is the default code for a shader\n      // created in shadertoy\n      vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n\n      gl_FragColor = vec4(col, alpha);\n    }\n  ')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_6-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-properties"}},[t._v("#")]),t._v(" 6. Properties")]),t._v(" "),s("p",[s("code",[t._v("isf")]),t._v(" Modules' properties are primarily auto-generated from the JSON block at the top of the file. However, if custom controls are required, props may be defined with the same uniform name as in the shader.")]),t._v(" "),s("h2",{attrs:{id:"_7-putting-everything-together"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-putting-everything-together"}},[t._v("#")]),t._v(" 7. Putting everything together")]),t._v(" "),s("p",[t._v("The following code puts together everything from above:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Get started with ISF using the default shadertoy shader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NERDDISCO'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  fragmentShader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n    /*{\n      "DESCRIPTION": "Get started with ISF using the default shadertoy shader",\n      "CREDIT": "shadertoy for the code & NERDDISCO for converting it to ISF",\n      "ISFVSN": "2",\n      "CATEGORIES": [\n        "gradient"\n      ],\n      "INPUTS": [\n        {\n          "NAME": "alpha",\n          "TYPE": "float",\n          "DEFAULT": 0.5,\n          "MIN": 0.0,\n          "MAX": 1.0\n        }\n      ]\n    }*/\n\n    // We can\'t use\n    // void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    // as we would do in shadertoy, but use main() instead\n    void main()\t{\n      // ISF is using RENDERSIZE instead of iResolution\n      vec2 uv = gl_FragCoord.xy/RENDERSIZE.xy;\n\n      // ISF is using TIME instead of iTime\n      float iTime = TIME;\n\n      // The following line is the default code for a shader\n      // created in shadertoy\n      vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n\n      gl_FragColor = vec4(col, alpha);\n    }\n  ')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);