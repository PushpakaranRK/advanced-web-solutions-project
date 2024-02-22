# Vendor Inventory App Documentation

Welcome to the Advanced Web Solutions Project documentation! This guide will walk you through setting up the app on various platforms, including Windows and macOS. Whether you're new to React or JavaScript, don't worry – this documentation got you covered every step of the way. Let's get started! 🎉

## Prerequisites

Before we begin, ensure that you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- A modern web browser like Chrome or Firefox

## Installation

### Node.js

#### Windows

1. Visit the [Node.js website](https://nodejs.org/).
2. Download the Windows installer (.msi).
3. Run the installer and follow the prompts.
4. After installation, open Command Prompt or PowerShell and verify Node.js installation by running:
   ```
   node -v
   npm -v
   ```

#### macOS

1. Visit the [Node.js website](https://nodejs.org/).
2. Download the macOS installer (.pkg).
3. Double-click the downloaded file and follow the installation instructions.
4. To verify Node.js installation, open Terminal and type:
   ```
   node -v
   npm -v
   ```

### Creating SSH Key for GitHub

Before cloning the repository, you need to create an SSH key and add it to your GitHub account:

1. Open Terminal or Command Prompt.
2. Generate a new SSH key:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   Replace `your_email@example.com` with your GitHub email.
3. Press Enter to accept the default file location.
4. Enter a secure passphrase or leave it blank for no passphrase.

5. Start the SSH agent:
   ```bash
   eval "$(ssh-agent -s)"
   ```
6. Add your SSH private key to the SSH agent:
   ```bash
   ssh-add ~/.ssh/id_rsa
   ```
7. Copy the SSH key to your clipboard:
    - macOS:
      ```bash
      pbcopy < ~/.ssh/id_rsa.pub
      ```
    - Windows:
      ```bash
      clip < ~/.ssh/id_rsa.pub
      ```

8. Visit [GitHub](https://github.com/) and go to **Settings > SSH and GPG keys**.
9. Click **New SSH key** or **Add SSH key**.
10. Paste your SSH key into the "Key" field and give it a meaningful title.
11. Click **Add SSH key**.

### Cloning the Repository
**IMPORTANT: Before cloning, ensure to specify your branch name. Your branch name should be your first name. Only clone your branch and do not touch the master or develop branch.**

Now, let's clone the repository for the Vendor Inventory App:

```bash
git clone -b your-first-name git@github.com:PushpakaranRK/advanced-web-solutions-project.git
```
Replace `your-first-name` with your first-name with all characters in lowercase (eg. for ***Jithin Jacob Issac*** it will be ***jithin***).

### Project Setup

1. Navigate to the project directory:
   ```bash
   cd advanced-web-solutions-project
   ```

2. Install dependencies using npm:
   ```bash
   npm install
   ```

## Running the App

Once the installation is complete, you can run the app:

```bash
npm run dev
```

This command will start a development server and open the app in your default web browser.

## Usage

Feel free to explore the app and its features! You can add, edit, and delete items from the inventory. If you encounter any issues or have questions, don't hesitate to reach out to the project team.

## Conclusion

Congratulations! 🎉 You've successfully set up the Vendor Inventory App on your machine. Happy coding!

If you need further assistance or want to contribute to the project, refer to the project's documentation or reach out to the project maintainers.
