/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'tests/detox/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.release': {
      type: 'ios.app',
      build: 'xcodebuild -workspace ios/eastestsexample.xcworkspace -scheme eastestsexample -configuration Release -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/eastestsexample.app'
    },
    'android.release': {
      type: 'android.apk',
      build: 'cd android && ./gradlew :app:assembleRelease :app:assembleAndroidTest -DtestBuildType=release && cd ..',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_API_29_AOSP'
      }
    }
  },
  configurations: {
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
