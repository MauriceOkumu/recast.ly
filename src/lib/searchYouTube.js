var searchYouTube = ({key, query, max = 5}, callback) => {
  
  var url = 'https://www.youtube.com/v3/search';

  $.get(url, {
    part: 'snippet',
    q: query,
    key: key,
    type: 'video',
    maxResults: max,
    videoEmbeddable: true
  
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  }) 
  .fail(({error})=> {
    error.forEach(alert('Error: video not found.', error));
    
  });


/*
Get request:
- url 
- context: document.body
- error: alert('video not found')

done method:
- success: return the results



$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

*/


};

window.searchYouTube = searchYouTube;
