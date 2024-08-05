
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder, FormGroup, FormsModule,ReactiveFormsModule} from"@angular/forms";
import { TachesService } from '../../../services/taches/taches.service';
import { Taches } from '../../../models/taches/taches';


@Component({
  selector: 'app-create-taches',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './create-taches.component.html',
  styleUrl: './create-taches.component.scss'
})
export class CreateTachesComponent implements OnInit {

  taches: Taches = new Taches();
formTache!: FormGroup;

  constructor(private router:Router, private tachesService: TachesService, private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.formTache =this.fb.group({
      name: this.fb.control(" "),
      description : this.fb.control(" "),
      courseId: this.fb.control("")
    })
  }
saveTache() {

  console.log(this.formTache.value)

  this.tachesService.createTache(this.formTache.value).subscribe({
    next : data =>{
      console.log(data);
      
    },
    error: err =>{
      console.log(err);
    }
  
  })
}

}
