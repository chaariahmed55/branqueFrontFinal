import { Component, OnInit } from '@angular/core';
import { ElementPubService } from 'src/app/element-pub.service';
import { Elementpublication } from 'src/app/elementpublication';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elementpub-update',
  templateUrl: './elementpub-update.component.html',
  styleUrls: ['./elementpub-update.component.css']
})
export class ElementpubUpdateComponent implements OnInit {
  id: number;
  Elementpublication: Elementpublication;

  constructor(private route: ActivatedRoute,private router: Router,
    private elementpubservice: ElementPubService) { }

    ngOnInit() {
      this.Elementpublication = new Elementpublication();
  
      this.id = this.route.snapshot.params['id'];
      
      this.elementpubservice.getElePub(this.id)
        .subscribe(data => {
          console.log(data)
          this.Elementpublication = data;
        }, error => console.log(error));
    }
  
    updateElePub() {
      this.elementpubservice.updateElePub(this.id, this.Elementpublication)
        .subscribe(data => {
          console.log(data);
          this.Elementpublication = new Elementpublication();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateElePub();    
    }
  
    gotoList() {
      this.router.navigate(['/elementpub']);
    }
  }

