currentDirectory:: c:/ useCaseSensitiveFileNames: false
Info 0    [00:00:58.000] Provided types map file "c:/a/lib/typesMap.json" doesn't exist
Before request
//// [e:/myproject/src/app.js]
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";


//// [e:/myproject/node_modules/@types/react/index.d.ts]
import * as PropTypes from 'prop-types';


//// [e:/myproject/node_modules/@types/prop-types/index.d.ts]
export type ReactComponentLike =
    | string
    | ((props: any, context?: any) => any)
    | (new (props: any, context?: any) => any);


//// [c:/typescript/node_modules/@types/react-router-dom/index.d.ts]
import * as React from 'react';
export interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    forceRefresh?: boolean;
    keyLength?: number;
}

//// [c:/typescript/node_modules/@types/react/index.d.ts]
import * as PropTypes from 'prop-types';


//// [e:/myproject/package.json]
{"name":"test","version":"0.1.0","dependencies":{"react":"^16.12.0","react-router-dom":"^5.1.2"}}

//// [c:/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [e:/myproject/node_modules/@types/react/package.json]
{"name":"@types/react","version":"16.9.14"}

//// [e:/myproject/node_modules/react-router-dom/package.json]
{"name":"react-router-dom","version":"5.1.2"}

//// [e:/myproject/node_modules/react-router-dom/index.js]
export function foo() {}

//// [e:/myproject/node_modules/@types/prop-types/package.json]
{"name":"@types/prop-types","version":"15.7.3"}

//// [c:/typescript/node_modules/@types/react-router-dom/package.json]
{"name":"@types/react-router-dom","version":"5.1.2"}

//// [c:/typescript/node_modules/@types/react/package.json]
{"name":"@types/react","version":"16.9.14"}


