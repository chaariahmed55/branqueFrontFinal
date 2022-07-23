import { Component, OnInit } from '@angular/core';
import { ElementPubService } from 'src/app/element-pub.service';
import { Elementpublication } from 'src/app/elementpublication';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elementpub-detail',
  templateUrl: './elementpub-detail.component.html',
  styleUrls: ['./elementpub-detail.component.css']
})
export class ElementpubDetailComponent implements OnInit {
  id: number;
  Elementpublication: Elementpublication;

  constructor(private route: ActivatedRoute,private router: Router,
    private Elementpubservice: ElementPubService) { }

    ngOnInit() {
      this.Elementpublication = new Elementpublication();
  
      this.id = this.route.snapshot.params['id'];
      
      this.Elementpubservice.getElePub(this.id)
        .subscribe(data => {
          console.log(data)
          this.Elementpublication = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['elementpub']);
    }
  }
