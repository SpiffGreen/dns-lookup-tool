# DNS Lookup Tool

A simple DNS lookup tool built with Node.js that utilizes the built-in `dns` package.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

This tool provides a straightforward way to perform DNS lookups using Node.js. It leverages the `dns` module to query DNS servers and retrieve information about various types of records associated with domain names.

## Features

- Perform DNS lookups for different types of records (e.g., A, AAAA, MX, TXT).
- Display results in a clear and concise format.
- Simple and easy-to-use command-line interface.

## Installation

Ensure you have Node.js and npm installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

1. Clone this repository:

```bash
git clone https://github.com/SpiffGreen/dns-lookup-tool.git
```

2. Navigate to the project directory:

```bash
cd dns-lookup-tool
```

3. Install dependencies:

```bash
npm install
```

## Usage

To perform a DNS lookup, you'd have to build the project as its a typescript codebase, and run the server, by running the following command:

```bash
npm run build # build code
npm run start # run server

# Then visit url
```

## Dependencies

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [npm](https://www.npmjs.com/) - Package manager for JavaScript.

## Author
Spiff Jekey-Green <https://twitter.com/spiffgreen>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.