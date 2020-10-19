- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Job Search Activity Tracker** is an app to record activities and actions related to job searching._
<br>

## MVP

_The **Job Search Activity Tracker** MVP records a comnpany, a job offered by that company and records actions related to applying for that job._
<br>

### Goals

- _Add Company data_
- _Add Job data._
- _Create, Read, Update and Delete company data._
- _Create, Read, Update and Delete job data._
- _Create, Read, Update Activity data._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end presentation._ |
|   React Router   | _Control redirects between update and display screens._ |
| React SemanticUI | _Identify components._ |
|     Express      | _Routing between screens in the client view._ |
|      Rails       | _Back End API construction._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Image](proposal\Activity.png)

- Activity Screen

![Image](proposal\AddCompany.png)

- Add Company Screen

![Image](proposal\AddJob.png)

- Add Job Screen

![Image](proposal\ListOfCompanies.png)

- List of Companies Screen

![Image](proposal\MainMenu.png)

- Main Menu Screen


#### Component Tree
``` structure
|__ Main Container
     |__ Layout
         |__ Header
            |__ Navigation
         |__ Footer
     |__ Main Screen
     |__ Company Add/Update
     |__ Job Add update
     |__ Activity Add/Update

```
#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Activity.jsx
      |__ Company.jsx
      |__ Footer.jsx
      |__ Header.jsx
      |__ Job.jsx
      |__ Navigation.jsx
|__ layout
      |__ Layout.jsx
|__ screens
      |__ Activity.jsx
      |__ AddCompany.jsx
      |__ AddJob.jsx
      |__ AddActivity.jsx
      |__ Company.jsx
      |__ Job.jsx
|__ services/
      |__ api-config.js
      |__ route-config.js
      |__ company.js
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Activity   | functional |   y   |   y   | _Activity renders the list of activities related to a company._  |
| Company Card | functional |   n   |   y   | _This card will render the company info._                 |
|   Job Card   | functional |   n   |   y   | _Render job info._                 |
|AddCompany Card| functional |   n   |   y   | _Render create company form._                 |
| AddJob Card  | functional |   n   |   y   | _Render create job form._                 |
|AddActivity Card| functional |   n   |   y   | _Render create activity form._                 |
| Activity Card| functional |   n   |   y   | _Render activity info._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header              |    M     |     1 hrs      |    TBD        |   TBD       |
| Navigation          |    M     |     1 hrs      |    TBD        |   TBD       |
| Footer              |    M     |     1 hrs      |    TBD        |   TBD       |
| Main Screen         |    M     |     2 hrs      |    TBD        |   TBD       |
| Activity Screen     |    M     |     2 hrs      |    TBD        |   TBD       |
| Company Screen      |    M     |     2 hrs      |    TBD        |   TBD       |
| Job Screen          |    M     |     2 hrs      |    TBD        |   TBD       |
| Add Company Form    |    M     |     3 hrs      |    TBD        |   TBD       |
| Add Job Form        |    M     |     3 hrs      |    TBD        |   TBD       |
| Add Activity Form   |    M     |     3 hrs      |    TBD        |   TBD       |
| Create CRUD Actions |    H     |     4 hrs      |    TBD        |   TBD       |
| TOTAL               |          |     6 hrs      |    TBD        |   TBD       |

<br>

### Server (Back End)

#### ERD Model

![PDF](proposal\SEIProject4EDM.pdf)

<br>

***

## Post-MVP

- Edit Company Data
- Edit Job Data
- Action Due Reminder

***

## Code Showcase



## Code Issues & Resolutions


