# latest-github-release
> Find the latest release of a given GitHub repository

[![](https://badge.fury.io/js/latest-github-release.svg)](https://badge.fury.io/js/latest-github-release)
[![](https://img.shields.io/badge/node-%3E=4.6.1-brightgreen.svg)](https://nodejs.org/en/download/)
[![](https://david-dm.org/welbert/latest-github-release.svg)](https://david-dm.org/welbert/latest-github-release)

[![](https://nodei.co/npm/latest-github-release.png)](https://nodei.co/npm/latest-github-release/)


## Summary

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Usage](#usage)
  - [Example](#example)
    - [Get repository information](#get-repository-information)
    - [Get url to download](#get-url-to-download)
    - [Automating installation of programs](#automating-installation-of-programs)

---
## Installation
---

### Prerequisites

  - [Nodejs && npm](https://nodejs.org/en/download/) (Compiler)

### Installing

`npm install -g latest-github-release`
OR
`sudo npm install -g latest-github-release`

---
## USAGE
---

```
$ node latest-github-release.js -h

  Usage: latest-github-release [options]

  Options:

    -h, --help                     output usage information
    -V, --version                  output the version number
    -o, --owner <owner>            Owner of repository [Mandatory]
    -r, --repository <repository>  Name of repository [Mandatory]
    -d, --download <suffix>        Suffix of download url. Example: "x64.tar.gz"

    -t, --tag                      Show up tag
    -n, --notes                    Show up body of release

  Examples:

    $ latest-github-release -o welbert -r github-latest
    $ latest-github-release -o welbert -r github-latest -n
    $ latest-github-release -o welbert -r github-latest -d ".zip"

```

### Example

  #### Get repository information
  
  - Input: 
    `$ latest-github-release -o atom -r atom`
  
  - Output: 
  ```
Project: atom
Url: https://github.com/atom/atom/releases/tag/v1.17.2
Published at: Thu May 25 2017 17:38:59 GMT-0300 (Hora oficial do Brasil)
Tag: v1.17.2
Download urls:
        https://github.com/atom/atom/releases/download/v1.17.2/atom-1.17.2-delta.nupkg
                Size: 12.78 MB
                Download Count: 207
        https://github.com/atom/atom/releases/download/v1.17.2/atom-1.17.2-full.nupkg
                Size: 123.05 MB
                Download Count: 249
        https://github.com/atom/atom/releases/download/v1.17.2/atom-amd64.deb
                Size: 97.56 MB
                Download Count: 4070
        https://github.com/atom/atom/releases/download/v1.17.2/atom-amd64.tar.gz
                Size: 98.1 MB
                Download Count: 889
        https://github.com/atom/atom/releases/download/v1.17.2/atom-api.json
                Size: 963.65 KB
                Download Count: 110
        https://github.com/atom/atom/releases/download/v1.17.2/atom-mac-symbols.zip
                Size: 8.2 KB
                Download Count: 83
        https://github.com/atom/atom/releases/download/v1.17.2/atom-mac.zip
                Size: 110.8 MB
                Download Count: 4602
        https://github.com/atom/atom/releases/download/v1.17.2/atom-windows.zip
                Size: 122.39 MB
                Download Count: 3072
        https://github.com/atom/atom/releases/download/v1.17.2/atom-x64-1.17.2-delta.nupkg
                Size: 12.74 MB
                Download Count: 61
        https://github.com/atom/atom/releases/download/v1.17.2/atom-x64-1.17.2-full.nupkg
                Size: 135.69 MB
                Download Count: 96
        https://github.com/atom/atom/releases/download/v1.17.2/atom-x64-windows.zip
                Size: 134.76 MB
                Download Count: 3556
        https://github.com/atom/atom/releases/download/v1.17.2/atom.x86_64.rpm
                Size: 99.61 MB
                Download Count: 1401
        https://github.com/atom/atom/releases/download/v1.17.2/AtomSetup-x64.exe
                Size: 131.97 MB
                Download Count: 3603
        https://github.com/atom/atom/releases/download/v1.17.2/AtomSetup-x64.msi
                Size: 131.67 MB
                Download Count: 1075
        https://github.com/atom/atom/releases/download/v1.17.2/AtomSetup.exe
                Size: 119.4 MB
                Download Count: 2400
        https://github.com/atom/atom/releases/download/v1.17.2/AtomSetup.msi
                Size: 119.12 MB
                Download Count: 414
        https://github.com/atom/atom/releases/download/v1.17.2/RELEASES
                Size: 17.49 KB
                Download Count: 323
        https://github.com/atom/atom/releases/download/v1.17.2/RELEASES-x64
                Size: 1.41 KB
                Download Count: 294

  ```
  
  
  #### Get url to download
  
  
  - Input: 
    `$ latest-github-release -o zyedidia -r micro -d "linux-arm.tar.gz"`
  - Output: 
  ```
  https://github.com/zyedidia/micro/releases/download/v1.2.0/micro-1.2.0-linux-arm.tar.gz

  ```
  
  
  #### Automating installation of programs
  
  
  - install-micro.sh
  ```
  #!/bin/bash

  url=$(latest-github-release -o zyedidia -r micro -d "linux-arm.tar.gz")
  wget -O micro.tar.gz $url
  tar -zxf micro.tar.gz
  sudo mv micro-*/micro /usr/local/bin/
  rm -R micro-* micro.tar.gz
  ```
  
