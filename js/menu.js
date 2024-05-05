$(".off").click(function(){
    $(".off").toggleClass("active");
  });
/* making the function that adds the html to the site*/
function offers(){
   const el= document.getElementById("menu");
  

    el.innerHTML='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoa pic 7.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        Pizza Pasta Meal                 </div>                 <hr>                 <div class="card-text text-light-emphasis mb-3">                    Three Medium Pizzas + One Large Pasta + Cola                 </div>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        200 EGP                    </span>                     <a src="contact.html" class="btn btn-danger">Order now</a>  </div>            </div>        </div>    </div>    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoa pic 10.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        Pizza  Meal                 </div>                 <hr>                 <div class="card-text text-light-emphasis mb-3">                    Three Medium Pizzas  + Cola                 </div>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        150 EGP                    </span>                     <a src="contact.html" class="btn btn-danger">Order now</a>             </div>            </div>        </div>    </div>';
   el.innerHTML +='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoa pic 9.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                         Pasta Meal                 </div>                 <hr>                 <div class="card-text text-light-emphasis mb-3">                     Two Large Pasta + Cola                 </div>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        145 EGP                    </span>                     <a src="contact.html" class="btn btn-danger">Order now</a>                 </div>            </div>        </div>    </div>    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoa pic 11.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        Pizza pasta and slice Meal                 </div>                 <hr>                 <div class="card-text text-light-emphasis mb-3">                    One large pizza + One Large Pasta + slice                 </div>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        170 EGP                    </span>                    <a src="contact.html" class="btn btn-danger">Order now</a>                </div>            </div>        </div>    </div>';  
}
/* making the function that adds the html to the site*/
/**
 * orginal code
 *  <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">
        <div class="card rounded-5 "style=" max-width: 250px;">
            <img src="PICS/new-pizza2.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >
            <div class="card-body">
                 <div class="card-title">
                    
                    pepperoni pizza
                 </div>
                 <hr>
                 
                 <div class="d-flex justify-content-between">
                    <span class="fw-bold">
                        80 EGP
                    </span>
                    <button class="btn btn-danger">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">
        <div class="card rounded-5 "style=" max-width: 250px;">
            <img src="https://site-933657.mozfiles.com/files/933657/catitems/8_4_sieru-3b969468c0d503efc71f910e0b45d2a6.jpg?2193324" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >
            <div class="card-body">
                 <div class="card-title">
                    
                    Cheese Pizza 
                 </div>
                 <hr>
                 
                 <div class="d-flex justify-content-between">
                    <span class="fw-bold">
                        80 EGP
                    </span>
                    <button class="btn btn-danger">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">
        <div class="card rounded-5 "style=" max-width: 250px;">
            <img src="PICS/Pizza-Whole-Meat-Lovers-2-1.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >
            <div class="card-body">
                 <div class="card-title">
                    meat lovers pizza
             </div>
                 <hr>
                 
                 <div class="d-flex justify-content-between">
                    <span class="fw-bold">
                        100 EGP
                    </span>
                    <button class="btn btn-danger">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">
        <div class="card rounded-5 "style=" max-width: 250px;">
            <img src="https://pinoycupidgifts.com/wp-content/uploads/2022/08/SCALLOP-AND-SHRIMP-PIZZA-AMERICANA.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >
            <div class="card-body">
                 <div class="card-title">
                    
                   shrimp pizza
                 </div>
                 <hr>
                 <div class="d-flex justify-content-between">
                    <span class="fw-bold">
                        120 EGP
                    </span>
                    <button class="btn btn-danger">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    </div>
    
 */ 
function pizza(){
    const el= document.getElementById("menu");
    el.innerHTML='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/new-pizza2.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        pepperoni pizza                 </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        80 EGP                    </span>                    <a src="contact.html" class="btn btn-danger">Order now</a>                 </div>            </div>        </div>    </div>';
    el.innerHTML+='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="https://site-933657.mozfiles.com/files/933657/catitems/8_4_sieru-3b969468c0d503efc71f910e0b45d2a6.jpg?2193324" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        Cheese Pizza                  </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        80 EGP                    </span>                     <a src="contact.html" class="btn btn-danger">Order now</a>          </div>            </div>        </div>    </div>    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/Pizza-Whole-Meat-Lovers-2-1.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                    meat lovers pizza             </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        100 EGP                    </span>                    <a src="contact.html" class="btn btn-danger">Order now</a>            </div>            </div>        </div>    </div>';
   el.innerHTML+='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="https://pinoycupidgifts.com/wp-content/uploads/2022/08/SCALLOP-AND-SHRIMP-PIZZA-AMERICANA.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                       shrimp pizza                 </div>                 <hr>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        120 EGP                    </span>                     <a src="contact.html" class="btn btn-danger">Order now</a>                </div>            </div>        </div>    </div>';
}
function pasta(){
    const el= document.getElementById("menu");
    el.innerHTML='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoda pic 5jpg.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        Crispy pasta                 </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        90 EGP                    </span>                   <a src="contact.html" class="btn btn-danger">Order now</a>            </div>            </div>        </div>    </div>    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="https://ifoodreal.com/wp-content/uploads/2019/10/fg-healthy-mac-and-cheese-300x300.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                       Mac and cheese                  </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        80 EGP                    </span>  <a src="contact.html" class="btn btn-danger">Order now</a>                 </div>            </div>        </div>    </div>';
    el.innerHTML+='<div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/Shrimp-Mac-and-Cheese-5-s.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                    Shrimp mac cheese             </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        100 EGP                    </span>                 <a src="contact.html" class="btn btn-danger">Order now</a>            </div>            </div>        </div>    </div>    <div class="col-md-3 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="https://bakeitwithlove.com/wp-content/uploads/2021/10/Mac-N-Cheese-with-Hot-Dogs-sq-300x300.jpg.webp" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                       Hot dog mac and cheese                 </div>                 <hr>                 <div class="d-flex justify-content-between">                    <span class="fw-bold">                        80 EGP                    </span>                <a src="contact.html" class="btn btn-danger">Order now</a>            </div>            </div>        </div>    </div>'
}
function dessert(){
    const el= document.getElementById("menu");
    el.innerHTML='<div class="col-md-6 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoda pic 8.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                        chocolate zalabya                 </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        50 EGP                    </span>                 <a src="contact.html" class="btn btn-danger">Order now</a>                </div>            </div>        </div>    </div>    <div class="col-md-6 d-flex align-content-center justify-content-center mb-5">        <div class="card rounded-5 "style=" max-width: 250px;">            <img src="PICS/estoda pic 6.jpg" alt="" class="img-fluid card-img-top rounded-3 mb-2 me-auto ms-auto" >            <div class="card-body">                 <div class="card-title">                                       chocolate pizza                 </div>                 <hr>                                  <div class="d-flex justify-content-between">                    <span class="fw-bold">                        80 EGP                    </span>                 <a src="contact.html" class="btn btn-danger">Order now</a>         </div>            </div>        </div>    </div>'
}