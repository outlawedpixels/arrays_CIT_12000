var wrap = document.body.querySelector(".wrap")

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i = 0; i < warriors.length; i++)
  {
    var ele = document.createElement("div")
    var eleName = document.createElement("h1")
    var eleDamage = document.createElement("h3")
    var eleHealth = document.createElement("h3")
    
    if(warriors[i].damage >= 2 && warriors[i].health >= 10 && warriors[i].warrior == true)
    {
    eleName.innerHTML = warriors[i].name
    eleDamage.innerHTML = "Damage: " +warriors[i].damage
    eleHealth.innerHTML = "Health: " +warriors[i].health
    
    ele.appendChild(eleName)
    ele.appendChild(eleDamage)
    ele.appendChild(eleHealth)
    wrap.appendChild(ele)
    }
  
    // if function that checks if the players name has an A in it
    if(warriors[i].name.includes("a") == true)
      {ele.style.color = "red"}
  }