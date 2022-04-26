const axios = require('axios');
const fs = require('fs');
/*
let endpoints = [
  'https://api.ethplorer.io/getTokenInfo/0x41a3dba3d677e573636ba691a70ff2d606c29666?apiKey=freekey',
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=blank&order=market_cap_desc&per_page=100&page=1&sparkline=false'
];

axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  (res) => console.log(res),
);
*/

function holders() {
    
    axios
  .get('https://api.ethplorer.io/getTokenInfo/0x41a3dba3d677e573636ba691a70ff2d606c29666?apiKey=freekey')
  .then(res => {
    console.log(res.data);//res.data.holdersCount, res.data.transfersCount);
    //writeHolders(res.data.holdersCount.toString() + ', ', res.data.transfersCount.toString() + ', ');//today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ":00, "
    
    var today = new Date();
    
    try {
  let data = fs.readFileSync('index.html', 'utf8');
  
  try {
  fs.writeFileSync('index.html', data.substring(0, data.indexOf("*T*") - 4) + ', "' + today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ':00"' + data.substring(data.indexOf("*T*") - 4, data.indexOf("*H*") - 4) + ', ' + res.data.holdersCount.toString() + data.substring(data.indexOf("*H*") - 4, data.indexOf("*Tr*") - 4) + ', ' + res.data.holdersCount.toString() + data.substring(data.indexOf("*Tr*") - 4));
  //file written successfully
} catch (err) {
  console.error(err);
}

  console.log(data.substring(0, data.indexOf("*T*") - 4) + ', "' + today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ':00"' + data.substring(data.indexOf("*T*") - 4, data.indexOf("*H*") - 4) + ', ' + res.data.holdersCount.toString() + data.substring(data.indexOf("*H*") - 4, data.indexOf("*Tr*") - 4) + ', ' + res.data.holdersCount.toString() + data.substring(data.indexOf("*Tr*") - 4));
  //console.log(data.substring(0, data.indexOf("*Tr*") - 4) + ', ' + res.data.holdersCount.toString() + data.substring(data.indexOf("*Tr*") - 4, data.indexOf("*V*") - 4));
} catch (err) {
  console.error(err);
}
    
  })
  .catch(error => {
    
    try {
        let data = fs.readFileSync('index.html', 'utf8');
        
        try {
  fs.writeFileSync('index.html', data.substring(0, data.indexOf("*T*") - 4) + ', "' + today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ':00"' + data.substring(data.indexOf("*T*") - 4, data.indexOf("*H*") - 4) + ', 0' + data.substring(data.indexOf("*H*") - 4, data.indexOf("*Tr*") - 4) + ', 0' + data.substring(data.indexOf("*Tr*") - 4));
  //file written successfully
} catch (err) {
  console.error(err);
}
    
    console.log(data.substring(0, data.indexOf("*T*") - 4) + ', "' + today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ':00"' + data.substring(data.indexOf("*T*") - 4, data.indexOf("*H*") - 4) + ', 0' + data.substring(data.indexOf("*H*") - 4, data.indexOf("*Tr*") - 4) + ', 0' + data.substring(data.indexOf("*Tr*") - 4));
        
    } catch(e) {
        alert(e);
    }
    
});
    /*
    fs.writeFile('holders.txt', '0, ', { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});

fs.writeFile('transfers.txt', '0, ', { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});*/
    
setTimeout(markets, 5000);
}
/*
function writeHolders(holdersContent, transfersContent) {
    
    fs.writeFile('holders.txt', holdersContent, { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});

fs.writeFile('transfers.txt', transfersContent, { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});
}*/

function markets() {
    
    axios
  .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=blank&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {
    console.log(res.data[0]);
    //writeMarkets(res.data[0].current_price.toString() + ', ', res.data[0].market_cap.toString() + ', ', res.data[0].total_volume.toString() + ', ');
    
    try {
        let data = fs.readFileSync('index.html', 'utf8');
        
        try {
  fs.writeFileSync('index.html', data.substring(0, data.indexOf("*V*") - 4) + ', ' + res.data[0].total_volume.toString() + data.substring(data.indexOf("*V*") - 4, data.indexOf("*M*") - 4) + ', ' + res.data[0].market_cap.toString() + data.substring(data.indexOf("*M*") - 4, data.indexOf("*P*") - 4) + ', ' + res.data[0].current_price.toString() + data.substring(data.indexOf("*P*") - 4));
  //file written successfully
} catch (err) {
  console.error(err);
}

        console.log(data.substring(0, data.indexOf("*V*") - 4) + ', ' + res.data[0].total_volume.toString() + data.substring(data.indexOf("*V*") - 4, data.indexOf("*M*") - 4) + ', ' + res.data[0].market_cap.toString() + data.substring(data.indexOf("*M*") - 4, data.indexOf("*P*") - 4) + ', ' + res.data[0].current_price.toString() + data.substring(data.indexOf("*P*") - 4));
    
    } catch(e) {
        console.log(e);
        
    }
  })
  .catch(error => {
    
    try {
        let data = fs.readFileSync('index.html', 'utf8');
        
        try {
  fs.writeFileSync('index.html', data.substring(0, data.indexOf("*V*") - 4) + ', 0' + data.substring(data.indexOf("*V*") - 4, data.indexOf("*M*") - 4) + ', 0' + data.substring(data.indexOf("*M*") - 4, data.indexOf("*P*") - 4) + ', 0' + data.substring(data.indexOf("*P*") - 4));
  //file written successfully
} catch (err) {
  console.error(err);
}
        
        console.log(data.substring(0, data.indexOf("*V*") - 4) + ', 0' + data.substring(data.indexOf("*V*") - 4, data.indexOf("*M*") - 4) + ', 0' + data.substring(data.indexOf("*M*") - 4, data.indexOf("*P*") - 4) + ', 0' + data.substring(data.indexOf("*P*") - 4));
    
        
    } catch(e) {
        alert(e);
    }
    
  });
  /*
  fs.writeFile('price.txt', '0, ', { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});
    
    fs.writeFile('mc.txt', '0, ', { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});
    
    fs.writeFile('volume.txt', '0, ', { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});*/
  
}
/*
function writeMarkets(priceContent, mcContent, volumeContent) {
    
    fs.writeFile('price.txt', priceContent, { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});
    
    fs.writeFile('mc.txt', mcContent, { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});
    
    fs.writeFile('volume.txt', volumeContent, { flag: 'a' }, err => {
  if (err) {
    console.error(err);
  }
  //file written successfully
});*/
    
    
    //fs.writeFile('time.txt', today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ":00, ", { flag: 'a' }, err => {
  //if (err) {
    //console.error(err);
  //}
  //file written successfully
//});
    //console.log(today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear() + ' ' + today.getHours() + ":00");
//}

holders();

setInterval(holders, 3600000);

//USE .DATA.NAME TO DIFFERENTIATE