Info 1    [00:00:59.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "e:/myproject/src/app.js"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:01:00.000] Search path: e:/myproject/src
Info 3    [00:01:01.000] For info: e:/myproject/src/app.js :: No config files found.
Info 4    [00:01:02.000] FileWatcher:: Added:: WatchInfo: e:/myproject/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 5    [00:01:03.000] FileWatcher:: Added:: WatchInfo: e:/myproject/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 6    [00:01:04.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 7    [00:01:05.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 8    [00:01:06.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: e:/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 9    [00:01:07.000] FileWatcher:: Added:: WatchInfo: c:/a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 10   [00:01:08.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 11   [00:01:09.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 12   [00:01:10.000] FileWatcher:: Added:: WatchInfo: e:/myproject/node_modules/@types/react/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info 13   [00:01:11.000] FileWatcher:: Added:: WatchInfo: c:/typescript/node_modules/@types/react/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info 14   [00:01:12.000] FileWatcher:: Added:: WatchInfo: e:/myproject/node_modules/react-router-dom/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info 15   [00:01:13.000] FileWatcher:: Added:: WatchInfo: c:/typescript/node_modules/@types/react-router-dom/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info 16   [00:01:14.000] FileWatcher:: Added:: WatchInfo: e:/myproject/node_modules/@types/prop-types/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info 17   [00:01:15.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 18   [00:01:16.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 19   [00:01:17.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 20   [00:01:18.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 21   [00:01:19.000] 	Files (6)
	c:/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	e:/myproject/node_modules/@types/prop-types/index.d.ts Text-1 "export type ReactComponentLike =\n    | string\n    | ((props: any, context?: any) => any)\n    | (new (props: any, context?: any) => any);\n"
	e:/myproject/node_modules/@types/react/index.d.ts Text-1 "import * as PropTypes from 'prop-types';\n"
	c:/typescript/node_modules/@types/react/index.d.ts Text-1 "import * as PropTypes from 'prop-types';\n"
	c:/typescript/node_modules/@types/react-router-dom/index.d.ts Text-1 "import * as React from 'react';\nexport interface BrowserRouterProps {\n    basename?: string;\n    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);\n    forceRefresh?: boolean;\n    keyLength?: number;\n}"
	e:/myproject/src/app.js SVC-1-0 "import React from 'react';\nimport {\n  BrowserRouter as Router,\n} from \"react-router-dom\";\n"


	c:/a/lib/lib.d.ts
	  Default library for target 'es5'
	../node_modules/@types/prop-types/index.d.ts
	  Imported via 'prop-types' from file '../node_modules/@types/react/index.d.ts' with packageId '@types/prop-types/index.d.ts@15.7.3'
	  Entry point for implicit type library 'prop-types' with packageId '@types/prop-types/index.d.ts@15.7.3'
	../node_modules/@types/react/index.d.ts
	  Imported via 'react' from file 'app.js' with packageId '@types/react/index.d.ts@16.9.14'
	  Entry point for implicit type library 'react' with packageId '@types/react/index.d.ts@16.9.14'
	c:/typescript/node_modules/@types/react/index.d.ts
	  Imported via 'react' from file 'c:/typescript/node_modules/@types/react-router-dom/index.d.ts' with packageId '@types/react/index.d.ts@16.9.14'
	  File redirects to file '../node_modules/@types/react/index.d.ts'
	c:/typescript/node_modules/@types/react-router-dom/index.d.ts
	  Imported via "react-router-dom" from file 'app.js' with packageId '@types/react-router-dom/index.d.ts@5.1.2'
	app.js
	  Root file specified for compilation

Info 22   [00:01:20.000] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
e:/myproject/src/tsconfig.json: *new*
  {"pollingInterval":2000}
e:/myproject/src/jsconfig.json: *new*
  {"pollingInterval":2000}
e:/myproject/src/node_modules: *new*
  {"pollingInterval":500}
e:/myproject/src/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
c:/a/lib/lib.d.ts: *new*
  {}
e:/myproject/node_modules/@types/react/package.json: *new*
  {}
c:/typescript/node_modules/@types/react/package.json: *new*
  {}
e:/myproject/node_modules/react-router-dom/package.json: *new*
  {}
c:/typescript/node_modules/@types/react-router-dom/package.json: *new*
  {}
e:/myproject/node_modules/@types/prop-types/package.json: *new*
  {}

FsWatchesRecursive::
e:/myproject/node_modules: *new*
  {}

TI:: [00:01:21.000] Global cache location 'c:/typescript', safe file path '/safeList.json', types map path /typesMap.json
TI:: [00:01:22.000] Processing cache location 'c:/typescript'
TI:: [00:01:23.000] Trying to find 'c:/typescript/package.json'...
TI:: [00:01:24.000] Finished processing cache location 'c:/typescript'
TI:: [00:01:25.000] Npm config file: c:/typescript/package.json
TI:: [00:01:26.000] Npm config file: 'c:/typescript/package.json' is missing, creating new one...
TI:: [00:01:29.000] Updating types-registry npm package...
TI:: [00:01:30.000] npm install --ignore-scripts types-registry@latest
TI:: [00:01:35.000] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [c:/typescript/package.json]
{ "private": true }

//// [c:/typescript/node_modules/types-registry/index.json]
{
 "entries": {}
}


TI:: [00:01:36.000] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["c:/a/lib/lib.d.ts","e:/myproject/src/app.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"e:/myproject/src","cachePath":"c:/typescript","kind":"discover"}
TI:: [00:01:37.000] Request specifies cache path 'c:/typescript', loading cached information...
TI:: [00:01:38.000] Processing cache location 'c:/typescript'
TI:: [00:01:39.000] Cache location was already processed...
TI:: [00:01:40.000] Failed to load safelist from types map file '/typesMap.json'
TI:: [00:01:41.000] Explicitly included types: []
TI:: [00:01:42.000] Inferred typings from unresolved imports: []
TI:: [00:01:43.000] Result: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["e:/myproject/src/bower_components","e:/myproject/src/node_modules"]}
TI:: [00:01:44.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["e:/myproject/src/bower_components","e:/myproject/src/node_modules"]}
TI:: [00:01:45.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/bower_components
TI:: [00:01:46.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:47.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:48.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules
TI:: [00:01:49.000] DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:50.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: e:/myproject/src/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:51.000] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
TI:: [00:01:52.000] No new typings were requested as a result of typings discovery
Info 23   [00:01:53.000] FileWatcher:: Added:: WatchInfo: e:/myproject/package.json 250 undefined WatchType: package.json file
Info 24   [00:01:54.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 24   [00:01:55.000] 	Files (6)

Info 24   [00:01:56.000] -----------------------------------------------
Info 24   [00:01:57.000] Open files: 
Info 24   [00:01:58.000] 	FileName: e:/myproject/src/app.js ProjectRootPath: undefined
Info 24   [00:01:59.000] 		Projects: /dev/null/inferredProject1*
Info 24   [00:02:00.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
e:/myproject/src/tsconfig.json:
  {"pollingInterval":2000}
e:/myproject/src/jsconfig.json:
  {"pollingInterval":2000}
e:/myproject/src/node_modules:
  {"pollingInterval":500}
e:/myproject/src/node_modules/@types:
  {"pollingInterval":500}
e:/myproject/src/bower_components: *new*
  {"pollingInterval":500}

FsWatches::
c:/a/lib/lib.d.ts:
  {}
e:/myproject/node_modules/@types/react/package.json:
  {}
c:/typescript/node_modules/@types/react/package.json:
  {}
e:/myproject/node_modules/react-router-dom/package.json:
  {}
c:/typescript/node_modules/@types/react-router-dom/package.json:
  {}
e:/myproject/node_modules/@types/prop-types/package.json:
  {}
e:/myproject/package.json: *new*
  {}

FsWatchesRecursive::
e:/myproject/node_modules:
  {}

Before request

Info 25   [00:02:01.000] request:
    {
      "command": "completionInfo",
      "arguments": {
        "file": "e:/myproject/src/app.js",
        "line": 5,
        "offset": 1,
        "includeExternalModuleExports": true,
        "includeInsertTextCompletions": true
      },
      "seq": 2,
      "type": "request"
    }
Info 26   [00:02:02.000] getCompletionData: Get current token: *
Info 27   [00:02:03.000] getCompletionData: Is inside comment: *
Info 28   [00:02:04.000] getCompletionData: Get previous token: *
Info 29   [00:02:05.000] getCompletionsAtPosition: isCompletionListBlocker: *
Info 30   [00:02:06.000] getExportInfoMap: cache miss or empty; calculating new results
Info 31   [00:02:07.000] getExportInfoMap: done in * ms
Info 32   [00:02:08.000] collectAutoImports: resolved 0 module specifiers, plus 0 ambient and 0 from cache
Info 33   [00:02:09.000] collectAutoImports: response is complete
Info 34   [00:02:10.000] collectAutoImports: *
Info 35   [00:02:11.000] getCompletionData: Semantic work: *
Info 36   [00:02:12.000] getCompletionsAtPosition: getCompletionEntriesFromSymbols: *
Info 37   [00:02:13.000] response:
    {
      "response": {
        "flags": 1,
        "isGlobalCompletion": true,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": false,
        "entries": [
          {
            "name": "React",
            "kind": "alias",
            "kindModifiers": "",
            "sortText": "11"
          },
          {
            "name": "Router",
            "kind": "alias",
            "kindModifiers": "",
            "sortText": "11"
          },
          {
            "name": "as",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "asserts",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "async",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "await",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "break",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "case",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "catch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "class",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "const",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "continue",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "debugger",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "default",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "delete",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "do",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "else",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "export",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "extends",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "false",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "finally",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "for",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "function",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "globalThis",
            "kind": "module",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "if",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "import",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "in",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "instanceof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "let",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "new",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "null",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "package",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "return",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "satisfies",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "super",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "switch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "this",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "throw",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "true",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "try",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "typeof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "undefined",
            "kind": "var",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "var",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "void",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "while",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "with",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "yield",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "BrowserRouter",
            "kind": "warning",
            "kindModifiers": "",
            "sortText": "18"
          }
        ]
      },
      "responseRequired": true
    }
After request
