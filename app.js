
const accesKey = "KCkeYpa7o_Ocq9yMt123chQNhOE00qZsB8_dAN9U4YE";
const endPoint = 'https://api.unsplash.com';
const columns = document.querySelectorAll('.column');
const row = document.getElementById('rowPortfolio');
const btnShowMore = document.getElementById('showMore');
let page = 1;

// this function request information from the api and then append it into the row
let getImages = async () =>{
    let response = await fetch(`${endPoint}/photos/?client_id=${accesKey}&page=${page}`)
    let jsonResponse = await response.json();    
    let imagesList = await jsonResponse; 
    console.log(imagesList) 

    let createImages = (imagesList) =>{
        for(let [i, image] of imagesList.entries()){  
            image = document.createElement('img');
            image.src = imagesList[i].urls.thumb; 
            row.innerHTML += `
            <div class="column">                
                <img src= ${image.src} >                
                <div class="overlay">                
                    <div class="content">
                        <span>Creative Logo</span> 
                        <div class = "line"></div>                           
                        <div class="overlay___text">
                            <span>Branding</span>
                            <div>Likes: ${imagesList[i].likes}</div>
                        </div>
                    </div>
                </div>
            </div> 
            `;    
        }
    }
    createImages(imagesList); 
}

let loadFirstImages = () => {getImages();}

// this function load more images with a click
let loadMoreImages = (e) =>{
    e.preventDefault();
    page = page + 1
    getImages();
}

btnShowMore.addEventListener('click', loadMoreImages);
window.addEventListener("load", loadFirstImages);

























































































// async function getImages(){
    


//     let response = await fetch(`${endPoint}/photos/?client_id=${accesKey}&page=${page}`)
//     let jsonResponse = await response.json();    
//     let imagesList = await jsonResponse;
//     console.log(imagesList)

//     function createImages(imagesList){
//         for(let i = 0 ; i < imagesList.length ; i++ ) {
//             const image = document.createElement('img');
//             image.src = imagesList[i].urls.thumb;         
//             row.innerHTML += `
//             <div class="column">                
//                 <img src= ${image.src} >                
//                 <div class="overlay">                
//                     <div class="content">
//                         <span>Creative Logo</span> 
//                         <div>_____________________________<div>                           
//                         <div class="overlay___text">
//                             <span>Branding</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>      
//             `;
//         }
//     }
//     createImages(imagesList);
// }




// function loadMore(e){
//     e.preventDefault()
//     page = page+1
//     console.log(page)
//     getImages()
// }
