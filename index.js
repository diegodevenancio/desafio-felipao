// Desafio Classificador de nível de Herói

let nome = "Hulk"
let quantidadeXp = 1000

if (quantidadeXp <= 1000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Ferro")
} else if(quantidadeXp >= 1001 && quantidadeXp <= 2000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Bronze")
}else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Prata")
}else if(quantidadeXp >= 5001 && quantidadeXp <= 7000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Ouro")
}else if(quantidadeXp >= 7001 && quantidadeXp <= 8000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Platina")
}else if(quantidadeXp >= 8001 && quantidadeXp <= 9000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Ascendente")
}else if(quantidadeXp >= 9001 && quantidadeXp <= 10000){
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Imortal")   
}else{
    console.log("O Herói de nome " + nome + " está no nível de " + quantidadeXp + " XP = Radiante")
}