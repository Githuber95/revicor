import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { hasOnlyExpressionInitializer } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Revicor';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Revestimientos, Losas industriales ,Pisos industriales ,Morteros epóxicos,poliuretano cemento, impermeabilizante para techo'},
      {name: 'description', content: 'Revestimientos para pisos industriales, Sistemas de morteros epóxicos planchables y autonivelantes, morteros de poliuretano cemento, membranas líquidas, mantos asfálticos, entre otros.'},
      {name: 'robots', content: 'index, nofollow'},
      {property: 'og:title', content: 'Revicor'},      
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: 'Revicor'},
      {property: 'og:url', content: 'https://www.revicor.pe'},
      {property: 'og:description', content: 'Nos dedicamos a la implementación de Revestimientos y pisos industriales'}
    ]);

  }

}
