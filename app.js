console.log("AJAX codes")

document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the button');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','mohit.txt', true ); //xhr.open('typr of request', 'source of data', 'sunchronous or asynchronous') true for asynchronous and false for the otherx

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

    //send the request
    xhr.send();
}




