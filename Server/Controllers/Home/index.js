const express = require("express");
const { edge_status } = require("../../Process/Edge");
const printer_status = require("../../Process/Printer");
const {service_status,servisler} = require('../../Process/Services')


const kullanicilar = [
  {
    name:'Merkez bilgisayarı',
    url:'/merkez',
    icon:'fa fa-user fa-fw'
  },
{
    name:'Mağaza bilgisayarı',
    url:'/magaza',
    icon:'fa fa-store fa-fw'
  }
]



const sidebar = [
  {
    name: "Anasayfa",
    path: "/",
    border_color:'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-gray-600',
    merkez:true,
    magaza:true

  },
  {
    name: "Edge Ayarları",
    path: "/Edge",
    border_color:'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-600',
    merkez:true,
    magaza:true
  },
  {
    name: "ART Office Ayarları",
    path: "/artoffice",
    border_color:'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-600',
    merkez:false,
    magaza:true
  },
  {
    name: "Yazıcı Ayarları",
    path: "/printer",
    border_color:'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600',
    merkez:true,
    magaza:true
  },
  {
    name: "Servis Ayarları",
    path: "/services",
    border_color:'block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-600',
    merkez:true,
    magaza:true
  }
];

const sections = {
  edge:{
    name: "EDGE Ayarları",
    detail: "EDGE tarayıcısı ayarları",
    path: "/Edge",
    style:{
      bg:'from-green-200 to-green-100 rounded-lg shadow-xl p-5',
    },
    img:"/assets/edgeIcon.png"
    
  },
  ARTOffice:{
    name: "ART Office ayarları",
    detail: "ART Office Ayarları",
    path: "/artoffice",
    bg:'from-blue-500 to-purple-400 rounded-lg shadow-xl p-5'
  },
  printers:{
    name: "Yazıcı Ayarları",
    detail:"Windows varsayılan yazıcı ve tüm yazıcılar",
    path: "/printer",
    style:{
      bg:'bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5'
    },
    img:"/assets/printer.png"
  },
  services:{
    name: "Servisler",
    detail:"Çalışması gereken servisler",
    path: "/services",
    style:{
      bg:'bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5'
    },
    img:"/assets/service.png"
  }

}

exports.Home = async (req, res, next) => { 

  const current_page = req.url;
  const aktifSiteUrl="";
  const aktifSiteName = "";

  res.render("ofis/Home",{
    pages:sidebar,
    edge_status: edge_status(),
    printer_status: await printer_status(),
    service_status: await service_status(),
    servisler,
    sections,
    current_page,
    kullanicilar,
    aktifSiteUrl,
    aktifSiteName
    
  });
};




