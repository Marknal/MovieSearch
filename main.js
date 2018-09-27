$(document).ready(() => {
    
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val() ;
        getMovies(searchText);
        e.preventDefault();
        
    });
    
});


function  getMovies(searchText){
    
      $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=3f1e89b&s='+$('#searchText').val(),
          success: (response) =>{
              
              console.log(response);
              
              let movies=response.Search;
              
              
              let output='';
              $.each(movies, (index, movie) =>  {  
                  output +=`
                   <div class="col-md-3" >
                      <div class="well tex-center mblock">
                         <img src="${movie.Poster}">
                         <div class="specs">
                         <h5>${movie.Title}</h5>
                         <p>${movie.Year}</p>
                         </div>
                         
                      </div>
                    
                   
                  </div>`;
                  
                  
              });
              
              $('#movies').html(output);
              
           
              
              
          }
          
          
      });
    
    
    
}




