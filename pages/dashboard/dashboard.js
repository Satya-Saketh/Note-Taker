const cardContainer = document.querySelector('.card-container');
const newNote = document.querySelector('.class-new-note');
const cardData = [
    
        {heading:"heading1", content:"advdvdasv", id:1},
        {heading:"heading2", content:"advdvdasv", id:2},
        {heading:"heading3", content:"advdvdasv", id:3},
        {heading:"heading4", content:"advdvdasv", id:4},
        {heading:"heading5", content:"advdvdasv", id:5},
        {heading:"heading6", content:"advdvdasv", id:6},
        {heading:"heading7", content:"advdvdasv", id:7},
]

const createNotes = (array)=>{
array.forEach(cardObj => {
    const {heading, content, id} = cardObj;
    const card =document.createElement('div');
    card.classList.add('card');
    card.id=id;
    const insideHtml = `<div class="card-header">
    <div class="card-heading">${heading}</div>
    <a href="../updateNotes/updateNote.html?noteId =${id}">
    <div class="edit-note">
        <img src =../../assets/edit-note.svg alt="edit-note">
    </div></a>
    </div>
    <div class="card-content">
    ${content}
    </div>`
    card.innerHTML=insideHtml;
    cardContainer.appendChild(card);
});
}

createNotes(cardData);


newNote.addEventListener('click',()=>{
    window.open('../createNotes/createNote.html');
})
