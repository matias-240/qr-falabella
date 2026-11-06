// Genera los QR (PNG) que apuntan a las páginas de redirección en GitHub Pages.
// Uso: node generate.js   (los QR no cambian aunque cambies el destino en balloon/ o envolvente/)
const QRCode = require("qrcode");
const path = require("path");

const BASE = "https://matias-240.github.io/qr-falabella";
const items = ["balloon", "envolvente"];

(async () => {
  for (const name of items) {
    const url = `${BASE}/${name}/`;
    const out = path.join(__dirname, "qr", `qr-${name}.png`);
    await QRCode.toFile(out, url, { width: 800, margin: 2, errorCorrectionLevel: "M" });
    console.log(url, "->", out);
  }
})();
