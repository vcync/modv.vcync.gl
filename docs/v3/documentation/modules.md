---
sidebarDepth: 2
---

# Modules

A Module is an effect or visual source in modV, it draws something to the screen.

There are currently four types of module: `2d`, `shader`, `isf` and `three`.

`2d` uses the [CanvasRenderingContext2D](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) API.  
`shader` uses GLSL ES 1.0 or 3.0 via WebGL.  
`isf` uses the [Interactive Shader Format](https://isf.video/) via WebGL.  
`three` uses THREE.js via WebGL.

## Using Modules

Modules live in the Module Gallery.  
By default, the Module Gallery is in the bottom half of the screen.

Drag a Module from the Module Gallery to a [Group](./groups.md) to create an active Module.

Once a Module is in a Group, it can be rearranged in a Group or moved between a Group via drag and drop.

Search the Gallery with the Search field at the top of the Gallery.  
The Module Gallery can be searched quickly from anywhere in modV with <kbd>Ctrl/cmd</kbd> + <kbd>F</kbd>.

When selecting a Module, controls appear in the Module Properties panel, top right.  
These controls are specific to the selected Module and are adjustable.

To remove a Module from a Group, select it and press backspace.

## Module Settings

### Enable
Turns the Module on or off.

### Alpha
Sets the Alpha of the Module when composited in the Group.

### Blend
Sets the Blend or Composition mode of the Module when composited in the group.

## Bring your own Modules

Add Modules to the [Media Folder](./media.md) to have them show up in the Module Gallery.

Modules automatically rebuild and update in modV if edited within the Media Folder.

To learn how to create a Module, see [Writing A 2D Module](../learn/writingA2dModule.md) or [Writing An ISF Module](../learn/writingAnIsfModule.md).
