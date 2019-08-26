
# styled-nanoreset
[![package version](https://img.shields.io/npm/v/styled-nanoreset.svg?style=flat-square)](https://npmjs.org/package/styled-nanoreset)
[![package downloads](https://img.shields.io/npm/dm/styled-nanoreset.svg?style=flat-square)](https://npmjs.org/package/styled-nanoreset)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/styled-nanoreset.svg?style=flat-square)](https://npmjs.org/package/styled-nanoreset)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> [Nanoreset](https://github.com/tiaanduplessis/nanoreset/) + Styled Components

## Table of Contents

- [styled-nanoreset](#styled-nanoreset)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Similar](#similar)
  - [Contribute](#contribute)
  - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install styled-nanoreset
$ # OR
$ yarn add styled-nanoreset
```

## Usage

```jsx
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-nanoreset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
}

export default App
```

If you're using Styled Components version 3.x or 2.x, you'll need to use the
`injectGlobal` api instead:

```javascript
import { injectGlobal } from 'styled-components'
import reset from 'styled-nanoreset'
injectGlobal`
  ${reset}
`
```

`reset` is also available as a named export:

```javascript
import { reset } from 'styled-nanoreset'
```

## Similar

Also see [styled-normalize](https://www.npmjs.com/package/styled-normalize)
from [Sergey Sova](https://github.com/sergeysova).


## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    
