class Start {
	constructor(){
		this.playerName = "Arfin"
		this.botName = "Si ROBOT"
		this.playerOption = 0;
		this.botOption = 0;
		this.winner = ""
	}

	set setPlayerOption(option) {
		this.playerOption = option;
		return this.playerOption;
	}

	set setBotOption(option) {
		this.botOption = option;
		return this.botOption;
	}

	botBrain() {
		const option = ["🖐", "✌️", "✊"];
		const bot = option[Math.floor(Math.random() * option.length)];
		return bot;
	}

	winCalculation() {
		if(this.botOption == this.playerOption) {
			return this.winner = "SERI"
		}else if(this.botOption == "🖐") {
			return this.winner = (this.playerOption == "✊") ? this.botName : this.playerName;
		}else if(this.botOption == "✌️") {
			return this.winner = (this.playerOption == "🖐") ? this.botName : this.playerName;
		}else if(this.botOption == "✊") {
			return this.winner = (this.playerOption == "✌️") ? this.botName : this.playerName;
		}else {
			return this.winner = "Anda Memasukkan pilihan yang salah!"
		}
	}

	matchResult() {
		if(this.winner != "SERI") {
			return this.winner + " MENANG!";
		}else {
			return "HASILNYA " + this.winner + ", JADI GK ADA YANG MENANG";
		}
	}

}

function pickOption(emoji){
	const start = new Start();
	start.setPlayerOption = emoji;
	start.setBotOption = start.botBrain();
	console.log("Player : "+start.playerOption+" VS Robot : "+start.botOption);
	start.winCalculation();
	console.log("pemenangnya adalah", start.winner);
	console.log("hasil akhir :", start.matchResult());

	const inGame = document.getElementById("inGame");
	const result = document.getElementById("result");

	inGame.textContent = start.playerOption+" VS "+start.botOption;
	result.textContent = start.matchResult();		
}