
const btn = document.getElementById('btnCalcular');
btn.addEventListener('click', clicar);

function clicar(){
    let ano = document.getElementById('anoNascimento');
    let anoCap = Number(ano.value);
    let msg = document.getElementById('msg');
    let anoAtual = 2026;
    let res = anoAtual - anoCap

    if (anoCap == ""){
        alert('Insira uma data valida');
    }
}
