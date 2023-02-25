$(document).ready(function(){
    var bool = true;
    $("#imgIcon").click(()=>{
        if(bool){
            $("#imgIcon").attr("src", "./resources/x-lg.svg");
        } else {
            $("#imgIcon").attr("src", "./resources/list.svg");
        }
        bool = !bool;
    });

    const observer = new IntersectionObserver((entities)=>{
        entities.forEach((entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                
            } else {
                //check if the element was already shown, if it was remove animation slide left
                if(entry.target.classList.contains("show")){
                    entry.target.classList.remove('show');
                    entry.target.classList.remove('positionRelative');
                }
                
            }
        }));
    });

    const hiddenElements = document.querySelectorAll('.nascosto');
    hiddenElements.forEach(a=>a.classList.add("positionRelative"));
    hiddenElements.forEach((el)=>observer.observe(el));
});