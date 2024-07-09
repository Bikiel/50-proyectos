const JokeEl = document.getElementById('joke')
const JokeBtn = document.getElementById('jokeBtn')

JokeBtn.addEventListener('click', generateJoke)


 generateJoke()
//Using ASYNC/ AWAIT
 async function generateJoke(){
    const config ={
    headers:{
        Accept:'application/json',
    },
}
   const res = await fetch('https://icanhazdadjoke.com', config)

   const data = await res.json()
   
   JokeEl.innerHTML = data.joke
}


//Using then

// function generateJoke(){
//     const config ={
//     headers:{
//         Accept:'application/json',
//     },
// }
//     fetch('https://icanhazdadjoke.com', config).then((res) => res.json())
//     .then((data) => {
//           JokeEl.innerHTML = data.joke
//     })
      
// }
