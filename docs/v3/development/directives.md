# Directives

<!-- alex ignore special -->
>Directives are special attributes with the v- prefix. Directive attribute values are expected to be a **single JavaScript expression**.

* [https://vuejs.org/v2/guide/syntax.html#Directives](https://vuejs.org/v2/guide/syntax.html#Directives)
* [https://vuejs.org/v2/guide/custom-directive.html](https://vuejs.org/v2/guide/custom-directive.html)

## `infoView`

The Info View panel allows contextual information for components to be shown to the user when hovering their mouse over the component.

modV implements a directive named `infoView` so components can add their own information to Info View.

```Vue
<Component
  v-infoView="{
    title: 'Module Gallery',
    body: 'The Module Gallery displays all available Modules. A module can be dragged into a Group. Double clicking a Module will add it to the currently focused Group.',
    id: 'Module Inspector Panel'
  }"
/>
```

### `title`
* Type: `string`
* Default: `undefined`
* Optional: `false`

The title of your component.

### `body`
* Type: `string`
* Default: `undefined`
* Optional: `false`

The contextual information regarding your component.

### `id`
* Type: `string`
* Default: `uuid`
* Optional: `true`

::: warning
You should add your own ID for components which will mount multiple times. If you do not, each subsiquently mounted component will generate a duplicate entry in the UI Store.
:::

## `searchTerms`

The [Global Search](/v3/documentation/shortcuts.html#global-search) feature allows users to search any UI in modV. When searching modV will highlight elements in the DOM with a maching search term.

modV implements a directive named `searchTerms` so components can add their own terms to be searched.

```Vue
<Component
  v-searchTerms="{
    terms: [name, 'module'],
    title: name,
    type: 'Module',
    focusElement: true
  }"
/>
```

### `terms`
* Type: `array[string]`
* Default: `[]`
* Optional: `false`

Terms related to your component.

e.g. the name of the modV module, the word "module".

### `title`
* Type: `string`
* Default: `undefined`
* Optional: `false`

The title of your component.

### `type`
* Type: `string`
* Default: `undefined`
* Optional: `false`

The type of component.

e.g. Module, Panel, Group, Input

### `focusElement`
* Type: `boolean`
* Default: `false`
* Optional: `true`

Setting focusElement to true will highlight and attempt to scroll into view the element this directive is applied to when searching.

By default (setting to false) the parent Golden Layout Component will be highlighted.
