# Total Folk Monorepo 
Vite | React | JavaScript | TypeScript | Node.js

This repository contains the code for the Total Folk project, organized as a monorepo using Rush. The monorepo structure allows us to manage multiple packages and projects within a single repository efficiently, and is built with scalability in mind.
 

## Proposed Project Structure

The monorepo is organized into the following directories:
```
total-folk-monorepo/ 
├── common/ 
│ ├── autoinstallers/ 
│ │ └── rush-prettier/ 
│ ├── config/ 
│ │ └── rush/ 
│ │ └── command-line.json 
├── components/ (Generic components shared across all packages)
├── packages/ 
│ ├── component-library/playground/ (Where we can display and interact with all components using mock data)
| │── total-folk/
| | └── total-folk-backend/ 
| │   ├── src/ 
| │   └──  package.json 
| │ └── total-folk-frontend/ 
| │   ├── src/ 
| │   └──  package.json 
├── .gitignore 
├── package.json 
├── rush.json 
└── README.md
```
## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/total-folk-monorepo.git
   cd total-folk-monorepo
   ```

2. Install dependencies:
```
rush update
```

4. Build the project:
```
rush build
```

### Pre-commit Hooks
The project uses the pre-commit dependency to run formatting commands before commits. 
- The format-staged script is configured to run automatically before a commit is made, ensuring that the staged files are formatted using Prettier.


## Contributing

We welcome contributions to the Total Folk Monorepo! To contribute, please follow these steps:

1. **Fork the Repository**:
   - Go to the GitHub page of the `total-folk-monorepo` repository.
   - Click the "Fork" button at the top right of the page. This will create a copy of the repository under your own GitHub account.

2. **Clone the Forked Repository**:
   - Clone the forked repository to your local machine:

     ```sh
     git clone https://github.com/your-username/total-folk-monorepo.git
     cd total-folk-monorepo
     ```

3. **Set Up the Upstream Remote**:
   - Add the original repository as an upstream remote to keep your fork up to date with the latest changes:

     ```sh
     git remote add upstream https://github.com/original-username/total-folk-monorepo.git
     ```

4. **Create a New Branch**:
   - Create a new branch for your feature or bugfix:

     ```sh
     git checkout -b my-feature-branch
     ```

5. **Make Changes**:
   - Make your changes to the codebase.

6. **Run Rush Commands**:
   - Install dependencies:

     ```sh
     rush update
     ```

   - Build the project:

     ```sh
     rush build
     ```

   - Format the code (for all files, optional but recommended):

     ```sh
     rush format
     ```

7. **Commit Your Changes**:
   - Stage your changes:

     ```sh
     git add .
     ```

   - Commit your changes with a descriptive message:

     ```sh
     git commit -m "Add feature X"
     ```

8. **Push Your Changes**:
   - Push your changes to your forked repository:

     ```sh
     git push origin my-feature-branch
     ```

9. **Create a Pull Request**:
   - Go to the GitHub page of your forked repository.
   - Click the "Compare & pull request" button.
   - Ensure the base repository is the original repository and the base branch is `main`.
   - Provide a descriptive title and detailed description of your changes.
   - Submit the pull request.

10. **Keep Your Fork Up to Date**:
    - Periodically fetch updates from the upstream repository and merge them into your fork:

      ```sh
      git fetch upstream
      git checkout main
      git merge upstream/main
      ```
