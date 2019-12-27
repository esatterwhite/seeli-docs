(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),e("p",[t._v("An instance of the "),e("code",[t._v("command")]),t._v(" class represents a single executable unit.\nThe seeli framework parses user input and executes the appopriate command.\nCommands handle basic validation, formatting help messages, prompting for\nuser input. The vast majority of this functionality is handled through "),e("strong",[t._v("flags")])]),t._v(" "),e("h2",{attrs:{id:"flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),e("p",[t._v("A flag represents a single value that you want to collect from user input.\nWhen the command sucessfully executes, the collected values are passed to\nthe "),e("code",[t._v("run")]),t._v(" function of your command as a single object.")]),t._v(" "),e("p",[t._v("A simple example would be collecting name and age of an individual")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seeli'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'personalize'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your name'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shorthand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your age in years'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shorthand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("required")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("true")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("The type of input that is expected. Boolean types to not expect input. The present of the flag "),e("strong",[t._v("implies")]),t._v(" "),e("code",[t._v("true")]),t._v(". Additionally, boolean flags allow for "),e("code",[t._v("--no-<flag>")]),t._v(" to enforce "),e("code",[t._v("false")]),t._v(". If you want to accept multiple "),e("strong",[t._v("values")]),t._v(", you specify type as an array with the first value being the type you which to accept. For example "),e("code",[t._v("[String, Array]")]),t._v(" means you will accept multiple string values.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("description")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("a description of the flag in question. Used to generate help messages")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("required")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("If set to "),e("code",[t._v("true")]),t._v(" a "),e("code",[t._v("RequiredFieldError")]),t._v(" will be emitted")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("shorthand")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("An optional shorthand name that will be expanded out to the long hand flag.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("interactive")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("If set to false the flag will omitted from interactive prompts")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("default")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("mixed")])]),t._v(" "),e("td",[t._v("A value to return if the flag is omitted.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("mask")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("strong",[t._v("interactive mode only")]),t._v(" Sets the input type to masked input to hide values")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("choices")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("array")])]),t._v(" "),e("td",[t._v("Used only during an interactive command. Restricts the users options only to the options "),e("strong",[t._v("specified")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("multi")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("strong",[t._v("interactive mode only")]),t._v(" If choices is specified, and multi is true, this user will be presented a multi checkbox UI allowing them to pick multiple values. The return value will be an array")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("skip")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("strong",[t._v("interactive mode only")]),t._v(" - if set to "),e("code",[t._v("true")]),t._v(" this flag will be omitted from the interactive command prompts")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("event")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("if set to "),e("code",[t._v("true")]),t._v(" the command will emit an event withe the same name as the flag with "),e("strong",[t._v("the")]),t._v(" value that was captured for that flag")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("when")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("function")])]),t._v(" "),e("td",[e("strong",[t._v("interactive mode only")]),t._v(" Receives the current user answers hash and should return true or "),e("strong",[t._v("false")]),t._v(" depending on whether or not this question should be asked.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("validate")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("function")])]),t._v(" "),e("td",[t._v("receives user input and should return true if the value is "),e("strong",[t._v("valid")]),t._v(", and an error message (String) otherwise. If false is returned, a default error message is provided.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("filter")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("function")])]),t._v(" "),e("td",[e("strong",[t._v("interactive mode only")]),t._v(" Receives the user input and return the filtered value to be used "),e("strong",[t._v("inside")]),t._v(" the program. The value returned will be added to the Answers hash.")])])])]),t._v(" "),e("h3",{attrs:{id:"types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),e("p",[t._v("Generally, all input from "),e("code",[t._v("stdin")]),t._v(" is represented as strings. Using the flag "),e("code",[t._v("type")]),t._v(" option you can specify\nThe data expected data type and the input value will be coerced appropriately.\nIn most cases, you may pass the native javascript type you want to use. There are special cases\nfor "),e("code",[t._v("url")]),t._v(" and "),e("code",[t._v("path")])]),t._v(" "),e("h4",{attrs:{id:"string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),e("p",[t._v("Coerce all values as text / strings")]),t._v(" "),e("h4",{attrs:{id:"number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),e("p",[t._v("Coerce all values as numeric ( integer or decimal )")]),t._v(" "),e("h4",{attrs:{id:"date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" Date")]),t._v(" "),e("p",[t._v("Converts javascript date string into full Date objects")]),t._v(" "),e("h4",{attrs:{id:"boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),e("p",[t._v("Boolean is a special input type in that it doesn't require an input value. The presence of the flag indicates a true value.\nThe flag can be negated by prefixing the flag with "),e("code",[t._v("no-")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ cmd --bool "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#true")]),t._v("\n$ cmd --no-bool "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#false")]),t._v("\n")])])]),e("h4",{attrs:{id:"url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),e("p",[t._v("A valid URL string. If it can't be parsed or is not a value url, An error will be raised.\nThe flag type should be the node "),e("code",[t._v("url")]),t._v(" module")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    website"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" Path")]),t._v(" "),e("p",[t._v("A valid file system path. If the path doesn't resolve, an error will be raised.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" Password")]),t._v(" "),e("p",[t._v("Collects values as strings, but does not display the input value when it is typed.")]),t._v(" "),e("h4",{attrs:{id:"array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),e("p",[t._v("Including "),e("code",[t._v("Array")]),t._v(" in combination with another type allows a particular flag to be repeated.\nThe resulting input value will always be an array")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    numbers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ cmd --numbers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --numbers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --numbers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {numbers: [1, 2, 3]}")]),t._v("\n")])])]),e("h3",{attrs:{id:"nested-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nested-flags"}},[t._v("#")]),t._v(" Nested Flags")])])}),[],!1,null,null,null);a.default=n.exports}}]);