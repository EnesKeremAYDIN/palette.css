# 🎨 palette.css

Modular, theme-first CSS variable system that works with `data-*` attributes for effortless theming.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/EnesKeremAYDIN/palette.css)](https://github.com/EnesKeremAYDIN/palette.css/stargazers)
[![Contributors](https://img.shields.io/github/contributors/EnesKeremAYDIN/palette.css?color=blue)](https://github.com/EnesKeremAYDIN/palette.css/graphs/contributors)

---

## 🚀 Live Demo & CDN

- **Live Demo:** [palette.css Demo](https://eneskeremaydin.com.tr/palette.css/site/index.html)
- **CDN Usage:**
  ```html
  <link rel="stylesheet" href="https://eneskeremaydin.com.tr/palette.css/palette.css">
  <script src="https://eneskeremaydin.com.tr/palette.css/theme-loader.js"></script>
  ```
- **All theme files are loaded dynamically from CDN.**

---

## ✨ Features

- **No CSS classes required** – Styles are automatically applied to HTML elements
- **Modular theme system** – Mix and match colors, fonts, shadows, spacing, and animations
- **Performance focused** – Only loads the CSS files you need
- **Easy to use** – Change themes with simple `data-*` attributes
- **Extensible** – Create your own theme variations
- **Modern** – Built with CSS custom properties and modern JavaScript

---

## ⚡ Quick Start

### 1. Use via CDN (Recommended)
Add these to your HTML `<head>`:
```html
<link rel="stylesheet" href="https://eneskeremaydin.com.tr/palette.css/palette.css">
<script src="https://eneskeremaydin.com.tr/palette.css/theme-loader.js"></script>
```

### 2. Set Theme Attributes
Add `data-*` attributes to your `<body>`:
```html
<body 
  data-theme="forest"
  data-radius="soft"
  data-font="serif"
  data-shadow="deep"
  data-spacing="relaxed"
  data-anim="smooth"
>
```

### 3. Write HTML
```html
<h1>Your Heading</h1>
<p>Your paragraph text.</p>
<button>Click me</button>
<input type="text" placeholder="Enter text">
```

---

## 🌐 GitHub Pages Demo
- [palette.css Demo Site](https://eneskeremaydin.com.tr/palette.css/site/index.html)
- Try all themes and variations live.

---

## 📦 Local Usage

### 1. Download or Clone
```sh
git clone https://github.com/EnesKeremAYDIN/palette.css.git
```

### 2. Add Files to Your Project
```html
<link rel="stylesheet" href="/palette.css">
<script src="/theme-loader.js"></script>
```

---

## 🎨 Available Themes & Attributes

### Color Themes (`data-theme`)
| Theme    | Description                  |
|----------|------------------------------|
| default  | Clean, professional blue     |
| forest   | Natural green tones          |
| ocean    | Cool blue ocean colors       |
| neon     | Bright neon on dark          |
| pastel   | Soft, gentle pastel colors   |
| dark     | Dark mode                   |
| sunset   | Warm sunset orange           |

### Border Radius (`data-radius`)
| Radius | Description           |
|--------|-----------------------|
| soft   | Gentle rounded        |
| sharp  | Minimal rounded       |
| pill   | Fully rounded pill    |

### Font Families (`data-font`)
| Font  | Description           |
|-------|-----------------------|
| sans  | Modern sans-serif     |
| serif | Traditional serif     |
| mono  | Monospace             |
| fun   | Playful, casual       |
| tech  | Technical, modern     |

### Shadow Styles (`data-shadow`)
| Shadow      | Description           |
|-------------|----------------------|
| soft        | Subtle, gentle       |
| deep        | Strong, dramatic     |
| neumorphic  | Soft UI shadows      |
| none        | No shadows           |

### Spacing (`data-spacing`)
| Spacing | Description           |
|---------|-----------------------|
| compact | Tight, minimal        |
| normal  | Standard              |
| relaxed | Generous, comfortable |

### Animations (`data-anim`)
| Animation | Description           |
|-----------|-----------------------|
| smooth    | Gentle, smooth        |
| bounce    | Playful bounce        |
| pop       | Quick, snappy        |
| none      | No animations         |

---

## 🧩 Supported HTML Elements
- Headings: `<h1>`–`<h6>`
- Text: `<p>`, `<strong>`, `<em>`, `<small>`, `<blockquote>`
- Forms: `<input>`, `<button>`, `<select>`, `<textarea>`, `<label>`
- Lists: `<ul>`, `<ol>`, `<li>`
- Tables: `<table>`, `<th>`, `<td>`, `<tr>`
- Code: `<code>`, `<pre>`
- Links: `<a>`
- Images: `<img>`
- Horizontal rules: `<hr>`

---

## 🛠️ Customization & Advanced Usage

### Create Your Own Theme
1. Create a new CSS file in the relevant `/palettes/` folder.
2. Define your CSS custom properties in `:root`.
3. Use the new theme by setting the corresponding `data-*` attribute.

### Example: Custom Color Theme
```css
/* /palettes/colors/mybrand.css */
:root {
  --bg: #f8f9fa;
  --text: #212529;
  --primary: #6f42c1;
  --primary-hover: #5a32a3;
  --on-primary: #fff;
}
```
```html
<body data-theme="mybrand">
```

### Add New Theme Category
1. Add a new folder to `/palettes/`.
2. Update `theme-loader.js` to include the new category.
3. Add a new `data-*` attribute to `<body>`.

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development
- Clone the repo
- Open `palette/site/index.html` or use GitHub Pages demo
- Start developing!

---

## 👥 Contributors

Thanks to everyone who has contributed to this project!

[![Contributors](https://contrib.rocks/image?repo=EnesKeremAYDIN/palette.css)](https://github.com/EnesKeremAYDIN/palette.css/graphs/contributors)

---

## 📄 License
MIT License – see [LICENSE](LICENSE)

---

## 🙏 Acknowledgments
- Inspired by modern CSS frameworks and design systems
- Built with modern web standards
- Community-driven development

---

## 📞 Support & Links
- [GitHub Issues](https://github.com/EnesKeremAYDIN/palette.css/issues)
- [GitHub Discussions](https://github.com/EnesKeremAYDIN/palette.css/discussions)
- [Live Demo](https://eneskeremaydin.com.tr/palette.css/site/index.html)

---

Made with ❤️ by [EnesKeremAYDIN](https://github.com/EnesKeremAYDIN) and the palette.css community. 
