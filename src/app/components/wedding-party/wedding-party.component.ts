import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrl: './wedding-party.component.scss'
})
export class WeddingPartyComponent {

  packing = [
    {item: "Swimsuits", notes: "We recommend 3-4 suits, humidity makes things hard to dry", audience:['Everyone'], events: ['Boat Day', 'General']},
    {item: "Rehearsal Dinner Outfit", notes: "Beach Cocktail Attire", events: ['Rehearsal Dinner'], audience:['Everyone']},
    {item: "Sunscreen", notes: "We recommend 1 bottle liquid or 2-3 spray", events: ['Boat Day', 'General'], audience:['Everyone']},
    {item: "Bug Spray", notes: "Not needed often, but the more vegative areas of the resport can be bad", audience: ['Everyone'], events: ["General"]},
    {item: "Tip Money", notes: "Your discretion, we recommend $30 in small bills for tipping housekeeping or bartenders", events: ['General'], audience:['Everyone']},
    {item: "Makeup", notes: "", events: ['General'], audience:['Women']},
    {item: "Hair Styling Tools", notes: "", events: ['Rehearsal Dinner', 'Wedding Day'], audience:['Women']},
    {item: "Swim Coverup", notes: "Most restaurants require a coverup to dine", events: ['General'], audience:['Everyone']},
    {item: "Bridesmaid Dress", notes: "", events: ['Wedding Day'], audience:['Bridesmaids']},
    {item: "Brown Loafers", quantity: "", events: ['Wedding Day'], audience:['Groomsmen']},
    {item: "Undershirt", quantity: "We recommend more than one, it's hot!", events: ['Wedding Day', 'Rehearsal Dinner', 'General'], audience:['Groomsmen', 'Men']},
    {item: "Groomsman Shirt", quantity: "The linen shirt that was purchased for all groomsmen", events: ['Wedding Day'], audience:['Groomsmen']},
    {item: "Groomsman Pants", quantity: "The linen pants that were purchased for all groomsmen", events: ['Wedding Day'], audience:['Groomsmen']},
    {item: "Collared Shirt", quantity: "", events: ['General'], audience:['Men']},
    {item: "Passport", quantity: "", events: ['General'], audience:['Everyone']},
  ]
  checklist = [
    {
      title: "6-9 Months Before",
      target: '2025-04-11',
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
        "Bridesmaids find, approve, and purchase dress",
        'Groomsmen complete the <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfE2TEbnG8x_BUj5bV_H-JAH1S00NWXbpYkTbtgGoz3nr39TQ/viewform?usp=sharing">groomsmen sizing form</a>',
      ]
    },
    {
      title: "2-5 Months Before",
      target: '2025-08-11',
      percentage: null,
      listItems: [
        "Book Flights",
        "Schedule airport transportation with our travel agent",
        "Groomsmen receive and confirm correct fit for shirt & pants",
        'Bachelor party attendees complete the <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScovONUVA6L4sitLX-iCSP-7DACOdbKqf10idNkrxUKaD9kcw/viewform?usp=sharing">bachelor party form</a>'
      ]
    },
    // {
    //   title: "1 Month Before",
    //   target: '2025-09-11',
    //   percentage: null,
    //   listItems: [
    //     "Start Packing!",
    //   ]
    // },
    // {
    //   title: "1 Week Before",
    //   target: '2025-09-11',
    //   percentage: null,
    //   listItems: [
    //     "Start Packing!",
    //   ]
    // },
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
        { 
          time: '11:30 AM', 
          title: 'Bridesmaids Report to Bridal Suite', 
          location: "Bridal Suite",
          description: `<p>Bridesmaids arrive to get ready</p>`
        },
        { 
          time: '12:00 PM', 
          title: "Bride's Makeup", 
          location: "Bridal Suite",
          description: `<p>Makeup begins</p>`
        },
        { 
          time: '1:00 PM', 
          title: "Bride's Hair & Getting Ready Photos", 
          location: "Bridal Suite",
          description: `<p>Hair styling & getting ready photos</p>`
        },
        { 
          time: '1:30 PM', 
          title: "Groomsmen Get Dressed", 
          location: "Groom's Suite",
          description: `<p>Groomsmen report to get dressed</p>`
        },
        { 
          time: '2:00 PM', 
          title: "First Look with Groom", 
          location: "[TBD - Scenic Location]",
          description: `<p>Private first look</p>`
        },
        { 
          time: '2:15 PM', 
          title: "Bridal Party Portraits", 
          location: "[TBD - Scenic Spot]",
          description: `<p>Photos with entire bridal party</p>`
        },
        { 
          time: '3:00 PM', 
          title: "Bride & Groom Portraits", 
          location: "[TBD - Scenic Spot]",
          description: `<p>Couple’s portraits</p>`
        },
        { 
          time: '3:30 PM', 
          title: "Family Photos", 
          location: "[TBD - Scenic Spot]",
          description: `<p>Family formal photos</p>`
        },
        { 
          time: '3:45 PM', 
          title: "Prepare for Ceremony", 
          location: "Bridal & Groom Suites",
          description: `<p>Relax, touch-ups, usher seating guests</p>`
        },
        { 
          time: '4:00 PM', 
          title: "Line up for Ceremony", 
          location: "The beach",
          description: `<p>Entrance Order:</p>
          <ul>
            <li>Nic (Officiant)</li>
            <li>Volney (Groom) + John & Laura (Parents)</li>
            <li>Esther (Mother of the Bride) + Andrew (Usher)</li>
            <li>Uriah + Abby + Gabriel</li>
            <li>Ethan + Marae + Eric</li>
            <li>Ali (Maid of Honor) + Ezra (Best Man)</li>
            <li>Amanda (Bride) + Jason (Father)</li>
          </ul>
          `
        },
        { 
          time: '4:30 PM', 
          title: "Ceremony Ends / Family Photos & Cocktail Hour Setup", 
          location: "The beach",
          description: `<p>Family photos continue, cocktail area gets set up</p>`
        },
        { 
          time: '5:00 PM', 
          title: "Cocktail Hour Starts", 
          location: "the beach",
          description: `<p>Guests enjoy drinks & hors d'oeuvres</p>`
        },
        { 
          time: '5:15 PM', 
          title: "Golden Hour Photos", 
          location: "The Beach",
          description: `<p>golden hour photos</p>`
        },
        { 
          time: '5:45 PM', 
          title: "Reception Setup Final Touches", 
          location: "Oceana Terrace",
          description: `<p>Final reception preparations</p>`
        },
        { 
          time: '5:50 PM', 
          title: "Bride & Groom Private Moment", 
          location: "Bridal Suite",
          description: `<p>Couple enjoys a quiet moment</p>`
        },
        { 
          time: '6:00 PM', 
          title: "Reception Starts", 
          location: "Oceana Terrace",
          description: `<p>Guests enter for dinner & dancing</p>`
        },
        { 
          time: '6:05 PM', 
          title: "Bridal Party & Grand Entrance", 
          location: "Oceana Terrace",
          description: `<p>Bridal party makes their entrance</p>`
        },
        { 
          time: '6:10 PM', 
          title: "First Dance", 
          location: "Oceana Terrace",
          description: `<p>Couple’s first dance</p>`
        },
        { 
          time: '6:15 PM', 
          title: "Mother + Son Dance", 
          location: "Oceana Terrace",
          description: `<p>Groom dances with his mother</p>`
        },
        { 
          time: '6:20 PM', 
          title: "Father + Daughter Dance", 
          location: "Oceana Terrace",
          description: `<p>Bride dances with her father</p>`
        },
        { 
          time: '6:30 PM', 
          title: "Dinner Service Begins", 
          location: "Oceana Terrace",
          description: `<p>Guests are served dinner</p>`
        },
        { 
          time: '7:15 PM', 
          title: "Maid of Honor & Best Man Speeches", 
          location: "Oceana Terrace",
          description: `<p>Speeches & toasts</p>`
        },
        { 
          time: '7:30 PM', 
          title: "Cake Cutting", 
          location: "Oceana Terrace",
          description: `<p>Couple cuts the cake</p>`
        },
        { 
          time: '7:45 PM', 
          title: "Open Dance Floor", 
          location: "Oceana Terrace",
          description: `<p>Dancing begins!</p>`
        },
        { 
          time: '8:30 PM', 
          title: "Bouquet Toss", 
          location: "Oceana Terrace",
          description: `<p>All single ladies gather</p>`
        },
        { 
          time: '9:30 PM', 
          title: "Last Call & Final Dance", 
          location: "Oceana Terrace",
          description: `<p>Last song of the night</p>`
        },
        { 
          time: '9:50 PM', 
          title: "Couple’s Grand Exit", 
          location: "Oceana Terrace",
          description: `<p>Send-off with sparklers</p>`
        },
        { 
          time: '10:00 PM', 
          title: "Reception Ends", 
          location: "Oceana Terrace",
          description: `<p>Event officially concludes</p>`
        }
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
