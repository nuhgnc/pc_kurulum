const si = require("systeminformation");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

const servisler = [
  {
    name: "Asgard Agent",
    serviceName: "asgard2-agent",
    merkez: true,
    ofis: true,
  },
  {
    name: "Eset",
    serviceName: "ekrn",
    merkez: true,
    ofis: true,
  },
  {
    name: "Carbon Black",
    serviceName: "carbonblack",
    merkez: true,
    ofis: true,
  },
  {
    name: "Drop Windows Service",
    serviceName: "dropwindowsservice",
    merkez: false,
    ofis: true,
  },
  {
    name: "Fortinac",
    serviceName: "bnpagent",
    merkez: true,
    ofis: false,
  },
  {
    name: "DNS Sense",
    serviceName: "dnssenseservice",
    merkez: true,
    ofis: true,
  },
];

async function service_status() {
  try {
    const data = await si.services(
      servisler.map((item) => item.serviceName).join()
    );

    data.forEach((item) => {
      servisler.forEach((service) => {
        if (item.name == service.serviceName) {
          item.mem = service.name;
          item.pids = { merkez: service.merkez, ofis: service.ofis };
        }
      });
    });

    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
}

const Service = {
  Start: async (serive_name) => {
    try {
      const { stdout, stderr } = await exec(
        `Start-Service -Name "${serive_name}"`,
        { shell: "powershell.exe" }
      );
      const LogResult = { result: "Başarılı", message: "Servis başladı" };
      return LogResult;
    } catch (error) {
      const LogResult = { result: "Hata", message: error };
      console.log(error);
      return LogResult;
    }
  },
  Stop: async (serive_name) => {
    try {
      const { stdout, stderr } = await exec(
        `Stop-Service -Name "${serive_name}"`,
        { shell: "powershell.exe" }
      );
      const LogResult = { result: "Başarılı", message: "Servis durduruldu" };
      return LogResult;
    } catch (error) {
      const LogResult = { result: "Hata", message: error };
      console.log(error);
      return LogResult;
    }
  },
  Restart: async (serive_name) => {
    try {
      const { stdout, stderr } = await exec(
        `Restart-Service -Name "${serive_name}"`,
        { shell: "powershell.exe" }
      );
      const LogResult = {
        result: "Başarılı",
        message: "Servis yeniden başlatıldı",
      };
      return LogResult;
    } catch (error) {
      const LogResult = { result: "Hata", message: error };
      console.log(error);
      return LogResult;
    }
  },
};

module.exports = { service_status, servisler, Service };
