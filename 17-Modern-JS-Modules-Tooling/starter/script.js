'use strict';

// Native JS ES6 built-in module system:
// Modules are stored in files, exactly one module per file

// ES6 Modules vs Scripts:
// Top-level variables: Scoped to the module (variables are private) vs Global
// ES6 Modules are always executed in a strict mode while Scripts are executed in a "sloppy" mode by default
// The this keyword is always undefined at the top-level while in Scripts it points at the window object
// We can export and import values between Modules with ES6 syntax

// Imports and Exports can only happen at the top-level !
// Imports are hoisted !
// Importing values is always the first thing that happens in a module.

// In order to link a module to an HTML file, we need to use the script tag with the type attribute set to module <script type="module">

// Downloading the module files automatically happens in an asynchronous way. This is true for a module loaded from HTML as well as for modules are loaded by importing one module into another, using the import syntax.
// The importing operation itself happens synchronously.

// Process of importing modules:

// Importing modules happens before the code in the main module is executed.
// Modules are imported synchronously, only after all imported modules have been downloaded and executed, the main module will be executed.

// 1.Parsing Main Module
// 2.Imports are hoisted.
// 3.Downloading the modules
// 4.After a module arrives, it's also parsed and the module's exports are linked to the imports in the main module. And this connection is a life connection, so exported values are not copied to imports, the import is basically a reference to the exported value.
// 5.The code in the imported modules is executed.
// 6.Executing Main Module
