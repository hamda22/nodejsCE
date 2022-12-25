terms and concepts to understand what is node js
modules
bulid-in modules
nodejs internals
npm - node package manager
cli tool
misc
`
Executing Javascript with node

1. nodeREPL
   read
   evealuate
   Print
   Loop

2. by using node filename you want to execute

types of Modules:

1. local Modules: Modules that we create in our application
2. Built-in Modules: modules that come with node-js
3. Third-Party Modules : Modules written By other developers that we can use in the our application

Common JS
each file is treated as a module
functions,classes and variables are not accessable to other by default
explictly tell the module by using exports.module or exports but exports.module is recommened
to import you need the reqire function

ES Modules:
we export using 'export defalut'
we import using import filename from 'the path'
when using esmodule we use the extension filename.mjs
name exports are used using the name of the variable of function
