---
sidebarDepth: 2
---

# Groups

::: tip Updated in 3.0+
Layers are now Groups.
:::

A Group contains a set of Modules and allows configuration of how modV will draw the Modules in a Group.

Within a Group, Modules can be rearranged to affect their draw order.
Modules are drawn sequentially, starting from the left. Any Module to the right of another is drawn on top of the previous.

Groups can also be rearranged to affect draw order.
Groups are drawn sequentially, starting from the top. Any Group below another is drawn on top of the previous.

## Group Settings

### Enable
Turns the Group on or off. If the Group is off Modules contained within will not draw.

### Inherit
If enabled, the Group will draw the output of the preceeding Group to the screen before drawing contained Modules.
If there is only one Group enabled, the Group will draw the output of itself to the screen before drawing contained Modules.

### Clearing
If enabled, the Group will clear its Canvas before drawing contained Modules.
If there is only one Group enabled and Inherit is on, clearing will have no affect.

### Pipeline
If enabled, the Group will not draw each Module's output directly to the Group's Canvas. After each Module has drawn, the Group will cache the output, clear the Group Canvas and the next Module will recieve the cached result as its input.

For example, we have in a Group:

```
[Text] -> [Wobble]
```

With Pipeline enabled we will affect the output of Text with Wobble without seeing the result of the Text module "behind" Wobble.

Without Pipeline enabled:
![Pipeline not enabled](./images/pipeline-1.png)

With Pipeline enabled:
![Pipeline enabled](./images/pipeline-2.png)

::: warning Performance
Use Pipeline sparingly where possible. With Pipeline enabled, modV requires six extra draw operations per Module to cache and clear the Group Canvas, potentially causing lag.
:::

### Alpha
Sets the Alpha of the Group's Canvas when composited to the screen.

### Blend
Sets the Blend or Composition mode of the Group's Canvas when composited to the screen.
