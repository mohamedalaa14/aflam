var allmovies =[];
var trending1 = [];
var upcomingg = [];
var topRatedd = [];
var pop_ular = [];
var trending = document.getElementById("trending")
var image ="https://image.tmdb.org/t/p/w500"
call1()

let conth =  $("#cont").offset().top;
  $("#cont").click(function()
  {
   
     $("html, body ").animate({SectionTop : conth } ,1000)
  })





var y =new XMLHttpRequest();
y.open("GET" ," https://api.themoviedb.org/3/movie/now_playing?api_key=4deed4e9e7580d0cd06819e5d3f18985" )
y.send();


y.addEventListener("readystatechange" , function()
{
    if(y.readyState==4 && y.status==200)
    {
        allmovies =JSON.parse(y.response);
        allmovies=allmovies.results;
    }
    
    
    displayPosts()
} )
function call1() {
    let width = $(".nav_links").innerWidth()
    $(".nav").animate({left : `-${width}`},0)
  }


function displayPosts()
{
    var allposts = ``
    for(var i = 0 ; i < allmovies.length ; i ++)
    {
        allposts += ` <div class="col-md-4 ">
        <div class = "image ">
        <div class="position-relative mt-5 overflow-hidden shadow"><img src="${image+allmovies[i].poster_path }" class="img-fluid edit  position-relative  " >
        <div class="action text-center  p-5  ">
            <h2 class= " p-3"> ${allmovies[i].original_title}</h2>
            <p class= "  ">${allmovies[i].overview}</p>
            <p> rate :${allmovies[i].vote_average}</p>
            <p> ${allmovies[i].release_date}</p>
            </div>
        </div>
            
            
            
         </div>

        </div>`
    }
    document.getElementById("dataRow").innerHTML = allposts;
}


function search (anything)
{
    var m7faza = ``;
    for (var i = 0 ; i < allmovies.length ; i++)
    {
        if(allmovies[i].original_title.toLowerCase().includes(anything.toLowerCase()) == true)
        {

            m7faza += ` <div class="col-md-4 ">
        <div class = "image ">
        <div class="position-relative mt-5 overflow-hidden shadow"><img src="${image+allmovies[i].poster_path }" class="img-fluid edit  position-relative  " >
        <div class="action text-center  p-5  ">
            <h2 class= " p-3"> ${allmovies[i].original_title}</h2>
            <p class= "  ">${allmovies[i].overview}</p>
            <p> rate :${allmovies[i].vote_average}</p>
            <p> ${allmovies[i].release_date}</p>
            </div>
        </div>
            
            
            
         </div>

        </div>`
    
        }
    }
document.getElementById('dataRow').innerHTML= m7faza;
}



$(".nav span .menu").click(function(){
    let shika =$(".nav").css("left")
    if (shika == "0px")
    {
        let width = $(".nav_links ").innerWidth()
        $(".nav").animate({left : `-${width}`},1000)
    }
    else
    {
        $(".nav").animate({left : `0px`},1000)
    }

})
// new WOW().init();


