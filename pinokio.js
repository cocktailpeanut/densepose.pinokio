const os = require('os')
module.exports = {
  title: "Vid2DensePose",
  icon: "icon.png",
  description: "Convert your videos to densepose and use it on MagicAnimate https://github.com/Flode-Labs/vid2densepose",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "env")
    if (installed) {
      let running = await kernel.running(__dirname, "start.json")
      if (running) {
        return [
          { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" }
        ]
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "start", href: "start.json", params: { fullscreen: true, run: true } },
        ]
      }
    } else {
      if (os.platform() === 'win32') {
        return [{ icon: "fa-solid fa-plug", text: "Install", href: "install_win.json", params: { run: true, fullscreen: true } }]
      } else {
        return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json", params: { run: true, fullscreen: true } }]
      }
    }
  }
}