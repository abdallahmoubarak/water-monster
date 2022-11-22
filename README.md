<img src="./src/img/Header.svg" alt="Water Monster" />

<div align="center">

This is a summary that describes the Water Monster project.

**[PROJECT PHILOSOPHY](https://github.com/abdallahmoubarak/water-monster#project-philosophy) • [WIREFRAMES](https://github.com/abdallahmoubarak/water-monster#prototyping) • [TECH STACK](https://github.com/abdallahmoubarak/water-monster#tech-stack) • [IMPLEMENTATION](https://github.com/abdallahmoubarak/water-monster#implementation) • [HOW TO RUN?](https://github.com/abdallahmoubarak/water-monster#how-to-run)**

</div>

<br>

<img id="project-philosophy" src="./src/img/title1.svg" alt="Project Philosophy" />

<p align="center"> Water Monster is a service app that can match water wanter and water provider. Using Water Monster users will never warry about how much water is their in the container.
</p>

### User Stories

### - Client:

- User shall be able to sign up, sign in, and request installation packages.
- User shall be able to view the real time water level in the container.
- User shall be able to accept service providers.
- User shall be able to view the over time records in a chart.
- User shall be able to set manual or auto filling mode.
- User shall be able to set private or public mode.
- User shall be able to edit profiles.
- User shall be able to recharge the wallet.
- User shall be able to see the state of each sensor container.
- User shall be able to chat with the provider and make a voice call.

### - Service provider:

- User shall be able to sign up, sign in.
- User shall be able to view a real time active containers on the map.
- User shall be able to view the level of the water for each.
- User shall be able to chat with client and make a voice call.
- User shall be able to see a path and calculate selected containers needed for water.
- User shall be able to see the wallet and withdraw.
- User shall verify the filling process by selecting the container and clicking on start filling.

### - Admin:

- Admin shall be able to review the package requests, and change the process state.(depending on each stage)
- Admin shall be able to view each service consumer and service provider information + statistics.
- Admin shall be able to chat with users.
- Admin shall be able to view states on map.
- Admin shall be able to view statistics of the system.

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

| Statistics                                    | Contacts                                  | Setting                                 |
| --------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| ![Statistics](./src/img/uiux/statisticsm.png) | ![Contacts](./src/img/uiux/contactsm.png) | ![Setting](./src/img/uiux/settingm.png) |

| Sign In                                    |
| ------------------------------------------ |
| ![SignIn](./src/img/uiux/adminsignInm.png) |

| Users                                    |
| ---------------------------------------- |
| ![Users](./src/img/uiux/adminusersm.png) |

<details><summary>See more mockups</summary>

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

| Circuit                             |
| ----------------------------------- |
| ![JSN-SR04T](./src/img/circuit.png) |

<img id="tech-stack" src="./src/img/title3.svg" alt="Tech Stack" />

| GRAND stack                        |
| ---------------------------------- |
| ![Grand](./src/img/grand.png)      |
| ![Grand](./src/img/grandstack.png) |

the scalablity using graph databases was the main purposet that I started doing this project using GRAND stack

<img id="implementation"  src="./src/img/title4.svg" alt="Implementation" />

<img id="how-to-run" src="./src/img/title5.svg" alt="How to run?" />
