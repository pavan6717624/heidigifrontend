import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  responsiveOptions:any;


  imageSrc=['https://picsum.photos/1200/400?random=1','https://picsum.photos/1200/400?random=2','https://picsum.photos/1200/400?random=3']

  showImage:number=0;

  categories=['Food','Education','Events','Marketing','Life Style']

  loginVisible=true;

rotateImages()
{
  console.log(this.showImage);
  this.showImage=(this.showImage+1)%3;

}


 

  ngOnInit(): void {
    console.log(this.showImage);
    setInterval(() => this.rotateImages(),2000);
    
    
  }

}
