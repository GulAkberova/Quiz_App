let quiz = document.getElementById("quiz");
let quiz_div=document.querySelector('.quiz_mini_div')
const Base_Url = "https://restcountries.com/v3.1/all";

let countries = [];
async function getData() {
  await axios.get(Base_Url).then((res) => {
    // fillData(res.data)
    countries = res.data;
    console.log(countries);

    generateQuestions();
  });
}
getData();

const generateQuestions = () => {
  let myQuestions = [];
  for (let i = 0; i < 5; i++) {
    let randomQue = Math.floor(Math.random() * countries.length);
    let randomCountry = {
      name: countries[randomQue].name.common,
      flag: countries[randomQue].flags.svg,
      capital: countries[randomQue].capital,
    };
    // console.log('my',myQuestions)
   myQuestions.filter(i=>i.name!==(countries[randomQue].name.common))
    myQuestions.push(randomCountry);
  }
  console.log("my questions", myQuestions);
  countryQuiz(myQuestions)
};

const countryQuiz=(index)=>{
    index.forEach(element => {
        console.log(element)
        
    });
    let h2=document.createElement('h3')
    quiz_div.appendChild(h2)
    h2.innerHTML=`${index[0].name} is the capital of`
    let ul=document.createElement('ul')
    let li=document.createElement('li')
    li.innerHTML=index.capital
    ul.append(li)
    quiz_div.append(ul)

  
}
