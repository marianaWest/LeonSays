document.querySelector('button').addEventListener('click', event => {
  leon.leonSays()
})

//only works once

const leon = {
  leonSaysList: ["First tryyyyyyy", "We're baddies, we write bad code", "be a baddie", "blame it on the nuns", "go kiss some babies", "it's automagic", "thank you for the gifted subs", "we go get!", "don't get got", "you will make it to the other end", "it's a marathon, not a sprint", "you don't need to be a flexosaurus", "how's your Anki?", "get that spaced repetition", "Smurfs are here to listen", "I want a thousand", "who will carry the boats and logs?", "be Beyonce", "you are built different", "you will get through the trough of sorrow", "let me get spicy", "I'm here to get people jobs and I'm f* good at it", "I don't care about the system", "you're a software engineer", "I want to burn those structures to the ground", "just look at the solution!", "don't go full codewars"],
  leonSays: "",

  yatesShuffle(array) {
    let m = array.length, t, i; 
    // while there remain elements to shuffle
    while (m) {
        //pick a remaining element
        i = Math.floor(Math.random() * m--);
        //and swap with the current element
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    } return array;
},

leonSays() {
  this.leonSaysNow = this.yatesShuffle(this.leonSaysList).slice(0,1)
  document.getElementById("leon-speaks").innerHTML = `${this.leonSaysNow[0]}`
}
}
