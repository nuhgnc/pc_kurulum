const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);


const GetRegeditStatus = async (paths,key) => {
    const regs = [];
    try {

        for (var i = 0; i<paths.length; i++) {
            const { stdout, stderr } = await exec(`Get-ItemPropertyValue  -Path '${paths[i]}' -Name ${key[i]}`,{ shell: "powershell.exe" });
            const value = stdout.split(/\r*\n/)[0].toString();
            console.log("Konsol Çıktısı:",value)
            console.log("Error Çıktısı:",stderr)
            regs.push({path:paths[i],key:key[i],value:value})
          }
    return regs;
    //users.AdminGoupsMember = res;
    } catch (error) {
        regs.push("<b>! Regeditler getirilirken hata oluştu ! </b>") 
        console.log(error)
        return regs
    }
   
   // HKCU:\\Software\\Netscape\\Netscape Navigator\\Viewers
}

module.exports = {GetRegeditStatus}