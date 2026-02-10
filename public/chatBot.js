(function(){

    const api_url = 'http://localhost:3000/api/chat'
    const scriptTag = document.currentScript;
     
    const owenerId = scriptTag.getAttribute('data-owenerId');

    if(!owenerId) {
        console.error('owenerId is required');
        return;
    }





})()