import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listMovie = new Array<any>();
  
  constructor(private movieService: MovieService) {
    this.lastedMovie();
  }

  lastedMovie(){
    this.movieService.getUltimosFilmes().subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        this.listMovie = obj.results;
        console.log(this.listMovie);
      }, error =>{
        console.log(error);
      }
    )
  }
}
