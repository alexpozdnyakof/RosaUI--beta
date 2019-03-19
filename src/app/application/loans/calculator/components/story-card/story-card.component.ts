import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'rosa-story-card',
  templateUrl: './story-card.component.pug',
  styleUrls: ['./story-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryCardComponent implements OnInit {
  @Input() public story: any;
  @Output() public copied: EventEmitter<string> = new EventEmitter<string>();
  public isExpanded = false;
  public windowNavigator: any = window.navigator; // fix because ts doesn't know navigator type
  public clicked = 0;
  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {

      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
         return;
      }
      console.log(`clicked ${this.clicked}`);
      console.log(targetElement);
      
      if (targetElement.className === `rosa-button rosa-button__link rosa-button__small`) {
        this.windowNavigator.clipboard.writeText(`http://localhost:8088/api/loans/calculator/history/${this.story.id}`).then(() => {
          this.copied.emit(`Ссылка скопирована. Для вставки нажмите CTRL + V`);
        }).catch(err => {
          this.copied.emit(`Не удалось скопировать. Перезагрузите страницу и попробуйте снова`);
        });
      }
      this.isExpanded  = !this.isExpanded;
      
    }
  constructor(
    private _elementRef: ElementRef,
  ) { }

  ngOnInit() {
  }

}
