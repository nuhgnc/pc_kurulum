const express = require("express");
const { sidebar, kullanicilar } = require("./pageSettings");
const { service_status, Service } = require("../Process/Services");

exports.ServiceController = async (req, res) => {
  res.render("Pages/Services", {
    services: await service_status(),
    pages: sidebar,
    kullanicilar,
  });
};

exports.ServiceRestart = async (req, res) => {
  res.json(await Service.Restart(req.params.service_name));
};

exports.ServiceStart = async (req, res) => {
  res.json(await Service.Start(req.params.service_name));
};

exports.ServiceStop = async (req, res) => {
  res.json(await Service.Stop(req.params.service_name));
};
