const server = "BANTO";
let hosts = null;
if (server === "dev") {
    hosts = Object.freeze({
        banto: "http://223.26.237.233:3000",
        station: {
            host: "http://223.26.237.233:3000",
            tokenId: "110f39cd6e8f2b9137b5c7105d753a31",
        },
        origDB: {
            host: "15.164.81.190",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "banto",
        },
        banto2DB: {
            host: "13.124.95.222",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "Banto",
        },
    });
} else if (server === "BANTO") {
    hosts = Object.freeze({
        banto: "https://api.banto.io",
        station: {
            host: "https://api.banto.io",
            tokenId: "110f39cd6e8f2b9137b5c7105d753a31",
        },

        origDB: {
            host: "15.164.81.190",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "banto",
        },
        banto2DB: {
            host: "13.124.95.222",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "Banto",
        },
    });
} else {
    hosts = Object.freeze({
        host: "https://www.serverbatty.com",
        origDB: {
            host: "dbbatty.xyz",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "banto",
        },
        newDB: {
            host: "13.124.95.222",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "BantoStation",
        },
        banto2DB: {
            host: "13.124.95.222",
            port: "3306",
            user: "root",
            password: "banto123123",
            scheme: "Banto",
        },
    });
}
module.exports.hosts = hosts;
