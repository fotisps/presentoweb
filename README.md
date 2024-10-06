# Fifigkos Documentation
==========================

## Table of Contents
-----------------

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Components](#components)
4. [Layouts](#layouts)
5. [Responsive Design](#responsive-design)
6. [CSS Framework](#css-framework)

## Introduction
------------

Welcome to the Fifigkos documentation! This website is built using React and is designed to be presentational,
with a focus on responsive design.

## Getting Started
-----------------

To get started with this project, you'll need:

*   Node.js installed on your machine
*   A code editor or IDE of your choice

1.  Clone the repository using `git clone https://github.com/your-username/fifigkos.git`
2.  Navigate to the project directory using `cd fifigkos`
3.  Install dependencies with `npm install` or `yarn install`

## Components
-------------

The website is composed of several reusable components, including:

*   **FifigkosComponent**: The main component that renders the Fifigkos pastry.
*   **HeaderComponent**: The header component that contains navigation and branding information.
*   **FooterComponent**: The footer component that contains copyright information and contact details.

### FifigkosComponent

```markdown
// src/components/FifigkosComponent.js

import React from 'react';

const FifigkosComponent = () => {
    return (
        <div className="fifigkos">
            <h2>Fifigkos Pastry</h2>
            <p>A traditional Greek pastry filled with cheese and herbs.</p>
            <img src="/fifigkos-image.jpg" alt="Fifigkos Pastry" />
        </div>
    );
};

export default FifigkosComponent;
```

## Layouts
------------

The website uses a responsive layout that adapts to different screen sizes. The main layouts are:

*   **Wide Layout**: A full-width layout suitable for desktop devices.
*   **Narrow Layout**: A narrow layout suitable for mobile devices.

### WideLayout.js

```markdown
// src/layouts/WideLayout.js

import React from 'react';
import { Container } from '@material-ui/core';

const WideLayout = ({ children }) => {
    return (
        <Container maxWidth="lg">
            {children}
        </Container>
    );
};

export default WideLayout;
```

## Responsive Design
------------------

The website is designed to be fully responsive, using CSS media queries to adapt the layout and styling for
different screen sizes.

### CSS Framework

We use Material-UI as our CSS framework for building responsive and consistent components. You can add it to your
project by running:

```bash
npm install @material-ui/core
```

## Example Usage
-----------------

Here's an example of how to use the `FifigkosComponent` in a layout:

```markdown
// src/App.js

import React from 'react';
import { WideLayout } from './layouts/WideLayout';
import FifigkosComponent from './components/FifigkosComponent';

const App = () => {
    return (
        <WideLayout>
            <FifigkosComponent />
        </WideLayout>
    );
};

export default App;
```

This is just a starting point, and you can customize the components, layouts, and CSS to suit your needs. Happy
coding!