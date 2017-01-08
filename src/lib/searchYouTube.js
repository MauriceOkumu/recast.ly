var searchYouTube = ({key, query, max = 10}, callback) => {
  
  var url = 'https://www.youtube.com/v3/search';

  $.ajax({
    url: url,
    type: 'GET',
    contentType: 'application/json',
    dataType: [],
    key: key,
    q: query,
    max: max,
    success: (data) => {
      if (callback) {
        JSON.stringify(callback(data));
      }
    },
    error: (data) => {
      console.log('Error: video not found', data);
    } 
  });
};

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });
//   $.ajax(url, {
//     type: 'GET',
//     part: 'snippet',
//     q: query,
//     key: key,
//     type: 'video',
//     maxResults: max,
//     videoEmbeddable: true
//   })
//   .done((items) => {
//     if (callback) {
//       console.log('items: ', items.results);
//       callback(items.results);
//     }
//   }) 
//   .fail(({response})=> {
//     response.error.forEach((error) => alert('Error: video not found.', response));
//   });
// };

window.searchYouTube = searchYouTube;