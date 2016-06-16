# node-c-parser

### What is it?
Syntax parsing library for C programming language in NodeJS.
This node module uses [`node-c-lexer`](https://github.com/taufique71/node-c-lexer) for lexical analysis purpose and accepts token stream formatted in the exact same format as it is in `node-c-lexer`.
The parser takes this token stream as input and gives the parse tree as output. 
The parse tree is actually a javascript object. 
Anyone can run further analysis on this JSON formatted parse tree if necessary.


C programming language grammars are taken from [here](https://www.lysator.liu.se/c/ANSI-C-grammar-y.html). 
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

1. **Preprocessing**: Before doing anything on source code at first preprocessors are to be removed.
