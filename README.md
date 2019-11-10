# sharewaves

> CS 147 Aut 2019 | Team Members: @garrickf (Garrick), @graceannewang (Grace), @singerg22 (Gen)

This repo contains the React Native UI for `sharewaves`, an application designed for CS 147: Human Computer Interaction. The problem space was "digital democracy", and we created a solution to provide a pathway from news reading to immediate, crowdsourced action on popular issues. More information can be found here: 

## Getting Started Developing

Useful reference links:

1. [Download earlier versions of Xcode](https://developer.apple.com/download/more/)
2. [Set up Visual Studio Code for Mac](https://code.visualstudio.com/docs/setup/mac)
3. [Getting started with React Native](https://facebook.github.io/react-native/docs/getting-started)
4. [Running React Native on your device](https://facebook.github.io/react-native/docs/running-on-device)

Garrick's dev machine is pretty old, but it works. Here's the setup:

- MacOS High Sierra `10.13.6`
- Xcode `10.1`
- iOS `12.0` Simulator
- VS Code `1.40.0` with some extensions (GitLens, Prettier, ESLint)

### Setting Up Environment
Follow the instructions for "React Native CLI Quickstart" in [link 3 above](https://facebook.github.io/react-native/docs/getting-started) up to the point where you create a new project. This sets up you development environment. In brief:

- Install `node` and `watchman`
- Install a compatible version of Xcode (at least `9.4` or newer). [Link 1 above](https://developer.apple.com/download/more/) lets you install previous versions of Xcode, which is useful if you need a newer version of Xcode but don't want to update MacOS. Garrick had success with `10.1`. This takes up ~14GB of space!
- Install Xcode Command Line Tools and an iOS Simulator (Garrick did iOS `12.0`). This takes up ~2GB of space!
- Install `cocoapods` ruby

### Cloning the Repository

Next, in the directory you want your project to appear, clone the repository by calling (assuming HTTPS):

```
git clone https://github.com/garrickf/cs147-app.git
```

This will take the contents of this repo and put into a local folder you can `cd` into. Once inside your project directory, you can run:

```
npx react-native run-ios
```

to run the app in an iOS simulator. If you followed everything above, this step should work. Running the app in an emulator can be pretty laggy, so consider following [link 4 above](https://facebook.github.io/react-native/docs/running-on-device) to run the app on your own device!

> Note 1: link 4 (i.e. Deploy to iPhone via Xcode) didn't work for Garrick (weird linker errors), but [this StackOverflow post](https://stackoverflow.com/questions/38495793/run-react-native-application-on-ios-device-directly-from-command-line) seemed to have better results: run `npm install ios-deploy`, then `npx react-native ios-deploy --device <YOUR DEVICE>`.

> Note 2: When installing on your device, you may need to go to `Settings > General > Profiles and Device Management` to trust and open developer apps.

> Note 3: Garrick found something re: link 4 (i.e. Deploy to iPhone via Xcode). Instead of opening `sharewaves.xcodeproj`, open `sharewaves.xcworkspace` (I suppose we are using CocoaPods). Then you can follow the steps as usual.

### Setting Up VS Code (Optional, but Recommended)

VS Code is a good development environment that can be extended with functionality for linting, formatting, and `git` integration. [Link 2 above](https://code.visualstudio.com/docs/setup/mac) takes you through getting set up. A few nice things to note:

- You can view your current branch, inspect diffs for changed files, and stage and commit all within the IDE!
- You can search for files quickly with the shortcut `Cmd + P`, or execute commands (this is called the Command Palette) with `Cmd + Shift + P`.

## Developing Guide

When making changes to the repo, careful not to develop directly off of the branch `master`! This branch contains working code that other team members may be basing changes off of.

The best thing to do is to **create a local branch**, develop and save changes there and **create a pull request** against `master` when you have a big thing ready to merge in.
