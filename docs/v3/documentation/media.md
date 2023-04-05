---
sidebarDepth: 2
---

# Media

## Supported Media

modV handles filesystem operations, serving and hot-reloading Modules, Plugins, Images and Videos.

### Media Folder

The Media Folder is where modV will scan for your Project files.

Open the Media Folder in the File Menu by clicking "Open Media folder".

#### Location

##### macOS

`~/Library/Application\ Support/modV/media/`

##### Windows

`%appdata%\modV\media\`

##### Linux

`~/.config/modV/media/`

#### Structure

The Media Folder structure is important as it keeps track of assets relating to your Projects.

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

1. Add an image into the `image` folder of a Project
2. Add the `Texture 2D` Module to a Group and click the Module in the Group to focus it
3. In the Module Inspector, set the `texture` property to `image` to show a dropdown of available images
4. Select the image you added into the `image` folder

## Using a video

1. Add a video into the `video` folder of a Project
2. Add the `Texture 2D` Module to a Group and click the Module in the Group to focus it
3. In the Module Inspector, set the `texture` property to `video` to show a dropdown of available videos
4. Select the video you added into the `video` folder
