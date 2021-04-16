const city = [
  {
    name: "Albalad",
   
    disc: ["Al-Balad  is the historical area of Jeddah, the second largest city of Saudi Arabia. Balad can literally be translated as The Town.Balad is the historic center of the City of Jeddah.Al-Balad was founded in the 7th century and historically served as the centre of Jeddah.[3] Al-Balad's defensive walls were torn down in the 1940s. In the 1970s and 1980s, when Jeddah began to become wealthier due to the oil boom, many Jeddawis moved north, away from Al-Balad,[4] as it reminded them of less prosperous times.[5] Al-Balad had insufficient parking space for large cars. Its stores did not sell expensive designer clothing. Poor immigrants moved in place of the Saudi population.[4] The municipality of Jeddah began historical preservation efforts in the 1970s. In 1991 the Municipality of Jeddah founded the Jeddah Historical Preservation Society to preserve the historical architecture and culture of Al-Balad. In 2002, US$4 million were earmarked for the preservation society.[5] In 2009, Al-Balad was nominated by Saudi Commission for Tourism and Antiquities to be added to UNESCOs World Heritage list, and it was accepted in 2014.[6]"],
   
    photo: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/06/16/1625206-1924306740.jpg?itok=ePetzi5I"
  },
  {
    name: "Jeddah Corniche",
    
    disc: ["The Jeddah Corniche (or Jeddah Waterfront (JW)) is the 30 km coastal resort area of the city of Jeddah. Located along the Red Sea, the corniche features a coastal road, recreation areas, pavilions and large-scale civic sculptures — as well as King Fahd's Fountain, the highest fountain in the world. Also located here is the Al-Rahmah Mosque (formerly known as the Fatimah Mosque), which is a popular attraction to visitors.[1].The Jeddah Corniche derives its name from the original French and Italian term for a coastal road, especially a road along the face of a cliff but it is more often used as a place near water now. In November 2017, JW was inaugurated for visitors to be one of the attractive sites in the city of Jeddah. JW was launched as a response to a royal decree in an aim of improving the public facilities of the city of Jeddah. The established area is equipped with many facilities including restaurants, retail outlets, hotels, aquarium, cultural center, water dancing fountain, blossoming gardens and fountains.[2] "],
    
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Part_of_the_Jeddah_Corniche_in_February_2020.jpg/330px-Part_of_the_Jeddah_Corniche_in_February_2020.jpg"
  },
  {
    name: "Jeddah Islamic Port",
    
    disc: ["Jeddah Islamic Port is a Saudi Arabian port, located in the middle of an international shipping route[which?] between east and west. It is the second-largest and second-busiest port in the Arab world (after Port of Jebel Ali in Dubai, UAE). The city of Jeddah is the second-largest city in Saudi Arabia (after the capital Riyadh), and is Saudi Arabia's commercial capital.[1]"],
   
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Jeddah-seaport-saudiarabia.PNG/330px-Jeddah-seaport-saudiarabia.PNG"
  }
];



function inform(inform) {
  return `
    <h4> Description: </h4>
    <ul class="city-list">
      ${inform.map(food => `<li>${food}</li>`).join('')}
    </ul>
  `
}

function cityTemplate(city) {
  return `
  <div class="city"> 
   <img class="city-photo" src="${city.photo}"> 
   <h2 class="inform-name">${city.name} 
   <span class="discr">(${city.species})</span></h2>
  
    ${city.disc ? inform(city.disc) : ""}
  </div>
  `
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">jeddah </h1>
${city.map(cityTemplate).join("")}
<p class="footer">These ${city.length} city were added recently. Check back soon for updates</p>
`;