var idade = 72;
if (idade<18) {
    console.log('Não vota');
}
else if (idade < 18 || idade > 70) {
    console.log('Voto opcional');
}
else {
    console.log('Voto obrigatório');
}