# Alternis Consulting website prototype

This package contains a static multi-page HTML website based on the prompt.

## Included
- Home, Services, About, Careers, Contact
- Dedicated service pages for Enterprise Software Engineering and AI-Driven Solutions
- Dynamic listing/detail pages for Case Studies and Insights
- Browser-based admin interface on `admin.html`
- SEO-friendly structure, schema markup, robots.txt, and sitemap.xml

## Admin note
The admin interface stores content in browser local storage. That means content changes are saved on the same browser/device where edits are made.

For production, connect the UI to a real CMS or backend.

## Preview locally
Open `index.html` directly in a browser, or serve the folder from a simple static server.


## Contact form
The contact form is wired to FormSubmit and sends submissions to `info@alternisconsulting.com`.

Important:
- The very first submission triggers a one-time activation email from FormSubmit.
- After you click the activation link in that email, future submissions will be delivered normally.
- For the form to work, the site must be opened from a web server or deployed domain, not as a local `file://` page.
