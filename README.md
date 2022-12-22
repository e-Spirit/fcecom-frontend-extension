# FirstSpirit Connect for Commerce - Frontend Extension

The FirstSpirit Connect for Commerce Frontend Extension serves the ContentCreator Extension file on a simple Express server. The script allows the creation of pages from a report in the ContentCreator and is customizable to project specific needs.

## How to use

1. Clone the repository.
2. Run `npm i`.
3. Run `npm start` to start the extension.

The script is then served on `http://localhost:<PORT>/content-creator-extension.js`.
If no port is specified in the .env file, the extension starts on port 3000 by default.

Alternatively, it is also possible to download only the content-creator-extension.js file and save it in a location accessible to the FirstSpirit server.

## Configuration of the project component

Open the ServerManager and select Project Properties > Project components.
In the list of project components, select the entry FirstSpirit Connect for Commerce - Project Configuration.
Enter the absolute path to the content-creator-extension.js file into the field 'ContentCreator Extension'.

## Legal Notices

The Connect for Commerce Frontend API module is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com),
Dortmund, Germany. The Connect for Commerce Frontend API module is subject to the [Apache-2.0 license](https://github.com/e-Spirit/connect-for-commerce-module/blob/master/LICENSE).

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