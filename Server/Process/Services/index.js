const si = require('systeminformation');
const servisler = ["asgard2-agent", "ekrn", "CarbonBlack", "DropWindowsService", "BNPagent", "DnssenseService"]




async function service_status() {
      try {
          const data = await si.services(servisler.join());
          console.log('servisler çalıştı')
          return data
      } catch (e) {
          console.log(e)
          return e
      }
  }

module.exports = service_status






