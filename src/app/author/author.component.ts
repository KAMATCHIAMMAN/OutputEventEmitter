import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Output() mydata=new EventEmitter<string>();
  //public data :number;
  constructor(){}
    public btnClick():void{
      this.mydata.emit("this data is from child ") 
  }
}
