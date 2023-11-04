const express = require("express");
const router = express.Router();

const regedit = require('regedit')





router.get("/printer", );

router.get("/users", async (req, res, next) => {
  const users = {
    AdminGoupsMember: {},
    CurrentUser: {},
  };
  await exec(
    'Get-LocalGroupMember -Group "Administrators" | Select Name',
    { shell: "powershell.exe" },
    (error, stdout, stderr) => {
      let res = stdout.split("\r").splice(3);
      res = res.slice(0, -3);
      users.AdminGoupsMember = res;
    }
  );
  await si.users((data) => {
    users.CurrentUser = data;
  });
  res.json(users);
});

router.get("/service", (req, res) => {
  si.services("Appinfo,ALG", (data) => {
    res.json(data);
  });
});

router.get('/regedits',(req,res)=>{
    regedit.list(['HKCU\\Software\\Netscape\\Netscape Navigator\\Viewers','HKLM\\SOFTWARE\\NetShop\\DegiskenlerLAC', 'HKLM\\SOFTWARE\\WOW6432Node\\TERA\\Transfer\\TDT_P_Store'], function(err, result) {
        if (!err){
        res.json(result)
        }else{
            res.json(err)
        }
    })
})

module.exports = router;
