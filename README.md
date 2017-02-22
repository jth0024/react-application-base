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
    -vendor.js
    -index.html
```

### Linting

Create a file in your project root called `.eslintrc.js`. Add the following line.

```javascript
module.exports = require('react-application-base/configs/eslint');
```

### Scripts

The core interface for this library is a set of exported build scripts. The following scripts are included:
* build -- builds a production bundle and output to a `dist` folder
* lint -- lints your code using eslint and reports errors to console
* start -- runs your a development server at `http://localhost:8080` and live-reloads on source file changes
* test -- runs a test server at `http://localhost:5000` and live-reloads test file changes

Scripts are run using [runjs](https://github.com/pawelgalazka/runjs), and you can access any of them by creating a runfile at the root of your package. Create a file called `runfile.js` with the following contents.

```javascript
module.exports = require('react-application-base').scripts;
```

Then, reference any of the available scripts in your `package.json` file.

```json
{
  "scripts": {
    "build": "run build",
    "lint": "run lint",
    "start": "run start",
    "test": "run test"
  }
}
```

Great, now you can run it.

```bash
npm run build
```
