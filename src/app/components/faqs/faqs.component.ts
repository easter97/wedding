import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqs = [
    {
      name: 'RSVP',
      questions: [
        {
          question: "What date should I RSVP by?",
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
          veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
        },
        {
          question: "Can I bring a plus one?",
          answer: `  Limited to the number of guests listed on your invitation / rsvp      `
        },
        {
          question: "Can I bring my children?",
          answer: `  nope      `
        },
      ],
    },
    {
      name: 'Location',
      questions: [
        {
          question: "Will your wedding be indoors or outdoors?",
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
          veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`
        },
        {
          question: "What will the weather be like in the area?",
          answer: `idk`
        },
        {
          question: "How long should we stay at the resort?",
          answer: `  The length of your stay is entirely up to you and your party. We would love for our guests to use this opportunity to relax and vacation as long as they would like. You can check the schedule of events on this site to determine when you would like to arrive so you can RSVP accordingly. We recommend our guests arrive no later than the morning of the ceremony to enjoy the resort and ensure room for any potential complications with travel.      `
        },
        {
          question: "Do I need a passport to travel to Mexico?",
          answer: `    Yes, you need a passport to travel to Mexico - please make sure to start your application process and/or check the expiration dates on your current passport! The Mexican government only requires that your passport is valid for the length of your trip. Current turnaround times on US passports are 6-8 weeks for routine applications and 2-3 weeks for expedited, which can be done for an additional fee.      `
        },
        {
          question: "Will I be safe in Mexico?",
          answer: `  yeah      `
        },
      ]
    },
    {
      name: 'miscellanous', 
      questions: [
        {
          question: "What is the dress code for your wedding?",
          answer: `        The dress code for our wedding is beach cocktail attire or semi-formal beach wedding attire. A beach cocktail dress code gives you the flexibility to choose a vibrant color or bold print. For menswear, we recommend:
          <ul>
              <li>classic long-sleeve button-downs, colorful blazers, and patterned sport coats</li>
              <li>ties are optional, but welcome</li>
              <li>breathable fabric such as linen, khaki, or seersucker</li>
              <li>dressy pants</li>
              <li>closed-toe shoes, such as a loafers, dress shoes, and deck shoes</li>
          </ul>
          For women we recommend: 
          <ul>
                <li>semi-formal dresses, maxi or midi</li>
                <li>jumpsuits and dressy separates</li>
                <li>dressy sandals, chunky heels, and wedges - keep in mind you will be walking in sand!</li>
                <li>beachy accessories, like a raffia clutch</li>
          </ul> 
          Keep in mind Mexico will most likely be hot and humid, we want our guests to be as comfortable as possible! You can find more examples of guest attire on our <a href="https://www.pinterest.com/AmandaaLionn/wedding/guest-attire/" target="_blank">Pinterest board.</a>`
        },
        
        {
          question: "Will there be other events to attend on the wedding weekend?",
          answer: `    You can view a list of wedding weekend events on the schedule section of the site. All other days we encourage our guests to mingle with each other and enjoy the numerous events the resort hosts like water aerobics, yoga, beach soccer, and more. Our guests should feel free to find us and chat whenever we are available.      `
        },
        
        {
          question: "What should I bring?",
          answer: `  tip money      `
        },
        {
          question: "I have more questions about your wedding, who can I reach out to?",
          answer: `  For questions regarding travel we advise you to contact our travel agent [travel agent info] at (123) 456-7890 or travel@agent.com. For questions about the resort you can reach out to [Excellence contact] at excellence@questions.com. If you need to contact us directly regarding the wedding you can email wedding@amandaeaster.com.      `
        },
      ]
    },
    
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
