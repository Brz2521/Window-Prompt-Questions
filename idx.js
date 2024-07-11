let toggle;
let questions = {
    "q1": "How are you?",
    "q2": "Nice weather today?",
    "q3": "Hotel?",
    "q4": "What's cooler than being cool?"
};

document.getElementById("myButton").onclick = function(){
    toggle = document.getElementById("myText").value;
    if(toggle === "yes"){
        for(let key in questions){
            let answer = window.prompt(questions[key]);
            if(key === "q4" && answer.toLowerCase() === "ice cold"){
                let ice_cold = window.prompt("I SAID, WHAT'S COOLER THAN BEING COOL???");
                
                if(ice_cold.toUpperCase() === "ICE COLD"){
                    for(let i=0; i<5; i++){
                        document.getElementById("onGoing").innerHTML += "ALRIGHT!";
                    }
                }

            }
        }
    }else if(toggle === "no"){
        window.prompt("why not?");
    }

}






