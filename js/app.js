// Dados Mockados dos Livros
const books = [
    {
        id: 1,
        title: "A Criação do Mundo",
        cover: "assets/creation_cover.jpg",
        content: `
            <div class="story-page">
                <h3>Página 1</h3>
                <p>Antes de tudo, não havia mundo, nem céu, nem você ou eu. Tudo era escuro, muito escuro. Era como um quarto com a luz apagada e os olhos fechados. Mas Deus estava lá, e Ele tinha um grande plano.</p>
                <img src="assets/creation_page1.png" alt="Escuridão e presença divina" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2</h3>
                <p>Então, Deus disse com sua voz poderosa: — HAJA LUZ! E ZAP! A luz apareceu. Era brilhante e quentinha. Deus chamou a luz de "Dia" e o escuro de "Noite".</p>
                <img src="assets/creation_page2.png" alt="A criação da luz" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3</h3>
                <p>No segundo dia, havia muita água por toda parte. Deus disse: — Vou fazer um espaço no meio! Ele separou as águas e criou o céu azul lá no alto, onde as nuvens fofinhas flutuam.</p>
                <img src="assets/creation_page3.png" alt="Céu e águas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4</h3>
                <p>No terceiro dia, Deus disse para a água: — Junte-se num lugar só! A água obedeceu e formou os mares. E, de repente, PUF! A terra seca e marrom apareceu. Montanhas altas e praias de areia surgiram.</p>
                <img src="assets/creation_page4.png" alt="Terra seca e mares" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5</h3>
                <p>A terra estava muito marrom, então Deus disse: — Vamos decorar! Ele cobriu a terra com grama verdinha. Depois, criou árvores cheias de frutas gostosas e flores de todas as cores do arco-íris. Ficou lindo!</p>
                <img src="assets/creation_page5.png" alt="Vegetação e flores" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6</h3>
                <p>No quarto dia, Deus olhou para o céu escuro e disse: — Precisa de luzes aqui! Ele criou o Sol grandão para brilhar de dia e a Lua prateada para iluminar a noite. E espalhou milhões de estrelinhas brilhantes.</p>
                <img src="assets/creation_page6.png" alt="Sol, lua e estrelas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7</h3>
                <p>No quinto dia, Deus encheu os mares de peixinhos coloridos, baleias gigantes e polvos engraçados. E no céu, colocou passarinhos de todas as cores cantando músicas felizes.</p>
                <img src="assets/creation_page7.png" alt="Peixes e pássaros" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8</h3>
                <p>No sexto dia, Deus criou os animais da terra: leões, elefantes, cachorrinhos e gatinhos. A terra ficou cheia de vida e barulhos divertidos!</p>
                <img src="assets/creation_page8.png" alt="Animais terrestres" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9</h3>
                <p>Ainda no sexto dia, Deus fez sua criação mais especial: as pessoas! Ele criou o homem e a mulher para serem amigos dEle e cuidarem de tudo o que Ele tinha feito.</p>
                <img src="assets/creation_page9.png" alt="Criação do homem e mulher" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10</h3>
                <p>No sétimo dia, Deus olhou para tudo e sorriu. Estava tudo perfeito! Então, Ele descansou. E assim, o nosso mundo lindo foi criado com muito amor.</p>
                <img src="assets/creation_page10.jpg" alt="Deus descansando" class="story-image">
            </div>
        `
    },
    {
        id: 2,
        title: "A Grande Aventura na Arca de Noé",
        cover: "assets/noah_cover.jpg",
        content: `
            <div class="story-page">
                <h3>Página 1</h3>
                <p>Era uma vez um vovô muito bondoso chamado Noé. Ele amava a natureza, os animais e conversava sempre com o Papai do Céu. Mas o mundo estava uma bagunça! Ninguém cuidava de nada. Então, Deus teve uma ideia e chamou Noé para uma missão muito especial.</p>
                <img src="assets/noah_1.jpg" alt="Noé olhando para o céu" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2</h3>
                <p>— Noé! — chamou Deus. — Vai cair uma chuva muito forte, muita água vai rolar! — Preciso que você construa um barco gigante, uma Arca para navegar! Noé obedeceu na hora. Pegou o martelo e a madeira. TOC! TOC! TOC! O barulho da construção se ouvia a noite inteira.</p>
                <img src="assets/noah_2.jpg" alt="Construção da Arca" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3</h3>
                <p>Quando a Arca ficou pronta, uma coisa mágica aconteceu. Os bichinhos começaram a chegar, um convite que Deus deu! Eles vinham de dois em dois, formando uma fila sem fim. Um macho e uma fêmea, passando pelo jardim.</p>
                <img src="assets/noah_3.jpg" alt="Animais chegando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4</h3>
                <p>Olha só quem chegou! O Sr. Leão e a Sra. Leoa rugindo: GRRR! O Elefante balançando a tromba: FUUUUM! E os macaquinhos pulando, fazendo UH-UH-Á-Á! Tinha bicho grande, bicho pequeno e bicho de todo lugar.</p>
                <img src="assets/noah_4.jpg" alt="Animais entrando na Arca" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5</h3>
                <p>As girafas com pescoço comprido entraram devagarinho. As tartarugas também, passo a passinho. Até as formiguinhas subiram a bordo. Quando o último bicho entrou... PLAF! A porta se fechou.</p>
                <img src="assets/noah_5.jpg" alt="Porta da Arca fechando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6</h3>
                <p>E a chuva começou. Primeiro um pinguinho: plic, ploc. Depois a chuva forte: CHUÁÁÁ! Choveu muito, choveu tanto, que a terra virou mar. Mas lá dentro da Arca, tudo estava quentinho e seguro. A Arca balançava pra lá e pra cá, como um berço no escuro.</p>
                <img src="assets/noah_6.jpg" alt="Arca na chuva" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7</h3>
                <p>Foram muitos dias de chuva e balanço no mar. Mas Noé sabia que logo o sol ia voltar. Um dia, a chuva parou. O silêncio chegou. Noé abriu a janelinha e um passarinho soltou. — Voe, pombinha! Vá ver se a terra secou!</p>
                <img src="assets/noah_7.jpg" alt="Noé soltando a pomba" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8</h3>
                <p>A pombinha voou, voou e voltou. No bico, ela trazia um raminho de oliveira, uma folha verdinha! Era o sinal! As árvores estavam aparecendo! A água baixou e a Arca parou no topo de uma montanha, quietinha.</p>
                <img src="assets/noah_8.jpg" alt="Pomba com ramo de oliveira" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9</h3>
                <p>A porta se abriu e o sol brilhou forte! Os bichos saíram correndo, pulando de alegria. Correram para a floresta, voaram pelo dia. O mundo estava limpo, novo e cheio de cor.</p>
                <img src="assets/noah_9.jpg" alt="Animais saindo da Arca" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10</h3>
                <p>E lá no céu, Deus pintou um presente. Um arco colorido, brilhante e contente. Vermelho, laranja, amarelo, verde, azul, anil e violeta! Era o Arco-Íris! A promessa de amor para todo o planeta.</p>
                <img src="assets/noah_10.jpg" alt="Arco-íris" class="story-image">
            </div>
        `
    },
    {
        id: 3,
        title: "Davi e Golias",
        cover: "assets/david_cover.jpg",
        content: `
            <div class="story-page">
                <h3>Página 1: O Pastorzinho Davi</h3>
                <p>Era uma vez um menino chamado Davi. Ele cuidava de ovelhas, feliz e a sorrir. Davi amava a Deus e tocava sua harpa o dia inteiro, Enquanto suas ovelhinhas pastavam no terreiro.</p>
                <img src="assets/david_1.png" alt="Davi tocando harpa" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: O Grande Problema</h3>
                <p>Longe dali, uma grande confusão começou. O exército de Deus contra os inimigos se formou. Os soldados de Israel estavam com muito medo, Pois do outro lado havia um segredo...</p>
                <img src="assets/david_2.png" alt="Soldados de Israel" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: O Gigante Assustador</h3>
                <p>O segredo era Golias, um gigante grandão! Ele era forte, bravo e tinha cara de mau. Golias gritava: "Quem vai lutar comigo? Eu sou o maior!" E todos os soldados tremiam de pavor.</p>
                <img src="assets/david_3.png" alt="Gigante Golias" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: Davi Chega ao Acampamento</h3>
                <p>Davi foi levar comida para seus irmãos na batalha. Ele ouviu o gigante gritando feito uma metralha. "Por que ninguém para esse grandalhão?", Davi perguntou. "Ele está zombando de Deus, e isso não é bom!"</p>
                <img src="assets/david_4.png" alt="Davi chegando no acampamento" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Eu Vou Lutar!</h3>
                <p>Davi disse ao Rei Saul: "Eu vou enfrentar o gigante!" O Rei quis lhe dar uma armadura brilhante. Mas a armadura era muito grande e pesada para o menino. "Não preciso disso", disse Davi. "Deus é o meu destino!"</p>
                <img src="assets/david_5.png" alt="Davi recusando a armadura" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: As Cinco Pedrinhas</h3>
                <p>Davi foi até o riacho, que corria devagar. Ele escolheu cinco pedrinhas lisas para levar. Guardou as pedras na bolsinha, com muita atenção, E pegou sua funda, com firmeza na mão.</p>
                <img src="assets/david_6.png" alt="Davi pegando pedrinhas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: O Encontro</h3>
                <p>O pequeno Davi caminhou até o gigante mal-humorado. Golias riu muito alto: "Ha ha ha! Você é só um bocado! Eu vou te vencer com um só peteleco!" Mas Davi não teve medo daquele boneco.</p>
                <img src="assets/david_7.png" alt="Davi de frente para Golias" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: O Voo da Pedra</h3>
                <p>Davi disse: "Você vem com espada e lança na mão, Mas eu vou em nome de Deus, o Senhor da nação!" Davi girou a funda... VRUM, VRUM, VRUM! E soltou a pedrinha... ZUM!</p>
                <img src="assets/david_8.png" alt="Davi girando a funda" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: A Vitória</h3>
                <p>POF! A pedrinha acertou bem na testa do grandão. O gigante ficou tonto, perdeu o chão... CABRUM! Golias caiu e fez um barulhão. O pequeno Davi venceu o vilão!</p>
                <img src="assets/david_9.png" alt="Golias caindo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: Pequeno, Mas Corajoso</h3>
                <p>Viva! Os soldados gritaram com alegria! Davi mostrou que não importa o tamanho que a gente teria. Com fé no coração e coragem de montão, Até o menorzinho pode ser um campeão!</p>
                <img src="assets/david_10.png" alt="Davi comemorando" class="story-image">
            </div>
        `
    },
    {
        id: 4,
        title: "O Nascimento de Jesus",
        cover: "assets/jesus_cover.jpg",
        content: `
            <div class="story-page">
                <h3>Página 1: O Visitante Surpresa</h3>
                <p>Há muito tempo, em uma cidade chamada Nazaré, vivia uma jovem muito doce chamada Maria. Um dia, enquanto ela estava quietinha em casa, um anjo lindo e brilhante chamado Gabriel apareceu! Maria ficou assustada, mas o anjo disse: "Não tenha medo, Maria! Deus te ama muito. Você vai ser a mamãe de um bebê muito especial. Ele será o Filho de Deus e seu nome será Jesus."</p>
                <img src="assets/jesus_1.png" alt="O anjo Gabriel visitando Maria" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: O Sonho de José</h3>
                <p>José era um homem bom que ia se casar com Maria. Ele ficou confuso quando soube do bebê. Mas, enquanto dormia, um anjo apareceu no sonho dele e explicou tudo: "José, não se preocupe. Esse bebê é um milagre de Deus. Ele veio para salvar as pessoas. Cuide bem dele e de Maria." José acordou feliz e prometeu cuidar da sua nova família.</p>
                <img src="assets/jesus_2.png" alt="José sonhando com o anjo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: Uma Longa Viagem</h3>
                <p>O imperador mandou uma lei: todos tinham que viajar para a cidade de onde sua família veio para serem contados. Maria e José tiveram que ir para Belém. A viagem era muito longa e cansativa. Maria ia sentada em um burrinho, com sua barriga bem grande, pois o bebê Jesus já estava quase chegando!</p>
                <img src="assets/jesus_3.png" alt="Maria e José viajando para Belém" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: Não Há Lugar</h3>
                <p>Quando chegaram em Belém, a cidade estava cheia de gente! José bateu em muitas portas pedindo um lugar para dormir, mas todos diziam: "Desculpe, estamos lotados! Não tem vaga na estalagem". Eles estavam muito cansados. Finalmente, um dono de estalagem bondoso disse que eles podiam ficar no seu estábulo, onde os animais dormiam.</p>
                <img src="assets/jesus_4.png" alt="José pedindo abrigo na estalagem" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Bem-vindo, Bebê Jesus!</h3>
                <p>Naquela noite especial, no meio do feno cheiroso e dos animais calminhos, o bebê Jesus nasceu! Maria estava tão feliz. Ela embrulhou Jesus em paninhos macios para ele ficar quentinho. Como não tinham berço, ela o colocou para dormir na manjedoura, que é a caixinha onde os animais comem.</p>
                <img src="assets/jesus_5.png" alt="O nascimento de Jesus no estábulo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: Uma Festa no Céu</h3>
                <p>Perto dali, nos campos escuros, pastores estavam cuidando de suas ovelhinhas. De repente, CABUM! O céu se encheu de uma luz incrível! Um anjo apareceu e eles ficaram com muito medo. O anjo disse: "Calma! Eu trago notícias maravilhosas! Hoje, em Belém, nasceu o Salvador, Cristo, o Senhor!" Então, um coral gigante de anjos começou a cantar no céu: "Glória a Deus nas alturas!"</p>
                <img src="assets/jesus_6.png" alt="Anjos aparecendo para os pastores" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: Correndo para Ver</h3>
                <p>Quando os anjos foram embora, os pastores disseram: "Vamos rápido para Belém ver esse bebê que Deus nos contou!" Eles correram e encontraram o estábulo. Lá estava tudo igualzinho o anjo tinha dito: Maria, José e o bebê dormindo na manjedoura. Os pastores ficaram tão emocionados e contaram a todos o que tinham visto.</p>
                <img src="assets/jesus_7.png" alt="Pastores visitando Jesus" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: A Estrela Guia</h3>
                <p>Muito, muito longe dali, em um país do Oriente, viviam homens muito sábios que estudavam o céu. Eles viram uma estrela nova, maior e mais brilhante que todas as outras. Eles sabiam que aquela estrela significava que um novo Rei muito importante havia nascido. Eles decidiram seguir a estrela para encontrar o Rei.</p>
                <img src="assets/jesus_8.png" alt="Os Reis Magos vendo a estrela" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: Presentes para o Rei</h3>
                <p>A estrela guiou os sábios por um longo caminho até a casa onde Jesus estava. Quando eles viram o menino Jesus com sua mamãe Maria, eles ficaram cheios de alegria. Eles se ajoelharam com muito respeito e deram presentes preciosos para ele: ouro brilhante, incenso cheiroso e mirra.</p>
                <img src="assets/jesus_9.png" alt="Os Reis Magos entregando presentes" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: Alegria para o Mundo</h3>
                <p>O nascimento de Jesus foi o presente mais incrível que Deus deu para o mundo inteiro. Ele veio para ensinar sobre o amor, trazer paz e nos mostrar como ficar pertinho de Deus. É por isso que no Natal nós ficamos tão felizes, damos presentes e celebramos o aniversário de Jesus, o nosso Salvador!</p>
                <img src="assets/jesus_10.jpg" alt="Celebração do nascimento de Jesus" class="story-image">
            </div>
        `
    },
    {
        id: 5,
        title: "A Torre de Babel",
        cover: "assets/babel_cover.jpg",
        content: `
            <div class="story-page">
                <h3>Página 1: Uma Grande Ideia?</h3>
                <p>Antigamente, todas as pessoas do mundo falavam a mesma língua. Um dia, elas tiveram uma ideia: "Vamos construir uma torre bem alta, que chegue até o céu! Assim seremos famosos e poderosos!"</p>
                <img src="assets/babel_1.png" alt="Pessoas conversando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: Tijolo por Tijolo</h3>
                <p>Eles começaram a trabalhar duro. Faziam tijolos e os empilhavam. A torre subia cada vez mais alto. Eles estavam muito orgulhosos e esqueceram de pedir ajuda a Deus.</p>
                <img src="assets/babel_2.png" alt="Construindo a torre" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: A Torre Cresce</h3>
                <p>A torre ficava cada vez mais alta, quase tocando as nuvens! As pessoas lá de cima pareciam formiguinhas. Eles achavam que podiam fazer tudo sozinhos, sem precisar de Deus.</p>
                <img src="assets/babel_3.png" alt="Torre alta" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: Deus Observa</h3>
                <p>Deus olhou lá do céu e viu a torre. Ele viu que o coração das pessoas estava cheio de orgulho. Eles queriam ser maiores que Deus, e isso não era bom para eles.</p>
                <img src="assets/babel_4.png" alt="Deus observando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: A Confusão</h3>
                <p>Deus decidiu que era hora de parar aquela construção. Ele fez uma mágica: misturou as línguas de todo mundo! De repente, ninguém mais se entendia.</p>
                <img src="assets/babel_5.png" alt="Pessoas confusas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: O Que Você Disse?</h3>
                <p>Um pedia "tijolo" e o outro trazia "água". Um dizia "sobe" e o outro entendia "desce". Foi uma bagunça total! Ninguém conseguia trabalhar junto.</p>
                <img src="assets/babel_6.png" alt="Confusão na obra" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: Parando a Obra</h3>
                <p>Como não conseguiam conversar, eles tiveram que parar de construir a torre. A torre ficou inacabada, um monumento ao orgulho humano.</p>
                <img src="assets/babel_7.png" alt="Torre parada" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Cada Um Para Um Lado</h3>
                <p>As pessoas que falavam a mesma língua se juntaram e foram morar em lugares diferentes. Uns foram para o norte, outros para o sul, leste e oeste.</p>
                <img src="assets/babel_8.png" alt="Pessoas viajando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: O Mundo se Enche</h3>
                <p>Foi assim que o mundo se encheu de gente e de línguas diferentes. Deus queria que as pessoas se espalhassem e cuidassem de toda a Terra, não ficassem todas num lugar só.</p>
                <img src="assets/babel_9.png" alt="Mundo cheio" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: A Lição</h3>
                <p>A Torre de Babel nos ensina que não devemos ser orgulhosos. É melhor obedecer a Deus e viver em harmonia, mesmo falando línguas diferentes!</p>
                <img src="assets/babel_10.png" alt="Lição aprendida" class="story-image">
            </div>
        `
    },
    {
        id: 6,
        title: "Adão e Eva",
        cover: "assets/adao_eva_cover.png",
        content: `
            <div class="story-page">
                <h3>Página 1: O Jardim Lindo</h3>
                <p>Deus criou um jardim maravilhoso chamado Éden. Tinha árvores com frutas deliciosas, rios cristalinos e muitos animais. Era o lugar perfeito para se viver.</p>
                <img src="assets/adao_1.jpg" alt="Jardim do Éden" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: O Primeiro Homem</h3>
                <p>Deus formou o homem do pó da terra e soprou vida nele. Ele o chamou de Adão. Adão cuidava do jardim e dava nome a todos os animais.</p>
                <img src="assets/adao_2.jpg" alt="Criação de Adão" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: Uma Companheira</h3>
                <p>Deus viu que não era bom que Adão ficasse sozinho. Então, Ele fez Adão dormir um sono profundo e criou a mulher. Adão ficou muito feliz!</p>
                <img src="assets/adao_3.jpg" alt="Criação de Eva" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: O Passeio no Jardim</h3>
                <p>Adão e Eva viviam felizes no jardim. Eles conversavam com Deus e passeavam com os animais. Tudo era paz e alegria.</p>
                <img src="assets/adao_4.jpg" alt="Adão e Eva no jardim" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: A Árvore Proibida</h3>
                <p>Deus disse que eles podiam comer de todas as árvores, menos de uma: a árvore do conhecimento do bem e do mal. Essa era a única regra.</p>
                <img src="assets/adao_5.jpg" alt="A árvore proibida" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: A Serpente Esperta</h3>
                <p>Um dia, uma serpente apareceu e conversou com Eva. Ela disse que se Eva comesse a fruta proibida, ela seria igual a Deus. Eva ficou curiosa.</p>
                <img src="assets/adao_6.jpg" alt="A serpente e Eva" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: A Desobediência</h3>
                <p>Eva olhou para a fruta, que parecia deliciosa. Ela comeu e deu para Adão, que também comeu. De repente, eles sentiram vergonha.</p>
                <img src="assets/adao_7.jpg" alt="Adão e Eva comendo o fruto" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Escondidos</h3>
                <p>Quando ouviram Deus passeando no jardim, eles se esconderam entre as árvores. Eles sabiam que tinham desobedecido a Deus.</p>
                <img src="assets/adao_8.jpg" alt="Adão e Eva se escondendo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: A Tristeza</h3>
                <p>Deus perguntou: "Vocês comeram da árvore que eu proibi?". Eles contaram a verdade. Deus ficou triste, pois a desobediência trouxe consequências ruins.</p>
                <img src="assets/adao_9.jpg" alt="Deus falando com Adão e Eva" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: A Promessa</h3>
                <p>Adão e Eva tiveram que sair do lindo jardim. Mas Deus prometeu que um dia enviaria alguém muito especial para salvar o mundo e trazer a alegria de volta.</p>
                <img src="assets/adao_10.jpg" alt="Saída do Éden" class="story-image">
            </div>
        `
    },
    {
        id: 7,
        title: "A Multiplicação dos Pães",
        cover: "assets/multiplicacao_cover.png",
        content: `
            <div class="story-page">
                <h3>Página 1: Muita Gente!</h3>
                <p>Uma multidão enorme seguia Jesus para ouvir suas histórias e ser curada. O dia passou rápido e todos ficaram com muita fome. Mas eles estavam longe de casa e não tinham comida.</p>
                <img src="assets/multiplicacao_1.png" alt="Multidão seguindo Jesus" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: O Problema</h3>
                <p>Os discípulos estavam preocupados. Filipe disse: "Nem com muito dinheiro poderíamos comprar pão para toda essa gente!". Eram mais de cinco mil pessoas!</p>
                <img src="assets/multiplicacao_2.png" alt="Discípulos preocupados" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: O Lanche do Menino</h3>
                <p>André encontrou um menino que tinha trazido lanche. "Aqui tem um rapaz com cinco pães de cevada e dois peixinhos", disse ele. "Mas o que é isso para tanta gente?"</p>
                <img src="assets/multiplicacao_3.png" alt="Menino entregando lanche" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: A Ordem de Jesus</h3>
                <p>Jesus sorriu e disse: "Digam a todos para se sentarem na grama". As pessoas se sentaram em grupos, esperando para ver o que ia acontecer.</p>
                <img src="assets/multiplicacao_4.png" alt="Pessoas sentadas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Agradecendo a Deus</h3>
                <p>Jesus pegou os cinco pães e os dois peixes. Ele olhou para o céu e agradeceu a Deus por aquele alimento. Todos ficaram em silêncio observando.</p>
                <img src="assets/multiplicacao_5.png" alt="Jesus orando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: O Milagre Começa</h3>
                <p>Então, Jesus começou a partir os pães e os peixes e entregou aos discípulos para distribuírem. E uma coisa incrível aconteceu: a comida não acabava!</p>
                <img src="assets/multiplicacao_6.png" alt="Distribuindo comida" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: Comida para Todos</h3>
                <p>Os discípulos iam e voltavam, e os cestos continuavam cheios! Todos comeram: homens, mulheres e crianças. Comeram até não aguentarem mais.</p>
                <img src="assets/multiplicacao_7.jpg" alt="Todos comendo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Não Desperdice</h3>
                <p>Quando todos estavam satisfeitos, Jesus disse: "Recolham o que sobrou para que nada se perca". Os discípulos obedeceram e foram recolher as sobras.</p>
                <img src="assets/multiplicacao_8.jpg" alt="Recolhendo sobras" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: Doze Cestos!</h3>
                <p>Para surpresa de todos, eles encheram doze cestos com os pedaços que sobraram! Muito mais do que o lanche original do menino.</p>
                <img src="assets/multiplicacao_9.jpg" alt="Cestos cheios" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: Jesus Cuida de Nós</h3>
                <p>As pessoas ficaram maravilhadas e disseram: "Este é verdadeiramente o Profeta que devia vir ao mundo!". Jesus mostrou que Deus cuida de nós e pode multiplicar o pouco que temos.</p>
                <img src="assets/multiplicacao_10.png" alt="Jesus ensinando" class="story-image">
            </div>
        `
    },
    {
        id: 8,
        title: "Daniel na Cova dos Leões",
        cover: "assets/daniel_cover.png",
        content: `
            <div class="story-page">
                <h3>Página 1: O Amigo de Deus</h3>
                <p>Daniel era um homem muito sábio que amava a Deus. Ele morava num país distante, a Babilônia, mas nunca esqueceu do Senhor. Ele orava três vezes por dia.</p>
                <img src="assets/daniel_1.jpg" alt="Daniel orando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: O Rei Dario</h3>
                <p>O rei Dario gostava muito de Daniel porque ele era honesto e trabalhador. O rei pensava em colocar Daniel como chefe de todo o reino!</p>
                <img src="assets/daniel_2.jpg" alt="Rei Dario e Daniel" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: A Inveja</h3>
                <p>Outros governantes ficaram com muita inveja de Daniel. Eles queriam encontrar algo errado nele, mas Daniel era certinho. Então, tiveram uma ideia malvada.</p>
                <img src="assets/daniel_3.jpg" alt="Homens invejosos" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: A Lei Ruim</h3>
                <p>Eles convenceram o rei a assinar uma lei: "Durante 30 dias, ninguém pode orar para nenhum deus ou homem, a não ser para o rei. Quem desobedecer, vai para a cova dos leões!".</p>
                <img src="assets/daniel_4.jpg" alt="Assinando a lei" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Daniel Fiel</h3>
                <p>Daniel soube da lei, mas não parou de orar. Ele foi para casa, abriu as janelas e orou a Deus como sempre fazia. Os homens maus viram tudo.</p>
                <img src="assets/daniel_5.jpg" alt="Daniel orando na janela" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: A Acusação</h3>
                <p>Eles correram contar para o rei: "Daniel desobedeceu sua lei! Ele orou ao Deus dele!". O rei ficou muito triste, pois gostava de Daniel, mas a lei não podia ser mudada.</p>
                <img src="assets/daniel_6.jpg" alt="Acusando Daniel" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: Na Cova dos Leões</h3>
                <p>Ao pôr do sol, jogaram Daniel na cova cheia de leões famintos. O rei disse: "Que o seu Deus te salve, Daniel!". E colocaram uma pedra na entrada.</p>
                <img src="assets/daniel_7.jpg" alt="Cova dos leões" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Uma Noite Sem Dormir</h3>
                <p>O rei voltou para o palácio e não conseguiu comer nem dormir. Ele estava muito preocupado com seu amigo Daniel. Será que os leões o devoraram?</p>
                <img src="assets/daniel_8.jpg" alt="Rei preocupado" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: O Milagre da Manhã</h3>
                <p>Bem cedinho, o rei correu para a cova e gritou: "Daniel, seu Deus te salvou?". E Daniel respondeu: "Sim, ó rei! Deus enviou seu anjo e fechou a boca dos leões!".</p>
                <img src="assets/daniel_9.jpg" alt="Daniel vivo" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: Deus é Poderoso</h3>
                <p>O rei ficou feliz demais! Tiraram Daniel de lá sem nenhum arranhão. O rei então ordenou que todos respeitassem o Deus de Daniel, o Deus vivo que salva e livra!</p>
                <img src="assets/daniel_10.jpg" alt="Celebração" class="story-image">
            </div>
        `
    },
    {
        id: 9,
        title: "Os Dez Mandamentos",
        cover: "assets/mandamentos_cover.png",
        content: `
            <div class="story-page">
                <h3>Página 1: O Monte Sinai</h3>
                <p>O povo de Deus estava viajando pelo deserto e chegou perto de uma grande montanha chamada Sinai. A montanha tremia e soltava fumaça, pois Deus estava lá.</p>
                <img src="assets/mandamentos_1.png" alt="Monte Sinai fumegando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: Moisés Sobe a Montanha</h3>
                <p>Deus chamou Moisés para subir no topo da montanha. Moisés, corajoso, subiu sozinho para falar com Deus e receber Suas leis.</p>
                <img src="assets/mandamentos_2.png" alt="Moisés subindo a montanha" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: As Tábuas de Pedra</h3>
                <p>Lá no alto, Deus deu a Moisés duas tábuas de pedra. Nelas estavam escritas dez regras muito importantes para o povo viver feliz e em paz.</p>
                <img src="assets/mandamentos_3.png" alt="Moisés com as tábuas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: O Primeiro Mandamento</h3>
                <p>A primeira regra era: "Amem a Deus mais do que qualquer outra coisa". Deus queria ser o melhor amigo de todos.</p>
                <img src="assets/mandamentos_4.png" alt="Amor a Deus" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Respeito e Amor</h3>
                <p>Outras regras ensinavam a respeitar o papai e a mamãe, não brigar e sempre dizer a verdade. Eram regras de amor.</p>
                <img src="assets/mandamentos_5.png" alt="Família feliz" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: O Dia de Descanso</h3>
                <p>Deus também disse para guardar um dia da semana para descansar e lembrar Dele. Um dia especial para a família e para Deus.</p>
                <img src="assets/mandamentos_6.png" alt="Dia de descanso" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: Não Pegue o que não é Seu</h3>
                <p>Outra regra importante era não pegar as coisas dos outros. Devemos ficar felizes com o que temos e respeitar o que é do nosso amigo.</p>
                <img src="assets/mandamentos_7.png" alt="Crianças brincando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Palavras Bondosas</h3>
                <p>Deus ensinou a não falar mentiras sobre as pessoas. Nossas palavras devem ser usadas para ajudar e alegrar, não para machucar.</p>
                <img src="assets/mandamentos_8.png" alt="Conversa amigável" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: Não Tenha Inveja</h3>
                <p>Não devemos ficar tristes porque o amigo tem um brinquedo novo. Deus quer que a gente fique feliz quando coisas boas acontecem com os outros.</p>
                <img src="assets/mandamentos_9.png" alt="Crianças compartilhando" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: O Povo Promete Obedecer</h3>
                <p>Moisés desceu a montanha e leu as regras para o povo. Todos prometeram obedecer a Deus e viver com amor e respeito.</p>
                <img src="assets/mandamentos_10.png" alt="Moisés lendo para o povo" class="story-image">
            </div>
        `
    },
    {
        id: 10,
        title: "A Última Ceia",
        cover: "assets/ceia_cover.png",
        content: `
            <div class="story-page">
                <h3>Página 1: Uma Ceia Especial</h3>
                <p>Jesus sabia que logo teria que ir embora. Então, Ele convidou seus doze amigos especiais, os discípulos, para um jantar muito importante.</p>
                <img src="assets/ceia_1.jpg" alt="Jesus e discípulos à mesa" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 2: Lavando os Pés</h3>
                <p>Antes de comer, Jesus fez algo surpreendente. Ele pegou uma bacia com água e lavou os pés dos seus amigos. Ele queria ensinar que devemos servir uns aos outros.</p>
                <img src="assets/ceia_2.jpg" alt="Jesus lavando pés" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 3: O Pão</h3>
                <p>Durante o jantar, Jesus pegou o pão, agradeceu a Deus e dividiu com os amigos. Ele disse: "Comam, isto é o meu corpo dado por vocês".</p>
                <img src="assets/ceia_3.jpg" alt="Jesus partindo o pão" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 4: O Vinho</h3>
                <p>Depois, Ele pegou um copo com suco de uva e disse: "Bebam, isto representa o meu sangue, que é derramado por amor a vocês".</p>
                <img src="assets/ceia_4.jpg" alt="Jesus com o cálice" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 5: Um Novo Mandamento</h3>
                <p>Jesus olhou com carinho para seus amigos e disse: "Eu dou a vocês um novo mandamento: Amem uns aos outros como eu amei vocês".</p>
                <img src="assets/ceia_5.jpg" alt="Jesus ensinando amor" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 6: A Promessa</h3>
                <p>Os discípulos estavam tristes, mas Jesus os consolou. "Não fiquem tristes", disse Ele. "Eu vou preparar um lugar lindo para vocês no céu."</p>
                <img src="assets/ceia_6.jpg" alt="Jesus consolando discípulos" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 7: O Amigo Traidor</h3>
                <p>Jesus sabia que um de seus amigos, Judas, iria entregá-lo aos soldados. Ele ficou triste, mas sabia que tudo isso fazia parte do plano de Deus.</p>
                <img src="assets/ceia_7.jpg" alt="Jesus e Judas" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 8: Pedro Promete</h3>
                <p>Pedro, outro amigo, disse: "Eu nunca vou te abandonar, Jesus!". Mas Jesus sabia que Pedro ficaria com medo antes do galo cantar.</p>
                <img src="assets/ceia_8.jpg" alt="Pedro falando com Jesus" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 9: Oração no Jardim</h3>
                <p>Depois do jantar, eles foram para um jardim orar. Jesus pediu aos amigos para ficarem acordados com Ele, mas eles estavam com muito sono.</p>
                <img src="assets/ceia_9.jpg" alt="Jesus orando no jardim" class="story-image">
            </div>
            <div class="story-page">
                <h3>Página 10: Sempre Conosco</h3>
                <p>A Última Ceia nos lembra do grande amor de Jesus. Ele prometeu estar sempre conosco, em nossos corações, todos os dias.</p>
                <img src="assets/ceia_10.jpg" alt="Jesus sorrindo" class="story-image">
            </div>
        `
    }
];

