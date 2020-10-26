function someFunc() {
    var input = document.getElementById('someInput').value
    var par = document.getElementById('name') 
    par.innerHTML = input
}

document.addEventListener('DOMContentLoaded', function() {
    var test = document.getElementById('btn');
    test.addEventListener('click', someFunc)
});