const si = require('systeminformation');

const servisler = [
    {
        name: "Asgard Agent",
        serviceName: "asgard2-agent",
        merkez: true,
        ofis: true
    },
    {
        name: "Eset",
        serviceName: "ekrn",
        merkez: true,
        ofis: true
    },
    {
        name: "Carbon Black",
        serviceName: "carbonblack",
        merkez: true,
        ofis: true
    },
    {
        name: "Drop Windows Service",
        serviceName: "dropwindowsservice",
        merkez: false,
        ofis: true
    },
    {
        name: "Fortinac",
        serviceName: "bnpagent",
        merkez: true,
        ofis: false
    },
    {
        name: "DNS Sense",
        serviceName: "dnssenseservice",
        merkez: true,
        ofis: true

    }
]


async function service_status() {
    try {
        const data = await si.services(servisler.map(item => item.serviceName).join());
        
        

        data.forEach(item => {
            servisler.forEach(service => {
                (item.name == service.serviceName) ? item.mem = service.name   : null
            })
            
        })

       
        
        return data
    } catch (e) {
        console.log(e)
        return e
    }
}



module.exports = {service_status,servisler}






