# rtc-proxy

This is a set of simple proxy classes that are designed to provide a
minimal layer between a WebRTC plugin and browser run JS.


[![NPM](https://nodei.co/npm/rtc-proxy.png)](https://nodei.co/npm/rtc-proxy/)

[![Build Status](https://api.travis-ci.org/rtc-io/rtc-proxy.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-proxy) [![deprecated](https://img.shields.io/badge/stability-deprecated-aa8899.svg)](https://github.com/dominictarr/stability#deprecated) 

## Why?

This package exists because during the development of an iOS plugin, we
have found that frameworks such as angular don't work as nicely with
the plugin interface.  Primarily the problem is that Angular is unable
to get any metainformation about the object (using `Object.keys` or
similar).

This layer provides that information when required.

## License(s)

### Apache 2.0

Copyright 2015 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
