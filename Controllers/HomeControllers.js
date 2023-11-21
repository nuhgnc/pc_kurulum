
const { edge_status } = require("../Process/Edge");
const printer_status = require("../Process/Printer");
const {service_status,servisler} = require('../Process/Services')
const {GetAdminGroupMembers} = require('../Process/GroupMembers')
const {kullanicilar,sections,sidebar} = require('./pageSettings');
const {GetRegeditStatus} = require('../Process/Regedit')





exports.Home = async (req, res, next) => { 

  const current_page = req.url;
  const aktifSiteUrl="";
  const aktifSiteName = "";

  res.render("Pages/Genel",{
    pages:sidebar,
    edge_status: edge_status(),
    printer_status: await printer_status(),
    service_status: await service_status(),
    group_members: await GetAdminGroupMembers(),
    GetRegeditValues: await GetRegeditStatus(['HKCU:\\Software\\Netscape\\Netscape Navigator\\Viewers','HKCU:\\Software\\Netscape\\Netscape Navigator\\Viewers'],['TYPE2','application/rtf']),
    servisler,
    sections,
    current_page,
    kullanicilar,
    aktifSiteUrl,
    aktifSiteName
    
  });
};

exports.MainHome = async (req,res)=> {

  const current_page = req.url;
  const aktifSiteUrl="";
  const aktifSiteName = "";
  res.render('Home',{
    pages:sidebar,
    current_page,
    kullanicilar,
    aktifSiteUrl,
    aktifSiteName
  })
}


