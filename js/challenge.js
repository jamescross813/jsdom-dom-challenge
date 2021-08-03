document.addEventListener("DOMContentLoaded", function() {
 const counter = document.getElementById('counter')
 const plus = document.getElementById('plus')
 const minus = document.getElementById('minus')
 const heart = document.getElementById('heart')
 const pause = document.getElementById('pause')
 const likes = document.getElementsByClassName('likes')[0]
 const comments = document.getElementById('list')
 
 let speedCounter = setInterval(plusCounter, 1000)
 const submit = document.getElementById('submit')
 let running = true

    function plusCounter(){
        if (running === true){
        counter.innerHTML++
    }
};

    plus.addEventListener("click", function(){
        counter.innerHTML++
    });

    minus.addEventListener("click", function(){
        counter.innerHTML--
    });

    heart.addEventListener("click", function(){
        const likesList = document.createElement('li')
        likes.innerText = (`${counter.innerHTML} has been liked 1 times.`)
        likes.appendChild(likesList)
    })

    pause.addEventListener("click", function(){
        if (running === true){
            running = false;
            pause.innerHTML = "resume";
            heart.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
        }else{
            running = true;
            pause.innerHTML = "pause";
            heart.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
        };
    });

    submit.addEventListener("click", function(){
        event.preventDefault();
        const comment = document.getElementsByTagName('input')[0]
        const newComment = document.createElement("p");
        let commentInfo = document.createTextNode(`${comment.value}`);
        newComment.appendChild(commentInfo);
        comments.appendChild(newComment);
        
        });
});