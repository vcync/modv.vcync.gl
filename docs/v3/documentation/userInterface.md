---
sidebarDepth: 2
---

# User Interface

![modV User Interface Overview](/images/20201204_modV_UI_overview.png)

* **A**: `Groups`. A Group contains modules. Modules within Groups can be arranged to change the drawing order.
* **B**: `Module`. A module represents a visual element that draws something to the screen, like the `Text` module that can draw any kind of user generated text to the `Main Output`
* **C**: `Info View`. Shows information about the different panels in modV when you hover over them using your mouse.
* **D**: `Gallery`. Contains all modules that can be added to a `Group`. Modules are categorized as `2D` (Canvas 2D), `ISF` (Interactive Shader Format) and `Shader` (WebGL Shader / GLSL). You can either scroll the list or use the search box at the top to find a specific module.
* **E**: `Input config`.  The panel allows creation of Input Links. Select a `Module Control` in the `Module Inspector`, then use the `Input Config` to assign an `Audio Feature`, `MIDI control` or `Tween` to automate the Module Control.

* **F**: `Module Inspector`. When a `module` is focused, it shows all of it's properties. Each property can be updated to change how the module is drawn to the `Output Window`.
* **G**: `Preview`. Shows the output of all enabled groups and modules. When you leave the default `Main Output`, it will show exaclty the same output as the `Output Window`.
* **H**: `Input Device Config`. Configuration for devices (Audio, Video, MIDI, BPM) that can be used as an input.


## Input Device Config

![modV User Interface: Input Device Config](/images/20201215_modV_UI_InputDeviceConfig.jpg)

* **Audio/Video**:
  * Audio: Microphone or other audio source. Useful for audio routing.
  * Video: Webcam
* **MIDI**: Lists all MIDI controllers.
* **BPM**: Lists all "Beats per Minute" sources


## Menu

There are multiple menu elements, but the most important ones are `File` and `View`:

* `File`
  * `Open Preset`: Load a preset from your computer into modV
  * `Save Preset`: Save a preset as JSON onto your computer that contains all groups, modules & settings of what you have created in modV
  * `Open Media Folder`; Uses your default application for exploring files (e.g. Finder on MacOS or Explorer on Windows) to open the `media` folder of modV. There you can put your images or third-party modules.
* `View`
  * `New Output Window`: Opens the output window if this was closed.
  * `Reload`; As modV is a web application we can reload modV as we can reload any website in order to get a clean state.
  * `Toogle Developer Tools`: Opens the developer tools of the underlying browser, useful for debugging.
  * `Reset Layout`: Makes sure that all panels are back in their original position after they were rearranged.


## Output Window

This window will be used to render the output of all enabled groups and modules. It can be used on a second screen or projector to show the generated visuals full screen.

![modV output window](/images/20201204_modv_output_window.png)

