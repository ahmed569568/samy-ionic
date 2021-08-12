import { Component, OnInit } from '@angular/core';
// declare var google
@Component({
  selector: 'app-absence',
  templateUrl: './absence.page.html',
  styleUrls: ['./absence.page.scss'],
})
export class AbsencePage implements OnInit {

  constructor() {
   }
  //  show(){
  //    var data = new google.visualization.DataTable();
  //    data.addColumn('string', 'Topping');
  //    data.addColumn('number', 'Slices');
  //    data.addRows([
  //      ['Mushrooms', 3],
  //      ['Onions', 1],
  //      ['Olives', 1],
  //      ['Zucchini', 1],
  //      ['Pepperoni', 2]
  //    ]);
  //    var options = {'title':'How Much Pizza I Ate Last Night',
  //                   'width':400,
  //                   'height':300};

  //    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  //    chart.draw(data, options);
     
  //  }
  ngOnInit() {
    // this.show();
  }
 
}
