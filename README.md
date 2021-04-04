Welcome to topFIVE!

# Setup & install
    Clone file (git@github.com:nathanRomad/topFIVE.git)
    mkdir topFIVE-API
    cd topFIVE-API
    touch database.json
    json-server -p 8088 -w database.json
    mkdir topFIVE
    cd topFIVE
    From topFIVE directory, npm install
    From topFIVE directory, npm start

# Testing
    From the landing page, click on 'register for an account'. 
    Fill out all the registration information and upload an image (click submit after image upload) and then click 'sign in'.
    You will land on the homepage and see your profile picture and card loaded on page left.
    The center of your homepage is for topFIVE cards you follow, it will be empty until you follow some other users topFIVE cards.
    On the right side of the homepage you will see the form to create new topFIVE cards of your own. Just fill out the form and click 'add'.
    You can use the navBar at the top and click 'my_topFIVE' to see all the cards you have created.
    In order to edit or delete a card, you must click the link title of the card, this will bring you to the detailPage where you can edit or delete your cards.
    Using the navBar, click 'Discover' to see a list of all topFIVE cards, you can follow or unfollow other users topFIVE cards from here.
    Once you follow one or more cards, they will be displayed on your homepage under 'Following'. You can also unfollow cards from your homepage.
    Last is the logout feature, which should be self explanatory.
    Enjoy topFIVE!

# ERD:
    https://dbdiagram.io/d/60464c5cfcdcb6230b231e08

# Wireframes: 
    Figma: 
    https://www.figma.com/file/BLDRtwio7JlEKuyW3jL9VW/topFIVE_landingPage?node-id=0%3A1

# Technology Stack: 
    HTML, CSS, Javascript, React, React.bootstrap, DBdiagram, Figma, Cloudinary (API)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
