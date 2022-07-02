---
sidebarDepth: 2
---

# Media

:::warning
Video is currently unsupported in modV 3. We're tracking this here: [https://github.com/vcync/modV/issues/521](https://github.com/vcync/modV/issues/521)

If video is required, virtual webcams such as [OBS Virtual Camera](https://obsproject.com/forum/resources/obs-virtualcam.539/) are an option.
:::



## Supported Media

modV handles filesystem operations, serving and hot-reloading Modules, Plugins, Images and Videos.

### Media Folder

The Media Folder is where modV will scan for your Project files.

#### Location

##### Windows

`%appdata%\modV\media\`

##### macOS

`~/Library/Application\ Support/modV/media/`

##### Linux

`~/.config/modV/media/`

#### Structure

The media folder structure is important as it keeps track of assets relating to your Projects.

Projects are the top-level folders, e.g. the `default` Project is at `media/default/`.

```
.
├─ default
│  ├─ image
│  │  ├─ cat.jpg
│  │  └─ dog.png
│  ├─ module
│  │  └─ Waveform.js
│  ├─ palette
│  │  └─ rainbow.json
│  ├─ plugin
│  │  └─ SlimUI.js
│  ├─ preset
│  │  └─ the matrix.json
│  └─ video
│  │  └─ youtube_rip.mp4
├─ customProject
└─ anotherProject
```

### Adding media

To add media to a Project, place an asset into a corresponding folder using your system's file browser.

For example, you can drag and drop an image into the `image` folder, or a Module into the `module` folder.


## Using an image

1. Add the image into the `image` folder
2. Add the `Texture 2D` module into a group
3. In the property-inspector for the module select `image` in the `texture` property, which adds a new list underneath
4. In the list, select the image you added into the `image` folder