// Estado da Aplicação
const state = {
    isAuthenticated: false,
    currentBook: null
};

// Elementos do DOM (Inicializados em init)
let screens = {};
let loginForm = null;
let booksGrid = null;
let backToShelfBtn = null;
let currentBookTitle = null;
let readerContent = null;
let prevPageBtn = null;
let nextPageBtn = null;
let pageIndicator = null;

// Inicialização
function init() {
    // Inicializar elementos do DOM
    screens = {
        login: document.getElementById('login-screen'),
        bookshelf: document.getElementById('bookshelf-screen'),
        reader: document.getElementById('reader-screen')
    };
    loginForm = document.getElementById('login-form');
    booksGrid = document.getElementById('books-grid');
    backToShelfBtn = document.getElementById('back-to-shelf');
    currentBookTitle = document.getElementById('current-book-title');
    readerContent = document.getElementById('reader-content');
    prevPageBtn = document.getElementById('prev-page');
    nextPageBtn = document.getElementById('next-page');
    pageIndicator = document.getElementById('page-indicator');

    checkAuth();
    renderBooks();
    setupListeners();
}

// Autenticação
function checkAuth() {
    const savedAuth = sessionStorage.getItem('auth');
    if (savedAuth === 'true') {
        state.isAuthenticated = true;
        showScreen('bookshelf');
    } else {
        showScreen('login');
    }
}

