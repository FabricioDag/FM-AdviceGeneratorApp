let url = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("adviceId")
const advice = document.getElementById("advice")
const randomBtn = document.getElementById("randomBtn");

const fetchData = async ()=>{
    const res = await fetch(url)
    const data = await res.json()
    
    //console.log(data)
    
    adviceId.innerText ="ADVICE #" + data.slip.id
    advice.innerText = '"' + data.slip.advice + '"'
};

fetchData()

