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
      icon: 'fa-solid fa-envelopes-bulk',
      questions: [
        {
          question: "What date should I RSVP by?",
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
          veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
        },
        {
          question: "Can I bring a plus one?",
          answer: `We are thrilled to share our special day with you! Please note that the number of guests is limited to those listed on your invitation. If a plus one is included, their name or "and guest" will be specified on the invitation. This helps us ensure that we can accommodate everyone comfortably and make the day as special as possible for all attendees.`
        },
        {
          question: "Can I bring my children?",
          answer: `<p>Our chosen resort in Cancun is an adults-only venue, so unfortunately, we are unable to accomodate children at our wedding. This includes all children under the age of 18.</p>
          <p>For those above the age of 18, only individuals whose names are specifically included on the invitation are invited. While we'll miss all your little ones, we look forward to celebrating with the whole family stateside.</p>`
        },
      ],
    },
    {
      name: 'travel & booking',
      icon: 'fa-solid fa-hotel',
      questions: [
        {
          question: "How much should I expect to spend on travel and lodging?",
          answer: `<p>While prices are variable based on travel dates and room preference, here is what we would advise our guests to budget.</p>
          <ul>
            <li>Flights: $200 - $400 (depending on your location of departure)</li>
            <li>Lodging: $300 - $400 per night, per person (this price varies with your room type and location)</li>
          </ul>
          <p>Guests may choose to spend more on things like upgraded rooms (Preferred Club) or excursions. Since the resort is all inclusive, no need to worry about food and drink, once you arrive you are set!</p>
          <p>For a couple staying at the resort for 3 nights we would estimate a total cost of $2400.</p>
          <p>For an individual staying at the resort for 3 nights we would estimate a total cost of $1500.</p>`
        },
        {
          question: "Do I need to book through the travel agent?",
          answer: `Our guests will be responsible for booking air travel themselves to allow for the greatest flexibility in schedule and payment options (miles, points, etc.). We do recommend our guests book the lodging through our travel agents as we have reserved rooms at a discounted rate. This also helps the bride and groom keep track of confirmed bookings and guest schedules.`
        },
        {
          question: "How long should I stay at the resort?",
          answer: `<p>The length of your stay is entirely up to you and your party. We would love for our guests to use this opportunity to relax and vacation as long as they would like. You can check the schedule of events on this site to determine when you would like to arrive so you can RSVP accordingly. </p> <p>We recommend our guests plan for a three days stay to enjoy all the resort has to offer and ensure room for any potential complications with travel.      </p>`
        },
      ]
    },
    {
      name: 'Location',
      icon: 'fa-regular fa-map',
      questions: [
        {
          question: "Will your wedding be indoors or outdoors?",
          answer: `<p>Barring any inclimate weather, our ceremony will be held on the beach. Our guests should wear attire that is comfortable for the outdoors and sand. The reception will also be held outside, but on a paved area away from the beach.</p>
          <p>If the weather is not cooperative, our backup ceremony and reception will be either indoors or in a covered area.</p>`
        },
        {
          question: "What will the weather be like in the area?",
          answer: `<p>In October, Cancun experiences warm temperatures, with daytime highs around 88°F (31°C) and nighttime lows around 75°F (24°C). It's part of the wet season, so you can expect rain on about 11 to 23 days of the month, often in short, heavy showers. Humidity is high, often making it feel hotter than the actual temperature. The sea remains warm at approximately 84°F (28°C), making it ideal for swimming and water activities.</p>
          <p>Despite the rain, there are plenty of sunny periods, averaging about 8 hours of sunshine per day.</p>`
        },
        {
          question: "Do I need a passport to travel to Mexico?",
          answer: `    Yes, you need a passport to travel to Mexico - please make sure to start your application process and/or check the expiration dates on your current passport! The Mexican government only requires that your passport is valid for the length of your trip. Current turnaround times on US passports are 6-8 weeks for routine applications and 2-3 weeks for expedited, which can be done for an additional fee.      `
        },
        {
          question: "Will I be safe in Mexico?",
          answer: `Absolutely! The all inclusive resorts in Mexico are very safe and offer private transport directly to the resort which is well secured and monitored. Bottled water is served everywhere and the food is prepared with the best health and safety standards in mind. We're confident our guests will feel safe, secure, and satisfied at all times!`
        },
      ]
    },
    {
      name: 'miscellaneous', 
      icon: 'fa-solid fa-suitcase',
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
          question: "What should I pack?",
          answer: `  tip money      `
        },
        {
          question: "I have more questions about your wedding, who can I reach out to?",
          answer: `<p>Updates regarding travel, booking, deadlines, and more will be posted above this FAQ section periodically. You can also subscribe to these updates by including your email address in your RSVP.</p>
          <p>For questions regarding travel or the resort we advise you to contact our travel agent Lety at hola@holaweddings.com, 1-888-472-7077 or +52 5510361373. If you need to contact us directly regarding the wedding you can email wedding@amandaeaster.com.      </p>`
        },
      ]
    },
    
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
