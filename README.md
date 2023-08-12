Thank you for providing a clear project structure. I'll craft the README based on the structure you provided without making any assumptions.

---

# React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

This project showcases an individual portfolio website developed using React. The portfolio is deployed and can be accessed at [www.AntonneauWebDev.com](http://www.AntonneauWebDev.com).

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Key Features & Code Explanation](#key-features-&-code-explanation)
4. [Project Structure](#project-structure)
5. [License](#license)
6. [Contact](#contact)
7. [Acknowledgments](#Acknowledgments)

## Installation

To install and run this application locally:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the cloned repository in your terminal.
3. Run `npm install` to install necessary dependencies.
4. Execute `npm start` to start the application on your local server.

## Usage

Visit the deployed application at [www.AntonneauWebDev.com](http://www.AntonneauWebDev.com). If running locally, access the application at `http://localhost:3000` after executing `npm start`.

## Key Features & Code Explanation

### `Navbar.js`
Description: This component represents the navigation bar. It includes the site's logo, the user's name, and links to various social media profiles like LinkedIn and GitHub. There are also buttons linking to the user's resume and contact information. For the icons, this component uses a combination of icons from @mui/icons-material and custom SVG icons.

### `Home.js`
The Home component serves as the main page. It contains an introductory section, a skills section, an experience section (with projects and education), and the user's employment history. The component also has functionality for smooth scrolling to specific projects.

### `Projects.js`
Description: This component showcases a list of web development projects. Each project has a title, a GitHub link, optional demo and live links, a list of features, and the technologies used. The projects are fetched from ProjectList from the helpers directory. The component also uses SVG graphics for displaying icons.

### `Skills.js`
Description: The Skills component displays both technical and professional skills. The technical skills seem to be web development-focused, while the professional skills focus on soft skills. Each skill is displayed within an unordered list.

## Project Structure

- `.gitignore` - Specifies files/directories to be ignored in git.
- `public/` - Contains public assets like favicons and manifests.
- `src/` - The main source directory.
  - `assets/` - Contains assets like the logo.
  - `components/` - Houses the primary React components (`Navbar.js`, `Footer.js`, `Projects.js`, `Skills.js`).
  - `helpers/` - Contains helper files like `ProjectList.js`.
  - `pages/` - Includes main pages of the website (`Home.js`, `Resume.js`).
  - `styles/` - Contains CSS stylesheets for the various components and global styling.
  - `App.js` - The main React component.
  - `index.js` - The primary entry point of the application.
  
## License
This project is licensed under the MIT License.

## Contact
[Bennett Antonneau](mailto:benantonn@gmail.com)

## Acknowledgments

- **React**: A JavaScript library for building user interfaces. [Website](https://reactjs.org/)
- **react-router-dom**: The official React routing library, used for creating navigation components. [GitHub Repository](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- **@mui/icons-material**: A comprehensive set of Material Design icons from Material-UI, allowing easy inclusion of high-quality icons in React apps. [Documentation](https://mui.com/components/icons/)
- **navigator.userAgent**: A property that provides information about the browser's user-agent string. This isn't a package, but it's a Web API used in the code to detect Safari. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)
