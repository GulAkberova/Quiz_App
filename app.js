let quiz=document.getElementById('quiz')

const Base_Url="https://restcountries.com/v3.1/all"

async function getData(){
    await axios.get(Base_Url)
    .then((res)=>{
        // fillData(res.data)
        console.log(res.data)
        
    })
}
getData()

