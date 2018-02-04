document.getElementById("button").addEventListener("click", loadData);

function loadData() {
    //create and XHR objetc
    const xhr = new XMLHttpRequest();

    //open (type of request, url/file name, async)
    xhr.open("GET", "assets/data.txt", true);

    //in case of adding and optional spinner / loader qhile the page loads:
    xhr.onprogress = function(){
        //do something
        console.log("READYSTATE", xhr.readyState);
    }
    //on page load
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("output").innerHTML = `
            <h1>${this.responseText}</h1>
            `;
            //console.log(this.responseText);
        }
    }
    //in case of error
    xhr.onerror = function(){
        console.log("Request error...");
    }
    //mandatory to have the response
    xhr.send();

    /*
    Info:::

    HTTP STATUSES:
    200: OK
    403: FORBIDDEN
    404: NOT FOUND


    readyStates Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response ready
    */ 
}