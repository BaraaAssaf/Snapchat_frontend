import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 
  
  

  constructor(public user:UserService) {
  
   }
  
  ngOnInit(): void {
   
    
    this.user.getalluser();
  

}
amman:number=0;
irbid:number=0;
zarqa:number=0;
aqaba:number=0;
othercountry:number=0;
changevalue(city:string,len:number){
  city=city.toLowerCase();
if(city.includes('amman'))
this.amman+=1;
else if(city.includes('irbid'))
this.irbid+=1;
else if(city.includes('zarqa'))
this.zarqa+=1;
else if(city.includes('aqaba'))
this.aqaba+=1;
else
this.othercountry+=1;
if(this.amman+this.irbid+this.zarqa+this.aqaba+this.othercountry == len)
 this.chartjs(this.amman,this.irbid,this.zarqa,this.aqaba,this.othercountry);

}
c:number=0;
below18:number=0;
age18_25:number=0;
age26_40:number=0;
age41_55:number=0;
over55:number=0;
calculatedate(d:any,l:number){
 
  const date = new Date(d);
 
  const timeDiff = Math.abs(Date.now() - date.getTime());
  const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  if(age<18)
  this.below18+=1;
  else if(age>=18 && age<=25)
  this.age18_25+=1;
  else if(age>=26 && age<=40)
  this.age26_40+=1;
  else if(age>=41 && age<=55)
  this.age41_55+=1;
  else
  this.over55+=1;

     this.c+=1;
     if(this.c==l)
     {
         this.chartpie(this.below18,this.age18_25,this.age26_40,this.age41_55,this.over55);
     }
 
  
   
}

chartjs(am:number,ir:number,za:number,aq:number,othercountry:number){
  const chart = new Chart("canvas", {

    type: 'bar',
    
    data: {
                labels: ['amman', 'irbid', 'zarqa', 'aqaba','other country'],
                datasets: [{
                    label: 'city',
                    data: [am, ir, za, aq,othercountry],
        backgroundColor: [
          '#33b5e5',
         
      ],
      borderColor: [
        '#FFFC00',
        '#FFFC00',
        '#FFFC00',
        '#FFFC00',
        '#FFFC00',
        '#FFFC00'
      ],
      
                }]
            },
            options: {
              plugins: {  // 'legend' now within object 'plugins {}'
                legend: {
                  labels: {
                    color: "#33b5e5", 
                    
                    // fontSize: 18  // not 'fontSize:' anymore
                    font: {
                      size: 0 // 'size' now within object 'font {}'
                    }
                  }
                }
              },
              scales: {
                y: {  // not 'yAxes: [{' anymore (not an array anymore)
                  ticks: {
                    color: "#33b5e5", // not 'fontColor:' anymore
                    // fontSize: 18,
                    font: {
                      size: 14, // 'size' now within object 'font {}'
                    },
                   
                   
                  }
                },
                x: {  
                  ticks: {
                    color: "#33b5e5 ",  
                    font: {
                      size: 14 
                    },
                 
                  }
                }
              }
                  }
  
  });
  
  
  
  
  
  
    }

    chartpie(below18:number,age18_25:number,age26_40:number,age41_55:number,over55:number){
  
      

      const chart = new Chart("doughnut",  {
        type: 'doughnut',
      
        data: {
          datasets: [
            {
              data: [ below18, age18_25, age26_40, age41_55,over55],
              backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(255, 159, 64)', 'rgb(54, 162, 235)', ],
              
            },
          ],
        
          labels: ['below 18', '18-25', '26-40', '41-55', 'over 55'],
        },
        options: {
          plugins: {
           
          }
        }
      });
 
}
}

