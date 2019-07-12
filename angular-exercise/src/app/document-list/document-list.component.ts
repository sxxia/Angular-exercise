import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  public documents: Observable<string[]>;
  public currentDoc: string;
  private docSubscription: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.documents$;
    this.docSubscription = this.documentService.currentDocument$.subscribe((data: any) => {
      this.currentDoc = data.id;
    });
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }

  newDoc() {
    this.documentService.newDocument();
  } 

  ngOnDestroy(): void {
    this.docSubscription.unsubscribe();
  }

}
