const fs = require("fs");

const edge_path = `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\User Data\\Default`;
const EdgeJson_path = `${edge_path}\\Preferences`



const EdgeJson = {
  read : function (){
    const data =  fs.readFileSync(EdgeJson_path)
    return JSON.parse(data.toString());
  },
  

}

//openExplorer(edge_path, (err) => (err ? console.log(err) : null));
const edge_settings = {

  IE_mode: function () {
    const Preferences_json = EdgeJson.read()
    return  Preferences_json.dual_engine.consumer_mode.enabled_state;
  },

  IE_Pages: function () {
    const Preferences_json = EdgeJson.read()
    Preferences_json = Preferences_json.dual_engine.user_list_data_1;
    return Object.keys(Preferences_json);
  },
};

let edge_status = () => [
  {
    name: "IE Mod",
    value: (edge_settings.IE_mode())?'Aktif':'Aktif değil',
    message:
      edge_settings.IE_mode() == 1
        ? "Internet Explorer modu aktif"
        : "Internet Explorer modu aktif değil!"
        
  },
  {
    name: "Kayılı sayfalar",
    value: edge_settings.IE_Pages().length,
    message: `${edge_settings.IE_Pages().toString().replace(/,/g, "<br>")}`,
  },
];


const changeEdgeSettings = () => {

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
        jsonData.dual_engine.consumer_mode.enabled_state = 0; // Yeni değeri buraya yazın
      }
  
      // JSON verisini tekrar stringify yapın
      const yeniIcerik = JSON.stringify(jsonData, null, 2); // 2. parametre, düzgün bir görünüm için girintileme sağlar
  
      // Dosyaya Yazma
      fs.writeFile(EdgeJson_path, yeniIcerik, "utf8", (err) => {
        if (err) {
          console.error("Dosya yazma hatası:", err);
          return;
        }
  
        console.log("Değişiklik başarıyla kaydedildi.");
      });
    } catch (parseError) {
      console.error("JSON ayrıştırma hatası:", parseError);
    }
  });
  
  }




module.exports = { edge_status };
