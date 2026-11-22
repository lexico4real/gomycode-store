# FORM & FIELD — Responsive Store Landing Page

A standalone responsive online-store landing page built with HTML5, custom CSS and Bootstrap 5.3.3. This repository is intentionally separate from the restaurant and travel-agency coursework projects.

## Project structure

```text
form-and-field-store/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── screenshots/
│   └── README.md
├── .gitignore
└── README.md
```

## Features
- Responsive Bootstrap navbar with Home, Shop, Our Story and Contact links
- Editorial-style hero section and store introduction
- Four product cards, each with an image, product name, description and Shop Now button
- Responsive Bootstrap grid and mobile-specific CSS breakpoints
- Demo shopping-bag counter with Bootstrap toast feedback
- Newsletter email field with client-side validation
- Brand story section, benefits strip and footer with social icons
- Accessible skip navigation, keyboard focus indicators and reduced-motion support
- Screen-reader announcements for shopping-bag updates and newsletter feedback
- Lazy-loaded product and story photography, with high fetch priority for the hero image
- Code comments explaining the main page sections and interactions

## Run locally
Open `index.html` in a modern browser. No build step or package installation is required. Internet access is needed for Bootstrap, Bootstrap Icons, Google Fonts and Unsplash photography, which are loaded from CDNs.

## Design choices
FORM & FIELD uses a warm off-white background, deep charcoal typography and muted olive accents to create a calm, premium lifestyle-store identity. Manrope is used for headings while DM Sans keeps body copy readable. Product photography uses consistent image frames and generous whitespace. Bootstrap's responsive grid stacks products on narrow phones, shows two columns at the small breakpoint and four columns on larger screens. Additional small-screen rules keep the newsletter controls usable.

## Demo limitations
The Shop Now buttons update a local bag counter and display a toast, but do not process payments or persist a cart. The newsletter form validates an email address, exposes accessible error/status messages and displays a confirmation message, but does not submit data to a mailing-list service. Product details, prices, delivery claims and social links are illustrative placeholder content.

## Screenshots for submission
See [`screenshots/README.md`](screenshots/README.md) for desktop and mobile capture instructions. Save genuine browser captures as `desktop.png` and `mobile.png` in that folder before submission; no screenshots are fabricated or included yet.
