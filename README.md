[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# @sika7/sanitize-html

this package is html sanitize. You can allow the attributes of each tag.

## Usage

**Step 1:** Install plugin:

```sh
npm install --save @sika7/sanitize-html
```

**Step 2:** add a functions or plugin.

```typescript
import { sanitizeHtml } from "@sika7/sanitize-html";

const result = sanitizeHtml("<div><p>test</p><div>test</div></div>", [
  {
    tag: "div",
    allowAttrs: ["class", "style"],
    allowStyle: ["color"],
  },
]);
console.log(result);
// # <div><div>test</div></div>
```

## config

```typescript
import { allowTag } from "@sika7/sanitize-html";
const allowTags: allowTag[] = {
  {
    tag: "div", // require
    allowAttrs: ["class", "style"], // options
    allowStyle: ["color"], // options
  },
};
```

| setting    | description                                | example                |
| ---------- | ------------------------------------------ | ---------------------- |
| tag        | allow tag name.                            | div                    |
| allowAttrs | allow attributes.                          | ['class','style']      |
| allowStyle | allow styles. require style in allowAttrs. | ['color','text-align'] |
