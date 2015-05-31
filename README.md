firefox-tumblr-max
==================

A Firefox extension that provides a context menu on Tumblr/Houzz images with the option to find the highest res version.

## Installation
To install the latest version, download [firefox-tumblr-max@milesoldenburg.com-0.2.0.xpi](http://api.milesoldenburg.com/firefox-tumblr-max/firefox-tumblr-max@milesoldenburg.com-0.2.0.xpi) and open with Firefox.

Alternatively, package the XPI from source using the following instructions.

## Usage
Right click on any Tumblr/Houzz image. If there is a max res version available the following menu options will appear:

* Tumblr Max Image: New Tab
	* Opens the max res image in a new tab
* Tumblr Max Image: Download
	* Downloads the max res image into your home Downloads directory
		* On OS X: /Users/*[username]*/Downloads
		* On Windows: C:\\Users\\*[username]*\\Downloads
		
## Development
### Dependencies
1. [node.js](https://nodejs.org/)

### Prerequisites
	sudo npm install
	
### Packaging
	npm run package
		
## Release History
| Version | Release Date | Release Notes |
| ------- | ------------ | ------------- |
| 0.2.0 | 05-30-2015 | Added Houzz image support |
| 0.1.1 | 05-30-2015 | Upgraded from CFX to JPM |
| 0.1.0 | 12-19-2014 | Initial Version |

## Author
Miles Oldenburg  
[@milesoldenburg](https://github.com/milesoldenburg/)
