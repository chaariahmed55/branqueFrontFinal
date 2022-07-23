import { Component, OnInit } from '@angular/core';
import { Elementpublication } from 'src/app/elementpublication';
import { Observable } from 'rxjs';
import { ElementPubService } from 'src/app/element-pub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elementpublist',
  templateUrl: './elementpublist.component.html',
  styleUrls: ['./elementpublist.component.css']
})
export class ElementpublistComponent implements OnInit {
  Elementpublication: Observable<Elementpublication[]>;

  constructor(private Elementpubservice: ElementPubService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.Elementpublication = this.Elementpubservice.getElePubList();
    }
    deleteElePub(id: number) {
      this.Elementpubservice.deleteElePub(id)
        .subscribe(
          data => {
            console.log(data);
           alert('Element deleted');
            this.reloadData();
           
          },
          error => console.log(error));
    }
    ElementpublicationDetails(id: number){
      this.router.navigate(['detail', id]);
    }
    updateElePub(id: number){
      this.router.navigate(['modif', id]);
    }


}
