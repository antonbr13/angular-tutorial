var gem = [{
    name           : "quartz",
    price          : 110.50,
    description    : "Some gems have hidden qualities!",
    canPurchase    : false,
    soldOut        : false,
    image          : 'images/quartz.jpg',
    review         : "'I love this stone it's so grounding.'"
},
{
name           : "aquamarine",
price          : 320.5,
description    : "Some gems have hidden healing qualities!'",
canPurchase    : false,
soldOut        : false,
image          : 'images/aqua.jpg',
review         : "'Reminds of summers by the ocean - it's so smooth."
},

{
    name           : "lapis",
    price          : 200,
    description    : "Blue, for writers and thinkers",
    canPurchase    : false,
    soldOut        : false,
    image          : 'images/lapis.jpg',
    review         : "'This is the most beautiful hue of blue I have ever seen.'"

}





];


app.service('mainService', function() {

   this.gettingGems = function() {
      return gem;
   };

   // this.tab = 1;
   //
   // this.selectTab = funciton(setTab) {
   //    this.tab = setTab
   // }


});
