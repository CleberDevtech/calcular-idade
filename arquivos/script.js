
const btn = document.getElementById('btnCalcular');
btn.addEventListener('click', clicar);

    
function clicar(){
    let ano = document.getElementById('anoNascimento');
    let anoCap = Number(ano.value);
    let msg = document.getElementById('msg');
    let imgs = document.getElementById('imgs')
    let anoAtual = 2026;
    let idade = anoAtual - anoCap
    
    if(anoCap == ""){
        alert('Por favor insira uma data valida!')
    }else if (idade >= 0 && idade <= 10){
        msg.innerHTML = 'Crianca de 0 a 10 anos, a idade exata e ' + idade + 'anos';
        imgs.src="/imagens/crianca0a10anos.jpg"
        document.body.style.background = "#BFDDF3"
        document.body.style.color = "gray"
        document.querySelector('section').style.background = "#a4cfee"
    }else if (idade > 11 && idade <= 17){
         msg.innerHTML = 'Adolecente entre 11 a 17 anos a, idade exata e ' + idade + 'anos'
        imgs.src="/imagens/15 anos.jpg"
        document.body.style.background = "#c57180"
        document.body.style.color = "white"
        document.querySelector('section').style.background = "#fb8ca0"
    } else if(idade >= 18 && idade <= 26){
         msg.innerHTML = 'Jovem entre 18 a 26 anos, a idade exata e ' +  idade + ' anos';
        imgs.src="/imagens/dos18aos26.jpg"
        document.body.style.background = "#bfac9b"
        document.body.style.color = "white"
        document.querySelector('section').style.background = "#d4b8a0"
    }else if (idade >= 27 && idade <= 39){
        msg.innerHTML = 'Rapaz entre 27 a 39 anos, a idade exata e ' + idade + ' anos'
        imgs.src="/imagens/27aos39.jpg"
        document.body.style.background = "#6d8b82"
        document.body.style.color = "white"
        document.querySelector('section').style.background = "#7fa197"
    }else if(idade >= 40 && idade <= 50){
         msg.innerHTML = 'Pessoa entre 40 a 50 anos, a idade exata e ' + idade + ' anos'
        imgs.src="/imagens/dos30aos40.jpg"
        document.body.style.background = "#c59b68"
        document.body.style.color = "white"
        document.querySelector('section').style.background = "#d7a971"
         document.querySelector('section').style.boxShadow = "-1px 3px 8px white"
    }else{
         msg.innerHTML = 'Pessoa acima de 50 anos, a idade exata e ' + idade + ' anos'
        imgs.src="/imagens/idoso.jpg"
        document.body.style.background = "#b4a49c"
        document.body.style.color = "white"
        document.querySelector('section').style.background = "#d8c2b7"
       
    }




}
