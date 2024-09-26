/*global component for topbar & pic*/
Vue.component('comp1',{
  template:'<div class="topbar"><a href="#"><router-link to="/29">{{SC1}}</router-link></a><comp2></comp2><comp3></comp3><comp4></comp4><comp5></comp5><comp6></comp6></div>',
  data: function(){
    return{SC1:'Login'}   
  }
})
Vue.component('comp2',{
  template:'<a href="#"><router-link to="/">{{SC2}}</router-link></a>',
  data: function(){
    return{SC2:'Home'}
  }
})
Vue.component('comp3',{
  template:'<div><a href="#"><router-link to="/1">{{SC3}}</router-link></a></div>',
  data: function(){
    return{SC3:'A1'}
  }
})
Vue.component('comp4',{
  template:'<a href="#"><router-link to="/2">{{SC4}}</router-link></a>',
  data: function(){
    return{SC4:'A2'}
  }
})
Vue.component('comp5',{
  template:'<a href="#"><router-link to="/3">{{SC5}}</router-link</a>',
  data: function(){
    return{SC5:'B1'}
  }
})
Vue.component('comp6',{
 template:'<a href="#"><router-link to="/4">{{SC6}}</router-link></a>',
  data: function(){
    return{SC6:'B2'}
  }
})

 /*all the components*/
const register = {
    template: '#register',
  data: function(){
  return{
    message1:'enter your name here',
    message2:'enter your last name here',
    message3:'enter your email here',
    message4:'enter your password here',
    message5:'confirm your password here',
    input1:'Name',
    input2:'Last Name',
    input3:'Email',
    input4:'Password',
    input5:'Confirm Password',
    button1:'Already have an account',
    button2:'Sign up',
  }}}

const login = {
    template: '#login',
   data: function(){
  return{
    message3:'enter your email here',
    message4:'enter your password here',
    input3:'Email',
    input4:'Password',
    button3:'Sign in',
  }}}

const home = {
    template: '#home'
}

const A1 = {
    template: '#A1'
}

const A2 = {
    template: '#A2'
}

const B1 = {
    template: '#B1'
}

const B2 = {
    template: '#B2'
}

const vocabulary1 = {
    template: '#vocabulary1'
}

const grammar1 = {
    template: '#grammar1'
}

const vocabulary2 = {
    template: '#vocabulary2'
}

const grammar2 = {
    template: '#grammar2'
}

const vocabulary3 = {
    template: '#vocabulary3'
}

const grammar3 = {
    template: '#grammar3'
}

const vocabulary4 = {
    template: '#vocabulary4'
}

const grammar4 = {
    template: '#grammar4'
}

