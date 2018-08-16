# Ueno Newsletter

> Newsletter email templates

The HTML email templates for Ueno's wonderful [newsletter](https://ueno.co/newsletter). They use [Foundation for Emails](https://foundation.zurb.com/emails) components and CSS, and are compiled with Handlebars.

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

Here's how the files are structured:

- `/src/pages`: each page here is an email template.
- `/src/layouts`: the wrapper HTML used for each template is here.
- `/src/partials`: reusable bits of HTML are stored here as Handlebars partials.
- `/src/helpers`: functions in this folder can be used as Handlebars helpers.
- `/src/assets`: static assets are stored here.
- `/src/styles`: Sass files are here.
- `/src/data`: extra data for Handlebars is here.

### Deployment

To create ZIP bundles:

```bash
npm run build
```

A ZIP file will be created with the CSS inlined into the email, and all images referenced by the email included. You can upload these ZIP files to Mailchimp to create a template.

## License

MIT &copy; [ueno.](https://ueno.co)
