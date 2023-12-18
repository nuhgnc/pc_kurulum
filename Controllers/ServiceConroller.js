const express = require("express");
const { sidebar, kullanicilar } = require("./pageSettings");
const {service_status,Service} = require('../Process/Services');




exports.ServiceController = async (req, res) => {

res.render("Pages/Services", {
    services : await service_status(),
    pages: sidebar,
    kullanicilar,
  }); 



 
};
 

