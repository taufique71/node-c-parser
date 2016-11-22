# node-c-parser

### What is it?
Syntax parsing library for C programming language in Node.js.
This node module uses [`node-c-lexer`](https://github.com/taufique71/node-c-lexer) for lexical analysis purpose and accepts token stream formatted in the exact same format as it is in `node-c-lexer`.
The parser takes this token stream as input and gives the parse tree as output. 
The parse tree is actually a javascript object. 
Further analysis on this JSON formatted parse tree can be run if necessary.


C programming language grammars are taken from [here](https://gist.github.com/taufique71/a8e0950b0ca21a9564675723c7998052). 
Before implementation left recursion is removed from this grammar set. 
Final grammar set on which this parser is implemented can be found in [GRAMMARS.md](https://github.com/taufique71/node-c-parser/blob/master/GRAMMARS.md) file of this project.

### Installation
Can be installed through npm with `npm install node-c-parser`.

### Usage
There is only one API endpoint to use for parsing if token stream is ready. 
Otherwise it is necessary to generate token stream before parsing. 
To generate token stream, lexical analyzer unit of this module have to be used.

Let following code to be parsed - 

```c
#include <stdio.h>

int main(){
    printf("Hello World!");
    return 0;
}
```
1. **Require the module**: 
    ```js
    var parser = require("node-c-parser");
    ```

2. **Remove preprocessors**: Before doing anything on source code at first preprocessors 
    need to be removed. 
    Suppose the code is saved to a file named `a.c` and the file resides in the    same directory from where the script is run.
    ```js
    parser.lexer.cppUnit.clearPreprocessors("./a.c", function(err, codeText){
        if(err){
            // Error occured during preprocessor removal. Handle it.
        }
        else{
            // codeText variable contains preprocessor free code. Do something with it.
        }
    });
    ```

3. **Tokenize**:
    ```js
    var tokens = parser.lexer.lexUnit.tokenize(codeText);
    ```

4. **Parse**:
    ```js
    var parse_tree = parser.parse(tokens);
    ```

Parse tree of the above C code would be like [this](http://paste.ubuntu.com/17739375/).

### Parse Tree Structure
As it is said earlier that the parse tree is actually a javascript object.
Structure of parse tree is defined in following JSON-Schema.
```js
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "token": {
            "type": "object",
            "properties": {
                "lexeme": {"type": "string"},
                "row": {"type": "integer", "minimum": 0},
                "col": {"type": "integer", "minimum": 0},
                "tokenClass": {"type": "string"},
                "parent": {"type": "null"},
                "children": {"type": "null"},
                "keyword": {"type": "boolean"}
            },
            "required": ["lexeme", "row", "col", "tokenClass", "parent", "children"]
        }
    },
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "children": {
            "type": "array",
            "items": {
                "oneOf": [
                    {"$ref": "#/definitions/token"},
                    {"$ref": "#"}
                ]
            }
        }
    }
}
```

### Bug Report
The module is still very naive. 
There must be lots of bugs lurking in the code. 
Please report any bug by creating an issue with details. 
Or it would be better if you could create a pull request with the failed test case added to the unit tests.
If you think the bug is in `node-c-lexer` then report it that repository in the mentioned way.
