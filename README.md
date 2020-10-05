# Welcome to your new repo

This project uses ESLint and Prettier configured for React and the Airbnb style guide. You can edit your styling and linting preferences in the .eslintrc.json and .prettierrc.json files.

Here are a few benefits you get out of the box:

- React with Hot Module Reloading
- Express with Mongoose
- Custom Webpack Configuration
- Meets all NodeJS and Express current security best practices
- Pre-configured ESLint and Prettier
- Express default error handling

## System Requirements

- git v2.13 or greater
- NodeJS v10.13 or greater
- npm v6 or greater
- nodemon

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
node --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Create environment variables

This project relies on a `.env` file in the root directory and the dotenv npm package. We have provided a `.env.example` file for reference.

If you are not familiar with environment variables you can read more here:
https://nodejs.org/docs/latest/api/process.html#process_process_env
https://www.npmjs.com/package/dotenv

## Set up

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

`npm install`

This will install all of the project dependencies.

`npm run dev`
This should start up your Express server on port 3000 and React client on port 8080. Remember this spins up your server in development mode and requires nodemon in order to run.

Check server logs for any errors on start up. If you think we missed something feel free to open an issue on our
main repository.

## Production

When you are ready to build for production run the following command:
`npm run build`

This should create a build folder in the root of the project with your minified code transpiled by Babel.
