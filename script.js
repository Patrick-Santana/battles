var app = new Vue({
  el: "#wrapper",
  data: {
    
    health_me: 100,
    health_enemy: 100,
    updates: [
    ],
    playing: false
    
  },
  methods: {
    capitalize: function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    attack: function(highest) {
      var damage = Math.floor(Math.random() * highest) + 1;
      this.health_enemy -= damage;
      this.updates.push({
        actor: 'you', 
        message: ' hit Monster for ', 
        dmg: damage
      });
      this.monsterAttack();
    },
    heal: function() {
      var healAmount = Math.floor(Math.random() * 10) + 1;
      this.health_me += healAmount;
      if(this.health_me>100) this.health_me = 100;
            this.updates.push({
        actor: 'you', 
        message: ' healed for ', 
        dmg: healAmount
      });
      this.monsterAttack();
    },
    monsterAttack() {
      
      var damage = Math.floor(Math.random() * 10) + 1;
      this.health_me -= damage;
      this.updates.push({
        actor: 'enemy', 
        message: ' hit Player for ', 
        dmg: damage
      });
      this.checkState();
    },
    flee: function() {
      this.playing = false;
      alert("You have fled the battle!");
      this.restartGame();
    },
    restartGame: function() {
      this.updates = [];
      this.health_me = 100;
      this.health_enemy = 100;
    },
    checkState: function() {
      if(this.health_me < 0) { 
        this.playing = false;
        alert("You have lost!");
        this.restartGame();
      } else if(this.health_enemy < 0) {
        this.playing = false;
        alert("You have won!");
        this.restartGame();
      }
    }
  }
});
