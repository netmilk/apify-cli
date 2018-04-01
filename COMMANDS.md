## Commands
```
Command line client for Apify.

VERSION
  apify-cli/0.1.0 darwin-x64 node-v8.9.4

USAGE
  $ apify [COMMAND]

COMMANDS
  call
  create
  init
  login
  logout
  push
  run

```
### apify call
```
USAGE
  $ apify call [ACTID]

ARGUMENTS
  ACTID  Act ID of calling act. It overrides actId in apify.json.

OPTIONS
  -b, --build=build      Tag or number of the build to run (e.g. latest or
                         1.2.34).

  -m, --memory=memory    Amount of memory allocated for the act run, in
                         megabytes.

  -t, --timeout=timeout  Timeout for the act run in seconds. Zero value means
                         there is no timeout.

DESCRIPTION
  This runs your act on Apify and fetches results from output.


```
### apify create
```
USAGE
  $ apify create ACTNAME

ARGUMENTS
  ACTNAME  Name of creating act

OPTIONS
  -t, --template=basic|puppeteer|puppeteer_crawler|plain_request_urls_list
      Act template, if not pass it'll prompt from the console.

DESCRIPTION
  This creates directory with proper structure for local development.
  NOTE: You can specified act template, which can help you in specific use cases 
  like crawling urls list or crawling with queue.


```
### apify init
```
USAGE
  $ apify init [ACTNAME]

ARGUMENTS
  ACTNAME  Name of initeled act

DESCRIPTION
  This asks you for your the act name, writes apify.json and creates apify_local 
  folder structure for local development.
  NOTE: This overrides your current apify.json.


```
### apify login
```
USAGE
  $ apify login

OPTIONS
  -t, --token=token  [Optional] Your API token on Apify

DESCRIPTION
  This is an interactive prompt which authenticates you with Apify.
  All tokens and keys will store ~/.apify.
  NOTE: If you set up token options, prompt will skip

```
### apify logout
```
USAGE
  $ apify logout

DESCRIPTION
  Deletes all your stored tokens and keys from ~/.apify.
  NOTE: This deletes all your global settings. 


```
### apify push
```
USAGE
  $ apify push [ACTID]

ARGUMENTS
  ACTID  Act ID of pushing act. It overrides actId in apify.json.

OPTIONS
  -b, --build-tag=build-tag            Build tag of pushing act version.
  -v, --version-number=version-number  Version number of pushing act version.

DESCRIPTION
  This uploads act from the current directory to Apify and builds it.
  If exists apify.json in the directory it takes options from there. You can 
  override these with options below.
  NOTE: Act overrides current act with the same version on Apify.


```
### apify run
```
USAGE
  $ apify run

DESCRIPTION
  This runs act from current directory. It uses apify_local for getting input 
  and setting output and storing data.


```