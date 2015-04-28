Magic Methods
=============

Copyright
---------
(C) 2014-2015 Jeff Walter <jeff@404ster.com>, http://jwalter.sh/

License
-------

This module is licensed under the MIT License (MIT). Please see the
accompanying LICENSE file for more information.

Contributions
-------------
*None yet*

Installation
------------

The easiest way is to use NPM:

    npm install magicmethods

Usage
-----

    require ('magicmethods');


Global Properties
-----------------

### \_\_STACK__
Returns the full stack as an array. It's a lot of information:

    [
      {
        receiver: {},
        fun: [Function],
        pos: 1874
      },
      {
        receiver: {
          id: '.',
          exports: {},
          parent: null,
          filename: '/Users/jwalter/Projects/node-magicmethods/test.js',
          loaded: false,
          children: [Object],
          paths: [Object]
        },
        fun: [Function],
        pos: 12857
      },
      {
        receiver: {
          '.js': [Function],
          '.json': [Function],
          '.node': [Function]
        },
        fun: [Function],
        pos: 13368
      },
      {
        receiver: {
          id: '.',
          exports: {},
          parent: null,
          filename: '/Users/jwalter/Projects/node-magicmethods/test.js',
          loaded: false,
          children: [Object],
          paths: [Object]
        },
        fun: [Function],
        pos: 10117
      },
      {
        receiver: {
          [Function: Module]
          _contextLoad: false,
          _cache: [Object],
          _pathCache: [Object],
          _extensions: [Object],
          globalPaths: [Object],
          wrapper: [Object],
          wrap: [Function],
          _debug: [Function],
          _realpathCache: [Object],
          _findPath: [Function],
          _nodeModulePaths: [Function],
          _resolveLookupPaths: [Function],
          _load: [Function],
          _resolveFilename: [Function],
          runMain: [Function],
          _initPaths: [Function],
          requireRepl: [Function],
          Module: [Circular]
        },
        fun: [Function],
        pos: 8950
      },
      {
        receiver: {
          [Function: Module]
          _contextLoad: false,
          _cache: [Object],
          _pathCache: [Object],
          _extensions: [Object],
          globalPaths: [Object],
          wrapper: [Object],
          wrap: [Function],
          _debug: [Function],
          _realpathCache: [Object],
          _findPath: [Function],
          _nodeModulePaths: [Function],
          _resolveLookupPaths: [Function],
          _load: [Function],
          _resolveFilename: [Function],
          runMain: [Function],
          _initPaths: [Function],
          requireRepl: [Function],
          Module: [Circular]
        },
        fun: [Function],
        pos: 13923
      },
      {
        receiver: {
          ArrayBuffer: [Function: ArrayBuffer],
          Int8Array: [Object],
          Uint8Array: [Object],
          Uint8ClampedArray: [Object],
          Int16Array: [Object],
          Uint16Array: [Object],
          Int32Array: [Object],
          Uint32Array: [Object],
          Float32Array: [Object],
          Float64Array: [Object],
          DataView: [Function: DataView],
          DTRACE_NET_SERVER_CONNECTION: [Function],
          DTRACE_NET_STREAM_END: [Function],
          DTRACE_NET_SOCKET_READ: [Function],
          DTRACE_NET_SOCKET_WRITE: [Function],
          DTRACE_HTTP_SERVER_REQUEST: [Function],
          DTRACE_HTTP_SERVER_RESPONSE: [Function],
          DTRACE_HTTP_CLIENT_REQUEST: [Function],
          DTRACE_HTTP_CLIENT_RESPONSE: [Function],
          global: [Circular],
          process: [Object],
          GLOBAL: [Circular],
          root: [Circular],
          Buffer: [Object],
          setTimeout: [Function],
          setInterval: [Function],
          clearTimeout: [Function],
          clearInterval: [Function],
          setImmediate: [Function],
          clearImmediate: [Function],
          console: [Getter]
        },
        fun: {
          [Function: startup]
          globalVariables: [Function],
          globalTimeouts: [Function],
          globalConsole: [Function],
          _lazyConstants: [Object],
          lazyConstants: [Function],
          processFatal: [Function],
          processAssert: [Function],
          processConfig: [Function],
          processNextTick: [Function],
          processStdio: [Function],
          processKillAndExit: [Function],
          processSignalHandlers: [Function],
          processChannel: [Function],
          resolveArgv0: [Function]
        },
        pos: 4502
      },
      {
        receiver: {
          ArrayBuffer: [Function: ArrayBuffer],
          Int8Array: [Object],
          Uint8Array: [Object],
          Uint8ClampedArray: [Object],
          Int16Array: [Object],
          Uint16Array: [Object],
          Int32Array: [Object],
          Uint32Array: [Object],
          Float32Array: [Object],
          Float64Array: [Object],
          DataView: [Function: DataView],
          DTRACE_NET_SERVER_CONNECTION: [Function],
          DTRACE_NET_STREAM_END: [Function],
          DTRACE_NET_SOCKET_READ: [Function],
          DTRACE_NET_SOCKET_WRITE: [Function],
          DTRACE_HTTP_SERVER_REQUEST: [Function],
          DTRACE_HTTP_SERVER_RESPONSE: [Function],
          DTRACE_HTTP_CLIENT_REQUEST: [Function],
          DTRACE_HTTP_CLIENT_RESPONSE: [Function],
          global: [Circular],
          process: [Object],
          GLOBAL: [Circular],
          root: [Circular],
          Buffer: [Object],
          setTimeout: [Function],
          setInterval: [Function],
          clearTimeout: [Function],
          clearInterval: [Function],
          setImmediate: [Function],
          clearImmediate: [Function],
          console: [Getter]
        },
        fun: [Function],
        pos: 28120
      }
    ]

So yeah, lots of information.

### \_\_INFO__
Basic information line that contains `__PATH__:__LINE__ [__CLASS__.]__FUNCTION__`.

    /Users/jwalter/Projects/node-magicmethods/test.js:6 Test.(anonymous)
    /Users/jwalter/Projects/node-magicmethods/test.js:19 Test.(anonymous)
    /Users/jwalter/Projects/node-magicmethods/test.js:31 (anonymous)
    /Users/jwalter/Projects/node-magicmethods/test.js:43 NFunction

### \_\_CLASS__
Returns the name of the class for the encompassing object.

### \_\_FUNCTION__
Returns the name of the function or `(anonymous)`. This only works for named functions defined via `function NAME (ARGS) {}`.

### \_\_LINE__
Returns the line number the property is called from.

### \_\_PATH__
Returns the full path to the file the property is called from.

### \_\_FILE__
Returns just the name of the file the property is called from.

### \_\_EXT__
Returns just the extension of the file the property is called from.

### \_\_DIR__
Returns the directory of the file the property is called from.
