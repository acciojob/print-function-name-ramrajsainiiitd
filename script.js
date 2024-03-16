var x = function x() {
    window.alert( arguments.callee.name );
}
x();