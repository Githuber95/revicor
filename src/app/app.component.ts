import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { hasOnlyExpressionInitializer } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Revestimientos para losas industriales - Revicor';
  //EJEMPLO DE TITULO DEMASIADO LARGO
// Losas de concreto instalacion | CODEPA Pisos de concreto ..
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      //{name: ''}
      {name: 'keywords', content: 'Revestimientos, Losas industriales ,Pisos industriales ,Morteros epóxicos,poliuretano cemento, impermeabilizante para techo'},
      {name: 'description', 
      content: 'Los mejores revestimientos para pisos industriales, Sistemas de morteros epóxicos planchables y autonivelantes, morteros de poliuretano cemento, membranas líquidas, mantos asfálticos y más'},
     //SE DEBE CAMBIAR LA DESCRIPCION A MENOS DE 140 CARACTERES Y MÁS VENDIBLE
      {name: 'robots', content: 'index, nofollow'},
      {property: 'og:title', content: 'Revicor'},      
      {property: 'og:type', content: 'website'},
      {property: 'og:image:secure_url', content: 'https://www.revicor.pe/assets/images/logoOpenGraph.jpg'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},      
      {property: 'og:url', content: 'https://www.revicor.pe'},
      {property: 'og:description', content: 'Nos dedicamos a la implementación de Revestimientos y pisos industriales'}
    ]);

  }

}
