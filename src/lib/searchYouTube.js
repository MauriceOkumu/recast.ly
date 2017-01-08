// var searchYouTube = ({key, query, max = 10}, callback) => {
  
//   var url = 'https://www.googleapis.com/youtube/v3/search';

//   $.ajax({
//     url: url,
//     'part':'snippet',
//     type: 'GET',
//     contentType: 'application/json',
//     dataType: [],
//     key: key,
//     q: query,
//     maxResults: max,
//     success: (data) => {
//       if (callback) {
//         JSON.stringify(callback(data));
//       }
//     },
//     error: (data) => {
//       console.log('Error: video not found', data);
//     } 
//   });
// };

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({response}) => {
    response.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};





window.searchYouTube = searchYouTube;