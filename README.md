![Golden Compass: An Elegant Full-Stack Project](https://raw.githubusercontent.com/yinanfang/GoldenCompass/master/Others/logo/logo_github.png)

A full-stack project with Node.js backend, HTML5 website and iOS app

## Quick Features

- [x] iOS app
- [x] Node backend
- [ ] HTML5 website

## Requirements

- iOS 8.0+
- Xcode 6.3+
- Node 0.11.2+

## Quick Installation

    git clone https://github.com/yinanfang/GoldenCompass; cd GoldenCompass
    cd node; npm install -g gulp bower && npm install && bower install; cd ..
    cd iOS; cocoapod install; cd ..

## Detailed Features:

### iOS

#### Prototype

- InVision: http://www.invisionapp.com/

#### Extensive Use of Third-Party Libraries

- ReactiveCocoa
- AFNetworking
- Bolts-iOS
- Blah blah blah

#### Multi-Queue and Multi-Thread (TODO)

#### Dependencies Injection with NSNotification+Factory Methods (TODO)
  Store info in info.plist. Create a reader and writer
  No framework because Typhoon is in Objective-C and I'm about to move to Swift
  Pass in all needed state from constructor
  This is called Dependency Injection, by the way; you don't need to use Spring or any special IoC container, just so long as your general class design accepts its dependencies from the caller instead of instantiating them on its own or referencing global state.

#### Core-Data?

#### Architecture Decision

- View Controller Containment

### Node.js

#### Build System

node
1. Use development tools that automatesrestarts and browser refresh
  * nodemon for dev and pm2 for production
2. Non-blocking event loop
3. Use promises
  * Async
4. Strong in modularity
5. Advance logging
  * With Bunyan: https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/
6. Test coverage ??
7. Utilyze static analysis tools
  * ESLint
8. Monitor and profile for production
9. Advanced debuging with https://github.com/visionmedia/debug
10. Statistics
  * https://github.com/etsy/statsd   ??
Dependencies:
  AngularJS

node plugins
  node-mysql
  ejs

generator
  node - koa, express
  browser - bluebird, tracer-compiler
  both - async

EC6
  traceur-compiler

### Github badges https://github.com/badges/shields

### Uses markdown editor here
https://stackedit.io/editor
### Folder structure follow "polymer-starter-kit".
  * Same from Yeoman maybe. Add .htaccess at the root level "app": https://www.youtube.com/watch?v=gKiaLSJW5xI

### Use this as a main repo. Add submodule for the node and iOS parts??

### gitignore
Add "// .gitignore node_modules/*" and add setup command such as "npm install -g gulp bower && npm install && bower install" in "https://github.com/PolymerElements/polymer-starter-kit"

### Follow 10 key points: https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
### This too: https://medium.com/@faisalabid/7-tips-for-a-node-js-padawan-e7c0b0e5ce3c


### Debug
node-inspector

### Front-end
  * Bootstrap, AngularJS, Modernizr






