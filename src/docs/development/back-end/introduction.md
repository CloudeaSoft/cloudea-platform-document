# Introduction

## Preparation
 - Environment: [.NET 8.0 (or higher) SDK](https://dotnet.microsoft.com/download/dotnet/8.0).
 - IDLE: Visual Studio (Recommend) / VSCode / ...

### Get Codes

```
git clone https://github.com/CloudeaSoft/cloudea-platform
```

## Building
If you wish to build the platform yourself, follow these steps:

### Step 1
Install the [.NET 8.0 (or higher) SDK](https://dotnet.microsoft.com/download/dotnet/8.0).
Make sure your SDK version is higher or equal to the required version.

### Step 2
To build cloudea-platform, open a command prompt inside the project directory.
You can quickly access it on Windows by holding shift in File Explorer, then right clicking and selecting `Open command window here`.
Then type the following command: `dotnet build -c Release -o build`
the built files will be found in the newly created build directory.

## Contribute
### Introduction to GitHub pull request flow

1. If you have forked this repository long time ago, please go to Settings, scroll down to the bottom, and click Delete Repository.
2. Go to [repository](https://github.com/CloudeaSoft/cloudea-platform) and click Fork, then Create fork.
3. Clone the ```master``` branch of the (forked) repository to local with submodules:
```
git clone --recurse-submodules <link to your forked repo> -b master
```
4. Run a build to test whether the development environment has been configured correctly.
5. Now you are free to contribute to <em>cloudea-platform</em>.
6. Remember to commit once you have proper number of changes. Don't forget to write a commit message.
7. After development, push your local changes to the remote (your own repository).
8. Go to [repository](https://github.com/CloudeaSoft/cloudea-platform) and submit a Pull Request. Wait until the administrator approves it. 