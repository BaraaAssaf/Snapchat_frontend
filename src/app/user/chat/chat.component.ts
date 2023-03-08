import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  

  constructor(public user:UserService) { }
  idto:Number= 0;
  text : string='';
  chatid : any = localStorage.getItem('chatid');
  token:any= localStorage.getItem('user');
   ext:any ;  
  today:Date=new Date();

  //fileName.split('.').pop();
  ngOnInit(): void {
    this.token=JSON.parse(this.token);
    this.idto=Number(this.chatid);
    this.user.getuserbyidchat(this.idto);
    this.user.getmasseagetouser(this.token.userid ,this.idto);
   
    this.functionscroll();
     
   
  }
  functionscroll(){
   
    const divelement=document.getElementById('sectionmid') as HTMLDivElement ;
    
      // divelement.scrollBy(0,100);
       divelement.scrollTop = divelement.scrollHeight;
    //  alert(divelement.scrollHeight);
     
    
  } 
 

  comparedate(d:string)
  {
   
    const d2=new Date(d);
    
     if(d2.getFullYear()==this.today.getFullYear() && d2.getMonth()==this.today.getMonth() && d2.getDay() == this.today.getDay())
    return true;
    return false;
  }
  p_datac:any={ };
  Sendmessage(myid:any , reciverid:any)
  {
    this.p_datac={
      text: this.text ,
      path: "",
      senderid: myid,
      receiverid: reciverid,
      status: "0",
      issave : 0 , 
       messagedate: "2022-09-02T00:00:00"
      };

      this.user.Sendmessage(this.p_datac);
         
  } 

  changeext(path:any)
  {
      this.ext = path.split('.').pop();
      
  }

  messagesave(id : any , issave:any)
  {
    
    this.user.messageSave(id ,issave);
  }

  uploadImage(file:any)
  {
    
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    //this.admin.uploadChatfile(formDate);
    this.user.uploadChatfile(formDate);
  }

  /* new edit */

  deletemessage(id:number){
   this.user.deletemessagebyid(id);
  }

  /* end */
}