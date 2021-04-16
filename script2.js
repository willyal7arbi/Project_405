const city = [
  {
    name: "Al-Hada area ",
   
 disc: ["The city of Taif is famous for its many open tourist places amidst the wonderful nature, and one of the most prominent parks in Taif is the Al-Hada area located on the First Ring Road, and it is famous for the presence of Al-Hada cable car, and many recreational parks, such as the tourist village of Al-Kar, which is full of entertainment games, ski halls, restaurants and shops, as it takes you The Taif cable car is an interesting trip to enjoy the most beautiful view of the region from the top. The Taif cable car journey starts from the top of Jabal Al-Hada, more precisely, from the upper station at the Ramada Al-Hada Hotel to the lower station at the bottom of Jabal Karra, with a length of 4.2 km."],   
    photo: "https://tourflag.com/wp-content/uploads/%D8%AA%D9%84%D9%81%D8%B1%D9%8A%D9%83-%D8%A7%D9%84%D9%87%D8%AF%D8%A7.jpg"
  },
  {
    name: "Shifa area",
    
disc: ["Al-Shifa area is the second most important tourist place in Taif after the Al-Hada region, and is characterized by its moderate climate. As a result of its location, which rises more than 2500 meters above sea level, its mountainous nature and fertile valleys, which are rich in fruit, vegetable and rose plantations. Therefore, we find the Al-Shifa area, famous for making the most expensive perfumes, such as honey, ghee, etc. As a double highway linking it with the city of Taif, but we notice that this road is very crowded during the summer; Tourists flock to this picturesque area, which is full of many cities, entertainment facilities and distinctive markets, so Al-Shifa area is considered one of the important Taif parks."],    
    photo: "https://tourflag.com/wp-content/uploads/%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%81%D8%A7.jpg"
  },
  {
    name: "Al Ruddaf Park",
    
disc: ["You cannot make a list of the most important tourist destinations in Taif without listing Al Ruddaf Park in it. This is a result of it being one of the most important and beautiful parks in Taif. Al Ruddaf Park is located south of Taif on Shihar Road, and it is located on a large area, estimated at about 565 thousand square meters. Inside Al Ruddaf Park you will spend the most enjoyable time with your family, where you will find inside it more than 9 gardens designed according to different styles, as you will find sports fields, and a huge walkway along 4 thousand square meters, a children's play area, restaurants and cafes, and sessions on the lake, but we do not forget, of course, one of the most important features of Al Ruddaf Park, which is the interactive fountain of 13 thousand square meters, which rises to more than 80 square meters. Important, such as an environment and human center, first aid center, chapel, toilets, and parking lots. Weighted time to visit Ar Ruddaf Park: 1.5 hours."],   
    photo: "https://tourflag.com/wp-content/uploads/%D9%86%D8%A7%D9%81%D9%88%D8%B1%D8%A9-%D9%85%D9%86%D8%AA%D8%B2%D9%87-%D8%A7%D9%84%D8%B1%D8%AF%D9%81.jpg"
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
<h1 class="app-title">Altaif </h1>
${city.map(cityTemplate).join("")}
<p class="footer">These ${city.length} city were added recently. Check back soon for updates</p>
`;