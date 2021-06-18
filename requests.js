var http = require('http');

var myname = function(){
    console.log("Here is my IP address");
}

async function callHttpbi() {
    let promise = new Promise((resolve, reject) => {
    http.get(
        'http://httpbin.org/ip',
    function(response) {
        var str="";
        response.setEncoding('utf8');
        response.on('data', function(data){
        str += data;
    });
    response.on('end', function() {
        var result = JSON.parse(str);
        myips = result.origin;
        resolve(myips)
    });
    }
    );
});

let result = await promise;
return result;
}

async function executeAsyncTask(){
    const valueA = await callHttpbi();
    myname();
    console.log(valueA);
}
executeAsyncTask();

// Output Here is my IP address 149.24.160.1, 149.24.160.1

/* ERRORS
line 1 - http misspelled
line 3 - function misspelled
line 7 - add async to function
line 20 - myips in resolve()
line 27 - add return to result
line 29 - add async to function
line 31 - missing ; at the end of statement
line 32- remove valueB
line 34 - missing } at the end of function
line 35 - missing function call
*/