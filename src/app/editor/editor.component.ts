import { Course } from 'src/app/models/course.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentsItemType } from '../models/contents-item-type.enum';
import { DataService } from '../services/data/data.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

course_id:any;  
result:any;
  constructor(private route: ActivatedRoute, private router: Router, private readonly dataService:DataService) { 
    

  }

  ngOnInit(): void {
   let data:Course= {
      id:this.course_id,
      name: 'Emmanuel',
      description: '',
      contents: [],
      plans: [],
      author: {
        firstName: "Isaac ",
        lastName: "Quarshie"
      }
    
    };
    
  
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
      this.course_id =params.id;
      this.dataService.updateCourse(this.course_id, data);
      this.result='Success';
      
    });
  }

}
