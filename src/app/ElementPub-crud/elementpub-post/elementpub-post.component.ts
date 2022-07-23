import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ElementPubService } from 'src/app/element-pub.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elementpub-post',
  templateUrl: './elementpub-post.component.html',
  styleUrls: ['./elementpub-post.component.css']
})
export class ElementpubPostComponent implements OnInit {
  ElepublicationForm = new FormGroup({
    contenu: new FormControl(''),
    typeElement: new FormControl(''),
    
  });

  constructor(private ElepubService: ElementPubService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {

    console.warn(this.ElepublicationForm.value);

    let publication = {
      "contenu": this.ElepublicationForm.value.conteni ? this.ElepublicationForm.value.contenu : "",
      "typeElement": this.ElepublicationForm.value.typeElement ? this.ElepublicationForm.value.typeElement : "",
      
    }

    console.log(publication);
    let contenu= this.ElepublicationForm.value.contenu ? this.ElepublicationForm.value.contenu : "";
    let typeElement= this.ElepublicationForm.value.typeElement ? this.ElepublicationForm.value.typeElement : "";
    
    
    this.ElepubService.addElePublications(contenu,typeElement).subscribe({
      next: data => {
        console.log(data);
        alert('yes');
        this.list();
      },
      error: err => {
        console.log(err);
      }
    });


  }
  list(){
    this.router.navigate(['elementpub']);
  }

}


