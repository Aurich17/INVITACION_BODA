import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements AfterViewInit {
  @ViewChild('invitationContent', { read: ElementRef })
  invitationContent!: ElementRef<HTMLDivElement>;

  pages!: HTMLElement[];
  currentIndex = 0;
  isOpen = false;
  isClosing = false;

  ngAfterViewInit() {
    this.pages = Array.from(
      this.invitationContent.nativeElement.querySelectorAll('.page')
    ) as HTMLElement[];
  }

onNextPage(): void {
    const container = this.invitationContent.nativeElement;
    const pageHeight = container.clientHeight;

    if (!this.isOpen && !this.isClosing) {
      // primer clic: abrimos
      this.isOpen = true;
      return;
    }

    if (this.currentIndex < this.pages.length - 1) {
      // avanzamos
      this.currentIndex++;
      container.scrollTo({ top: this.currentIndex * pageHeight, behavior: 'smooth' });
    } else {
      // último clic: disparar cierre
      this.isClosing = true;
      // esperar a que termine la anim (~1.5s) y luego reset
      setTimeout(() => {
        this.isClosing = false;
        this.isOpen = false;
        this.currentIndex = 0;
        container.scrollTo({ top: 0, behavior: 'auto' });
      }, 1500);
    }
  }
}
