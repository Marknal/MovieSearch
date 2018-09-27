$(document).ready(() => {
    $("#butn1").click(function(){
     let id=$("#imdbid").val();
     let tit=$("#title").val();
     let year=$("#year").val();
        
     let searchtitle = '';

     if(id != '')
     {
     searchtitle += '&i='+id;
     }
     if(tit != '')
     {
     searchtitle += '&s='+tit;
     }
     if(year != '')
     {
     searchtitle += '&y='+year;
     }
        console.log(searchtitle);
       getMovies(searchtitle);
        
    });
    
       $("#butn3").click(function(){
        
     let searchById = $("#imdbid").val();
        console.log(searchById);
       getMoviesById(searchById);
        
    });
    
    
                   
    
    





function  getMovies(searchtitle){
    
      $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=3f1e89b'+searchtitle,
          success: (response) =>{
              console.log(response);
              let movies=response.Search;
              let output='';
              let msrc='';
              $.each(movies, (index, movie) =>  {
                if(movie.Poster=='N/A'){
                msrc='noimg.jpeg';
                }
                else{
                msrc=movie.Poster;
                }
                  output +=`
                   <div class="col-md-3 " >
                      <div class="well tex-center mblock">
                      
                         <img src="${msrc}" style="width:300px;height:391px;">
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
    
});

function  getMoviesById(searchById){
    
      $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=3f1e89b&i='+$('#imdbid').val(),
          success: (response) =>{
              
              console.log(response);
              
                     if (response.Poster ==""||response.Poster==null || response.Poster==undefined) {
    
                       $('#movies').attr('src', 'https://www.movietrailerbox.com/assets/images/imdbnoimage.jpg')
                       

                        } 
                     else {
                           $('#movies').attr('src', response.Poster)
                        }
              
              if(response.Response == "False"){
              alert("Enter a valid imdbID");
      }
              
              let moviesid=response;
              
              console.log(moviesid) 
              
              let output='';
                  output =`
                   <div class="col-md-3" >
                      <div class="well tex-center mblock">
                         <img src="${moviesid.Poster}">
                         <div class="specs">
                         <h5>${moviesid.Title}</h5>
                         <p>${moviesid.Year}</p>
                         </div>
                         
                      </div>
                    
                   
                  </div>`;
                  
                
              
              $('#moviesbyid').html(output);
              
           
              
              
          }
          
          
      });
    
    
    
}


