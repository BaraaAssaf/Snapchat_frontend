import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allstory',
  templateUrl: './allstory.component.html',
  styleUrls: ['./allstory.component.css']
})
export class AllstoryComponent implements OnInit {

  constructor(public user:UserService , public router : Router , public admin:AdminService) { }
  ext:any ;
  ngOnInit(): void {
    this.user.getalluser();
    this.admin.getallStory();
  }

  BlockBody:any={};
  deleteBlock(id:any)
  {
     this.BlockBody=
     {
      Id : id ,
      IsBlock : 0
     }

     this.admin.changeblockstory(this.BlockBody);
  }

  Block(id : any)
  {
    this.BlockBody=
    {
     Id : id ,
     IsBlock : 1
    }
    this.admin.changeblockstory(this.BlockBody);


  }


  changeext(path:any)
  {
      this.ext = path.split('.').pop();
      
      
  }

  changeshowstory(id:number){
    const img=document.getElementById(`${id}img`) as HTMLImageElement;
    const txt=document.getElementById(`${id}h3`) as HTMLHeadingElement;
    const div=document.getElementById(`${id}div`) as HTMLDivElement;
    const media=document.getElementById(`${id}media`) as HTMLDivElement;
    const progress=document.getElementById(`${id}progress`) as HTMLDivElement;
    const Video=document.getElementById(`video${id}`) as HTMLVideoElement|null;
   
    Video?.play();
    img.style.display="none";
    txt.style.display="none";
    div.style.display="none";
    progress.style.width="100%";
    var a=media.offsetTop;
    setTimeout(() => {
      img.style.display="block";
      txt.style.display="block";
      div.style.display="block";
      if(Video != null)
      {
      Video?.pause();
      Video.currentTime = 0;
      }

    }, 15000);
  
  }


}
