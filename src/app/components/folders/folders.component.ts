import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoldersService } from 'src/app/services/folders.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders:any = [];
  folder:any = {};
  closeResult: string;  

  constructor(
    private _foldersService:FoldersService,
    private activatedRoute:ActivatedRoute,
    private modalService: NgbModal,
  ) {   this.closeResult = "";  }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( params=>{
      this.folder.parent = params["id"];
      this._foldersService.getFoldersParent( params["id"] )
      .subscribe( data => {
        this.folders = data;
      });

    })
  }

  open(content:any) {
   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  saveFolder(form: NgForm){
    this._foldersService.saveFolder( form.value )
    .subscribe( data => {
      this.folders.push(data);
    });
  }

}
