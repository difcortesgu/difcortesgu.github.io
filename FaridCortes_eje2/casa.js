var fondo;
var b_puerta, b_chimenea, b_cama, b_techo, b_mesa,b_sofa,b_estufa,b_lavadora,b_escalera,b_tina;
var s_puerta, s_chimenea, s_cama, s_techo, s_mesa,s_sofa,s_estufa,s_lavadora,s_escalera,s_tina;
var puerta, chimenea, cama, techo, mesa,sofa,estufa,lavadora,escalera,tina;
var borrado;
var casa = new Phaser.Game(1125, 762, Phaser.AUTO, 'CASA', {
    preload: preload,
    create: create,update: update
});
function preload() {
    //IMAGENES

    //casa
    casa.load.image('casa', 'imagenes/casa final.jpg');


    //partes
    casa.load.spritesheet('boton', 'imagenes/boton.png', 33, 35);
    casa.load.spritesheet('puerta', 'imagenes/puerta.png', 101, 128);
    casa.load.spritesheet('chimenea', 'imagenes/chimenea.png', 100, 144);
    casa.load.spritesheet('cama', 'imagenes/cama.png', 161, 91);
    casa.load.spritesheet('techo', 'imagenes/techo.png', 977, 257);
    casa.load.spritesheet('mesa', 'imagenes/mesa.png', 141, 80);
    casa.load.spritesheet('sofa', 'imagenes/sofa.png', 161, 76);
    casa.load.spritesheet('estufa', 'imagenes/estufa.png', 89.25, 98);
    casa.load.spritesheet('lavadora', 'imagenes/lavadora.png', 76, 82);
    casa.load.spritesheet('escalera', 'imagenes/escalera.png', 151, 117);
    casa.load.spritesheet('tina', 'imagenes/tina.png', 122, 68);

    //SONIDOS
    casa.load.audio('comignolo', 'sonidos/comignolo.wav');
    casa.load.audio('divano', 'sonidos/divano.wav');
    casa.load.audio('fornello', 'sonidos/fornello.wav');
    casa.load.audio('lavatrice', 'sonidos/lavatrice.wav');
    casa.load.audio('letto', 'sonidos/letto.wav');
    casa.load.audio('porta', 'sonidos/porta.wav');
    casa.load.audio('scala', 'sonidos/scala.wav');
    casa.load.audio('tavola', 'sonidos/tavola.wav');
    casa.load.audio('tetto', 'sonidos/tetto.wav');
    casa.load.audio('vasca', 'sonidos/vasca.wav');
    

}

function create() {
    //ESTILOS   
    estilo_it = {
        font: "30px Arial",
        fill: "#000000"
    };
    estilo_es = {
        font: "30px Arial",
        fill: "#ec5818"
    };
    //FONDO
    fondo = casa.add.tileSprite(0, 0, 1125, 762, 'casa');

    //BOTONES
    puerta = casa.add.sprite(425, 268, 'puerta');
    b_puerta = casa.add.button(425, 268, 'boton', f_puerta, this, 1, 0, 2);
    puerta.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_puerta.anchor.setTo(0.5);
    puerta.anchor.setTo(0.5);

    chimenea = casa.add.sprite(987, 110, 'chimenea');
    b_chimenea = casa.add.button(987, 110, 'boton', f_chimenea, this, 1, 0, 2);
    chimenea.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_chimenea.anchor.setTo(0.5);
    chimenea.anchor.setTo(0.5);

    cama = casa.add.sprite(979, 294, 'cama');
    b_cama = casa.add.button(979, 294, 'boton', f_cama, this, 1, 0, 2);
    cama.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_cama.anchor.setTo(0.5);
    cama.anchor.setTo(0.5);

    techo = casa.add.sprite(141, 264, 'techo');
    b_techo = casa.add.button(599, 20, 'boton', f_techo, this, 1, 0, 2);
    techo.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_techo.anchor.setTo(0.5);
    techo.anchor.setTo(0, 1);

    mesa = casa.add.sprite(617, 527, 'mesa');
    b_mesa = casa.add.button(617, 527, 'boton', f_mesa, this, 1, 0, 2);
    mesa.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_mesa.anchor.setTo(0.5);
    mesa.anchor.setTo(0.5);
    
    sofa = casa.add.sprite(924, 525, 'sofa');
    b_sofa = casa.add.button(924, 525, 'boton', f_sofa, this, 1, 0, 2);
    sofa.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_sofa.anchor.setTo(0.5);
    sofa.anchor.setTo(0.5);
    
    estufa = casa.add.sprite(396, 518, 'estufa');
    b_estufa = casa.add.button(396, 518, 'boton', f_estufa, this, 1, 0, 2);
    estufa.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_estufa.anchor.setTo(0.5);
    estufa.anchor.setTo(0.5);
    
        lavadora = casa.add.sprite(865, 682, 'lavadora');
    b_lavadora = casa.add.button(865, 682, 'boton', f_lavadora, this, 1, 0, 2);
    lavadora.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_lavadora.anchor.setTo(0.5);
    lavadora.anchor.setTo(0.5);

        escalera = casa.add.sprite(274, 671, 'escalera');
    b_escalera = casa.add.button(234, 686, 'boton', f_escalera, this, 1, 0, 2);
    escalera.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_escalera.anchor.setTo(0.5);
    escalera.anchor.setTo(0.5);
    
        tina = casa.add.sprite(681, 308, 'tina');
    b_tina = casa.add.button(681, 308, 'boton', f_tina, this, 1, 0, 2);
    tina.animations.add('brillo', [0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0], 15, false);
    b_tina.anchor.setTo(0.5);
    tina.anchor.setTo(0.5);

    //TEXTOS
    puerta_it = casa.add.text(80, 80, "PORTA", estilo_it);
    puerta_es = casa.add.text(80, 120, "puerta", estilo_es);
    puerta_it.visible = false;
    puerta_es.visible = false;

    chimenea_it = casa.add.text(80, 80, "COMIGNOLO", estilo_it);
    chimenea_es = casa.add.text(80, 120, "chimenea", estilo_es);
    chimenea_it.visible = false;
    chimenea_es.visible = false;

    cama_it = casa.add.text(80, 80, "LETTO", estilo_it);
    cama_es = casa.add.text(80, 120, "cama", estilo_es);
    cama_it.visible = false;
    cama_es.visible = false;

    techo_it = casa.add.text(80, 80, "TETTO", estilo_it);
    techo_es = casa.add.text(80, 120, "techo", estilo_es);
    techo_it.visible = false;
    techo_es.visible = false;

    mesa_it = casa.add.text(80, 80, "TAVOLA", estilo_it);
    mesa_es = casa.add.text(80, 120, "mesa", estilo_es);
    mesa_it.visible = false;
    mesa_es.visible = false;

    sofa_it = casa.add.text(80, 80, "DIVANO", estilo_it);
    sofa_es = casa.add.text(80, 120, "sofá", estilo_es);
    sofa_it.visible = false;
    sofa_es.visible = false;

    estufa_it = casa.add.text(80, 80, "FORNELLO", estilo_it);
    estufa_es = casa.add.text(80, 120, "estufa", estilo_es);
    estufa_it.visible = false;
    estufa_es.visible = false;
    
    lavadora_it = casa.add.text(80, 80, "LAVATRICE", estilo_it);
    lavadora_es = casa.add.text(80, 120, "lavadora", estilo_es);
    lavadora_it.visible = false;
    lavadora_es.visible = false;    
    
    escalera_it = casa.add.text(80, 80, "ESCALA", estilo_it);
    escalera_es = casa.add.text(80, 120, "escalera", estilo_es);
    escalera_it.visible = false;
    escalera_es.visible = false;    
    
    tina_it = casa.add.text(80, 80, "VASCA", estilo_it);
    tina_es = casa.add.text(80, 120, "tina", estilo_es);
    tina_it.visible = false;
    tina_es.visible = false;    
    
    
    //AUDIOS
    s_chimenea = casa.add.audio('comignolo');
    s_sofa = casa.add.audio('divano');
    s_estufa = casa.add.audio('fornello');
    s_lavadora = casa.add.audio('lavatrice');
    s_cama = casa.add.audio('letto');
    s_techo = casa.add.audio('tetto');
    s_escalera = casa.add.audio('scala');
    s_mesa = casa.add.audio('tavola');
    s_tina = casa.add.audio('vasca');
    s_puerta = casa.add.audio('porta');
}

