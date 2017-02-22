# react-application-base
Quit duplicating your project configuration. Install react-application-base, and all the development, production, and test scripts are set-up for you.

## Installation

```bash
npm install react-application-base
```


## Usage

### Project Structure

In order to provide the best out of the box experience, this library makes some assumptions about your project's structure. You must include the following files and folders in your project's root directory.

```
-package.json
-src/
  -index.js
  -vendor.js
  -index.html
```

### Linting

For development, an eslint configuration is included. Create a file in your project's root directory called `.eslintrc.js` with the following contents.

```javascript
module.exports = require('react-application-base').configs.eslint;
```

### Scripts

This library includes a set of common scripts for building, testing, etc. The following scripts are exported:

* build -- builds a production bundle and output to a `dist` folder
* clean -- delete the `dist` folder
* lint -- lints your code using eslint and reports errors to console
* start -- runs your a development server at `http://localhost:8080` and live-reloads on source file changes

Scripts can be run using [runjs](https://github.com/pawelgalazka/runjs), an included dependency. You can use any of the exported scripts by creating a special *runfile* at your project's root. Create a file called `runfile.js` with the following contents.

```javascript
module.exports = require('react-application-base').scripts;
```

Then, reference any of the available scripts in your `package.json` file.

```json
{
  "scripts": {
    "build": "run build",
    "clean": "run clean",
    "lint": "run lint",
    "start": "run start",
  }
}
```

Great, now you can run it.

```bash
npm run build
```
