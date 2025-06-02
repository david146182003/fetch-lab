async function initiaLoad(){
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const breeds = response.json()
  console.log(breeds)
  
}
initiaLoad()