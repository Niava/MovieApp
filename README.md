# DEMO Streaming

## Overview

This project was built with [Create React App](https://github.com/facebook/create-react-app).

- Main project folder located in [/stan](https://github.com/Niava/MovieApp/tree/master/stan).
- Styling: SCSS, located in [/stan/src/assets/scss](https://github.com/Niava/MovieApp/tree/master/stan/src/assets/scss).
- JSON feed requested from [react-coding-challenge](https://github.com/StreamCo/react-coding-challenge/blob/master/feed/sample.json). Also work if replaced with the data feed provided in the original src folder.
- Minimal dependencies.

## The Challenge

### How did you decide on the technical and architectural choices used as part of your solution?

- JS. The one I choose is the popular tool [Create React App](https://github.com/facebook/create-react-app) which can help setup the project quickly. The downsides could be some extra dependencies installed which might not needed and the default project build folder is `/build`. Not the one required in the brief (`/dist`). This is fixed by updating the build function to `react-scripts build && mv build dist`.
- Styling. `SCSS` for easy future maintenance. `mixins` included.
- Fetch JSON feed. Located in `/stan/src/actions`. [Link](https://github.com/Niava/MovieApp/blob/master/stan/src/actions/index.js). The function used here is the simple `.fetch` instead of API call by using `axios and redux-thunk`. It would be awesome to see it work if the API url has a query function.


### Are there any improvements you could make to your submission?

- More dependencies added. For example, the lazyloading can be added to images.
- Popular Titles can be displayed automatically by page tag.
- Home page program types can be loaded by component too.

### What would you do differently if you were allocated more time?

- UI/UX styling.
- User login check to display different home page link applied to `LOGO`.
- More data can be added to each movie/series. For example, hover over to display `descriptions` etc like what's on the actual stan site.


## Details:

["Home" page](https://stan-demo-streaming.herokuapp.com/)
- 2 tiles, Series and Movies.

["Series" page](https://stan-demo-streaming.herokuapp.com/series)
- Filtered by `programType` of `series`.
- `releaseYear >= 2010`.
- Sorted by the `title` attribute.
- Display the first 21 entries.
- Attributes include `title` and (`images` → `Poster Art` → `url`).

["Movies" page](https://stan-demo-streaming.herokuapp.com/movies)
- Filtered by `programType` of `movie`.
- `releaseYear >= 2010`.
- Sorted by the `title` attribute.
- Display the first 21 entries.
- Attributes include `title` and (`images` → `Poster Art` → `url`).

"Loading" & "Error" page
- Loading page will be display when the page is loading. (Might be able to have a quick peak at it when first open the page or we can put `debug` in [Fetch Json Function](https://github.com/Niava/MovieApp/blob/master/stan/src/actions/index.js) to stop it before loading).
- Error page will be displayed if any error happened during the `fetch`. Can be displayed if API URL broken in [file](https://github.com/Niava/MovieApp/blob/master/stan/src/actions/index.js).


## How to install (Heroku + Express)

Download the project folder from [Github Page](https://github.com/Niava/MovieApp).

In the project folder, you can:

### Step 1 - sign up for [heroku](https://www.heroku.com/)
- New account
- New heroku repo

### Step 2 - get react app ready for deploy
The package.json file is ready in project main path and ready to use for deployment.

### Step 3 - [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
Commands you might need to run:
- `heroku login`
- `git remote add heroku PASTE_THE_REPO_PATH_CREATED_EARLIER`
- `git push heroku master`

To open the site once published, run command:
`heroku open`


## How to install (non-heroku)

Please use the source folder located in `/stan`.


## Other Notes

### My Portfolios

Please refer to my [portfolio site](https://www.mengqiuniu.com/).

**Note: please check the sites filtered by `FEATURE`**

And the one we do daily feature updates is 
- [NATIONAL PRODUCT REVIEW](https://www.nationalproductreview.com/) with lots interesting features like AR and REVIEWS.

The sites we spent some time on
- [VIDDI](https://viddi.co/). This site is built with more UI/UX designs and animations.
- [IFB](https://www.mengqiuniu.com/collections/wordpress/products/images-for-business). An image heavy site.

