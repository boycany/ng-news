import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;

  @Output() gotoPage = new EventEmitter<number>();

  paginationArray: number[] = [];

  getPaginationArray(currentPage: number): number[] {
    let paginationArray!: number[] 
    switch (currentPage){
      case 1:
        paginationArray = [
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3,
          currentPage + 4,
        ];
        break;
      case 2: 
        paginationArray = [
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3
        ]
        break;
      case this.totalPages - 1:
        paginationArray = [
          currentPage - 3,
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1
        ]
        break;
      case this.totalPages:
        paginationArray = [
          currentPage - 4,
          currentPage - 3, 
          currentPage - 2,
          currentPage - 1,
          currentPage
        ]
        break;
      default:
        paginationArray = [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2
        ]
    }

    return paginationArray.filter(
      (page) => page >= 1 && page <= this.totalPages
    );
  }

  ngOnInit() {
    console.log('this.currentPage :>> ', this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.gotoPage.emit(this.currentPage - 1);
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.gotoPage.emit(this.currentPage + 1);
    }
  }

  ngOnChanges() {
    this.paginationArray = this.getPaginationArray(this.currentPage);
    // console.log('this.currentPage on Change :>> ', this.currentPage);
  }
}
