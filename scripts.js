        var tablePrices = document.querySelector('table');
        var section = document.querySelector('section');
        var tr = document.querySelector('tr');

        var imgs = ['https://www.livecoinwatch.com/images/icons32/btc.png','https://www.livecoinwatch.com/images/icons32/eth.png'];
        var container = document.getElementById('imageContainer');

        var requestURL = 'https://api.coinmarketcap.com/v1/ticker/';
        var request = new XMLHttpRequest();
  
        request.open('GET',requestURL,true);

        request.responseType = 'json';
        request.send();
        request.onload = function() {
        var prices = request.response;
            showPrices(prices);
        }

        function showPrices(jsonObj){
          
            for(var j = 0;j<50;j++){
                var row = document.createElement('tr');
                var price = document.createElement('td');
                var name = document.createElement('td');
                var pc24h = document.createElement('td');
                var pc7d = document.createElement('td');

                    //If price in last hour has gone up its green if otherwise its red
                    name.textContent = jsonObj[j].name;
                        if(jsonObj[j].percent_change_1h >= 0){
                            price.style.color = "green";
                        }
                        else{
                            price.style.color = "red";
                        }
                        if(jsonObj[j].percent_change_24h >= 0){
                            pc24h.style.color = "green";
                        }
                        else{
                            pc24h.style.color = "red";
                        }
                        if(jsonObj[j].percent_change_7d >= 0){
                            pc7d.style.color = "green";
                        }
                        else{
                            pc7d.style.color = "red";
                        }
                        
                    price.textContent = "$" + jsonObj[j].price_usd;

                    pc24h.textContent = jsonObj[j].percent_change_24h + '%';
                        //Check if data is NULL which displays the coin is new.
                        if(jsonObj[j].percent_change_7d == null){
                            pc7d.textContent = "*New Coin";
                            pc7d.style.color = "black";
                        }
                        else{
                        pc7d.textContent = jsonObj[j].percent_change_7d + '%';
                        }

                    row.appendChild(name);
                    row.appendChild(price);
                    row.appendChild(pc24h);
                    row.appendChild(pc7d);
                    tablePrices.appendChild(row);

                }



   



        }

        function showImages(imgs){
            for (var i = 0; i < imgs.length; i++){
                var img = document.createElement('img');
                img.src = imgs[i];
                container.appendChild(img);
            }

        }