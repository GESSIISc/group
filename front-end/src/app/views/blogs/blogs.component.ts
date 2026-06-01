import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { data } from '../../../assets/data/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements AfterViewInit {
  @ViewChild('selectedBlogDisplay') editModal!: TemplateRef<any>;

  modalRef?: BsModalRef;
  selectedBlog: any;
  data = data;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    const viewBlogId = this.route.snapshot.queryParamMap.get('viewBlogId');

    if (viewBlogId) {
      setTimeout(() => {
        this.openModal(this.editModal, Number(viewBlogId));
      });
    }
  }

  openModal(template: TemplateRef<any>, blogId: number) {
    this.selectedBlog = this.data.find((item) => item.id === blogId);
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
  }
}
