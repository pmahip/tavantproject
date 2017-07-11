import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
       <div>
        <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Tavant app</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li ><a href="" [routerLink]="['/welcome']">Home</a></li>
          <li><a href="" [routerLink]="['/products']" >Product List</a></li>
           <li><a href="" [routerLink]="['/sales']" >Sales</a></li>
        </ul>
      </div>
    </div>
  </nav>
       </div>
       <div class="container">
  
  <div class="row">
    <router-outlet></router-outlet>
  </div>
</div>


<footer class="footer">
  <div class="container">
    <p>@\Copyright of <a href="" rel="nofollow">P0267__</a><a href="mahesh.p@tavant.com">mahesh.p@tavant.com</a></p>
  </div>
</footer>
    `
})
export class AppComponent { }