function login(password) {
    // Senha simples hardcoded conforme solicitado
    if (password.toLowerCase().trim() === 'jesus') {
        state.isAuthenticated = true;
        sessionStorage.setItem('auth', 'true');
        showScreen('bookshelf');
    } else {
        alert('Palavra mágica incorreta! Tente novamente.');
    }
}

// Navegação
function showScreen(screenName) {
    // Esconde todas
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
            // Remove hidden apenas se for o target, adiciona se não for
            // Mas para simplificar e garantir:
            // screen.classList.add('hidden'); // Isso pode causar flash, melhor usar active
        }
    });

    // Mostra a desejada
    const target = screens[screenName];
    if (target) {
        target.classList.remove('hidden'); // Garante que não está hidden
        // Pequeno delay para permitir transição CSS se houver
        setTimeout(() => target.classList.add('active'), 10);
    }
}

// Renderização
function renderBooks() {
    if (!booksGrid) return;
    booksGrid.innerHTML = books.map(book => `
    <div class="book-card" onclick="openBook(${book.id})">
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
        </div>
    </div>
    `).join('');
}

// Ações do Leitor
let currentBookPages = [];
let currentPageIndex = 0;

window.openBook = function (id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    state.currentBook = book;
    if (currentBookTitle) currentBookTitle.textContent = book.title;

    // Parse do conteúdo para separar páginas
    const parser = new DOMParser();
    const doc = parser.parseFromString(book.content, 'text/html');
    const pages = doc.querySelectorAll('.story-page');

    if (pages.length > 0) {
        currentBookPages = Array.from(pages).map(p => p.outerHTML);
    } else {
        // Fallback
        currentBookPages = [`<div class="story-page"><p>${book.content}</p></div>`];
    }

    currentPageIndex = 0;
    updateReader();
    showScreen('reader');
}

