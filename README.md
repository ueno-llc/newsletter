# Ueno Newsletter

> Ueno's newsletter email templates

The HTML email templates for Ueno's wonderful [newsletter](https://ueno.co/newsletter). They use [Foundation for Emails](https://foundation.zurb.com/emails) components and CSS, and are compiled with Handlebars.

There are two templates: the standard newsletter (`src/pages/index.hbs`), and the single-story newsletter (`src/pages/single-story.hbs`);

## Installation

```bash
git clone git@github.com:ueno-llc/newsletter
cd newsletter
npm install
```

## Usage

To work on the emails:

```bash
npm start
```

To create ZIP bundles:

```bash
npm run build
```

For each file in the `pages/` folder, a ZIP file will be created with the CSS inlined into the email, and all images referenced by the email included. You can upload these ZIP files to Mailchimp to create a template.

## License

&copy; MIT [ueno.](https://ueno.co)