trending.addEventListener('click',function trending() {

    
    y.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=4deed4e9e7580d0cd06819e5d3f18985')
    y.send()
    y.addEventListener('readystatechange',function () {
        if (y.readyState == 4 && y.status == 200)
        {
        trending1 = JSON.parse(y.response).results;
        displayPosts()
        call1()
  
        }
    });


   


  
  
  })

  

  Nowplaying.addEventListener('click',function now_playing() {

    
    y.open('GET','https://api.themoviedb.org/3/movie/now_playing?api_key=4deed4e9e7580d0cd06819e5d3f18985')
    y.send()
    y.addEventListener('readystatechange',function () {
        if (y.readyState == 4 && y.status == 200)
        {
            allmovies = JSON.parse(y.response).results;
        displayPosts()
        call1()
  
        }
    });



   
    
  
  
  })

  Upcoming.addEventListener('click',function up_coming() {

    
    y.open('GET','https://api.themoviedb.org/3/movie/upcoming?api_key=4deed4e9e7580d0cd06819e5d3f18985')
    y.send()
    y.addEventListener('readystatechange',function () {
        if (y.readyState == 4 && y.status == 200)
        {
            upcomingg = JSON.parse(y.response).results;
        displayPosts()
        call1()
  
        }
    });



    
    
  
  
  })

  TopRated.addEventListener('click',function top_rated() {

    
    y.open('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=4deed4e9e7580d0cd06819e5d3f18985')
    y.send()
    y.addEventListener('readystatechange',function () {
        if (y.readyState == 4 && y.status == 200)
        {
            topRatedd = JSON.parse(y.response).results;
        displayPosts()
        call1()
  
        }
    });



    
    
  
  
  })

  Popular.addEventListener('click',function popularr() {

    
    y.open('GET','https://api.themoviedb.org/3/movie/popular?api_key=4deed4e9e7580d0cd06819e5d3f18985')
    y.send()
    y.addEventListener('readystatechange',function () {
        if (y.readyState == 4 && y.status == 200)
        {
            pop_ular = JSON.parse(y.response).results;
        displayPosts()
        call1()
  
        }
    });



    
    
  
  
  })






function valid() {
    // var form = document.getElementById("form");
    var email = document.getElementById("email1").value;
    var pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
  
    if(email.match(pattern))
    {
    //   form.classList.add("valid")
    //   form.classList.remove("invalid")
      document.getElementById("text").innerHTML = "your email valid";
      document.getElementById("text").style.color ="lime";
    }
    else
    {
    //   form.classList.remove("valid")
    //   form.classList.add("invalid")
      document.getElementById("text").innerHTML = "your email not valid";;
      document.getElementById("text").style.color ="red";
    }
  }

  function validnumber() {
    var form = document.getElementById("form");
    var phone = document.getElementById("phone").value;
    var pattern = /^(002)?(01)[0125][0-9]{8}$/
  
    if(phone.match(pattern))
    {
  
      document.getElementById("text2").innerHTML = "your number valid";
      document.getElementById("text2").style.color ="lime";
    }
    else
    {
  
      document.getElementById("text2").innerHTML = "your number not valid";;
      document.getElementById("text2").style.color ="red";
    }
  }

  function validpassword() {
   
    var pass = document.getElementById("password").value;
    var pattern = /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8}$/
  
    if(pass.match(pattern))
    {
  
      document.getElementById("ptext").innerHTML = "your password valid";
      document.getElementById("ptext").style.color ="lime";
    }
    else
    {
  
      document.getElementById("ptext").innerHTML = "your password not valid";;
      document.getElementById("ptext").style.color ="red";
    }
  }

  function validage() {
    
    var ag = document.getElementById("age").value;
    var pattern = /^([1-5][0-9]|60)$/
  
    if(ag.match(pattern))
    {
  
      document.getElementById("atext").innerHTML = "your age valid";
      document.getElementById("atext").style.color ="lime";
    }
    else
    {
  
      document.getElementById("atext").innerHTML = "your age not valid";;
      document.getElementById("atext").style.color ="red";
    }
  }

  function validrepassword() {

    var repassword = document.getElementById("repassword").value;
    var password = document.getElementById("password").value;
  
  
    if(repassword == password)
    {
  
      document.getElementById("retext").innerHTML = "your password valid";
      document.getElementById("retext").style.color ="lime";
    }
    else
    {
  
      document.getElementById("retext").innerHTML = "your password not valid";;
      document.getElementById("retext").style.color ="red";
    }
  }

  function validname() {
    
    var name = document.getElementById("name").value;
    var pattern = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
  
    if(name.match(pattern))
    {
  
      document.getElementById("ntext").innerHTML = "your name valid";
      document.getElementById("ntext").style.color ="lime";
    }
    else
    {
  
      document.getElementById("ntext").innerHTML = "your name not valid";;
      document.getElementById("ntext").style.color ="red";
    }
  }

  