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
To start, you'll need to get a copy of this project on your computer, and it should be linked to a new GitHub repository for your website project. You can easily set this up a new repository with a copy of everything in this one,

Just click the green `Use Template` button above this readme, copy the URL of your new repository (for example, https://github.com/me/MYNEWREPOSITORY), then run
```
git clone https://github.com/me/MYNEWREPOSITORY
```

Or, you can manually make a new empty GitHub repository for your new website project, then git clone this repository, and set the new GitHub repository you just created as the remote, as follows: (for more details on how to create a new repository and set it as remote, see https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line.)
```bash
git clone https://github.com/ImFeelingDucky/nextjs-static-starter.git
# Create an new empty GitHub repository for this project, and copy the URL.
# For example, using the URL https://github.com/me/my-nextjs-static-site.git
git remote set-url origin https://github.com/ImFeelingDucky/delet-this.git
```

Then install the dependencies and start the development server with
```bash
npm install
npm run dev
```

Lastly, you probably want to customise your package.json by updating the `"name"`, `"author"`, `"license"` and other fields to your details.

## Workflow recommendation
After installing this starter as explained above, it's time to start building.

This is the approach we use and recommend to start building your website.

1. Start by customising the navigation bar to your liking (`components/navbar.js`). Use Bulma's class names to your liking; they are all ready-to-use by default (and can be customised later in `styles/styles.sass`).
2. Then customise the footer (`components/footer.js`).
3. Then set up the Layout component that you will use to contain most of your pages in a standardised fashion (`components/layout.js`). Set everything you need in pages' `<head>` by adding children to the `<Head>` component from `Next.js`
4. You should now have a basic container for the pages you're about to create -- now go ahead and create them. Start by building the homepage in `pages/index.js`. Don't forget to factor out reusable chunks and turn them into components by making files for them in `components` directory (feel free to use the other components in that directory as examples). Continue building your website by toggling between building pages and spending a little time customising Bulma when you notice repeating styles that could be more efficiently set by customising Bulma (which is detailed next).
5. Customise Bulma as you go by editing `styles/styles.js`. Set variables to override Bulma's defaults to customise fonts, colours, and more. Refer to https://bulma.io/documentation/customize/concepts/.
