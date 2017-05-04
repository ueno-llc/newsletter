# ueno. Email Templates

HTML email templates for ueno., written using [Foundation for Emails](http://foundation.zurb.com/emails/docs/). This build process includes F4E, Sass, and an inliner. Emails are written in Handlebars.

## Local Development

```bash
git clone git@github.com:ueno-llc/email-templates
cd email-templates
npm install
```

To work on the emails:

```bash
npm start
```

To create email bundles:

```bash
npm run build
```

For each email in the `pages/` folder, a ZIP file will be created with the CSS inlined, and all images referenced by the email included. You can upload these ZIP files to Mailchimp for testing or delivery.
