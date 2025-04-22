import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  @Input() displayBridalFaqs = false;

  faqs;

  generalFaqs = [
    {
      name: 'RSVP',
      icon: 'fa-solid fa-envelopes-bulk',
      questions: [
        {
          question: "What date should I RSVP by?",
          answer: `We request that our guests please RSVP and book their lodging by April 25, 2025. Booking before this date helps you save money with our preferred rate room block and gives the bride and groom a clear picture of attendance. We plan to release any unused rooms in our room block after this date.`,
        },
        {
          question: "Can I bring a plus one?",
          answer: `We are thrilled to share our special day with you! Please note that the number of guests is limited to those listed on your invitation. If a plus one is included, their name or "and guest" will be specified on the invitation. This helps us ensure that we can accommodate everyone comfortably and make the day as special as possible for all attendees.`
        },
        {
          question: "Can I bring my children?",
          answer: `<p>Our chosen resort in Cancun is an adults-only venue, so unfortunately, we are unable to accomodate children at our wedding. This includes all children under the age of 18.</p>
          <p>For those above the age of 18, only individuals whose names are specifically included on the invitation are invited. While we'll miss all your little ones, we look forward to celebrating with your whole family stateside.</p>`
        },
      ],
    },
    {
      name: 'travel & booking',
      icon: 'fa-solid fa-hotel',
      questions: [
        {
          question: "When should I buy my flights?",
          answer: `
          <p>Your mileage might vary on the best time to book flights, but from Dallas to Mexico we tend to find about 3-4 months in advance is the sweet spot for pricing. Anything earlier may not have all routes posted or higher average pricing.</p>
          <p>We recommend using a website like <a target="_blank" href="https://hopper.com/">Hopper</a> or <a target="_blank" href="https://www.google.com/travel/flights/saves?gl=US&hl=en-US">Google Flights</a> that will track your desired route and let you know when the best time to book is!</p>
          `
        },
        {
          question: "When should I book my rooms?",
          answer: `
          <p>As soon as you RSVP yes! Book your lodging through our travel partners to reserve your spot at our wedding.</p>
          <p>This let's us know you're serious about attending and gives us the opportunity to add any additional rooms to our block as needed to make sure all of our guests get the best rates. You'll pay a $200 per room deposit to reserve your lodging,  which is fully refundable if you need to cancel before May 25, 2025.</p>
          <p>Not sure yet? That's ok! </p>
          <p><strong>Just make sure you RSVP AND book lodging before our RSVP date of April 25, 2025, as we will drop unused rooms from our block after then. We will not count your RSVP until we have confirmed your room booking.</strong></p>
          `
        },
        {
          question: "How much should I expect to spend on travel and lodging?",
          answer: `<p>While prices are variable based on travel dates and room preference, here is what we would advise our guests to budget.</p>
          <ul>
            <li>Flights: $200 - $400 (depending on your location of departure)</li>
            <li>Lodging: $300 - $400 per night, per person (this price varies with your room type and location)</li>
          </ul>
          <p>Guests may choose to spend more on things like upgraded rooms (Preferred Club) or excursions. Since the resort is all inclusive, no need to worry about food and drink, once you arrive you are set!</p>
          <p>For a couple staying at the resort for 3 nights we would estimate a total cost of $2400.</p>
          <p>For an individual staying at the resort for 3 nights we would estimate a total cost of $1500.</p>
          <p><strong>We want all of our guests to feel comfortable and enjoy their time in paradise! If this travel isn't in the cards for you this year we understand and look forward to celebrating with you another time.</strong></p>
          `
        },
        {
          question: "Do I need to book through the travel agent?",
          answer: `<p>Our guests will be responsible for booking air travel themselves to allow for the greatest flexibility in schedule and payment options (miles, points, etc.). We do recommend our guests book the lodging through our travel agents as they can coordinate your stay and transportation. This also helps the bride and groom keep track of confirmed bookings and guest schedules.</p>
          
          <p>Should you choose to reserve your rooms directly through the resort or through a third party site, please send us an email at <a href="mailto:wedding@amandaeaster.com">wedding@amandaeaster.com</a> so that we can confirm your RSVP.</p>`
        },
        {
          question: "How long should I stay at the resort?",
          answer: `<p>The length of your stay is entirely up to you and your party. We would love for our guests to use this opportunity to relax and vacation as long as they would like. You can check the schedule of events on this site to determine when you would like to arrive so you can RSVP accordingly. </p> <p>We recommend our guests plan for a three days stay to enjoy all the resort has to offer and ensure room for any potential complications with travel.      </p>`
        },
        {
          question: "What if I am unable to attend and need to cancel?",
          answer: `
          Of course we recommend our guests are certain of their travel when they RSVP and book lodging, but we know life happens! If you find yourself unable to attend after you previously RSVP'd or booked lodging, please update your RSVP on this site or email us at <a href="mailto:wedding@amandaeaster.com">wedding@amandaeaster.com</a> if the RSVP date has passed. You can also purchase travel insurance at the time of booking if your travel plans are uncertain.
          <br><br>
          Our travel agency's cancellation policy:
          <ul>
            <li>Before May 25, 2025 - There is no fee for canceling your reservation. You will get a full refund of your deposit.</li>
            <li>From May 26 until July 22, 2025  - There will be a penalty charge of 2 nights of stay per room.</li>
            <li>From July 23, 2025, until your travel dates - The booking is paid in full and non-refundable.</li>
          </ul>  
          `
        },
        {
          question: "Are there payment plans available?",
          answer: `
          Our travel agency offers our guests a payment plan to help reduce the up-front cost of booking.
          <br><br>
          Deposit and payment plan information:
          <ul>
            <li>1st Deposit: To hold your room we will need a deposit of $200 USD per room.</li>
            <li>2nd Deposit: Due by May 26, 2025 - $550 USD per person.</li>
            <li>Final Payment: The remaining balance will be due by July 23, 2025.</li>
          </ul>
          `
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
          answer: `    Yes, you need a passport to travel to Mexico - please make sure to start your application process and/or check the expiration dates on your current passport! The Mexican government only requires that your passport is valid for the length of your trip. Current turnaround times on US passports are 4-6 weeks for routine applications and 2-3 weeks for expedited, which can be done for an additional fee.      `
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
          Keep in mind Mexico will most likely be hot and humid, we want our guests to be as comfortable as possible! You can find more examples of guest attire on our <a href="https://www.pinterest.com/AmandaaLionn/wedding/guest-attire/" target="_blank">Pinterest board.</a>
          <br><br>
          The resort restaurants have a variety of dress codes you can view <a href="https://www.hyattinclusivecollection.com/en/resorts-hotels/secrets/mexico/maroma-beach-riviera-cancun/dining-drinks/">here</a>. From what we have found, these policies seem to be fairly lenient (especially with regard to women's fashion), but make sure you pack accordingly!
          `
        },
        {
          question: "Can the resort accomodate my dietary restrictions?",
          answer: `<p>The resort has a number of fabulous restaurants that can accomodate your needs! In our experience, wait staff usually inquire about any restrictions or allergies shortly after you are seated. </p>
          <p>For the reception, if you require a special meal or have any noteworthy allergies, please fill out our <a target="_blank" href="https://forms.gle/LD5fbRe1tb7g7hDb7">special meal request form.</a></p>`
        },
        {
          question: "Will there be other events to attend on the wedding weekend?",
          answer: `    You can view a list of wedding weekend events on the schedule section of the site. All other days we encourage our guests to mingle with each other and enjoy the numerous events the resort hosts like water aerobics, yoga, beach soccer, and more. Our guests should feel free to find us and chat whenever we are available.      `
        },
        
        {
          question: "What should I pack?",
          answer: `
            While the resort has plenty of amenities, we want our guests to come prepared! Here are a few items we recommend packing:
            <ul>
              <li><strong>Sunscreen</strong> - Cancun is beautiful and sunny! Make sure to include plenty of sunscreen in your luggage to ensure your skin is protected.</li>
              <li><strong>Bug spray</strong> - Some of the more vegative parts of the resort have mosquitos, so it's nice to be prepared.</li>
              <li><strong>Tip & spending money</strong> - While this is absolutely not required, we like to include some singles in our luggage for tipping workers that go above and beyond as well as our cleaning staff. Some excursions will require a Mexico tourism fee to be paid in cash or pesos. If you plan on taking an excursion, consider bringing some spending money in cash to avoid ATM fees at the resort. The front desk of the resort can usually break large bills in USD as well as convert your cash to pesos if you desire; however, we find that the USD works perfectly fine and is usually preferred!</li>
              <li><strong>Medication</strong> - Make sure to pack in medications you take daily as well as over-the-counter medicine like Ibuprofen, Tums, Dramamine (if you plan on taking any excursions via boat, we HIGHLY recommend this one), etc.</li>
              <li><strong>Cover-ups and beach clothing</strong> - Most restaurants require guests to cover up while they dine. Pack a quick and easy cover up to put on after exiting the pool for lunch!</li>
              <li><strong>For men, a collared shirt</strong> - There are a couple of nice restaurants on resort that require men to wear a collared shirt when they dine.</li>
            </ul> 
            While some of these will be available on-resort for those who need them, they will be much more expensive to purchase there.
            <br><br>
            Things you <u>don't</u> need to pack (unless you want to!):
            <ul>
              <li><strong>Towels</strong> - The resort will provide clean towels for guests available by all pool areas</li>
              <li><strong>Beverages</strong> - The resort serves bottled water at all restaurants and stocks your mini fridge daily with still and sparkling water, soda, and beer. Coffee is available at the cafe or can be made in your room. Other beverages like juices, cocktails, and more can be found on resort as well.</li>
              <li><strong>Hair Dryers</strong> - The resort provides each room with a hair dryer. Feel free to bring your own if you have a preference!</li>
            </ul>
          `
        },
        {
          question: "I have more questions about your wedding, who can I reach out to?",
          answer: `<p>Updates regarding travel, booking, deadlines, and more will be posted above this FAQ section periodically. You can also subscribe to these updates by including your email address in your RSVP.</p>
          <p>For questions regarding travel or the resort we advise you to contact our travel agent Leticia at hola@holaweddings.com, 1-888-472-7077 or +52 5510361373. If you need to contact us directly regarding the wedding you can email <a href="mailto:wedding@amandaeaster.com">wedding@amandaeaster.com</a>.      </p>`
        },
      ]
    },
    
    
    
  ];

  bridalFaqs = [
    {
      name: 'Bachelor/ette Party',
      icon: 'fa-solid fa-champagne-glasses',
      questions: [
        {
          question: "Who is invited?",
          answer: `
          <p>We invite our bridesmaids, groomsmen, and their significant others (as addressed on your invitation) to join us in our bachelor/bachelorette activities! </p>
          <p>We are planning on a few joint activities as well as some separate group activities. We'll post more specific information when we have it.</p>
          <p>If your plus one elects not to join the group for all activities or is arriving on a different schedule than the rest of the group, there are plenty of resort activities and paid excursions they can participate in to make sure they enjoy their time in Mexico!</p>
          `
        },
        {
          question: "When should I arrive?",
          answer: `
          <p>We plan on combining our bachelor/bachelorette parties and celebrating the same week as the wedding in Mexico. It's our hope that this will reduce cost and travel time compared to organizing a separate trip.</p>
          <p>Right now, we're planning to arrive at the resort on Tuesday, October 7th. Ideally, the bridal party also arrives this day to allow everyone to settle at the resort before our activities on Wednesday.</p>
          `
        },
        {
          question: "How much should I expect to spend on travel and lodging?",
          answer: `<p>While prices are variable based on travel dates and room preference, here is what we would estimate:</p>
          <ul>
            <li>Flights: $200 - $400 (depending on your location of departure)</li>
            <li>Lodging: $300 - $400 per night, per person (this price varies with your room type and location)</li>
          </ul>
          <p>You may choose to spend more on things like upgraded rooms (Preferred Club) or excursions. Since the resort is all inclusive, no need to worry about food and drink, once you arrive you are set!</p>
          <p>For a couple staying at the resort for 5 nights we would estimate a total cost of $3,500-$4,000. (For reference, our preferred club reservation for 5 nights totaled $3,690)</p>
          <p>For an individual staying at the resort for 5 nights we would estimate a total cost of $2,000-2,500.</p>
          <p>It's most important to us that you are able to celebrate with us on our big day! If it's not feasible to join us as early as Tuesday, please let us know what would work best for you. You can check the schedule & timeline section of this page to see what activities are planned.</p>
          `
        },
        {
          question: "How long should I stay at the resort?",
          answer: `<p>When you leave is up to you! Your bridal party responsibilities have ended after our reception concludes on Saturday evening, you may choose to depart the next day or to stay longer.</p>
          <p>If your schedule allows, please plan to join us in Mexico on Tuesday, October 7 to celebrate our bachelor/bachelorette party. If that isn't possible, talk with us about a schedule that works for you. It's more important to us to have our wedding party attend the rehearsal, rehearsal dinner, and ceremony.</p>`
        },
      ]
    },
    {
      name: 'Rehearsal & Rehearsal Dinner',
      icon: 'fa-regular fa-clipboard',
      questions: [
        {
          question: "When is the rehearsal dinner?",
          answer: `<p>We're still working with our coordinator at the resort to determine specifics on the rehearsal dinner. It is likely that we opt for something less traditional like a rehearsal brunch, lunch, or even drinks on the beach.</p>
          <p>We will update the schedule here when we have more specifics, but for now we are anticipating rehearsal Friday morning, and rehearsal "dinner" some time that day.</p>`
        },
        {
          question: "Who needs to attend the rehearsal?",
          answer: `<p>We ask that all of our bridal party attend the rehearsal including bridesmaids, groomsmen, and immediate family with ceremony roles (processional, usher, etc.).</p>`
        },
        {
          question: "What is the dress code?",
          answer: `<p>Think cocktail attire, but beach comfortable. Collared shirt for men, midi or maxi length skirt for women.</p>`
        },
      ]
    },
    {
      name: 'Resort & Lodging', 
      icon: 'fa-solid fa-suitcase',
      questions: [
        {
          question: "My significant other / plus one won't be joining me until later in the week, how do I proceed with booking my room at the resort?",
          answer: `
          <p>We're working with our travel partners now to figure out the best way to handle this booking. As of now, our best guess is that you will need two bookings, one for the dates you are reserving a single and one for the dates you are reserving a double.</p>
          <p>For example, if you arrive on October 7th but your roommate doesn't arrive until October 10th, you may need to make a reservation for October 7-9 as a single and October 10-12 as a double. We will update our party when we have more information on how to book for this combination!</p>
          `
        },
      ]
    },
    
    
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.faqs = this.displayBridalFaqs ? this.bridalFaqs : this.generalFaqs;
  }

}
