let custoLitroGasolina = prompt("Quanto Custa o Litro da Gasolina")

let quantoDeDinheiro = prompt("O Litro da gasolina custa R$:" + custoLitroGasolina + ".\nQuantos Reais você tem para por de gasolina no carro?")

let quilometroPorLitro = prompt("Quantos Quilomêntros seu Carro Faz com 1l de Gasolina.")

let litrosDeGasolina = quantoDeDinheiro / custoLitroGasolina

let quilomentroComGasolinaNoTanque = quilometroPorLitro * litrosDeGasolina


alert("Com R$:" + quantoDeDinheiro + ". Você colocara " + litrosDeGasolina + "l de gasolina." + "\nE consegue rodar " + quilomentroComGasolinaNoTanque + "km. Poque Seu Carro faz " + quilometroPorLitro +"km/l.")