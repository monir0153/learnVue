function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessage: [],
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' };
        },
        specialAttack() {
            return this.currentRound % 3 != 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A Draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A Draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = "player"
            }
        }
    },
    methods: {
        startGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessage = [];
        },
        attackMonster() {
            this.currentRound++;
            const attack = getRandomValue(5, 12);
            this.monsterHealth -= attack;
            this.addLogMessage('player', 'attack', attack);
            this.attackPlayer();
        },
        attackPlayer() {
            const attack = getRandomValue(8, 15);
            this.playerHealth -= attack;
            this.addLogMessage('monster', 'attack', attack);

        },
        specialAttackMonster() {
            this.currentRound++;
            const attack = getRandomValue(10, 25);
            this.monsterHealth -= attack;
            this.addLogMessage('player', 'special-attack', attack);
            this.attackPlayer();
        },
        heal() {
            this.currentRound++;
            const value = getRandomValue(8, 20);
            if (this.playerHealth + value > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += value;
            }
            this.addLogMessage('player', 'heal', value);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
})

app.mount('#game');