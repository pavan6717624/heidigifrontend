import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
export class Post {
  id: number = 0;
  date: Date = new Date();
  image: string = '';
}

export class Category {
  id: number = 0;
  name: string = '';
}
@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css'],
  providers: [MessageService]
})
export class DisplaypageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  visible = false;
  selectedDate = new Date();

  counter = "0/365"

  tooltipItems: MenuItem[] = [];


  categories: Category[] = [];

  calClick() {
    this.visible = true;
  }
  calChange() {

    this.visible = false;
    this.gotoDate(this.selectedDate);
  }

  todayClick() {
    this.gotoDate(new Date());
  }

  myPosts: Post[] = [];

  items2: MenuItem[] = [];
  items: MenuItem[] = [];

  imageStore: string[] = [];

  srcImage: string = '';

  dropImage: string = '';

  dragStart(src: any) {
    //console.log("dragStart");
    this.dropImage = src;
  }

  drop(id: number) {
  //  console.log("drop");
    this.myPosts[id].image = this.dropImage;
  }
  viewImage = false;
  viewSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  getPostImage(dat: any) {
  //  console.log(dat);
    return this.myPosts.filter(o => o.date.getMonth() == dat.month && o.date.getDate() == dat.day && o.date.getFullYear() == dat.year)[0].image || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  }
  over(str: string) {
    this.viewImage = true;
    this.viewSrc = str;
  }
  dockItems: MenuItem[] = [];

  dragEnd() {
    this.dropImage = '';
  //  console.log("dragEnd")
  }

  loading = true;

  str = ['Food', 'Education', 'Life Style', 'Marketing', 'Travel'];

  displayHeight = 0;

  ngOnInit() {
    var curr = new Date(); // get current date

    this.displayHeight = window.outerHeight * 0.60;


    for (var i = 0; i < 100; i++) {



      this.imageStore[i] = "https://source.unsplash.com/random/200x200?sig=" + ((i * 9));


    }

    let startDate = new Date();
    startDate.setDate(curr.getDate() - 50);

    let calDate = startDate;



    for (var i = 0; i < 415; i++) {
      let date = new Date(calDate.setDate(calDate.getDate() + 1));

      // console.log(date);


      let post = new Post();
      post.id = (i);
      post.date = date;
      post.image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
      this.myPosts.push(post);


      this.tooltipItems = [
        {
          tooltipOptions: {
            tooltipLabel: "Submit",
            tooltipPosition: "left"
          },
          icon: 'pi pi-send',
          command: () => {
            this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
        },

        {
          tooltipOptions: {
            tooltipLabel: "Save",
            tooltipPosition: "left"
          },
          icon: 'pi pi-bookmark',
          command: () => {
            this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
        },
        {
          tooltipOptions: {
            tooltipLabel: "Reset",
            tooltipPosition: "left"
          },
          icon: 'pi pi-refresh',
          command: () => {
            this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
        },
        {
          tooltipOptions: {
            tooltipLabel: "Auto Select",
            tooltipPosition: "left"
          },
          icon: 'pi pi-check-square',
          command: () => {
            this.autoSelect();
          }
        },
        {
          tooltipOptions: {
            tooltipLabel: "Today",
            tooltipPosition: "left"
          },
          icon: 'pi pi-clock',
          command: () => { this.todayClick(); }
        },
        {
          tooltipOptions: {
            tooltipLabel: "Calendar",
            tooltipPosition: "left"
          },
          icon: 'pi pi-calendar-plus',
          command: () => {
            this.calClick();
          }
        }
      ];


    }

    this.loading = false;

  }


  blockedPanel = true;


  ngAfterViewInit() {
    this.gotoDate(new Date());

  }

  imageWidth = "150em";

  increaseWidth() {
    this.imageWidth = "300em";
  }
  decreaseWidth() {
    this.imageWidth = "150em";
  }

  autoSelect()
  {
    var date=new Date();
    var id=this.myPosts.
    filter(
      o => o.date.getMonth() == date.getMonth() &&
        o.date.getDate() == date.getDate() &&
        o.date.getFullYear() == date.getFullYear())[0].id;
    for(var i=id;i<id+365;i++)
    {
      if(this.myPosts[i].image=='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg')
      {
      var ran=Math.floor((Math.random()*100)%100);
      console.log(ran);
      this.myPosts[i].image=this.imageStore[ran];
    }
  }


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
   // console.log("post::" + post.id)
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
