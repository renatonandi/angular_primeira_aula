import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jovendev-title',
  templateUrl: './jovendev-title.component.html',
  styleUrls: ['./jovendev-title.component.scss']
})
export class JovendevTitleComponent implements OnInit{
  public title:String = "Jovem Dev";
  
  ngOnInit(): void {
    let h = new Date().getHours();
    if (h < 12) {
      this.title +=  " Matutino"
    }else{
      this.title += " Vespertino"
    }
  }


}
