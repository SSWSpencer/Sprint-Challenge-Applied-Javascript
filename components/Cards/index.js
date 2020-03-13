// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    CreateCard(response.data.articles);
})

function CreateCard(obj) {
    const entries = Object.entries(obj); // converts the object into an array
    entries.forEach(element =>{  // loops through the topics of the array (Javascript, Bootstrap, Technology)
        element[1].forEach(content =>{ // loops through the objects inside the topics
            const newCard = document.createElement('div');
            const headline = document.createElement('div');
            const authorContainer = document.createElement('div');
            const imgContainer = document.createElement('div');
            const imgSrc = document.createElement('img');
            const author = document.createElement('span');

            newCard.classList.add('card');
            headline.classList.add('headline');
            authorContainer.classList.add('author');
            imgContainer.classList.add('img-container');

            headline.textContent = content.headline;
            imgSrc.src = content.authorPhoto;
            author.textContent = `By ${content.authorName}`;

            newCard.append(headline);
            newCard.append(authorContainer);
            authorContainer.append(imgContainer);
            imgContainer.append(imgSrc);
            authorContainer.append(author);


            const cardContainer = document.querySelector('.cards-container');
            cardContainer.append(newCard);

            
        })

    })

    
}