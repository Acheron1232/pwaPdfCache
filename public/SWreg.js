const registerServiceWorker = async () => {
    // if (navigator.serviceWorker) {
    //   try {
    //    await navigator.serviceWorker.register("/SW.js", {
    //       scope: "/",
    //     });
    //   } catch (error) {
    //     console.error(`Registration failed with ${error}`);
    //   }
    // }
  };
  
  registerServiceWorker();

const main = async ()=>{
  const reqUrl = "https://i.pinimg.com/736x/c5/90/09/c5900925eb22f06e426208a7b05035a9.jpg"

  const res = await fetch(reqUrl,{
    mode: "no-cors"
  })


  const cache1 = await caches.open("cache1")
  const imageUrl = "/zoroEpic.jpg"
  await cache1.add(imageUrl)

  await cache1.put(reqUrl, res)

  const cacheRes = await cache1.match(reqUrl);
  console.log(cacheRes)

}

main()
  