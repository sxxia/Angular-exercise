import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DocumentService } from '../document.service';
import { Document } from '../document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  public document: Document;
  private docSubscription: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docSubscription = this.documentService.currentDocument$.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe((document: any) => {
      this.document = document;
    });
  }

  ngOnDestroy(): void {
    this.docSubscription.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }

}
