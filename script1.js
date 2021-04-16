const city = [
  {
    name: "Al Khuraybah",
   
    disc: ["Al-Khuraiba, or “Lions Tombs,” is an ancient archaeological area, and one of the most prominent tourist attractions in Al-Ula. It is part of the ruins and remains of the ancient city of Dadan, which belongs to the ancient Arab civilization of the Dadan Kingdom, whose sovereignty over this region appeared in the seventh century BC. And it was called the tombs of the lions as a symbol of power and prestige.In the Al-Khuraybah area of Al-Ula, a tourist enjoys seeing a variety of carvings of lions, the most important of which are the lion sculpture, which was found in 1914 CE, and the lioness carving, which breastfeeds its young, as well as the four lions, which are above two tombs in the south of Khuraybah."],
   
    photo: "https://www.travellwd.com/wp-content/uploads/2020/09/tourism-in-al-ula-saudi-arabia-12.jpg"
  },
  {
    name: "Madain Saleh",
    
   disc: ["Mada'in Saleh, Al-Ula, is an important and international historical and cultural heritage tourism area. And it was known in the past as the house of stone. It is one of the most prominent tourist attractions in Al-Ula that are visited by tourists, as it is one of the most important cities of the Nabateans and the people of Aad, mentioned in the Holy Quran.Mada'in Saleh was the first Saudi site to be added to the UNESCO World Heritage List. And there are many monuments, dating back to prehistoric times, including rock drawings and rock paintings, and a group of inscriptions, religious and royal, which are found in abundance on tombs there. It is one of the important areas, reserved for history lovers, to quench their thirst for history, and tourists in general, to allow them to take the most beautiful memorial photos, among those great monuments and inscriptions."],    
    photo: "https://www.travellwd.com/wp-content/uploads/2020/09/tourism-in-al-ula-saudi-arabia-8-768x432.jpg"
  },
  {
    name: "Elephant Mountain Rock",
    
 disc: ["And it is a huge rock, in the shape of a unique elephant, which got its name from this shape. This mighty mountain is about 50 meters high. And it is one of the most prominent tourist attractions in Al-Ula, which is visited by many tourists, especially fans of fun desert sports, and high mountain climbing.The elephant mountain rock is surrounded by a variety of mountains, with beautiful light colors, and dazzling rock formations, which attract tourists and local visitors from everywhere. "],   
    photo: "https://www.travellwd.com/wp-content/uploads/2020/09/tourism-in-al-ula-saudi-arabia-6-1.jpg"
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
<h1 class="app-title">Alula </h1>
${city.map(cityTemplate).join("")}
<p class="footer">These ${city.length} city were added recently. Check back soon for updates</p>
`;