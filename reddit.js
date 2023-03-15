(function (){
const postsContainer = document.getElementById("posts-container");
fetch('https://www.reddit.com/r/aww/.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let posts = data.data.children;

        for (let post of posts){
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
            postEl.append(link);
            
            postsContainer.append(postEl);
        }     
    }) 

}()); 