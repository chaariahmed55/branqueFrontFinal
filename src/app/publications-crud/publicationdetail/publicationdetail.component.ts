import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/publication';
import { PublicationService } from 'src/app/publication.service';

@Component({
  selector: 'app-publicationdetail',
  templateUrl: './publicationdetail.component.html',
  styleUrls: ['./publicationdetail.component.css']
})
export class PublicationdetailComponent implements OnInit {
  id: number;
  publication: Publication;

  constructor(private route: ActivatedRoute,private router: Router,
    private pubService: PublicationService) { }

    ngOnInit() {
      this.publication = new Publication();
  
      this.id = this.route.snapshot.params['id'];
      
      this.pubService.getPub(this.id)
        .subscribe(data => {
          console.log(data)
          this.publication = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['publications']);
    }
  }


