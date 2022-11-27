<img src="./src/img/Header.svg" alt="Water Monster" />

<div align="center">

This is a summary that describes the Water Monster project.

**[PROJECT PHILOSOPHY](https://github.com/abdallahmoubarak/water-monster#project-philosophy) • [WIREFRAMES](https://github.com/abdallahmoubarak/water-monster#prototyping) • [TECH STACK](https://github.com/abdallahmoubarak/water-monster#tech-stack) • [IMPLEMENTATION](https://github.com/abdallahmoubarak/water-monster#implementation) • [HOW TO RUN?](https://github.com/abdallahmoubarak/water-monster#how-to-run)**

</div>

<br>

<img id="project-philosophy" src="./src/img/title1.svg" alt="Project Philosophy" />

<p align="center"> 
Water Monster is a platform that solves one of the main issues for those countries that rely on water containers; to provide home water. It helps users to control, track and ask for water refill. Moreover, it helps providers to sell the service, and gives them many options over a user-friendly application.

</p>

<p align="center"> 
Water Monster users will never warry about how much water is in their container !!!
</p>

#

### User Stories

User stories is the things that done before starting the project.

### - Client:

- User shall be able to sign up, sign in, and request installation packages.
- User shall be able to view the real time water level in the container.

<details><summary>read more</summary>

- User shall be able to accept service providers.
- User shall be able to view the over time records in a chart.
- User shall be able to set manual or auto filling mode.
- User shall be able to set private or public mode.
- User shall be able to edit profiles.
- User shall be able to recharge the wallet.
- User shall be able to see the state of each sensor container.
- User shall be able to chat with the provider and make a voice call.

</details>

### - Service provider:

- User shall be able to sign up, sign in.
- User shall be able to view a real time active containers on the map.

<details><summary>read more</summary>

- User shall be able to view the level of the water for each.
- User shall be able to chat with client and make a voice call.
- User shall be able to see a path and calculate selected containers needed for water.
- User shall be able to see the wallet and withdraw.
- User shall verify the filling process by selecting the container and clicking on start filling.

</details>

### - Admin:

- Admin shall be able to review the package requests, and change the process state.(depending on each stage)

<details><summary>read more</summary>

- Admin shall be able to view each service consumer and service provider information + statistics.
- Admin shall be able to chat with users.
- Admin shall be able to view states on map.
- Admin shall be able to view statistics of the system.

</details>

#

<img id="prototyping" src="./src/img/title2.svg" alt="Prototyping" />

### 1- Sketching

| System Model                        |
| ----------------------------------- |
| ![Model](./src/img/uiux/system.svg) |

<details><summary>See more sketches</summary>

| Sign up                               | Water level                                  | Wallet                               |
| ------------------------------------- | -------------------------------------------- | ------------------------------------ |
| ![Sign Up](./src/img/uiux/signup.svg) | ![Containers](./src/img/uiux/containers.svg) | ![Wallet](./src/img/uiux/wallet.svg) |

| Map                            | Profile                                | Chat                                |
| ------------------------------ | -------------------------------------- | ----------------------------------- |
| ![Map](./src/img/uiux/map.svg) | ![Profile](./src/img/uiux/profile.svg) | ![Charts](./src/img/uiux/chats.svg) |

| Statistics                                   | Contacts                                 | Setting                                |
| -------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| ![Statistics](./src/img/uiux/statistics.svg) | ![Contacts](./src/img/uiux/contacts.svg) | ![Setting](./src/img/uiux/setting.svg) |

| Users                                   |
| --------------------------------------- |
| ![Users](./src/img/uiux/adminusers.svg) |

| Requsets                                      |
| --------------------------------------------- |
| ![Requests](./src/img/uiux/adminrequests.svg) |

| Map                                 |
| ----------------------------------- |
| ![Map](./src/img/uiux/adminMap.svg) |

| Sign In                                   |
| ----------------------------------------- |
| ![SignIn](./src/img/uiux/adminsignIn.svg) |

| Profile                                      |
| -------------------------------------------- |
| ![Profile](./src/img/uiux/adminprofiles.svg) |

</details>

#

### 2- Wireframes

| Sign up                                | Water level                                   | Wallet                                |
| -------------------------------------- | --------------------------------------------- | ------------------------------------- |
| ![Sign Up](./src/img/uiux/signupw.svg) | ![Containers](./src/img/uiux/containersw.svg) | ![Wallet](./src/img/uiux/walletw.svg) |

<details><summary>See more wireframes</summary>

| Map                             | Profile                                 | Chat                                 |
| ------------------------------- | --------------------------------------- | ------------------------------------ |
| ![Map](./src/img/uiux/mapw.svg) | ![Profile](./src/img/uiux/profilew.svg) | ![Charts](./src/img/uiux/chatsw.svg) |

| Statistics                                    | Contacts                                  | Setting                                 |
| --------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| ![Statistics](./src/img/uiux/statisticsw.svg) | ![Contacts](./src/img/uiux/contactsw.svg) | ![Setting](./src/img/uiux/settingw.svg) |

</details>

#

### 3- Mockups

| Sign up                                | Water level                                   | Wallet                                |
| -------------------------------------- | --------------------------------------------- | ------------------------------------- |
| ![Sign Up](./src/img/uiux/signupm.png) | ![Containers](./src/img/uiux/containersm.png) | ![Wallet](./src/img/uiux/walletm.png) |

| Map                                 | Profile                                    | Chat                               |
| ----------------------------------- | ------------------------------------------ | ---------------------------------- |
| ![Sign Up](./src/img/uiux/mapm.png) | ![Containers](./src/img/uiux/profilem.png) | ![Chat](./src/img/uiux/chatsm.png) |

| Sign In                                    |
| ------------------------------------------ |
| ![SignIn](./src/img/uiux/adminsignInm.png) |

<details><summary>See more mockups</summary>

| Users                                    |
| ---------------------------------------- |
| ![Users](./src/img/uiux/adminusersm.png) |

| Statistics                                    | Contacts                                  | Setting                                 |
| --------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| ![Statistics](./src/img/uiux/statisticsm.png) | ![Contacts](./src/img/uiux/contactsm.png) | ![Setting](./src/img/uiux/settingm.png) |

</details>

#

### 4- Data Modeling

| Graph Data Model Diagram                                   |
| ---------------------------------------------------------- |
| ![model](./src/project_phases/design/data_modeling_v1.png) |

#

### 4- Electronics

| Ultrasonic Waterproof Sensor AJ-SR04M   | ESP8266                           | JSN-SR04T                             |
| --------------------------------------- | --------------------------------- | ------------------------------------- |
| ![ultrasonic](./src/img/ultrasonic.png) | ![ESP8266](./src/img/ESP8266.png) | ![JSN-SR04T](./src/img/JSN-SR04T.png) |

<details><summary>Circuit</summary>

![JSN-SR04T](./src/img/circuit.png)

</details>

#

<img id="tech-stack" src="./src/img/title3.svg" alt="Tech Stack" />

- The ability to scale with graph databases was the main reason to start this project using the GRAND Stack. Graph database enables businesses and start-ups to grow faster, change faster, and be technically agile.

| GRAND stack                        |
| ---------------------------------- |
| ![Grand](./src/img/grand.png)      |
| ![GRAND](./src/img/grandstack.png) |

- GraphQL is a query language that helps you retrieve specific data from your endpoint APIs in the way and structure you want. because of having a graph database this query method helps in establish connections with the database in the same way that it is structured.

- Reactjs is a front-end library that helps create reusable components, which helped in the scalability of the project.

- Apollo server is a library that helps to connect a GraphQL schema to an HTTP server in Node.js.

- Neo4j is the database management system that uses the graph as a structure for storing data.

- Extending the GRAND stack to be used in the Nextjs framework, The techs has been used is as below :

| Nextjs                          | Socketio                            | ReactQuery                              | Firbase(auth)                       | Arduino                           |
| ------------------------------- | ----------------------------------- | --------------------------------------- | ----------------------------------- | --------------------------------- |
| ![Nextjs](./src/img/nextjs.svg) | ![socketio](./src/img/socketio.svg) | ![ReactQuery](./src/img/reactquery.svg) | ![Firebase](./src/img/firebase.svg) | ![Arduino](./src/img/arduino.svg) |

- Nextjs is a framework that uses Reactjs for the frontend, and Nodejs for the backend. Nextjs helped in improving the performance of the project, and gives some extra abilities. It helped in generating static pages, server side rendering and client side rendering pages depending on the case.

  - SEO was done with the help of Nextjs which is not possible just by building a Reactjs application (not needed for Water Monster case).

  - Nextjs helped in deploying the application on a serverless, using vercel without even making any configuration.

  - This application was created as a Progressive Web App (PWA), which can be install on every operation system.

  - The results will be shown in implementation section.

- Socketio has been used to make the connectivity between app users be live over a defined socket, it helped to build a real-time chat and call.

- React-query has been used to manage queries and mutations side by side with graphqlclient library in the best way using custom hooks.

- Firebase (auth) has been used to make a single sign on (SSO) to the system. This was added to the main sign up, signin method. The system was not fully implemented due to the time limitation of the project.

- Arduino (ESP8266) has been used with waterproof ultrasonic sensor to measure the water level in the container.

<img id="implementation"  src="./src/img/title4.svg" alt="Implementation" />

Using the above-mentioned tech stacks and the wireframes built with Figma, the implementation of the app is shown as below, these are screen recordings from the real app.

##### Sexy features

| Real time call                             | Real time chat                             |
| ------------------------------------------ | ------------------------------------------ |
| ![Call](./src/img/gifs/real-time-call.gif) | ![Chat](./src/img/gifs/real-time-chat.gif) |

| Map                            | SSO with firebase                            | Chart                              |
| ------------------------------ | -------------------------------------------- | ---------------------------------- |
| ![Map](./src/img/gifs/map.gif) | ![SSO](./src/img/gifs/sso-with-firebase.gif) | ![Chart](./src/img/gifs/chart.gif) |

- Monster as a native app.
- Monster app size less than 400kb.

| PWA as native app                                   | PWA size (343kb)                                          | Profile image                              |
| --------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| ![Native](./src/img/gifs/monster-as-native-app.gif) | ![Size](./src/img/gifs/monster-size-less-thank-400kb.gif) | ![Upload](./src/img/gifs/upload-image.gif) |

| Hardware |
| -------- |
|          |

Pure components with animating with css

| SVG waves                          | Fliping Bank Card                         | Logo Loading                           |
| ---------------------------------- | ----------------------------------------- | -------------------------------------- |
| ![Waves](./src/img/gifs/waves.gif) | ![Card](./src/img/gifs/flipping-card.gif) | ![Loading](./src/img/gifs/loading.gif) |

##### Client App

##### Provider App

##### Admin App

##### Analytics

| Vercel Analytics                          |
| ----------------------------------------- |
| ![Vercel](./src/img/vercel-analytics.png) |

| PWA Analytics                     |
| --------------------------------- |
| ![PWA](./src/img/Analytics_3.png) |

##### Jira dashboard

| ![PWA](./src/img/jira.png) |
| -------------------------- |

<img id="how-to-run" src="./src/img/title5.svg" alt="How to run?" />

There is a few steps to be done, to build and run this project. It's mentioned below:

### Prerequisites

- Download and Install [Node.js](https://nodejs.org/en/)

- Create [Neo4j instance](https://neo4j.com/cloud/platform/aura-graph-database/?ref=nav-get-started-cta)

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/abdallahmoubarak/water-monster
   ```

2. Go to the dir

   ```sh
   cd water-monster/app
   ```

3. Build the project
   ```sh
   npm build
   ```
4. Include .env.local variables

   ```sh
   NEXT_PUBLIC_GOOGLE_API_KEY = XX
   NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN = XX
   NEXT_PUBLIC_GOOGLE_PROJECT_ID = XX
   NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET = XX
   NEXT_PUBLIC_GOOGLE_MESSAGEING_SENDER = XX
   NEXT_PUBLIC_GOOGLE_APP_ID = XX

   NEXT_PUBLIC_NEO4J_USER = XX
   NEXT_PUBLIC_NEO4J_PASSWORD = XX
   NEXT_PUBLIC_NEO4J_URI = XX

   NEXT_PUBLIC_JWT_SECRET= XX

   NEXT_PUBLIC_ENDPOINT =  XX
   NEXT_PUBLIC_BASEURL = XX
   ```

5. Run the project
   ```sh
   npm run dev --turbo
   ```
