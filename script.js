    
var menuBtn = document.querySelector('.items-menu-mobile i');
menuBtn.addEventListener('click',()=>{

    let itemsMenu = document.getElementById('menu-mobile');
    if(itemsMenu.classList.contains('show')){
        itemsMenu.classList.remove('show');
        itemsMenu.classList.add('hide');
        itemsMenu.style.display = "none";
    }else{
        itemsMenu.classList.remove('hide');
        itemsMenu.classList.add('show');
        itemsMenu.style.display = "block";

    }
});

const skills = document.querySelectorAll('.habilidade');
const descricao = document.querySelector('.desc');
const habilidadeInfo = [
                    '<p class="desc" style="text-align=left;">HTML</p> <br> <p class="desc">É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p class="desc">CSS</p> <br> <p class="desc">É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p class="desc">JavaScript</p> <br> <p class="desc">É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p class="desc">Github</p> <br> <p class="desc">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Clique para acessá-lo. </p> <br>',
                    '<p class="desc">ReactJS</p> <br> <p class="desc">O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>'

]

skills.forEach(  (item, index) => {
   
    item.addEventListener('mouseover', (item) => {
        descricao.innerHTML = `<p>${habilidadeInfo[index]} </p>` ;
    } )
    item.addEventListener('mouseout', () => {
        descricao.innerHTML = 'Passe o mouse para ler a descrição da habilidade.<br><br><br><br>';
    } )
} );

