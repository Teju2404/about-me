var joker = document.querySelector('#trigger');
        joker.addEventListener('click',loadJoke)
        
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