const btn = document.querySelector(".btn");
const img = document.getElementById("memeImage");
const author = document.getElementById("memeAuthor");
const Title = document.getElementById("memeTitle");

//// const update details
const updatedetails = (url,title,author) =>{
     img.setAttribute("src",url);
     Title.innerHTML = title;
     author.innerHTML = title;
}

/// generate a add event listner
const generateMeme = () =>{
  fetch(" https://meme-api.com/gimme").then((response)=>response.json()).then(data =>{
    updatedetails(data.url,data.title,data.author)
  });
}
btn.addEventListener("click",generateMeme);