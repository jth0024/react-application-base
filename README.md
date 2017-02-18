[![npm version](https://badge.fury.io/js/react-application-base.svg)](https://badge.fury.io/js/react-application-base)

# react-application-base
Quit duplicating your project configuration. Install react-application-base, and all the development, production, and test scripts are set-up for you.

## Installation

```bash
npm install react-application-base
```

## Usage

### Project Structure

In order to provide the best out of the box experience, this library makes some assumptions about your project structure. You should include the following files and folders in your project root.

```
my-project-root
  -package.json
  -src/
    -index.js
    -index.html
```

### Linting

Create a file in your project root called `.eslintrc.js`. Add the following line.

```javascript
module.exports = require('react-application-base/configs/eslint');
```


### Scripts

The core interface for this library is a set of exported build scripts. The scripts use [runjs](https://github.com/pawelgalazka/runjs), and you can access any of them by creating a runfile at the root of your package. Create a file called `runfile.js` with the following contents.

```javascript
module.exports = require('react-application-base');
```
