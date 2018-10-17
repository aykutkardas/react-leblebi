# React Leblebi

Simple autocomplete react component.

## Install

```sh
npm install react-leblebi
```

```sh
yarn add react-leblebi
```

## Usage

```js
import Leblebi from "react-leblebi";
```

```html
<Leblebi
  data={data}
  config={config}
  classNames={classNames}
  style={style} />
```

Data detail

```js
const data = ["javascript", "react", "es6", "code", "js", "babel"];
```

JSON Data detail

```js
const data = [
  { name: "javascript" },
  { name: "react" },
  { name: "es6" },
  { name: "code" },
  { name: "js" },
  { name: "babel" }
];
```

Config for JSON data field

```js
const config = {
  field: "name"
};
```

---

## Customization

### Style

Leblebi DOM

```html
<div class="leblebi">
  <input class="leblebi-input" />
  <div class="leblebi-result">
    <div class="leblebi-item">
      <span class="leblebi-word">leb</span>lebi
    </div>
    <div class="leblebi-item">
      çe<span class="leblebi-word">leb</span>ice
    </div>
    <div class="leblebi-item leblebi-item-active">
      ile<span class="leblebi-word">leb</span>et
    </div>
  </div>
</div>
```

```js
const style = {
  leblebi: {},
  leblebiInput: {},
  leblebiResult: {},
  leblebiItem: {},
  leblebiItemActive: {},
  leblebiWord: {}
};
```

```html
<Leblebi style={style} />
```

Default Inline Style

```js
const defaultStyle = {
  leblebi: {
    display: "flex",
    flexDirection: "column"
  },
  leblebiInput: {},
  leblebiResult: {
    background: "#fff",
    border: "1px solid #ccc",
    padding: 1
  },
  leblebiItem: {
    cursor: "pointer",
    padding: 6
  },
  leblebiItemActive: {
    background: "#2666b9",
    color: "#fff"
  },
  leblebiWord: {
    padding: "3px 1px 0px",
    border: "1px solid #ffd94f",
    color: "#f9a500",
    background: "#ffefd3",
    borderRadius: 2,
    fontWeight: "normal",
    margin: "0px 1px",
    boxShadow: "1px 1px 1px -1px #000000"
  }
};
```

Remove Default Inline Style

```js
const config = {
  noDefaultStyle: true
};
```

### ClassNames

Add an additional class.

```js
const classNames = {
  leblebi: "",
  leblebiInput: "",
  leblebiResult: "",
  leblebiItem: "",
  leblebiItemActive: "",
  leblebiWord: ""
};
```

```html
<Leblebi classNames={classNames} />
```

---

## Accessibility

Up, Down, Enter, Tab keyboard control.

![Demo Gif](https://github.com/aykutkardas/leblebi.js/raw/master/preview2.gif)
