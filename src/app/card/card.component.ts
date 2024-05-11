import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  isFlipped: any = true;
  color: any;
  flashCards: any;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.color = 'blue';
    this.getAllFlashCards();
  }
  flipCard(index: any) {
    // this.isFlipped = !this.isFlipped;
    this.flashCards[index].isFlipped = !this.flashCards[index].isFlipped;
  }

  getAllFlashCards() {
    this.commonService.getAllFlashCards().subscribe((res: any) => {      
      this.flashCards = res.data.cards.map((card: any) => ({
        ...card,
        isFlipped: false,
      }));
    });
  }
}
