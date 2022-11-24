import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

export class Post {
  id: number = 0;
  date: Date = new Date();
  image: string = '';
}

export class Category
{
  id: number=0;
  name: string = '';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  visible = false;
  selectedDate=new Date();


  categories: Category[]=[];

  calClick()
  {
    this.visible=true;
  }
  calChange()
  {
    
    this.visible=false;
    this.gotoDate(this.selectedDate);
  }

  todayClick()
  {
    this.gotoDate(new Date());
  }

  myPosts: Post[] = [];

  items2: MenuItem[] = [];
  items: MenuItem[] = [];

  imageStore: string[][]=[];

  srcImage: string = '';

  dropImage: string = '';

  dragStart(src: any) {
    console.log("dragStart");
    this.dropImage = src;
  }

  drop(id: number) {
    console.log("drop");
    this.myPosts[id].image = this.dropImage;
  }
  viewImage=false;
  viewSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  getPostImage(dat: any)
  {
    console.log(dat);
    return this.myPosts.filter(o=>o.date.getMonth() == dat.month && o.date.getDate() == dat.day && o.date.getFullYear() == dat.year)[0].image || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  }
  over(str: string)
  {
this.viewImage=true;
this.viewSrc=str;
  }
  dockItems: MenuItem[] = [];

  dragEnd() {
    this.dropImage = '';
    console.log("dragEnd")
  }



  str=['Food','Education','Life Style','Marketing','Travel'];

  ngOnInit() {
    var curr = new Date(); // get current date

    this.dockItems = [
      {
          label: 'Finder',
          icon: "https://source.unsplash.com/random/200x200?sig=234"
      },
      
  ];





    for(var i=0;i<5;i++)
    {
      this.categories[i]=new Category();
      this.categories[i].name=this.str[i];
      this.categories[i].id=i;

      this.imageStore[i]=new Array(10);
      for(var j=0;j<10;j++)
    {
      
    this.imageStore[i][j]="https://source.unsplash.com/random/200x200?sig="+((i*9)+j);

    console.log(i+" "+j+" "+this.imageStore[i][j]);
    }
    }

    let startDate = new Date();
    startDate.setDate(curr.getDate() - 364);

    let calDate = startDate;



    for (var i = 0; i < 729; i++) {
      let date = new Date(calDate.setDate(calDate.getDate() + 1));

      console.log(date);


      let post = new Post();
      post.id = (i);
      post.date = date;
      post.image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
      this.myPosts.push(post);
    }


  }



  ngAfterViewInit()
  {
    this.gotoDate(new Date());

  }

  imageWidth = "150em";

  increaseWidth() {
    this.imageWidth = "300em";
  }
  decreaseWidth() {
    this.imageWidth = "150em";
  }

  selectDay(id: number, cal: Boolean) {
    for (var i = 0; i < this.myPosts.length; i++) {
      if (id == i) {
        let el = document.getElementById("demo" + id);
        if (el != null) {
          if (!cal)
            el.scrollIntoView();
          else
            el.scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
            });


          el.style.borderWidth = '0.1em';
          el.style.borderStyle = 'solid';
        }
      }
      else {
        let el = document.getElementById("demo" + i);
        if (el != null) {

          el.style.borderWidth = '0';

        }
      }
    }


  }

  gotoDate(date: Date) {
    var post = this.myPosts.
    filter(
      o => o.date.getMonth() == date.getMonth() && 
      o.date.getDate() == date.getDate() && 
      o.date.getFullYear() == date.getFullYear())[0];
    console.log("post::" + post.id)
    this.selectDay(post.id, true);
  }

  menuCreate(id: number) {
    this.items = [];

    let subCategoires = [];

    for (var i = 1; i < 5; i++)
      subCategoires.push({ label: 'SubCategories' + (id + 1) + "" + i });

    this.items.push({ label: '-- Sub Categories --', items: subCategoires });
  }


}
