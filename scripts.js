        var tablePrices = document.querySelector('table');
        var section = document.querySelector('section');
        var tr = document.querySelector('tr');
      
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
            for(var j = 0;j<40;j++){
                var row = document.createElement('tr');
                var img = document.createElement('img');
                var price = document.createElement('td');
                var name = document.createElement('td');
                var pc24h = document.createElement('td');
                var pc7d = document.createElement('td');

                        /*Allocating images by fetching the name of the coin and concatinating a .png at the end
                        in order to find the images already saved on the machine with the same names*/
                        var imageName = "images/" + jsonObj[j].name + ".png";
                        img.src = imageName;
                        name.textContent = jsonObj[j].name;
                        //Prices change the colour of percetanges and prices. Green for >= 0 and red otherwise.

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
                        usdPrice = jsonObj[j].price_usd
                    row.appendChild(img);
                    row.appendChild(name);
                    row.appendChild(price);
                    row.appendChild(pc24h);
                    row.appendChild(pc7d);
                    tablePrices.appendChild(row);

                }

                return usdPrice;
        }
      
     