const express = require("express");
const { edge_settings } = require("../Process/Edge_Settings");
const router = express.Router();
const si = require("systeminformation");
const { exec } = require("child_process");
const regedit = require('regedit')

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Edge Ayarları",
    path: "/Edge",
  },
  {
    name: "ART Office Ayarları",
    path: "/artoffice",
  },
];

let edge_status = () => [
  {
    name: "IE Mod",
    value: edge_settings.IE_mode(),
    message:
      edge_settings.IE_mode() == 1
        ? "Internet Explorer modu aktif"
        : "Internet Explorer modu aktif değil!",
    bg_color: "from-green-200 to-green-100",
  },
  {
    name: "Kayılı sayfalar",
    value: edge_settings.IE_Pages().length,
    message: `${edge_settings.IE_Pages().toString().replace(/,/g, "<br>")}`,
    bg_color: "from-green-200 to-green-100",
  },
];

router.get("/", (req, res, next) => {
  res.render("ofis/Home", { pages, edge_status });
});

router.get("/edge", (req, res, next) => {
  res.json({
    value: edge_status(),
  });
});

router.get("/printer", (req, res, next) => {
  si.printer((data) => {
    res.json(data);
  });
});

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
