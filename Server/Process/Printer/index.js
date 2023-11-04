const si = require("systeminformation")

async function printer_status() {
      try {
          const data = await si.printer();
          return data
      } catch (e) {
          console.log(e)
          return e
      }
  }

module.exports = printer_status

