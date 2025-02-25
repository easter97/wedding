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
    {item: "Makeup", notes: "", events: ['General'], audience:['Women']},
    {item: "Hair Styling Tools", notes: "", events: ['Rehearsal Dinner', 'Wedding Day'], audience:['Women']},
    {item: "Swim Coverup", notes: "", events: ['General'], audience:['All']},
    {item: "Bridesmaid Dress", notes: "", events: ['Wedding Day'], audience:['Bridesmaids']},
    {item: "Brown Loafers", quantity: "", events: ['Wedding Day'], audience:['Groomsman']},
    {item: "Collared Shirt", quantity: "", events: ['General'], audience:['Men']},
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
  timeline = [
    { 
      date: "Tuesday, October 7", 
      events: [
        { time: 'Any Time', 
          title: 'Bridal Party Arrives in Mexico', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
        { 
          time: 'Evening', 
          title: 'Drinks', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
        { 
          time: 'Evening', 
          title: 'Dinner', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
      ]
    },
    { 
      date: "Wednesday, October 8", 
      events: [
        { time: 'Morning', 
          title: 'Breakfast', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
        { 
          time: 'Afternoon (Time TBD)', 
          title: 'Boat Day', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
        { 
          time: 'Evening (Time TBD)', 
          title: 'Desires Night Club', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
      ]
    },
    { 
      date: "Thursday, October 9", 
      events: [
        { time: 'Morning', 
          title: 'Spa Day / Golf?', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
      ]
    },
    { 
      date: "Friday, October 10", 
      events: [
        { time: 'Morning', 
          title: 'Rehearsal', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
        { 
          time: 'Evening', 
          title: 'Rehearsal Dinner', 
          description: `<p>Join us this evening as we welcome our guests to our wedding weekend. Get to know one another and make plans for the days to come!</p>`
        },
      ]
    },
    { 
      date: "Saturday, October 11", 
      events: [
        { time: '11:30 AM', 
          title: 'Bridesmaids Report to Bridal Suite', 
          description: `<p>amanda's room</p>`
        },
        { 
          time: '12:00 PM', 
          title: "Bride's Makeup", 
          description: `<p>makeup</p>`
        },
        { 
          time: '1:00 PM', 
          title: "Bride's Hair", 
          description: `<p>Bridal hair</p>
          <p>Getting ready photos begin</p>`
        },
        { 
          time: '1:30 PM', 
          title: "Groomsmen Get Dressed", 
          description: `<p>report to somewhere</p>`
        },
        { 
          time: '2:00 PM', 
          title: "First Look with Groom", 
          description: `<p>location</p>`
        },
        { 
          time: '2:15 PM', 
          title: "Bridal Party Portraits", 
          description: `<p>location</p>`
        },
        { 
          time: '3:00 PM', 
          title: "Bride & Groom Portraits", 
          description: `<p>location</p>`
        },
        { 
          time: '3:45 PM', 
          title: "Prepare for Ceremony", 
          description: `<p>Relax</p>
          <p>Hair & makeup touchups</p>
          <p>Usher reports to beach to start seating guests</p>`
        },
        { 
          time: '4:00 PM', 
          title: "Ceremony Starts", 
          description: `<p>location</p>`
        },
        { 
          time: '5:00 PM', 
          title: "Cocktail Hour Starts", 
          description: `<p>location</p>`
        },
        { 
          time: '6:00 PM', 
          title: "Reception Starts", 
          description: `<p>location</p>`
        },
      ]
    },
  ];

  //default is start, we'll add logic if the date matches a date in the timeline
  currentDay = this.timeline[0];
  organizeBy = "default"
  allEvents = [];
  allAudiences = [];

  ngOnInit(){
    for(let item of this.checklist){
      item.percentage = this.getProgressPercentage(item.target);
    }

    this.allEvents = [...new Set(this.packing
      .map(item => item.events)
      .reduce((acc, val) => acc.concat(val), [])
    )].map(event => ({ name: event, selected: false }));
    
    this.allAudiences = [...new Set(this.packing
      .map(item => item.audience)
      .reduce((acc, val) => acc.concat(val), [])
    )].map(audience => ({ name: audience, selected: false }));
    

  }

  getSelectedFilters() {
    const selectedEvents = this.allEvents
      .filter(event => event.selected)
      .map(event => event.name);
  
    const selectedAudiences = this.allAudiences
      .filter(audience => audience.selected)
      .map(audience => audience.name);
  
    return { selectedEvents, selectedAudiences };
  }

  getFilteredPacking() {
    const { selectedEvents, selectedAudiences } = this.getSelectedFilters();
  
    return this.packing.filter(item => {
      // If no filters are selected, return everything
      if (selectedEvents.length === 0 && selectedAudiences.length === 0) {
        return true;
      }
  
      const eventMatch = selectedEvents.length === 0 || item.events.some(event => selectedEvents.includes(event));
      const audienceMatch = selectedAudiences.length === 0 || item.audience.some(aud => selectedAudiences.includes(aud));
  
      return eventMatch && audienceMatch;
    });
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
