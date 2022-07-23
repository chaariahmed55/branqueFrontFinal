import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Publication } from 'src/app/publication';
import { PublicationService } from 'src/app/publication.service';


@Component({
  selector: 'app-publications-show',
  templateUrl: './publications-show.component.html',
  styleUrls: ['./publications-show.component.css']
})
export class PublicationsShowComponent implements OnInit {
  publications: Observable<Publication[]>;

  constructor(private publicationservice: PublicationService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.publications = this.publicationservice.getPubList();
    }
    publicationDetails(id: number){
      this.router.navigate(['details', id]);
    }
    deletePub(id: number) {
      this.publicationservice.deletePub(id)
        .subscribe(
          data => {
            console.log(data);
           alert('pub deleted');
            this.reloadData();
          },
          error => console.log(error));
    }
    
    updatePub(id: number){
      this.router.navigate(['modify', id]);
    }


}
