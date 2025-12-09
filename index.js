
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"
        ,"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
        "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

        let p1El = document.getElementById("rectangle1")
        let p2El = document.getElementById("rectangle2")

    function generate(){
        let p1 = ""
        let p2 = ""
        for(let i=0;i<15;i++){
            p1 += characters[Math.floor(Math.random()*characters.length)]
            p2 += characters[Math.floor(Math.random()*characters.length)]
        }
        p1El.textContent = p1
        p2El.textContent = p2

        console.log(p1)
        console.log(p2)
    }


