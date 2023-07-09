/*1>> How javascript work?
------------------------------------


Everything in javascript happens inside an execution context.

>> inside execution context there is two Component.

a) variable enviroment (memory)
b) thead of execution (code)

Javascript is synchronous single threaded language.



2>> How javascript code is executed?
----------------------------------------

First all the variable will allocate in memory as "undefined" and in case of function
everthing inside function store as is it

second is code execution in this case value will get assigned to varibale and in case of
function call,again brand new execution context will get created.

for each function call, new execution context is created and once the return statememt
is reached ,this context is deleted.the control return to global context.

note: its diffficult to manage creation and deletion so it uses call statck.

*/