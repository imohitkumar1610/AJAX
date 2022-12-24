console.log("AJAX codes")

document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the button');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true ); //xhr.open('typr of request', 'source of data', 'sunchronous or asynchronous') true for asynchronous and false for the otherx
 // use this for post request
 xhr.open('POST','https://dummyjson.com/posts/add', true );
 xhr.getResponseHeader('content-type','application/JSON');
    //what to do on progress 
    xhr.onprogress = function(){
        console.log('on progress'); 
    }
    //other than onload function you can use onreadystate function as well which is nothing but an old version
    xhr.onreadystatechange = function(){
        console.log('ready state is ', xhr.readyState);
    }

    //what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){//200 is the response code of http which basically means all ohk 
            console.log(this.responseText)
        }else{
            console.log('some error occured');
        }
    }
    // send this request
    params = ` {"name":"test2154","salary":"125"."age":"55"}`;

    //send the request
    xhr.send(params);
    //this might show before th response sent by the server as we are using asynchronous call
    console.log('we are done');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',pophandeler);

function pophandeler(){
    console.log('you have clicked the pophandeler');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees', true ); 

    

    //what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){//200 is the response code of http which basically means all ohk 
            let obj = response.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            for (key in obj){
                str += `<li>${obj[key].employee_name}</li>}`;
            }
            list.innerHtml = str;
        }else{
            console.log('some error occured');
        }
    }
    //send the request
    xhr.send();
    console.log('we are done fetching employees');
}




