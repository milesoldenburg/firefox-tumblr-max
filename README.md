firefox-tumblr-max
==================

A Firefox extension that provides a context menu on Tumblr images with the option to find the highest res version.

## Installation

To install the latest version, download [firefox-tumblr-max.xpi](https://github.com/milesoldenburg/firefox-tumblr-max/blob/master/firefox-tumblr-max.xpi?raw=true) and open with Firefox.

## Usage

Right click on any Tumblr image. If there is a max res version available the following menu options will appear:

* Tumblr Max Image: New Tab
	* Opens the max res image in a new tab
* Tumblr Max Image: Download
	* Downloads the max res image into your home Downloads directory
		* On OS X: /Users/*[username]*/Downloads
		* On Windows: C:\\Users\\*[username]*\\Downloads
		
## Development
### Dependencies
cfx  
[https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/cfx](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/cfx)

### Testing
```
cfx run
```

### Packaging
```
cfx package
```
		
## Release History
| Version | Release Date | Release Notes |
| ------- | ------------ | ------------- |
| 0.1.0   | 12-19-2014   | Initial Version |

## Author
Miles Oldenburg  
[@milesoldenburg](https://github.com/milesoldenburg/)