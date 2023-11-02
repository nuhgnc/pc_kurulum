const fs = require("fs");

const edge_path = `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\User Data\\Default`;

//openExplorer(edge_path, (err) => (err ? console.log(err) : null));
 const edge_settings = {

       IE_mode: function() {

            const data = fs.readFileSync(`${edge_path}\\Preferences`);
            var Preferences_json = JSON.parse(data.toString());
            console.log('file readed')
            return Preferences_json.dual_engine.consumer_mode.enabled_state;

    }, 


    IE_Pages: function(){
        const data = fs.readFileSync(`${edge_path}\\Preferences`);
        var Preferences_json = JSON.parse(data.toString());
        Preferences_json = Preferences_json.dual_engine.user_list_data_1;
        var siteler = Object.keys(Preferences_json);
        
        return siteler
    }
}


module.exports = {edge_settings}
