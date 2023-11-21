const fs = require("fs");

const edge_path = `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\User Data\\Default`;

//openExplorer(edge_path, (err) => (err ? console.log(err) : null));
const edge_settings = {
  data:`${edge_path}\\Preferences`,
  IE_mode: function () {
    const data = fs.readFileSync(this.data);
    var Preferences_json = JSON.parse(data.toString());
    return deger = Preferences_json.dual_engine.consumer_mode.enabled_state;
  },

  IE_Pages: function () {
    const data = fs.readFileSync(this.data);
    var Preferences_json = JSON.parse(data.toString());
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
module.exports = { edge_status };