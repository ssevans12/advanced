(function (){
let posts = [];
let filteredPosts = [];
const postsContainer = document.getElementById("posts-container");
fetch('https://www.reddit.com/r/aww/.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        posts = data.data.children;
        filteredPosts = posts;        
        refreshPosts();
    })

    const search = document.getElementById("search");
    search.addEventListener("keyup", (e) => {
        filteredPosts = posts.filter(p => p.data.title.toLowerCase().includes(e.target.value));
        refreshPosts();
    });
    
    function refreshPosts(){
        postsContainer.innerHTML = "";
        for (let post of filteredPosts){
            const postEl = document.createElement("div")
             postEl.innerText = post.data.title;
             if (post.data.thumbnail.toLowerCase().includes("https:")){
                 const img = document.createElement("img")
                 img.src = post.data.thumbnail;
                 postEl.append(img);
             }
             const link = document.createElement("a");
             link.href = post.data.url;
             link.innerText = "link"
             link.target = "_blank"
             postEl.append(link);
             
             postsContainer.append(postEl);
         }    
    }

}()); 