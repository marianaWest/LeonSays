document.querySelector('button').addEventListener('click', event => {
  leon.leonSays()
})


const leon = {
  leonSaysList: ["First tryyyyyyy", "We're baddies, we write bad code", "be a baddie", "blame it on the nuns", "go kiss some babies", "it's automagic", "thank you for the gifted subs", "we go get!", "don't get got", "you will make it to the other end", "it's a marathon, not a sprint", "you don't need to be a flexosaurus", "how's your Anki?", "get that spaced repetition", "Smurfs are here to listen", "I want a thousand", "who will carry the boats and logs?", "be Beyonce", "you are built different", "you will get through the trough of sorrow", "let me get spicy", "I'm here to get people jobs and I'm f* good at it", "I don't care about the system", "you're a software engineer", "I want to burn those structures to the ground", "just look at the solution!", "don't go full codewars", "make it work", "join the struggle bus!", "never fight a man with a perm", "thank you for the hydration", "every part of my being is screaming, 'why?'", "You've got questions, I have answers", "objects are everything", "I'm pround of you", "It's 100% OK to take a break", "Find your people", "use, understand, build", "tweak it, break it",  "get into the muck", "we're gonna make some nerds angry", "OOP baby", "posture check", "don't hyperfocus", "you're a lean, mean, learning machine", "education should be free", "it's just syntactical sugar", "just a sprinkle of polymorphism", "nerds are shaking in their boots", "don't go through your week as an accident", "it's not hard, it's a lot", "active recall and spaced repetition are your friends", "why are you here?", "there is always a way", "we are not clicking apply", "use your Google Fu", "YUHH AAYYEEE", "pass that sniff test", "there's a game to be played", "we are community taught", "there's a window open", "never ever click apply", "let's do Banki", "don't snitch on yourself", "YOLO!", "we're here to learn", "bangers only!", "the smurfs are back in town", "they are just fancy smurfs", "We online, let's go!", "bangers only!", "dèlèté", "I'm dope and I do dope stuff", "You gonna have to drag me out of this career", "Controllers are traffic smurfs", "the wiggles of false hope will take you to the promise land"],
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
