# Business Manager – React App with Authentication and CRUD Operations


## Features
.  🔐 User Authentication
   Secure login functionality with client-side validation.

.  🧾 Business Management (CRUD)
   Create, view, update, and delete business records.

.  🧩 Modern UI with PrimeReact & Bootstrap
   Combines PrimeReact components and Bootstrap styling for a professional look

.  📦 Alerts and Notifications with SweetAlert2
   Elegant confirmation dialogs and success/error messages

.  📱 Responsive Design
    Works across devices using Bootstrap and responsive layout classes

.  ⚛️ React Hooks & Functional Components
   Built with modern React features including useState, useEffect, etc.

.  🧩 Component-Based Architecture
   Organized and reusable component structure for better scalability.

.  ✅ Form Validation
   Client-side form validations for login and CRUD forms.

.  💾 No Backend Required
   All data is managed locally in the browser, no server setup needed


 ###  🛠️ Tech Stack
.   React.js – Frontend JavaScript library for building user interfaces

.   PrimeReact – UI components for fast UI development

.   PrimeIcons – Icon library for PrimeReact

.   React-Bootstrap – Bootstrap components built for React

.   Bootstrap – Responsive CSS framework

.   SweetAlert2 – Beautiful, customizable alert popups for user confirmations and messages

.   localStorage (Web Storage API) – Stores and manages data on the client-side

.   React Hooks – For managing component state and lifecycle (useState, useEffect)



##### 🛠️ Installation Guide

Follow these steps to set up and run this React.js project locally:

1. `Prerequisites`
    Before getting started, ensure that the following software is installed on your machine:

    Node.js: The JavaScript runtime needed to run React and other dependencies.

    **You can check if you have Node.js installed by running:** `node -v`

    npm (Node Package Manager): Comes bundled with Node.js.

    **Verify npm installation by running:** `npm -v`

2. `Clone the Repository`
    Clone this repository to your local machine using Git:

    `git clone https://github.com/your-username/react-demo.git`
    `cd react-demo` {cd project-name}

3. `Install Dependencies`
    Once you've cloned the repository, navigate to the project folder and install the required dependencies using npm:

    `npm install`
    This command installs all the libraries and packages specified in the package.json file, including React, PrimeReact, Bootstrap, SweetAlert2, etc.

4. `Start the Development Server`
    After the installation is complete, you can run the app locally by starting the development server:

    `npm start`

     This will launch the app at `http://localhost:3000` in your browser. Any changes you make to the source code will automatically reload the page.



#### ▶️ Available Scripts
    In the project directory, you can run the following commands:

   `npm start`
    Runs the application in `development mode`.
    Navigate to `http://localhost:3000` in your browser to view the app.
    Any changes made will automatically reload the page, and any errors or warnings will be displayed in the browser's developer console.

   `npm run build`
    Builds the app for production.
    This creates an optimized, minified version of the app in the build directory, suitable for deployment.
    The build is optimized for best performance, including features like code splitting and caching.

   `npm test`
    Launches the test suite in watch mode.
    The test runner will monitor file changes and re-run tests as necessary.
    This is useful for continuous integration and ensuring that tests pass throughout development.

   `npm run eject`
    **Note: This is a one-way operation and cannot be undone.**
    Ejecting exposes the internal configurations for your project (e.g., Webpack, Babel, ESLint).
    This is useful if you need to customize the build setup, but it’s recommended to avoid ejecting unless necessary.


##### 📁 Folder Structure

```bash
react-demo/
├── public/
│   └── index.html
├── src/
│   ├── assets/             # Images, icons, and other static assets
│   ├── components/         # Reusable UI components (e.g., Navbar, Form)
│   ├── helper/             # vAlidation errors, Toast messages, Routing paths, etc.
│   ├── pages/              # Page-level components (e.g., Login, Dashboard, CRUD)
│   ├── styles/
│   │   ├── style.css       # Global styles
│   │   └── variables.css   # CSS variables (colors, spacing, etc.)
│   ├── App.js              # Main app component
│   └── index.js            # React entry point
├── package.json
└── README.md



