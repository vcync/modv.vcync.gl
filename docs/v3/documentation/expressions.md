---
sidebarDepth: 2
---

# Expressions

Found in the Input Configuration panel, Expressions allow shaping of a Module's property value.

Input from an Audio Feature, MIDI CC or Tween are all routed through the Expression, allowing Expressions to boost, dampen, shape or entirely change the incoming value.

Expressions are JavaScript syntax, anything that can be sucessfully validated in the JavaScript console.

e.g.

`value` is the incoming value.

`value * 2` doubles the incoming value.

`value / 2` halves the incoming value.

`value > 0.5 ? 10 : 0` sets the value to 10 if the incoming value is over 0.5. If under, the value will be 0.

Methods from [Math.js](https://mathjs.org/) are available in Expressions.

e.g.

`sqrt(value)`

Other variables in the scope:

|Variable|Type|Detail|
|---|---|---|
|`time`|Number|The time returned from `Date.now()`|


::: tip
Expressions get evaluated when the Module's property will update, through UI interaction or incoming value from an Input Configuration assignment.

You cannot use Expressions to create oscillating values.
:::
