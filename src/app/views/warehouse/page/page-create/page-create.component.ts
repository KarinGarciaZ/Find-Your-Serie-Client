import { ToastrService } from 'ngx-toastr';
import { PageService } from 'app/services/page.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.scss']
})
export class PageCreateComponent implements OnInit {

  constructor(private pageService: PageService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitPage( page ) {
    this.pageService.create( page )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.toastr.success('Se registró exitosamente', '¡Registro agregado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }
}
