(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,o){e.exports=o.p+"assets/img/pavucontrol.34a382fe.png"},219:function(e,t,o){"use strict";o.r(t);var a=o(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("These are the docs for modV 3.\nIf you are looking for modV 2, please switch version in the top right.")])]),e._v(" "),a("p",[e._v('The latest modV version is on modV\'s GitHub Repo under "Releases". '),a("a",{attrs:{href:"https://github.com/vcync/modV/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vcync/modV/releases/latest"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"modv-primer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modv-primer"}},[e._v("#")]),e._v(" modV Primer")]),e._v(" "),a("p",[e._v("A 10 minute video walking through how to get started with modV.")]),e._v(" "),a("iframe",{staticClass:"sixteen-nine",attrs:{src:"https://www.youtube-nocookie.com/embed/kGEyTkzFKLk?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("h2",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),a("h3",{attrs:{id:"minimum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum"}},[e._v("#")]),e._v(" Minimum")]),e._v(" "),a("ul",[a("li",[e._v("Mac, Windows or Linux (with desktop shell)")])]),e._v(" "),a("h3",{attrs:{id:"recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended"}},[e._v("#")]),e._v(" Recommended")]),e._v(" "),a("ul",[a("li",[e._v("NVIDIA or ATI graphics card")]),e._v(" "),a("li",[e._v("Intel i5 or better")]),e._v(" "),a("li",[e._v("4GB+ RAM")])]),e._v(" "),a("h2",{attrs:{id:"gpu-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-settings"}},[e._v("#")]),e._v(" GPU Settings")]),e._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("Windows laptops may have dual GPUs, one on the processor, the other dedicated.\nEither Windows or the GPU's software determine which GPU certain programs will operate on.")]),e._v(" "),a("p",[e._v("modV needs to run on the most powerful GPU, in most cases the dedicated GPU.")]),e._v(" "),a("h4",{attrs:{id:"nvidia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia"}},[e._v("#")]),e._v(" NVIDIA")]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("NVIDIA Control Panel")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("3D Settings > Manage 3D settings")]),e._v(" "),a("ol",[a("li",[a("em",[e._v("In the Program Settings:")]),e._v(" select "),a("code",[e._v("modV")])]),e._v(" "),a("li",[a("em",[e._v("Under Preferred Graphics Processor:")]),e._v(" select "),a("code",[e._v("High Performance NVIDIA processor")])]),e._v(" "),a("li",[a("em",[e._v("In Specify settings for this program:")]),e._v(" ensure these options:\n"),a("ul",[a("li",[e._v("Power Mangement Mode: "),a("code",[e._v("Prefer Maximum Performance")])]),e._v(" "),a("li",[e._v("(optional) Vertical Sync: "),a("code",[e._v("off")])])])])])]),e._v(" "),a("li",[e._v("(optional) Select "),a("code",[e._v("Display > Adjust desktop size and position")]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("code",[e._v("Perform Scaling on")]),e._v(" to "),a("code",[e._v("GPU")]),e._v(" for every screen attached to your computer")]),e._v(" "),a("li",[e._v("If it's not possible to save this setting, change the "),a("code",[e._v("scaling mode")]),e._v(" to "),a("code",[e._v("no scaling")])])])])]),e._v(" "),a("h3",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),a("p",[e._v("macOS will automatically enable the dedicated GPU, if present.")]),e._v(" "),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("h4",{attrs:{id:"nvidia-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-2"}},[e._v("#")]),e._v(" NVIDIA")]),e._v(" "),a("p",[e._v('NVIDIA Optimus users will need to make sure the system is running on the dedicated GPU.\nIf you are using "switchable graphics", make sure the system knows to switch when modV is running.\nOtherwise, use NVIDIA graphics over Intel.')]),e._v(" "),a("h2",{attrs:{id:"audio-routing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio-routing"}},[e._v("#")]),e._v(" Audio Routing")]),e._v(" "),a("p",[e._v("To use modV as an audio visualiser you will need an audio source.")]),e._v(" "),a("p",[e._v("Commonly available audio sources include:")]),e._v(" "),a("ol",[a("li",[e._v("If your computer has a microphone built-in, you can use that")]),e._v(" "),a("li",[e._v("Use an audio source via a line-in jack")]),e._v(" "),a("li",[e._v("Route audio using software routing. See below for OS specific set-up")])]),e._v(" "),a("h3",{attrs:{id:"windows-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-2"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("We recommend VB Cable to route audio to the browser, download that "),a("a",{attrs:{href:"http://vb-audio.pagesperso-orange.fr/Cable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"configuring-vb-cable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-vb-cable"}},[e._v("#")]),e._v(" Configuring VB Cable")]),e._v(" "),a("ul",[a("li",[e._v("Set the system audio to route through VB Cable:\n"),a("ul",[a("li",[a("ol",[a("li",[e._v("Open the Sound Control Panel ("),a("code",[e._v("win + r")]),e._v(" "),a("code",[e._v("control.exe /name Microsoft.Sound")]),e._v(")")]),e._v(" "),a("li",[a("em",[e._v("In the Playback tab:")]),e._v(" Set "),a("code",[e._v("CABLE Input")]),e._v(" as the Default Device")])])])])]),e._v(" "),a("li",[e._v("Listening to VB CABLE's output:\n"),a("ul",[a("li",[a("ol",[a("li",[a("em",[e._v("In the Recording tab:")]),e._v(" Right click "),a("code",[e._v("CABLE Output")]),e._v(" and select "),a("code",[e._v("Properties")])]),e._v(" "),a("li",[a("em",[e._v("In the Listen tab:")]),e._v(" Check "),a("code",[e._v("Listen to the device")]),e._v(" and select the Playback device to your speakers or headphones in the dropdown menu")])])])])])]),e._v(" "),a("h3",{attrs:{id:"macos-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-2"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),a("p",[e._v("Soundflower is open source and a free application which can route audio to the browser, download that "),a("a",{attrs:{href:"https://github.com/mattingalls/Soundflower/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Set the system audio to route through SoundFlower:\n"),a("ul",[a("li",[a("ol",[a("li",[e._v('Open "Audio MIDI Setup" in '),a("code",[e._v("/Applications/Utilities/")])]),e._v(" "),a("li",[e._v('Create a new "Multi-Output Device" with the '),a("code",[e._v("+")]),e._v(" button in the bottom left")]),e._v(" "),a("li",[e._v('Add "Soundflower 2ch" and any other device you\'d like audio to output to (such as "Built-in Output" to listen to the audio)')]),e._v(" "),a("li",[e._v('Select your new Multi-Output Device in "System Preferences > Sound" to be the output')])])])])])]),e._v(" "),a("h3",{attrs:{id:"linux-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("h4",{attrs:{id:"pulse-audio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulse-audio"}},[e._v("#")]),e._v(" Pulse Audio")]),e._v(" "),a("ol",[a("li",[e._v("Download and install "),a("a",{attrs:{href:"https://www.freedesktop.org/wiki/Software/PulseAudio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pulse Audio's"),a("OutboundLink")],1),e._v(" Volume Control package")]),e._v(" "),a("li",[e._v("This "),a("a",{attrs:{href:"https://www.kirsle.net/blog/entry/redirect-audio-out-to-mic-in-linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),a("OutboundLink")],1),e._v(" shows how to setup the Input Devices to show your monitoring")]),e._v(" "),a("li",[e._v("When you start the modV application, your browser should appear as a recording device in the "),a("code",[e._v("Recording")]),e._v(" tab")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(181),alt:"Browser input device in pavucontrol"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);