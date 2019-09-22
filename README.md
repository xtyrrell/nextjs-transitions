# Next.js with Bulma Static Site Starter
Use this project as a base on which to build your Next.js static site. It comes with Bulma preinstalled and three skeleton Next.js components, ready for you to start building on.

## Project structure
The starter project includes the following project files:
`components/navbar.js` a primary navigation bar
`components/footer.js` a standard page footer
`components/layout.js` a page layout with the navbar at the top, child page content in the middle, and footer at the bottom

`pages/index.js` a very simple page demonstrating use of the layout component.

`static` the directory where you should store static assets like images and fonts.

`styles/styles.sass` the SASS file that imports Bulma and allows you to make global modifications (https://bulma.io/documentation/customize/concepts/).

## How to install and run
Git clone this repository, make a new repository for your new project, and then set that new repository as the remote.

Once you've set it up, run the server with
```bash
npm run dev
```

Lastly, customise your package.json.

## Workflow recommendation
After installing this starter as explained above, it's time to start building.

This is the approach we use and recommend to start building your website.

1. Start by customising the navigation bar to your liking (`components/navbar.js`). Use Bulma's class names to your liking; they are all ready-to-use by default (and can be customised later in `styles/styles.sass`).
2. Then customise the footer (`components/footer.js`).
3. Then set up the Layout component that you will use to contain most of your pages in a standardised fashion (`components/layout.js`). Set everything you need in pages' `<head>` by adding children to the `<Head>` component from `Next.js`
4. You should now have a basic container for the pages you're about to create -- now go ahead and create them. Start by building the homepage in `pages/index.js`. Don't forget to factor out reusable chunks and turn them into components by making files for them in `components` directory (feel free to use the other components in that directory as examples). Continue building your website by toggling between building pages and spending a little time customising Bulma when you notice repeating styles that could be more efficiently set by customising Bulma (which is detailed next).
5. Customise Bulma as you go by editing `styles/styles.js`. Set variables to override Bulma's defaults to customise fonts, colours, and more. Refer to https://bulma.io/documentation/customize/concepts/.