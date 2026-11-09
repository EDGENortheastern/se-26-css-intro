# se-26-css-intro 🎉

A small **Party Event Planner** page used to introduce CSS styling and a first taste of JavaScript DOM manipulation.

The page shows a form where you can enter an event name, pick a date, and choose a **theme colour**. Picking a colour instantly changes the page background, powered by a few lines of JavaScript.

## Project structure

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Page markup: headings and the event planner form |
| [style.css](style.css) | Styling: CSS variables, card layout, form fields and buttons |
| [script.js](script.js) | Behaviour: updates the background colour when a theme is picked |

## Running it

No build step or install needed. Open `index.html` in a browser, or use the VS Code **Live Server** extension for auto-reload.

## How the JavaScript works

```js
const theme = document.querySelector("#theme")

theme.addEventListener("input", () => {
    document.body.style.backgroundColor = theme.value;
});
```

Step by step:

1. **Find the element.** `document.querySelector("#theme")` searches the page for the first element matching the CSS selector `#theme`, which is the `<input type="color" id="theme">`. The element is stored in the `theme` constant.
2. **Listen for changes.** `addEventListener("input", ...)` registers a function that runs every time the `input` event fires. For a colour picker, that happens continuously while the user drags around the picker, so the change is live.
3. **Read the value.** `theme.value` holds the chosen colour as a hex string, e.g. `"#f79868"`.
4. **Change the style.** `document.body.style.backgroundColor` sets an inline `background-color` on `<body>`. Inline styles override the rule in `style.css`, so the card behind the form changes colour.

> **Why does this work at the bottom of the page?** The `<script>` tag sits at the end of `<body>`, so the form already exists when the script runs and `querySelector` can find `#theme`.

### Try it yourself

- Use the `"change"` event instead of `"input"`. What's the difference?
- Change `document.body` to `document.documentElement` to recolour the outer page instead of the card.
- Update the CSS variable instead: `document.documentElement.style.setProperty("--card-bg", theme.value)`.

## How the CSS works

- **Custom properties (variables)** are defined once on `:root` and reused with `var(--name)`, so the colour scheme can be changed in one place.
- **Google Fonts** are loaded with `@import` to use the *Lato* font.
- **Flexbox** (`display: flex; flex-direction: column`) on `.field` stacks each label above its input.
- **Attribute selectors** like `input[type="color"]` and `button[type="submit"]` style specific kinds of input and button.

## Reference docs (MDN)

### JavaScript / DOM used in `script.js`

| Feature | Used for | MDN docs |
| --- | --- | --- |
| `const` | Declaring the `theme` variable | [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) |
| `document` | Entry point to the page's DOM | [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) |
| `document.querySelector()` | Finding the colour input by its id | [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) |
| `addEventListener()` | Running code when the colour changes | [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) |
| `input` event | Fires each time the input's value changes | [HTMLElement: input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) |
| Arrow function `() => {}` | The event handler function | [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) |
| `.value` | Reading the chosen colour | [HTMLInputElement.value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value) |
| `document.body` | Selecting the `<body>` element | [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body) |
| `.style` | Setting inline styles from JS | [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) |
| `backgroundColor` | The CSS `background-color` property in JS form | [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) |
| `<input type="color">` | The colour picker the script listens to | [&lt;input type="color"&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) |

### CSS selectors used in `style.css` and `script.js`

| Selector | Example in this app | Selects | MDN docs |
| --- | --- | --- | --- |
| ID selector | `#theme` (in `script.js`) | The element with `id="theme"` | [ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) |
| Type selector | `html`, `body`, `label`, `input`, `button` | All elements of that tag | [Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) |
| Class selector | `.field` | Elements with `class="field"` | [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) |
| Attribute selector | `input[type="color"]`, `button[type="submit"]` | Elements with a matching attribute value | [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) |
| Selector list | `input, button` | Every element matching any selector in the list | [Selector list](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list) |
| `:root` pseudo-class | `:root { --page-bg: ... }` | The document's root element (`<html>`) | [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) |

### Other CSS features used

| Feature | MDN docs |
| --- | --- |
| Custom properties (`--page-bg`) | [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) |
| `var()` | [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) |
| `@import` | [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) |
| Flexbox (`display: flex`) | [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) |
| `gap` | [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) |
| `border-radius` | [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) |
| `inherit` | [inherit](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit) |
| `color-scheme` | [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) |
| `cursor` | [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) |

## License

[MIT](LICENSE) © 2026 EDGENortheastern
