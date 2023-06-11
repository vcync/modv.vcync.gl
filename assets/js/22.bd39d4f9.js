(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{206:function(a,t,e){"use strict";e.r(t);var s=e(6),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"audio-reactivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-reactivity"}},[a._v("#")]),a._v(" Audio Reactivity")]),a._v(" "),t("p",[a._v("This guide explains audio reactivity within modV and how to assign audio features to module props.")]),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Audio reactivity in modV is provided using "),t("a",{attrs:{href:"https://meyda.js.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Meyda"),t("OutboundLink")],1),a._v(", an advanced audio analysis library.")]),a._v(" "),t("p",[a._v('In other live visual applications, you are usually presented with the raw FFT and it\'s mainly up to the user to isolate certain "active" frequencies to assign to parameters.')]),a._v(" "),t("p",[a._v('modV takes a slightly different approach to offer the user more advanced audio analysis in the form of "Features".')]),a._v(" "),t("h2",{attrs:{id:"what-is-an-audio-feature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-audio-feature"}},[a._v("#")]),a._v(" What is an Audio Feature?")]),a._v(" "),t("p",[a._v("Often, observing and analysing an audio signal as a waveform doesn’t provide us a lot of information about its contents. An audio feature is a measurement of a particular characteristic of an audio signal, and it gives us insight into what the signal contains. Audio features can be measured by running an algorithm on an audio signal that will return a number, or a set of numbers that quantify the characteristic that the specific algorithm is intended to measure. Meyda implements a selection of standardized audio features that are used widely across a variety of music computing scenarios. (taken from the Meyda website)")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://meyda.js.org/audio-features",target:"_blank",rel:"noopener noreferrer"}},[a._v("Meyda's documentation"),t("OutboundLink")],1),a._v(" provides detailed notes on the values return from and what each audio feature does.")]),a._v(" "),t("h2",{attrs:{id:"how-to-use-audio-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-audio-features"}},[a._v("#")]),a._v(" How to use Audio Features")]),a._v(" "),t("h3",{attrs:{id:"assigning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assigning"}},[a._v("#")]),a._v(" Assigning")]),a._v(" "),t("p",[a._v("To assign a Feature to a Module's property, right-click a Control and hover over "),t("strong",[a._v("Features")]),a._v(".\nThe sub-menu lists features that may be assigned to a Module property, to assign, choose a Feature from the menu.")]),a._v(" "),t("h3",{attrs:{id:"adjusting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adjusting"}},[a._v("#")]),a._v(" Adjusting")]),a._v(" "),t("p",[a._v('A Feature\'s value may be too "loud" for the property. In this case you can modify the intensity of the incoming value with the '),t("RouterLink",{attrs:{to:"/v2/guide/usingTheExpressionEditor.html"}},[a._v("Expression Editor")]),a._v(" like so:")],1),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v("\n")])])]),t("h3",{attrs:{id:"removing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removing"}},[a._v("#")]),a._v(" Removing")]),a._v(" "),t("p",[a._v("To remove an assigned Audio Feature, right-click the control, hover over "),t("strong",[a._v("Features")]),a._v(" and click "),t("strong",[a._v("Remove Assignment")]),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);