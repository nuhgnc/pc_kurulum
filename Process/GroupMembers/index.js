
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);



const GetAdminGroupMembers = async () => {
    try {
        const { stdout, stderr } = await exec('Get-LocalGroupMember -Group "Administrators" | Select Name',{ shell: "powershell.exe" });
    const users = { AdminGoupsMember: {} };
    let res = stdout.split(/\r*\n/).splice(3);
    res = res.slice(0, -3)
    return res;
    //users.AdminGoupsMember = res;
    } catch (error) {
        res = ["<b>! Kullanıcılar getirilirken hata oluştu ! </b>"]
        console.log(error)
        return res
    }
   
    
}

module.exports = {GetAdminGroupMembers}


