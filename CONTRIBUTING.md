# Contributing Guidelines

Welcome to the contributing guidelines for the Planet Of The Bugs repository on GitHub! We appreciate your interest in contributing to our project. Whether you're an experienced developer or just starting out, we value your input and contributions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Forking the Repository](#forking-the-repository)
  - [Setting Up Your Local Environment](#setting-up-your-local-environment)
- [Contributing](#contributing)
  - [Creating a New Feature or Bugfix](#creating-a-new-feature-or-bugfix)
  - [Making Changes](#making-changes)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [Code of Conduct](#code-of-conduct)

## Getting Started

Thank you for considering contributing to our project. Before you begin, please make sure you have a GitHub account. If you don't have one, you can sign up [here](https://github.com/signup).

### Setting Up Your Local Environment

1. Clone the repository to your local machine: git clone https://github.com/Emmanuel-Melon/planet-of-the-bugs.git
2. Navigate to the main branch: 
   ```git checkout dev```
3. Navigate to the client app: 
   ```cd apps/client```
4. To get started, copy the .example.env file to .env by running the following command in your terminal: 
   ```cp .example.env .env```
5. Install any necessary dependencies: 
   ```yarn && yarn dev```
6. Start the development server by running the following command in your terminal: Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to view the app.


## Contributing

We welcome contributions from developers of all skill levels. Whether you're fixing a bug, adding a new feature, or improving documentation, your efforts are valued.

### Creating a New Feature or Bugfix

1. Before starting any work, check the [Issues](https://github.com/Emmanuel-Melon/planet-of-the-bugs/issues) section to see if the feature or bugfix you're considering is already being discussed. If not, you can open a new issue to discuss your proposal.

2. Once you have a clear idea of what you'd like to contribute, create a new branch from the `dev` branch: 
   ```git checkout -b feature-or-bugfix-name``` <br>
  **IMPORTANT**
  * The naming convention for your branch should be as follows: 
   ```BUG-<ISSUE_NUMBER>```
  * The issue number should follow the ordered sequence.


### Making Changes

1. Make your changes in the appropriate files within your local repository.

2. Commit your changes with a descriptive commit message: git add . && git commit -m "Add a concise description of your changes"

### Submitting a Pull Request

1. Push your changes to your forked repository: git push origin feature-or-bugfix-name

2. Visit the original repository on GitHub and click the "Compare & pull request" button next to your branch.

3. Your pull request will be reviewed by maintainers, and feedback may be provided. Once your changes are approved, they will be merged into the main repository.

## Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) throughout your participation in this project. We value an inclusive and welcoming environment for all contributors.

Thank you for taking the time to contribute to Planet Of The Bugs. Your efforts help make our project better for everyone!










