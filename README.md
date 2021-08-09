
# rncli
Convenient CLI for React Native apps

## Install
```sh
$ npm install -g rncli
```

## How to use
First install preset (rncli-expo-ts for example)
```sh
$ npm install -g rncli-expo-ts
```
Create file rncli.config.js in yourt RN app root
```javascript
module.exports = {
    preset: 'rncli-expo-ts' // insert the installed preset here
}
```
Also you can use custom config
```sh
$ rncli --config ./custom-config.js
```
You can create component
```sh
$ rncli generate component button
# or 
$ rncli g c button
# or create container
$ rncli g container app
```
All templates:
```sh
$ rncli g help
```
Or get help
```sh
$ rncli --help
```

## Debug mode
```sh
$ export RNCLI_DEBUG=true
$ rncli g c textfield # output with debug logs...
```