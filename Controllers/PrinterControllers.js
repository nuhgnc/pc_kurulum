const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const printer_status = require("../Process/Printer");
const { kullanicilar, sidebar } = require('./pageSettings');


const newPrinters = [
  {
    id: "printer1",
    name: "Eren Printer",
    url: "\\\\10.1.1.123\\ErenPrinter",
  },
  {
    id: "printer2",
    name: "Test Printer",
    url: "\\\\10.1.1.1\\testPrinter",
  }
]

const addPrinter = async (printerURL) => {
  try {
    const { stdout, stderr } = await exec(`Add-Printer -ConnectionName ${printerURL}`, { shell: "powershell.exe" });
    let result = stdout.split(/\r*\n/).splice(3);
    result = result.slice(0, -3)
    console.log(result)
    return {
      "mesaj": "Yazıcı yüklemesi başarılı !",
      "Output": result
    }
    //uresultsers.AdminGoupsMember = res;
  } catch (error) {
    result = ["<b>! Yazıcı yüklenirken hata oluştu ! </b>"]
    console.log(error)
    return {
      "mesaj": "Yazıcı yüklenirken bir hata oluştu !",
      "Output": error
    }
  }
}

const removePrinter = async (printerName) => {
  try {
    const { stdout, stderr } = await exec(`Remove-Printer -Name "${printerName}" `, { shell: "powershell.exe" });
    //let result = stdout.split(/\r*\n/).splice(3);
    //result = result.slice(0, -3)
    console.log(stdout)
    return {
      "mesaj": "Yazıcı başarılı bir şekilde kaldırıldı !",
      "Output": stdout
    }
    //uresultsers.AdminGoupsMember = res;
  } catch (error) {
    result = ["<b>! Yazıcı kaldırılırken hata oluştu ! </b>"]
    console.log(error)
    return {
      "mesaj": "Yazıcı yüklenirken bir hata oluştu !",
      "Output": error
    }
  }
}


exports.PrinterPage = async (req, res) => {

  res.render('Pages/Printer', {
    printer_status: await printer_status(),
    pages: sidebar,
    kullanicilar,
    newPrinters
  })
}

exports.API_ADD_Printer = async (req, res) => {
  let printerURL = newPrinters.find(item => item.id == req.params.id).url
  const printerResult = await addPrinter(printerURL)
  res.json(printerResult)
}
exports.API_REMOVE_Printer = async (req, res) => {
  let printerID = req.params.id
  let printerList = await printer_status()
  let printerName = printerList.find(item => item.id == printerID).name
  let remove_status = await removePrinter(printerName)
  res.json(remove_status)

}


