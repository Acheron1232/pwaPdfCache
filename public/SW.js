self.addEventListener("install",()=>{
    console.log("Ohh yeah installed")
})

self.addEventListener("activate", ()=>{
    console.log("ye baby activated2")
})

self.addEventListener("fetch", (event)=>{
    console.log(event.request)
})

console.log(self)