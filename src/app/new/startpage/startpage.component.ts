import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private route:Router) { }

  imageSrc=['https://picsum.photos/1200/400?random=1','https://picsum.photos/1200/400?random=2','https://picsum.photos/1200/400?random=3']

  showImage:number=0;

  categories=['Food','Education','Events','Marketing','Life Style','Finanical']

  loginVisible=false;

rotateImages()
{
  console.log(this.showImage);
  this.showImage=(this.showImage+1)%3;

}

gotoPage()
{
  this.route.navigate(['/display']);
}


 

  ngOnInit(): void {
    console.log(this.showImage);
    setInterval(() => this.rotateImages(),2000);
    
    
  }


}
