FormAssistant - Save & Restore
=============================

This extension is used by developers to make it easy to snapshot and fill forms quickly.

Feel free to open an issue or send a pull request!

Date and Time autofill support has been added over original fork.

# Usage
1. In an input of type _textarea_, _text_, _email_, _search_, _url_ or _date_, type _*@@@DTPH@@@*_ at the beginning of the field (it will be removed in the output)
2. Type your input and add formatting as needed (see table below)
3. Save your form
4. Restore your form and it will now use this formatting

| Format | Description |
|-|-|
| %% | To represent a litteral '%' |
| %H | Hours (00-23) |
| %M | Minutes (00-59) |
| %S | Seconds (00-59) |
| %d | Day of the month (00-31) |
| %m | Month (01-12) |
| %y | Full Year (ex: 2020) |

# Credits
This repo is a fork of https://github.com/mathieuf20/FormAssistant-SaveAndRestore/tree/master, 
which is a working fork of https://github.com/etbusch/web-developer-form-filler-ext,
which is itself a Firefox-friendly fork of https://github.com/abzubarev/web-developer-form-filler-ext.

This repo introduces a fix to the "path" filter, which has never worked (and possibly also a reinterpretation of one of the original functionalities, although I'm 90% sure that this functionality was not implemented the way it was intended). 
In the original repos the original "path" filter would look at (url1.protocol + url1.host + url1.path). This must be an error because the result is the exactly the same as when the "full" filter is chosen. The "path" filter should be meant to match on the same paths on different domains, e.g. the "/contact" path on domains amazon.com, amazon.de, amazon.fr, etc.
