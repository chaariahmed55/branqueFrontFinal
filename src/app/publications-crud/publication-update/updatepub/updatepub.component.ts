import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/publication';
import { PublicationService } from 'src/app/publication.service';

@Component({
  selector: 'app-updatepub',
  templateUrl: './updatepub.component.html',
  styleUrls: ['./updatepub.component.css']
})
export class UpdatepubComponent implements OnInit {
  id: number;
  publication: Publication;

  constructor(private route: ActivatedRoute,private router: Router,
    private pubservice: PublicationService) { }

    ngOnInit() {
      this.publication = new Publication();
  
      this.id = this.route.snapshot.params['id'];
      
      this.pubservice.getPub(this.id)
        .subscribe(data => {
          console.log(data)
          this.publication = data;
        }, error => console.log(error));
    }
  
    updatePub() {
      this.pubservice.updatePub(this.id, this.publication)
        .subscribe(data => {
          console.log(data);
          this.publication = new Publication();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updatePub();    
    }
  
    gotoList() {
      this.router.navigate(['/publications']);
    }
  }
