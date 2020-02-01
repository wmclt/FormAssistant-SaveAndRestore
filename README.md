web-developer-form-filler-ext
=============================

This extension is used by developers to make it easy to snapshot and fill forms quickly.

Feel free to open an issue or send a pull request!

Date and Time autofill support has been added over original fork.

Usage:
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

Forked from:
https://github.com/etbusch/web-developer-form-filler-ext

Available as a Firefox Addon:
https://addons.mozilla.org/en-US/firefox/addon/web-dev-form-filler/

And at the Google Web Store (older version)
https://chrome.google.com/webstore/detail/web-developer-form-filler/gbagmkohmhcjgbepncmehejaljoclpil