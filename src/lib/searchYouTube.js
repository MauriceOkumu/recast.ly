// var searchYouTube = (data ,{key, query, max = 5}, callback) => {
  
//   var url = 'https://www.googleapis.com/youtube/v3/search';

//   $.ajax({
//     url: url,
//     type: 'GET',
//     part:'snippet',
//     key: window.YOUTUBE_API_KEY,
//     q: query,
//     maxResults: max,
//     data: JSON.stringify(data),
//     success: (data) => {
//       console.log('data is geing got =>',data)
//       if (callback) {
        
//         callback(data.results);
//         data.done();
//       }
//     },
//     error: (data) => {
//       console.log('Error: video not found', data);
//       data.done();
//     } 
//   });
// };

// send: (message) => {
//     $.ajax({
//       url: app.server,
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: function (data) {

//         app.fetch();
//       },
//       error:  (error) => {
//         console.error('ERROR', error);
//       }
//     });
//   },

var searchYouTube = ({key, query, max}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    type: 'video',
    maxResults: max,
    // async: 'true',
    // // dataType: 'string',
    videoEmbeddable: 'true'
    
  })
  .done(res => {
    if (callback) {
      callback(res.results);
      next();
    }
  })
  .fail(res => {
    // response.error.errors.forEach((err) =>
    console.error('this is the ERROR', res.error());
    // );
    res.done();
  })
  .always(res => {
    res.complete();
  });
};





window.searchYouTube = searchYouTube;