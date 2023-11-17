/*                                            Desafios desta aula!
OK 1) Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes, pode ser uma lista de animes, HQs, cursos, capas de jogos, entre outros;
OK 2) Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while;
OK 3) Criar uma condição para checar se o final da imagem tem .jpg
OK 4) Criar uma segunda lista para Guardar os Nomes dos Filmes
+- 5) Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;
-- 6) Criar um campo e um botão para adicionar a imagem diretamente na tela, em vez de adicionar no código.
*/

var nomeTrilhaPrompt = []
var imgTrilhaPrompt = []

var contaFinal = 0


// 1) Tema: Trilhas do Rio de Janeiro
var listaTrilhas = ['https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg','https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-the-city-of-rio-is-in-the-background-of-the-sunrise-image_2569109.jpg']
var nomeTrilhas = ['Teste','Costão de Itacoatiara','Trilha Pedra do Elefante','Travessia Tupinamba','Caminho de Araribóia','Morro da Urca','Morro Dois Irmãos','Pista Cláudio Coutinho']
var listaErroNome = []
var listaErroJpg = []

//5) Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;




//2) Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while;  (criei, mas voltei pro For pra praticar mais)

var verifica = true

if (nomeTrilhas.lenght != listaTrilhas.lenght)
  {
    alert('ERRO')
    //Erro; As duas Listas deveriam ser do mesmo tamanho.
    verifica = false
  }

//alert(nomeTrilhas.length) 
//document.write('<img src='+listaTrilhas[1].value+'>')


//while (verifica == true && pos < nomeTrilhas.length)
for (var pos = 0; pos < nomeTrilhas.length && verifica; pos++)
  {
    if(listaTrilhas[pos].endsWith('.jpg'))
      {
        //Se a trilha tiver o final .jpg, então segue o fluxo
        //alert(listaTrilhas[pos])
        document.write('<div class= imagem-for>');
        document.write('<img src=' + listaTrilhas[pos]+'>'+'<p>'+nomeTrilhas[pos]+'</p>');
        document.write('</div>');
        //pos++
      }
    else
      {
        //Por não ter a imagem, vamos remover da lista
        listaTrilhas.splice(pos, 1);
        nomeTrilhas.splice(pos, 1);
        //Guarda o erro na listaErroNome e listaErroJpg
        listaErroNome.push(nomeTrilhas[pos])
        listaErroJpg.push(listaTrilhas[pos])
        //pos++
      }
  }

if(listaErroNome.length > 0)
  {
    document.write('<div class = "erro"><hr></hr>')
    document.write('<p><b>Favor Verificar a Lista! Encontramos formatos diferentes de .jpg nas imagens: </b></p>')
    document.write('<p><i><span style="color: red;">'+listaErroNome+'</span></i></p>')
    document.write('</div>')
  }


function perguntar() 
{
    var nomeTrilhaPrompt = []; // Inicialização das listas para armazenar os dados
    var imgTrilhaPrompt = [];
    var contaFinal = 0;
    var fim = false;

    while (!fim) 
    {
        if (contaFinal === 0) {
            alert('Bem-vindo! Parece que você gostaria de adicionar mais trilhas à nossa lista! Para isso, basta digitar o nome da Trilha do Rio de Janeiro e, no próximo prompt, colocar o caminho da imagem. Lembre-se de que precisa terminar com ".jpg".');
        } else {
            alert('Adicionar ainda mais trilhas à nossa lista? Basta digitar o nome da trilha do Rio de Janeiro e, no próximo prompt, inserir o caminho da imagem, finalizando com ".jpg".');
        }

        var resposta = prompt("Digite o nome da trilha:");
        if (resposta === null) {
            alert("Você não inseriu o nome da trilha. Melhor deixar quieto então!");
            fim = true;
            break;
        }
        nomeTrilhaPrompt.push(resposta);

        resposta = prompt("Agora insira o caminho da imagem:");
        if (resposta === null) {
            alert("Você não inseriu o caminho da imagem. Cancelando...");
            fim = true;
            break;
        }
        imgTrilhaPrompt.push(resposta);

        var resp = prompt("Deseja continuar? (Y ou N)");
        if (resp === 'Y' || resp === 'y') {
            fim = false;
            contaFinal++;
        } else if (resp === 'N' || resp === 'n') {
            contaFinal++;
            fim = true;
        } else {
            alert('Resposta inválida. Vou fechar mesmo assim.');
            fim = true;
        }
    }
//Adicionado às Listas
    //Verifica tamanho de listas
        if(nomeTrilhaPrompt.length != imgTrilhaPrompt.length)
          {
            alert('Novas Listas tem tamanhos diferentes, por tanto são inválidas')
          }
        else
        {   
         
            
         }

        
          
    
}

 
//Criar elemento no HTML com document.write()
//document.write()

//Colocando uma imagem
//document.write('<img src ='+ variavelFilme+'>');

//Criando uma lista
//var lista = [] 

// Adicionando um novo valor ao final da lista usando push()
//lista.push(valor);

// Adicionando um novo valor ao final da lista usando iteração
//lista[pos] = valorFilme
/*
valorFilme = 'https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg'
document.write('<img src ='+ valorFilme+'>');
*/

//Iteração usando For e tamanho da lista
/*
for(for var pos = 0; pos < listaMarvel.length; pos ++) 
{
 
}
*/

