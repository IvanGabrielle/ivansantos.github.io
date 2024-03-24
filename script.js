class YBCard {

    constructor(id, title, description, image) {
      this.idCard = id
      this.titre = title
      this.description = description
      this.image = image
    }
  
    initCard() {
      this.updateDom();
      this.activateListeners();
    }
  
    updateDom() {
      var cardDom = document.getElementById(this.idCard)
      if(cardDom.hasChildNodes()){
        var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
        cardDomImage.src = this.image;
  
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        cardDomTitle.innerHTML = this.titre;
  
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        cardDomDesc.innerHTML = this.description;
      }
    }
  
    activateListeners() {
      var cardDom = document.getElementById(this.idCard)
      cardDom.addEventListener("mouseover", function( event ) {
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
        cardDomMiddle.style.height = cardMiddleHeight + 60 + "px";
      }, false);
  
      cardDom.addEventListener("mouseout", function( event ) {
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        cardDomMiddle.style.height = 100 + "px";
      }, false);
    }
  }
  
  var card1 = new YBCard("card1", "The Hansen Partners <span>Communications Tablet</span>", "We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.<br><ul><li>Review all documents and sign in the comfort of your home or anywhere.</li><li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li><li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li><li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our bomb video messaging system.</li></ul><p>We believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on. We will be here to handle your needs during the Real Estate process. &nbsp;We think of it before a need even arises. Because, that is&nbsp;just what we do. &nbsp;Who you work with does matter!&nbsp;<br></p>", "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056")
  card1.initCard();
  
  var card2 = new YBCard("card2", "Over 33 Years of <span>Real Estate Success</span>", "  We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.", "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2");
  card2.initCard();
  
  var card3 = new YBCard("card3", "We Want To Create An <span>Unforgettable Experience</span> For You...", "We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.", "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12");
  card3.initCard();



  


  
