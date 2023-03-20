import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-tips',
  templateUrl: './travel-tips.component.html',
  styleUrls: ['./travel-tips.component.css']
})
export class TravelTipsComponent {
  // images
  images = [
    "./assets/traveltips.jpg"
  ]

  // travel tips
  travelTips = [
    {
      title: "1. Don't Trek Alone!",
      content: `A crucial travel safety tip for Nepal is to never trek alone and always be with other travelers or a
    guide due to the high cases of tourists disappearing. If you're going solo, look for fellow trekkers
    online. This tip is very important.`
    },
    {
      title: "2. Food Safety",
      content: `To ensure food safety, it is advisable to steer clear of unboiled or non-bottled water. Additionally, it is better to avoid consuming raw vegetables and pre-cut fruits whenever possible.`
    },
    {
      title: "3. Travel by 2-wheelers is a NO!",
      content: `Despite Nepal's reputation for its unspoiled environment and natural beauty, the highways and city streets are congested, polluted, and uncomfortable due to traffic, smoke, bumps, and dust. Thus, it is not recommended to travel by bicycle or motorcycle in most areas. However, there are some acceptable off-road mountain bike trails.`
    },
    {
      title: "4. Touching someone's head is disrespectful!",
      content: `Touching someone's head or sitting with the soles of your feet pointing towards them is impolite and should be avoided.`
    },
    {
      title: "5. Marijuana in Nepal",
      content: `It is essential to understand that marijuana, locally referred to as "ganja," is illegal in Nepal, despite its widespread growth in hillside areas. Picking or carrying it for personal use can lead to legal repercussions.`
    },
    {
      title: "6. Universal Adapter!",
      content: `To avoid being stuck without electronic devices due to incompatible plugs, it is advisable to carry a universal adapter while traveling to Nepal. These adapters can be purchased at electronic stores in your city or duty-free shops at the airport, and they are convenient for use with Nepal's 220V plugs. This travel tip will save time searching for an electronic store in Nepal.`
    },
    {
      title: "7. Taxi Fares double by night!?",
      content: `Insist for a Running Meter in the Taxi. After 10 PM you do pay double of the meter fare however – that’s the commonly accepted norm.`
    }
  ]
}
