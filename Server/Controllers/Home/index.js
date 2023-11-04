const express = require("express");
const { edge_status } = require("../../Process/Edge");
const printer_status = require("../../Process/Printer");

const sidebar = [
  {
    name: "Home",
    path: "/",
    section_bg:null
  },
  {
    name: "Edge Ayarları",
    path: "/Edge",
    section_bg:'from-green-200 to-green-100'
  },
  {
    name: "ART Office Ayarları",
    path: "/artoffice",
    section_bg:'from-blue-500 to-purple-400'
  },
  {
    name: "Yazıcı Ayarları",
    path: "/printer",
    section_bg:'bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600'
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
  }

}

exports.Home = async (req, res, next) => { 

  res.render("ofis/Home",{
    pages:sidebar,
    edge_status: edge_status(),
    printer_status: await printer_status(),
    sections
    
  });
};