const startredov1 = {
    template: '#startredov1',
   data: function(){
  return{
    message: "Enter your answer here",
    Quizquestion1:[
      {
        question: 'What does "bakmak" mean?',
        answerA: 'to eat',
        answerB: 'to look',
        answerC: 'to smell',
        answerD: 'to walk',
        selectedAnswer:'answer',
        userInput:'',
        coreectAnswer:'B',
      }],
     Quizquestion2:[
      {
        question: 'What does "gezmek" mean?',
        answerA: 'to fall',
        answerB: 'to travel',
        answerC: 'to explore',
        answerD: 'to send',
        selectedAnswer:'answer',
        userInput:'',     
      }],
    Quizquestion3:[
      {
        question: 'What does "siyah" mean?',
        answerA: 'onion',
        answerB: 'black',
        answerC: 'car',
        answerD: 'blanket',
        selectedAnswer:'answer',
        userInput:'',     
      }],
    Quizquestion4:[
      {
        question: 'What does "karlı" mean?',
        answerA: 'candle',
        answerB: 'rain',
        answerC: 'snowy',
        answerD: 'handbag',
        selectedAnswer:'answer',
        userInput:'',     
      }],
    Q5:'What does "Çarşamba" mean?',
    Q6:'What does "Mevsim" mean?',
    Q7:'What does "Çatal" mean?',
    Quizquestion8:[
      {
        question: 'Which word means "to get angry"?',
        answer1: 'ağlamak',
        answer2: 'anlatmak',
        answer3: 'kızmak',
        answer4: 'yazmak', 
      }],
    Quizquestion9:[
      {
        question: 'Which word means "to get sick of"?',
        answer1: 'dinlenmek',
        answer2: 'bağırmak',
        answer3: 'yapmak',
        answer4: 'bıkmak', 
      }],
    Quizquestion10:[
      {
        question: 'Which word means "to send"?',
        answer1: 'göndermek',
        answer2: 'izlemek',
        answer3: 'fırçalamak',
        answer4: 'satmak', 
      }],
    statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
  methods:{
    /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
  /*when button pressed, change colour*/
  changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
  changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
  /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
  increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    }
  },
  computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatez: function () {
      if (this.z >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.z <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   }
  },
  watch:{
     x: function () {
      if (this.x >= 4) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    },
    z: function () {
      if (this.z >= 4) {
       var test1 = this;
       setTimeout(function () { test1.z = 0;}, 2000);
      } else if(this.z <= -1){
        var test1 = this;
        setTimeout(function () { test1.z = 0;}, 2000);
      }  
    }     
  },  
  }

const startredov2 = {
    template: '#startredov2',
   data: function(){
  return{
    message: "Enter your answer here",
    Quizquestion1:[
      {
        question: 'What does "ödemek" mean?',
        answerA: 'to pay',
        answerB: 'to sell',
        answerC: 'to sing',
        answerD: 'to argue',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        question: 'What does "denemek" mean?',
        answerA: 'to explain',
        answerB: 'to fall',
        answerC: 'to give up',
        answerD: 'to try',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion3:[
      {
        question: 'What does "dışarıda" mean?',
        answerA: 'across',
        answerB: 'outside',
        answerC: 'inside',
        answerD: 'next to',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion4:[
      {
        question: 'What does "dudak" mean?',
        answerA: 'duck',
        answerB: 'baby chicken',
        answerC: 'cheek',
        answerD: 'lips',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Q5:'What does "Yan" mean?',
     Q6:'What does "Hala" mean?',
     Q7:'What does "Örümcek" mean?',
     Quizquestion8:[
      {
        question: 'Which word means "to watch"?',
        answer1: 'düşmek',
        answer2: 'okumak',
        answer3: 'bakmak',
        answer4: 'seyretmek', 
      }],
     Quizquestion9:[
      {
        question: 'Which word means "to meet up"?',
        answer1: 'affetmek',
        answer2: 'buluşmak',
        answer3: 'ayırmak',
        answer4: 'görmek', 
      }],
     Quizquestion10:[
      {
        question: 'Which word means "to join"?',
        answer1: 'girmek',
        answer2: 'tanışmak',
        answer3: 'hoşlanmak',
        answer4: 'katılmak', 
      }],
    statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
 methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
  /*when button pressed, change colour*/
  changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
  changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
  /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
  increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    }
  },
  computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatez: function () {
      if (this.z >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.z <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   }
  },
   watch: {
    x: function () {
      if (this.x >= 4) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    },
    z: function () {
      if (this.z >= 4) {
       var test1 = this;
       setTimeout(function () { test1.z = 0;}, 2000);
      } else if(this.z <= -1){
        var test1 = this;
        setTimeout(function () { test1.z = 0;}, 2000);
      }  
    }     
  },  
  }

const startredov3 = {
  template: '#startredov3',
  data: function(){
  return{
    message: "Enter your answer here",
   Quizquestion1:[
      {
        question: 'What does "doldurmak" mean?',
        answerA: 'to freeze',
        answerB: 'to fear',
        answerC: 'to fight',
        answerD: 'to fill',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        question: 'What does "kısaltmak" mean?',
        answerA: 'to shorten',
        answerB: 'to repeat',
        answerC: 'to lie',
        answerD: 'to cut',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion3:[
      {
        question: 'What does "merdiven" mean?',
        answerA: 'glass',
        answerB: 'stairs',
        answerC: 'sidewalk',
        answerD: 'cutlery',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion4:[
      {
        question: 'What does "vagon" mean?',
        answerA: 'truck',
        answerB: 'wheelbarrow',
        answerC: 'squirrel',
        answerD: 'van',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Q5:'What does "Mum" mean?',
     Q6:'What does "Çit" mean?',
     Q7:'What does "Duman" mean?',
     Quizquestion8:[
      {
        question: 'Which word means "to connect"?',
        answer1: 'bozmak',
        answer2: 'bağlamak',
        answer3: 'birleştirmek',
        answer4: 'fırçalamak', 
      }],
     Quizquestion9:[
      {
        question: 'Which word means "to ruin"?',
        answer1: 'bıkmak',
        answer2: 'kesmek',
        answer3: 'bozmak',
        answer4: 'bağırmak', 
      }],
     Quizquestion10:[
      {
        question: 'Which word means "to seperate"?',
        answer1: 'gitmek',
        answer2: 'ayırmak',
        answer3: 'ütülemek',
        answer4: 'anlamak', 
      }],
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
 methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
  /*when button pressed, change colour*/
  changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
  changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
  /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
  increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    }
  },
  computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatez: function () {
      if (this.z >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.z <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   }
  },
    watch: {
    x: function () {
      if (this.x >= 4) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    },
    z: function () {
      if (this.z >= 4) {
       var test1 = this;
       setTimeout(function () { test1.z = 0;}, 2000);
      } else if(this.z <= -1){
        var test1 = this;
        setTimeout(function () { test1.z = 0;}, 2000);
      }  
    }     
  }, 
}

const startredov4 = {
  template: '#startredov4',
  data: function(){
  return{
    message: "Enter your answer here",
   Quizquestion1:[
      {
        question: 'What does "desteklemek" mean?',
        answerA: 'to fall',
        answerB: 'to support',
        answerC: 'to refuse',
        answerD: 'to help',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        question: 'What does "harcamak" mean?',
        answerA: 'to save',
        answerB: 'to sell',
        answerC: 'to spend',
        answerD: 'to ghost',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion3:[
      {
        question: 'What does "ilham" mean?',
        answerA: 'meat',
        answerB: 'motivation',
        answerC: 'dream',
        answerD: 'inspiration',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Quizquestion4:[
      {
        question: 'What does "komşu" mean?',
        answerA: 'co-worker',
        answerB: 'nephew',
        answerC: 'friend',
        answerD: 'neighbour',
        selectedAnswer:'answer',
        userInput:'',     
      }],
     Q5:'What does "Sigorta" mean?',
     Q6:'What does "Sağlak" mean?',
     Q7:'What does "yarışma" mean?',
     Quizquestion8:[
      {
        question: 'Which word means "to evaluate"?',
        answer1: 'çıkmak',
        answer2: 'beğenmek',
        answer3: 'değerlendirmek',
        answer4: 'koşmak', 
      }],
     Quizquestion9:[
      {
        question: 'Which word means "to collide"?',
        answer1: 'çarpışmak',
        answer2: 'vurmak',
        answer3: 'sürmek',
        answer4: 'geçmek', 
      }],
     Quizquestion10:[
      {
        question: 'Which word means "to report"?',
        answer1: 'bilmek',
        answer2: 'söylemek',
        answer3: 'tutuklamak',
        answer4: 'bildirmek', 
      }],
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
 methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
  /*when button pressed, change colour*/
  changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
  changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
  /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
  increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    }
  },
  computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatez: function () {
      if (this.z >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.z <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   }
  },
    watch: {
    x: function () {
      if (this.x >= 4) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    },
    z: function () {
      if (this.z >= 4) {
       var test1 = this;
       setTimeout(function () { test1.z = 0;}, 2000);
      } else if(this.z <= -1){
        var test1 = this;
        setTimeout(function () { test1.z = 0;}, 2000);
      }  
    }     
  }, 
}

const startredog1 = {
    template: '#startredog1',
  data: function(){
  return{
    message: "Enter your answer here",
   Quizquestion1:[
      {
        question: 'Select the sentence that is grammatically correct:',
        answerA: 'Bugün Beyza parkta geliyor.',
        answerB: 'Bugün Beyza parka geldi.',
        answerC: 'Bugün Beyza parka geliyor.',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        answerA: 'Geçen hafta sen Amerikaya mıydın?',
        answerB: 'Geçen hafta sen Amerikada mıydınız?',
        answerC: 'Geçen hafta sen Amerikada mıydın?',   
      }],
     Quizquestion3:[
      {
        answerA: 'Çocukken bunlara çok seviyordum.',
        answerB: 'Çocukken bunlara çok seviyorum.',
        answerC: 'Çocukken bunlardan çok seviyorum.', 
      }],
     Quizquestion7:[
      {
        question: 'What is the meaning of "da/de" and "ise":',
        answer1: '"da/de": and & "ise": on the other hand',
        answer2: '"da/de": on the other hand & "ise": and',
      }],
     Quizquestion8:[
      {
        answer1: 'Sen bana bir kalem ver.',
        answer2: 'O eve girsinme.',
        answer3: 'O odama gelsiniz.',
        answer4: 'Siz kitabı verinme.', 
      }],
     
     Quizquestion9:[
      {
        answer1: 'Çok yoruldum, biraz dinlenmeyelim.',
        answer2: 'Ben ne yapmayalım?',
        answer3:'Biz bugün Türkçe çalışmayayım.',
        answer4:'Teneffüste ben bir kahve alayım.',
      }],
     Quizquestion10:[
      {
        answerA: 'İki yıl önce öğrencidim, ama şimdi öğretmen.',
        answerB: 'Avustralyaya Avrupayı kadar gezdim ama en çok İstanbulı seviyorum.',
        answerC: 'Partide sonra Elif bana affetti.', 
      }],
     Q1:'Select the sentence that is grammatically correct:',
     Q2:'Type in the number of mistakes found in each sentence:',
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
     /*values of all data*/
   answer1:'0',
   answer2:'0',
   answer3:'0',
   totalnumber:'0'
   }
   },
 methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
     changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
     changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
     /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
     increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    },
   total:function(){
    return this.totalnumber=parseInt(this.answer1)+parseInt(this.answer2)+parseInt(this.answer3);
   }
  },
  computed: {
    evaluatex: function () {
      if (this.x >= 3) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatez: function () {
      if (this.z >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.z <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   }
  },
     watch: {
    x: function () {
      if (this.x >= 4) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    },
    z: function () {
      if (this.z >= 4) {
       var test1 = this;
       setTimeout(function () { test1.z = 0;}, 2000);
      } else if(this.z <= -1){
        var test1 = this;
        setTimeout(function () { test1.z = 0;}, 2000);
      }  
    }     
   },
  }

const startredog2 = {
    template: '#startredog2',
  data: function(){
  return{
    answer1:'0',
   answer2:'0',
   answer3:'0',
   answer4:'0',
   answer5:'0',
   answer6:'0',
   totalnumber:'0',
   totalnumber1:'0',
     /*values of all data*/
     message: 'type in your answer here',
   Quizquestion1:[
      {
        question: 'Select the sentence that is grammatically correct:',
        answerA: 'Ben her gün kitap okurum.',
        answerB: 'Ali her hafta fitness salonuna gidecek.',
        answerC: 'Onlar her gece müzik dinlarler.',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        answerA: 'Ben çok iyi bir kek pişirbiliyorum.',
        answerB: 'Çok yorgunum yemek pişirmiyeceğim.',
        answerC: 'Dışardaki parti yüzden uyuyamadık.',   
      }],
     Quizquestion3:[
      {
        answerA: 'Bu yıl tatile gitmiyecek mısınız?',
        answerB: 'Ben okula yürüceğim.',
        answerC: 'Bilmediğin insanlarla konuşmayacaksın.', 
      }],
     Quizquestion7:[
      {
        answer1: 'Ali kahvaltı yapmıydan önce yüzünü yıkıyor.',
        answer2: 'Ahmet kapıdan girmeden sonra merhaba diyor.',
        answer3: 'Yusuf okuldan çıktıktan sonra eve gidiyor.',
        answer4: 'Murat okula gidmiden önce spor yapıyor.',
      }],
     Quizquestion8:[
      {
        answer1: 'Ben eve gidip dinleneceğim.',
        answer2: 'Ahmet yemek yip okula gitti.',
        answer3: 'Siz öğretmenle konuşupun bize haber verin.',
        answer4: 'Ben istemeyden kalbini kırdım.', 
      }],
     Quizquestion9:[
      {
        answerA: 'Küçükkeni çocuk ağlarak konuşuyor.',
        answerB: 'Biz öğretmenerek çalışıyor.',
        answerC: 'Sen su içerek yürümeyin.', 
      }],
     Quizquestion10:[
      {
        answerA: 'Benim evim gitmemi lazım.',
        answerB: 'Onun ödevisi yapması lazım.',
        answerC: 'Yalan söylemekme lazımsın.', 
      }],
     Q1:'Select the sentence that is grammatically correct:',
     Q2:'Type in the number of mistakes found in each sentence:',
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
     changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
     changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
     /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
     increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    },
   total:function(){
return this.totalnumber=parseInt(this.answer1)+parseInt(this.answer2)+parseInt(this.answer3);
  },
   total1:function(){
return this.totalnumber1=parseInt(this.answer4)+parseInt(this.answer5)+parseInt(this.answer6);
   }
  },
 computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
    }
   },
     watch: {
    x: function () {
      if (this.x >= 2) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    }
   },
}

const startredog3 = {
    template: '#startredog3',
  data: function(){
  return{
    answer1:'0',
   answer2:'0',
   answer3:'0',
   answer4:'0',
   answer5:'0',
   answer6:'0',
   totalnumber:'0',
   totalnumber1:'0',
     /*values of all data*/
     message: 'type in your answer here',
   Quizquestion1:[
      {
        question: 'Select the sentence that is grammatically correct:',
        answerA: 'Sen sigara içmemelisin.',
        answerB: 'Onlar hayvanlara zarar vermeymalıylar.',
        answerC: 'Siz dikkatli olmelisin.',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        answerA: 'Sağlıklı olmak için spor yapmamı gerek.',
        answerB: 'Erkeğin çiçek alması gerekir.',
        answerC: 'Sizin yemek pişirmemi gerekiyor.',   
      }],
     Quizquestion3:[
      {
        answerA: 'Biz dün hastaneye gitmek zorunda.',
        answerB: 'Kötü şeyler yapmak zorunda değilsin.',
        answerC: 'Ben gitmesi mecbur.', 
      }],
     Quizquestion7:[
      {
        answer1: 'Zeynep her sabah süslenir.',
        answer2: 'Ahmet çok çalışarak yordu.',
        answer3: 'Aslı durmadan kaşıyor.',
        answer4: 'Biz partı için kendimizi hazırlıyoruz.',
      }],
     Quizquestion8:[
      {
        answer1: 'Keşke ben sana hiç sevsem.',
        answer2: 'Keşke onunla evlenmesedim.',
        answer3: 'Keşke bugün erken uyumasam.',
        answer4: 'Keşke daha önce gitsedim.', 
      }],
     Quizquestion9:[
      {
        answerA: 'Mehmet sabahta beri ders çalışıyor.',
        answerB: 'Dünden beri açım.',
        answerC: '1 yıldırım İstanbulda yaşıyorum.', 
      }],
     Quizquestion10:[
      {
        answerA: 'Eğer şimdi ders çalışıyorsan ben eve gideyim.',
        answerB: 'Eğer başarılı olmak istiyorsanız çok çalışsa.',
        answerC: 'Eğer mutluysa gülümse.', 
      }],
     Q1:'Select the sentence that is grammatically correct:',
     Q2:'Type in the number of mistakes found in each sentence:',
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
     changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
     changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
     /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
     increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    },
   total:function(){
return this.totalnumber=parseInt(this.answer1)+parseInt(this.answer2)+parseInt(this.answer3);
  },
   total1:function(){
return this.totalnumber1=parseInt(this.answer4)+parseInt(this.answer5)+parseInt(this.answer6);
   }
  },
 computed: {
    evaluatex: function () {
      if (this.x >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 5) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
    }
   },
     watch: {
    x: function () {
      if (this.x >= 2) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    }
   },
}

const startredog4 = {
    template: '#startredog4',
  data: function(){
  return{
    answer1:'0',
   answer2:'0',
   answer3:'0',
   answer4:'0',
   answer5:'0',
   answer6:'0',
   totalnumber:'0',
   totalnumber1:'0',
     /*values of all data*/
     message: 'type in your answer here',
   Quizquestion1:[
      {
        question: 'Whos is doing the action in: "Ekim Zehrayı ağlattı"',
        answerA: 'Ekim',
        answerB: 'Zehra',
        selectedAnswer:'answer',
        userInput:'',
      }],    
     Quizquestion2:[
      {
        question:'Select the sentence that is grammatically correct:',
        answerA: 'Ben anneme ekmek aldırtdı.',
        answerB: 'Polis kötü adamı öldürdü.',
        answerC: 'Natali İraya elini öptürüldü.',   
      }],
     Quizquestion3:[
      {
        question:'Which sentence is in the passive form:',
        answerA: 'Derse saat 10da başlanıyor.',
        answerB: 'Bu markette alkol satılmıyor',
        answerC: 'Both', 
      }],
     Quizquestion7:[
      {
        answer1: 'Ben eve gittiğin zaman duş alacağım.',
        answer2: 'Okula gitmeceğim zaman aileme zorunda kalacağım.',
        answer3: 'Uyumadığım zaman agresif olurum.',
      }],
     Quizquestion8:[
      {
        answer1: 'Kuşum ölüncesi çok üzüldüm.',
        answer2: 'Eve gidincen beni ara.',
        answer3: 'Benimle konuşunca mutlu hissediyorum.',
      }],
     Quizquestion9:[
      {
        answerA: 'Çocuk ilacı içir içmez kusmaya başladı.',
        answerB: 'Ben sana öleneye kadar seveceğim.',
        answerC: 'Alışveriş çıktım sırada yağmur başladı ', 
      }],
     Quizquestion10:[
      {
        answerA: 'O bana kitap okuyup okudığını sordu.',
        answerB: 'Öğretmen beni yarınki seminere katılıpım katılmayacağımı sordu.',
        answerC: 'Ece bana gitmemi gerektimi söyledi.', 
      }],
     Q1:'Select the sentence that is grammatically correct:',
     Q2:'Type in the number of mistakes found in each sentence:',
     statusBrown1: false,
     statusBrown2: false,
     statusBrown3: false,
     statusBrown4: false,
     statusBrown5: false,
     statusBrown6: false,
     statusBrown7: false,
     statusBrown8: false,
     statusBrown9: false,
     statusBrown10: false,
     statusBrown11: false,
     statusBrown12: false,
     x:0,
     y:0,
     z:0,
     submit:'Submit all answers',
   }
   },
methods:{
  /*change colour of submit buttons when pressed*/
  ColorGreen: function(event){
     event.srcElement.style.backgroundColor = 'lightgreen';
    },
     changeBrown1:function(){
     return( this.statusBrown1=!this.statusBrown1)
    },
  changeBrown2:function(){
     return( this.statusBrown2=!this.statusBrown2)
    },
  changeBrown3:function(){
     return( this.statusBrown3=!this.statusBrown3)
    },
  changeBrown4:function(){
     return( this.statusBrown4=!this.statusBrown4)
    },
     changeBrown5:function(){
     return( this.statusBrown5=!this.statusBrown5)
    },
  changeBrown6:function(){
     return( this.statusBrown6=!this.statusBrown6)
    },
  changeBrown7:function(){
     return( this.statusBrown7=!this.statusBrown7)
    },
    changeBrown8: function () {
      return (this.statusBrown8 = !this.statusBrown8);
    },
  changeBrown9: function () {
      return (this.statusBrown9 = !this.statusBrown9);
    },
  changeBrown10: function () {
      return (this.statusBrown10 = !this.statusBrown10);
    },
  changeBrown11: function () {
      return (this.statusBrown11 = !this.statusBrown11);
    },
  changeBrown12: function () {
      return (this.statusBrown12 = !this.statusBrown12);
    },
     /*when button pressed increase value by 1*/
  increasex: function () {
      this.x = this.x + 1; 
    },
  /*when button pressed decrease value by 1*/
     decreasex: function () {
      this.x = this.x - 1; 
    },
     increasey: function () {
      this.y = this.y + 1; 
    },
     decreasey: function () {
      this.y = this.y - 1; 
    },
  increasez: function () {
      this.z = this.z + 1; 
    },
     decreasez: function () {
      this.z = this.z - 1; 
    },
   total:function(){
return this.totalnumber=parseInt(this.answer1)+parseInt(this.answer2)+parseInt(this.answer3);
  },
   total1:function(){
return this.totalnumber1=parseInt(this.answer4)+parseInt(this.answer5)+parseInt(this.answer6);
   }
  },
computed: {
    evaluatex: function () {
      if (this.x >= 4) {
        return "Whoops, you've gone too far up!";
      } else if (this.x <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
   },
    evaluatey: function () {
      if (this.y >= 4) {
        return "Whoops, you've gone too far up!";
      } else if (this.y <=-1) {
        return "Whoops, you've gone too far down!";
      } else {
        return "";
      }
    }
   },
     watch: {
    x: function () {
      if (this.x >= 2) {
       var test1 = this;
       setTimeout(function () { test1.x = 0;}, 2000);
      } else if(this.x <= -1){
        var test1 = this;
        setTimeout(function () { test1.x = 0;}, 2000);
      }  
    },
    y: function () {
      if (this.y >= 4) {
       var test1 = this;
       setTimeout(function () { test1.y = 0;}, 2000);
      } else if(this.y <= -1){
        var test1 = this;
        setTimeout(function () { test1.y = 0;}, 2000);
      }  
    }
   },
}

const score1 = {
    template: '#score1',
  data: function(){
  return{
    Quizquestion1:[
      {
        question: 'What does "bakmak" mean?',
        answerA: 'to eat',
        answerB: 'to look',
        answerC: 'to smell',
        answerD: 'to walk',
        selectedAnswer:'answer',
        userInput:'',
        coreectAnswer:'B',
      }],
  }}    
}

const score2 = {
    template: '#score2'
}

const score3 = {
    template: '#score3'
}

const score4 = {
    template: '#score4'
}

const score5 = {
    template: '#score5'
}

const score6 = {
    template: '#score6'
}

const score7 = {
    template: '#score7'
}

const score8 = {
    template: '#score8'
}

 /*routing*/
const routes = [
{ path: '', component: home },
{ path: '/1', component: A1 },
{ path: '/2', component: A2 },
{ path: '/3', component: B1 },
{ path: '/4', component: B2 },
{ path: '/5', component: vocabulary1 },
{ path: '/6', component: grammar1 },
{ path: '/7', component: vocabulary2 },
{ path: '/8', component: grammar2 },
{ path: '/9', component: vocabulary3 },
{ path: '/10', component: grammar3 },
{ path: '/11', component: vocabulary4 },
{ path: '/12', component: grammar4 },
{ path: '/13', component: startredov1 },
{ path: '/14', component: startredov2 },
{ path: '/15', component: startredov3 },
{ path: '/16', component: startredov4 },
{ path: '/17', component: startredog1 },
{ path: '/18', component: startredog2 },
{ path: '/19', component: startredog3 },
{ path: '/20', component: startredog4 },
{ path: '/21', component: score1 },
{ path: '/22', component: score2 },
{ path: '/23', component: score3 },
{ path: '/24', component: score4 },
{ path: '/25', component: score5 },
{ path: '/26', component: score6 },
{ path: '/27', component: score7 },
{ path: '/28', component: score8 },
{ path: '/29', component: register },
{ path: '/30', component: login }
  
]

const router = new VueRouter({
    routes
});

new Vue({
  el: "#app",  
  router,
  data:{
    img: 'https://i.ibb.co/NNFZFPx/193378-1.jpg',
  },  
});
