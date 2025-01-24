<p align="center">
    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">DISCORD-UPDATER</h1></p>
<p align="center">
	<em><code>Lightweight discord updater for linux</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/p0xz/Discord-Updater?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/p0xz/Discord-Updater?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/p0xz/Discord-Updater?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/p0xz/Discord-Updater?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Overview

Lightweight javascript package for sole purpose of updating discord on linux distribution

## Getting Started

### Prerequisites

Before getting started with Discord-Updater, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript ([Node.js](https://github.com/nodesource/distributions?tab=readme-ov-file#using-ubuntu-nodejs-lts))
- **Package Manager:** Npm

### Installation

Install Discord-Updater using one of the following methods:

### **Build from source:**

1. Clone the Discord-Updater repository:

```sh
git clone https://github.com/p0xz/Discord-Updater
```

2. Navigate to the project directory:

```sh
cd Discord-Updater
```

### Usage

Run Discord-Updater using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm start
```

### **Using package manager:**

#### if required run all commands using sudo

1. Install discord-updater package

```sh
npm i @p0xz/discord-updater -g
```

2. Run discord-updater using CLI

```sh
discord-update
```

## AutoStart

Using following example of `.desktop` file you can configure your discord to update on every startup

```ini
[Desktop Entry]
Name=Discord Updater
Comment=This command runs update sequence of discord on every startup
Type=Application
Exec=discord-update
Keywords=discord;update
Categories=Utility;
```

Create a file in `/etc/xdg/autostart` using

```sh
echo "[Desktop Entry]
Name=Discord Updater
Comment=This command runs update sequence of discord on every startup
Type=Application
Exec=discord-update
Keywords=discord;update
Categories=Utility;" > /etc/xdg/autostart/discord-update.desktop
```

This will create your `.desktop` file with already containing necessary content

## License

Copyright © 2025 [discord-updater](https://github.com/p0xz/Discord-Updater)

This project is protected under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) License. For more details, refer to the [LICENSE](https://github.com/p0xz/Discord-Updater/blob/master/LICENSE) file.

---
