console.log("Connected");

const setOfWords = [
    "My name is vinod bahadur thapa and I ama a youtuber.",
    "Hope you are having fun this is a simple game you can make.",
    "If you want the source code then link is given in the description so you can create your own version of this challange.",
    "It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where",
    " blocks of text are needed, this tool can be a great way to get that. It's a good way to test your ",
     "programming and that the tool being created is working well."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";

}

const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = "You typed total at " + speed + " words per minute.";

    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;

}

const compareWords = (str1,str2)=>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach(function(item,index){
        if(item == word2[index]){
            cnt++;
        }
    })

    let errorWords = (word1.length - cnt);
    return(cnt + " correct out of " + word1.length +" words and the total number of error are "+ errorWords + " .");
}

const wordCounter = (str)=>{
    return  str.split(" ").length;
}


btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    } else if(this.innerText == 'Done'){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
