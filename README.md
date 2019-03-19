# Broke Design System

> Design System from scratch

<!--- No npm or build status yet, future use
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]
--->

This framework is in it's earliest stages, feel free to contribute with your ideas!
The design system is intended to supply design/dev guidelines as well as a css framework and react component library.

![App Banner](public/readMeBanner.png)

## Installation

1. Clone this repo to wherever you clone your repos to
2. Rename the App to your project name
3. Navigate into the project directory
4. Run `yarn` (or `npm install` alternatively)
5. Run `yarn test` to make sure things went well
6. Start the React App by running `yarn start`

```md
TBD
```


## Usage example

`TBD`

_For more information and usage, please refer to the [Wiki][wiki]._

## Release History

-   0.1.0
    -   Formatted from OMCSS
-   0.0.1
    -   Work in progress

## Meta

Christian Gorke – dev.cmgorke@gmail.com

-   [![Twitter][twitter-icon]][twitter-link] Follow me on twitter
-   [![Github][github-icon]][github-link] Check out my other repos on github

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/SkothaSec/BrokeDS/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Added some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

### Documentation

Skotha CSS uses the ole' OMCSS (Organizable and Maintainable CSS) way as a means to keep things scalable.

OMCSS is an approach that will help designers and developers write code that will be future-clean and scalable at the same time. OMCSS' file structure helps developer organise their stylesheets in a manner that produces understandable and clean css structure that is easy to organise and maintain - OMCSS

#### OMCSS File Structure

OMCSS is a modular approach that helps you arrange your css into `theme`, `pages`, `layouts` and `modules`. Along with these, it also provide helper folders i.e. `base`, `utils` and `vendors` to organise your helper css files.

Below is a complete description of OMCSS file structure:

-   **Base**
    Base contains css styles on base content such as reset, grid, typography etc.

-   **Themes**
    Themes contains css styles for your application themes such as primary, secondary, default, dashboard etc.

-   **Pages**
    Pages contains css styles for your individual pages such as home, about-us, contact etc.

-   **Layouts**
    Layouts contains css style for main application components such as header, footer, sidebar etc.

-   **Modules**
    Modules contains css style for re-usable application ui components such as carousel, navigation, breadcrumb, card etc.

-   **Utils**
    Modules contains utility styles such as mixins, functions, variables etc.

-   **Vendors**
    Vendor contains third-party css libraries and frameworks such as jquery-ui, bootstrap, foundation etc.

-   **Shame**
    Shame contains css styles that you are shame about or you have written as an urgent request and will soon change it and write proper code. Its wise to write messy css for any of the above styles over here.

#### Naming Convention

Starting out the only true naming conventions are for colors, which greek numerals are being used.
alpha, beta, gamma, psi, omega.

## Credits

This README template is based on of Dan Bader's README Template`.

-   [_Dan Bader's Repo `README-Template`_](https://github.com/dbader/readme-template)
-   [_Dan Bader's Blog on README setups_](https://dbader.org/blog/write-a-great-readme-for-your-github-project)

Bootstrap and OMCSS (Using there grid system and project is structured by OCMCSS).

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
[github-link]: https://github.com/skothasec/
[github-icon]: http://i.imgur.com/0o48UoR.png
[twitter-icon]: http://i.imgur.com/tXSoThF.png
[twitter-link]: https://twitter.com/skothasec
