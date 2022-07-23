import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../../publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  
  publicationForm = new FormGroup({
    datepublication: new FormControl(''),
    autheur: new FormControl(''),
    titre: new FormControl(''),
  });

  constructor(private pubService: PublicationService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    console.warn(this.publicationForm.value);

    let publication = {
      "datepublication": this.publicationForm.value.datepublication ? this.publicationForm.value.datepublication : "",
      "titre": this.publicationForm.value.titre ? this.publicationForm.value.titre : "",
      "autheur": this.publicationForm.value.autheur ? this.publicationForm.value.autheur : "",
    }

    console.log(publication);
    let datepublication= this.publicationForm.value.datepublication ? this.publicationForm.value.datepublication : "";
    let titre= this.publicationForm.value.titre ? this.publicationForm.value.titre : "";
    let autheur= this.publicationForm.value.autheur ? this.publicationForm.value.autheur : "";
    
    this.pubService.addPublications(datepublication,titre,autheur).subscribe({
      next: data => {
        console.log(data);
        alert('add success');
        this.list();
      },
      error: err => {
        console.log(err);
      }
    });


  }
  list(){
    this.router.navigate(['publications']);
  }

}
