(function(){
    let joker = document.querySelector('#trigger');
    if(joker){
        joker.addEventListener('click',loadJoke);
    }

    function loadJoke(){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(this.readyState==4){
                if(this.status==200){
                    var json = JSON.parse(this.responseText);
                    console.log(json)
                    var html = '<div><img src="'+json.icon_url+'">'+json.value+'</div>';
                    document.querySelector('#output').innerHTML = html;
                }
            }
        }
        ajax.open('GET','https://api.chucknorris.io/jokes/random',true);
        ajax.send();
    }
    
    let rectangle = (base, height) =>{
        return base*height;
    }

    document.querySelector('#calculateRectangle').addEventListener('click', () => {
        calculateRectangle();
    });
    
    function calculateRectangle(){
        let baseValue = parseInt(document.getElementById("base").value);
        let heightValue = parseInt(document.getElementById("height").value);
        let result = rectangle(baseValue, heightValue);
        let resultElement = document.getElementById("resutSet");
        resultElement.innerHTML = "Area of Rectangle is : "+result;

        if (baseValue != null) {
            localStorage.setItem("baseValue", baseValue);
        }
        if (heightValue != null) {
            localStorage.setItem("heightValue", heightValue);
        }
        if (result != null) {
            localStorage.setItem("rectangleArea", result);
        }
    }
})()
