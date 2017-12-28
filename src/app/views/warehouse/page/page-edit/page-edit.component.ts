import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'app/services/page.service';
import { Component, OnInit } from '@angular/core';
import { Page } from 'app/models/page';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  public id: any;
  public page: Page;

  constructor(
    private toastr: ToastrService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.pageService.findById( this.id )
          .subscribe( page => this.page = page )         
      }
    })
  }

  ngOnInit() {
  }

  onSubmitPage() {
    this.pageService.update( this.page )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }
}
