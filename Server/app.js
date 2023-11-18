const express = require('express'),
fs = require('fs')


const Home = require('./Routers/Home/homeRoute')
const page_routes = require('./Routers/PageRouters')

const app = express();

const port = 3000;

//MiddleWares
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(Home)
app.use(page_routes)

const changeEdgeSettings = () => {

    const edge_path = `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\User Data\\Default`;
const EdgeJson_path = `${edge_path}\\Preferences`

    // 1. Dosyayı Okuma
    fs.readFile(EdgeJson_path, "utf8", (err, data) => {
      if (err) {
        console.error("Dosya okuma hatası:", err);
        return;
      }
    
      try {
        // JSON verisini ayrıştır
        const jsonData = JSON.parse(data);
    
        // Değiştirmek istediğiniz değeri güncelleyin
        if (jsonData.dual_engine && jsonData.dual_engine.consumer_mode) {
            console.log("eski değer: " +jsonData.dual_engine.consumer_mode.enabled_state)
          jsonData.dual_engine.consumer_mode.enabled_state = 2; // Yeni değeri buraya yazın
          console.log("yeni değer: " +jsonData.dual_engine.consumer_mode.enabled_state)
        }
    
        // JSON verisini tekrar stringify yapın
        const yeniIcerik = JSON.stringify(jsonData, null, 2); // 2. parametre, düzgün bir görünüm için girintileme sağlar
    
        // Dosyaya Yazma
        fs.writeFile(EdgeJson_path, yeniIcerik, "utf8", (err) => {
          if (err) {
            console.error("Dosya yazma hatası:", err);
            return;
          }
          console.log(yeniIcerik)
          console.log("Değişiklik başarıyla kaydedildi.");
        });
      } catch (parseError) {
        console.error("JSON ayrıştırma hatası:", parseError);
      }
    });
    
    }

    changeEdgeSettings()


app.listen(port, () => {
    console.log(`server ${port} numaralı port üzerinden çalışmaya başladı`)
    //require('child_process').exec(`start http://localhost:${port}/merkez`)
})

