Experiment on Expo modules and development builds
# Expo Modules and Development Builds
Adding a native widget to add android widget with jetpack compose and glance

## Getting Started

### Create a new Expo project

```sh
npx create-expo-app@latest -template blank-typescript
```

[Environment setup documentation](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build6buildEnv=local)

### Set up development builds

```sh
# Install dev client
npx expo install expo-dev-client

# Run on devices
npx expo run:android
npx expo run:ios -device
```

### Create a custom Expo module

[Module documentation](https://docs.expo.dev/modules/get-started/#adding-a-new-module-to-an-existing-application)

```sh
# Create a new module locally
npx create-expo-module@latest -local
```

### Build and run with native changes

```sh
# Clean and rebuild native code
npx expo prebuild -clean

# Start development server
npx expo start

# Run on Android device
npx expo run:android device
```

[Native View Tutorial](https://docs.expo.dev/modules/native-view-tutorial/)


progress:

https://www.youtube.com/watch?v=2u4oTUKqD9E 3:24
