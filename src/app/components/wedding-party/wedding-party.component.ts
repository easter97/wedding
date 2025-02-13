import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrl: './wedding-party.component.scss'
})
export class WeddingPartyComponent {

  packing = [
    {item: "Swimsuits", notes: "3-4", audience:['All'], events: ['Boat Day', 'General']},
    {item: "Rehearsal Dinner Attire", notes: "1", events: ['Rehearsal Dinner'], audience:['All']},
    {item: "Sunscreen", notes: "1 bottle liquid, 2-3 spray", events: ['Boat Day', 'General'], audience:['All']},
    {item: "Bug Spray", notes: "1", audience: ['All'], events: ["General"]},
    {item: "Tip Money", notes: "Your discretion, we recommend $30 in small bills for tipping housekeeping or bar tenders", events: ['General'], audience:['All']},
    {item: "Makeup", notes: "", events: ['General'], audience:['Bridesmaids']},
    {item: "Hair Styling Tools", notes: "", events: ['Rehearsal Dinner', 'Wedding Day'], audience:['Bridesmaids']},
    {item: "Swim Coverup", notes: "", events: ['General'], audience:['All']},
    {item: "Bridesmaid Dress", notes: "", events: ['Wedding Day'], audience:['Bridesmaids']},
    {item: "Brown Loafers", quantity: "", events: ['Wedding Day'], audience:['Groomsman']},
  ]
  checklist = [
    {
      title: "7-9 Months Before",
      target: '2025-03-11',
      percentage: null,
      listItems: [
        "RSVP",
        "Book lodging",
        "Apply / Renew Passport (if necessary)"
      ]
    },
    {
      title: "5-6 Months Before",
      target: '2025-05-11',
      percentage: null,
      listItems: [
        "Buy Clothing",
      ]
    },
    {
      title: "2-4 Months Before",
      target: '2025-08-11',
      percentage: null,
      listItems: [
        "Book Flights",
      ]
    },
    {
      title: "1 Month Before",
      target: '2025-09-11',
      percentage: null,
      listItems: [
        "Test",
      ]
    },
    {
      title: "1 Week Before",
      target: '2025-09-11',
      percentage: null,
      listItems: [
        "Test",
      ]
    },
  ];

  ngOnInit(){
    for(let item of this.checklist){
      item.percentage = this.getProgressPercentage(item.target);
    }
  }

    getProgressPercentage(target): number {
      let startDate = new Date('2025-01-01');  // Adjust to your start date
      let targetDate = new Date(target); // Adjust to your target date
      const today = new Date();
      
      // Get the difference in days
      const totalDays = Math.floor((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const remainingDays = Math.floor((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      // If today is past the target date, return 100%
      if (remainingDays <= 0) return 100;
  
      // If today is at the start, return 0%
      if (remainingDays >= totalDays) return 0;
  
      // Otherwise, interpolate progress (inverted to count down)
      return ((totalDays - remainingDays) / totalDays) * 100;
    }

}
