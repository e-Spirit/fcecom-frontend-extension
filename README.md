# FirstSpirit Connect for Commerce - Frontend Extension

The FirstSpirit Connect for Commerce Frontend Extension serves the ContentCreator Extension file on a simple Express server. The script enables communication between the ContentCreator and the FirstSpirit Connect module and is customizable to project specific needs.

## Getting started

### Setup Express server
1. Clone the repository.
2. Run `npm i`.
3. Copy `.env.template` file to `.env` and adjust configuration to your needs.
4. Run `npm start` to start the extension or `npm start:watch` to start in watch mode.

The script is then served on `http://localhost:<PORT>/content-creator-extension.js`.
If no port is specified in the `.env` file, the extension starts on port 3000 by default.

Alternatively, it is also possible to download only the content-creator-extension.js file and save it in a location accessible to the FirstSpirit server.

### Configuration of the project component

Open the ServerManager and select Project Properties > Project components.
In the list of project components, select the entry FirstSpirit Connect for Commerce - Project Configuration.
Enter the absolute path to the content-creator-extension.js file into the field 'ContentCreator Extension'.

## Features

The frontend extension communicates with the FirstSpirit Connect for Commerce module using cross-document messaging between the ContentCreator and the application displayed in the ContentCreator. Actions are performed based on the message's topic. It will also communicate:

- Navigate in the application when using ContentCreator navigation

## Legal Notices

The Connect for Commerce Frontend Extension is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com),
Dortmund, Germany. The Connect for Commerce Frontend Extension is subject to the Apache-2.0 license.

Details regarding any third-party software products in use but not created by Crownpeak Technology GmbH, as well as the third-party licenses and, if applicable, update information can be found in the file THIRD-PARTY.txt.

## Disclaimer

This document is provided for information purposes only.
Crownpeak may change the contents hereof without notice.
This document is not warranted to be error-free, nor subject to any
other warranties or conditions, whether expressed orally or
implied in law, including implied warranties and conditions of
merchantability or fitness for a particular purpose. Crownpeak 
specifically disclaims any liability with respect to this document
and no contractual obligations are formed either directly or
indirectly by this document. The technologies, functionality, services,
and processes described herein are subject to change without notice.