function updateReader() {
    if (!readerContent) return;

    // Renderiza página atual
    readerContent.innerHTML = currentBookPages[currentPageIndex];

    // Atualiza indicador
    if (pageIndicator) pageIndicator.textContent = `Página ${currentPageIndex + 1} de ${currentBookPages.length}`;

    // Atualiza estado dos botões
    if (prevPageBtn) prevPageBtn.disabled = currentPageIndex === 0;
    if (nextPageBtn) nextPageBtn.disabled = currentPageIndex === currentBookPages.length - 1;
}

function nextPage() {
    if (currentPageIndex < currentBookPages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    }
}

window.downloadPDF = function () {
    if (!state.currentBook) return;

    // Open a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Por favor, permita popups para baixar o PDF.');
        return;
    }

    // Construct the full HTML for the book
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${state.currentBook.title}</title>
            <style>
                body { 
                    font-family: 'Nunito', Arial, sans-serif; 
                    padding: 40px; 
                    max-width: 800px; 
                    margin: 0 auto; 
                }
                h1 { 
                    text-align: center; 
                    color: #2c3e50; 
                    margin-bottom: 40px; 
                    font-family: 'Fredoka One', cursive;
                }
                .story-page { 
                    page-break-after: always; 
                    margin-bottom: 40px; 
                    border: 1px solid #eee; 
                    padding: 30px; 
                    border-radius: 15px;
                    text-align: center;
                }
                .story-page:last-child { 
                    page-break-after: auto; 
                }
                h3 {
                    color: #e67e22;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 20px;
                }
                img { 
                    max-width: 100%; 
                    height: auto; 
                    max-height: 500px;
                    display: block; 
                    margin: 0 auto; 
                    border-radius: 10px; 
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                @media print {
                    body { padding: 0; }
                    .story-page { border: none; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <h1>${state.currentBook.title}</h1>
            ${state.currentBook.content}
            <div class="no-print" style="text-align: center; margin-top: 20px; padding: 20px; background: #f0f8ff; border-radius: 8px;">
                <p><strong>Para salvar como PDF:</strong></p>
                <p>1. No destino da impressão, escolha "Salvar como PDF".</p>
                <p>2. Clique em "Salvar".</p>
            </div>
            <script>
                // Wait for images to load before printing
                window.onload = function() {
                    // Small delay to ensure layout is stable
                    setTimeout(function() {
                        window.print();
                    }, 1000);
                };
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// Event Listeners
function setupListeners() {
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const passwordInput = document.getElementById('access-code');
            if (passwordInput) {
                login(passwordInput.value);
            }
        });
    }

    if (backToShelfBtn) {
        backToShelfBtn.addEventListener('click', () => {
            showScreen('bookshelf');
            state.currentBook = null;
        });
    }

    const downloadBtn = document.getElementById('download-pdf');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', window.downloadPDF);
    }

    if (prevPageBtn) prevPageBtn.addEventListener('click', prevPage);
    if (nextPageBtn) nextPageBtn.addEventListener('click', nextPage);

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (!state.currentBook) return;
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
    });
}

// Iniciar
document.addEventListener('DOMContentLoaded', init);
