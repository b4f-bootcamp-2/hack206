//import logo from './public/toddlersLogo.svg';
//import './assets/ui.module.css';
//import './assets/css/all.min.css';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';
//import './assets/css/ui.modules.css';
//import './Interface/'
import { useNavigate } from 'react-router-dom';

export function NewBorn() {
    let navigate= useNavigate()
  return (
    <div className="App">
     <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
        <div class="row align-items-center">
           
                <img width="140px" src="/toddLaranja.svg" />
           
            <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                    <div class="input-group w-100">
                        <input type="text" class="form-control" placeholder="Search" />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                    </div>
                </form> 
            </div> 
            <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                        <span class="badge badge-pill badge-danger notify">0</span>
                    </div>
                    <div class="widget-header icontext">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                        <div class="text">
                            <span class="text-muted">Welcome, Leonardo!</span>
                            <div> 
                                <a href="#">Sign in</a> |  
                                <a href="#" onClick={() => navigate(`/SignUp`)}> Register</a>
                            </div>
                        </div>
                    </div>

                </div> 
            </div> 
        </div> 
            </div> 
        </section>
        </header> 



       
        <section class="section-pagetop bg">
        <div class="container">
            <h2 class="title-page">Category products</h2>
            <nav>
            <ol class="breadcrumb text-white">
                <li class="breadcrumb-item"><a href="#" onClick={() => navigate(`/`)}>Landing Page</a></li>
                <li class="breadcrumb-item active" aria-current="page">New Born</li>
            </ol>  
            </nav>
        </div> 
        </section>
      
        <section class="section-content padding-y">
        <div class="container">

        <div class="row">
            <aside class="col-md-3">
                
        <div class="card">
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Product type</h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_1">
                    <div class="card-body">
                        <form class="pb-3">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search" />
                          <div class="input-group-append">
                            <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        
                        <ul class="list-menu">
                          <li><a href="#">Tshirts  </a></li>
                          <li><a href="#">Skirts </a></li>
                          <li><a href="#">Shoes  </a></li>
                          <li><a href="#">Jackets  </a></li>
                          <li><a href="#">Sweatshirts </a></li>
                        </ul>

                    </div> 
                </div>
            </article>
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Age </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_2">
                    <div class="card-body">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">0 months  
                              <b class="badge badge-pill badge-light float-right">120</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">1 month 
                              <b class="badge badge-pill badge-light float-right">15</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">3 months
                              <b class="badge badge-pill badge-light float-right">2</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">6 months
                              <b class="badge badge-pill badge-light float-right">2</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">9 months 
                              <b class="badge badge-pill badge-light float-right">1</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">1 year
                              <b class="badge badge-pill badge-light float-right">0</b>  </div>
                        </label>
                        </div> 
                </div>
            </article>  
        </div> 

            </aside> 
            <main class="col-md-9">


        <div class="row">
            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <span class="badge badge-danger"> NEW </span>
                        <img src="assets/images/items/1.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow white and blue</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap">
                        <span class="badge badge-danger"> NEW </span> 
                        <img src="assets/images/items/2.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow white stripes and blue</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>  
                        <img src="assets/images/items/3.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow white and pink</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>   
                        <img src="assets/images/items/4.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow white with cool car</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <img src="assets/images/items/5.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow grey with bee</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <img src="assets/images/items/6.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow Batman black, grey, and yellow</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <img src="assets/images/items/7.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow grey with fluffy bear</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 
            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <img src="assets/images/items/1.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Babygrow grey with snowman</a>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 
        </div> 


        <nav class="mt-4" aria-label="Page navigation sample">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>

            </main>

        </div>

        </div> 
        </section>
        
        <footer class="section-footer border-top padding-y">
            <div class="container">
                <p class="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                <p>
                    <a href="#">Terms and conditions</a>
                </p>
            </div>
        </footer>
       
     
    </div>
  );
}


export default NewBorn;