//FUNCIONES
function parar(){
    puerta.animations.stop('brillo');
    puerta_it.visible = false;
    puerta_es.visible = false;
    
    chimenea.animations.stop('brillo');
    chimenea_it.visible = false;
    chimenea_es.visible = false;

    cama.animations.stop('brillo');
    cama_it.visible = false;
    cama_es.visible = false;

    techo.animations.stop('brillo');
    techo_it.visible = false;
    techo_es.visible = false;
    
    mesa.animations.stop('brillo');
    mesa_it.visible = false;
    mesa_es.visible = false;
    
    sofa.animations.stop('brillo');
    sofa_it.visible = false;
    sofa_es.visible = false;

    estufa.animations.stop('brillo');
    estufa_it.visible = false;
    estufa_es.visible = false;

    lavadora.animations.stop('brillo');
    lavadora_it.visible = false;
    lavadora_es.visible = false;
    
    escalera.animations.stop('brillo');
    escalera_it.visible = false;
    escalera_es.visible = false;

    tina.animations.stop('brillo');
    tina_it.visible = false;
    tina_es.visible = false;
}


function f_puerta() {
    parar();
    puerta.animations.play('brillo');
    puerta_it.visible = true;
    puerta_es.visible = true;
    s_puerta.play();

}

function f_chimenea() {
    parar();
    chimenea.animations.play('brillo');
    chimenea_it.visible = true;
    chimenea_es.visible = true;
    s_chimenea.play();
}

function f_cama() {
    parar();
    cama.animations.play('brillo');
    cama_it.visible = true;
    cama_es.visible = true;
    s_cama.play();
}

function f_techo() {
    parar();
    techo.animations.play('brillo');
    techo_it.visible = true;
    techo_es.visible = true;
    s_techo.play();
}

function f_mesa() {
    parar();
    mesa.animations.play('brillo');
    mesa_it.visible = true;
    mesa_es.visible = true;
    s_mesa.play();
}

function f_sofa() {
    parar();
    sofa.animations.play('brillo');
    sofa_it.visible = true;
    sofa_es.visible = true;
    s_sofa.play();
}

function f_estufa() {
    parar();
    estufa.animations.play('brillo');
    estufa_it.visible = true;
    estufa_es.visible = true;
    s_estufa.play();
}

function f_lavadora() {
    parar();
    lavadora.animations.play('brillo');
    lavadora_it.visible = true;
    lavadora_es.visible = true;
    s_lavadora.play();
}

function f_escalera() {
    parar();
    escalera.animations.play('brillo');
    escalera_it.visible = true;
    escalera_es.visible = true;
    s_escalera.play();
}

function f_tina() {
    parar();
    tina.animations.play('brillo');
    tina_it.visible = true;
    tina_es.visible = true;
    s_tina.play();
}

function update() {}
