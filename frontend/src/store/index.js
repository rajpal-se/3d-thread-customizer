import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#D94E28",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./logo.png",
    fullDecal: "./logo.png",
})

export default state
