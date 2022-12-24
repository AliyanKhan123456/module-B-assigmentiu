var mobiles = {
    Samsung: {
        A32: {
            name: "A32",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 20000,
        },
        Note12: {
            name: "Note12",
            ram: "6gb",
            rom: "128gb",
            camera: "230px",
            price: 44000,
        },
        S9Plus: {
            name: "S9Plus",
            ram: "3gb",
            rom: "128gb",
            camera: "20px",
            price: 50000,
        },
    },
    Iphone: {
        iphone4: {
            name: "iphone4",
            ram: "4gb",
            rom: "64gb",
            camera: "20px",
            price: 8000,
        },
        iphone4s: {
            name: "iphone4s",
            ram: "4gb",
            rom: "64gb",
            camera: "20px",
            price: 10000,
        },
        iphone5s: {
            name: "iphone5s",
            ram: "4gb",
            rom: "64gb",
            camera: "10px",
            price: 25000,
        },
        iphone6s: {
            name: "iphone6s",
            ram: "4gb",
            rom: "64gb",
            camera: "16px",
            price: 30000,
        },
    },
    Xiomi: {
        redmi9c: {
            name: "redmi9c",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 45000,
        },
        redmiNote8: {
            name: "redmiNote8",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 50000,
        },
        redmi10: {
            name: "redmi10",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 35000,
        },
        redmi10pro: {
            name: "redmi10pro",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 30000,
        },
    }
};


var mobile_name = document.getElementById("mobile_name");
var model_number = document.getElementById("model_number");
var mname = '';
var mmbdel = '';
mobile_name.addEventListener("change", function (e) {
    mname = e.target.value;
});

model_number.addEventListener("change", function (e) {
    mmbdel = e.target.value;
    var mobileFind = mobiles[mname][mmbdel];
    var html = `
        <p><b>Name:</b>`+ mobileFind.name + `</p><br>
        <p><b>Ram:</b>`+ mobileFind.ram + `</p><br>
        <p><b>Rom:</b>`+ mobileFind.rom + `</p><br>
        <p><b>Camera:</b>`+ mobileFind.camera + `</p><br>
        <p><b>Price:</b>`+ mobileFind.price + `</p><br>
    `;
    document.getElementById('mobile-detail').innerHTML = html;
    console.log(html);
});