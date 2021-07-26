const button = document.querySelector('.btn');
const size = document.querySelector(".size");
const main = document.querySelector(".main");
button.addEventListener('click', () => {
    console.log(`http://localhost:5000/download/${window.location.href.split("files/")[1]}`);
    const obj = getData()
    const mainOBj = {};
    obj.then(data => {
        size.innerHTML = ` Size: ${parseInt(data.size / 1000)} kb`
        main.style.display = "block"
        main.setAttribute("href",`${data.download}`)
   console.log(data);
 })
   
    
    
});

const getData = async () => {
    const res = await fetch(`http://localhost:5000/download/${window.location.href.split("files/")[1]}`);
    const data = await res.json();
    return data; 
}