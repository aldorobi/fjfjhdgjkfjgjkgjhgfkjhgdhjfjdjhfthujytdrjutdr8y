var video = "video"
var fifi = "s por que si";
var unos_sabritones = "ricos";
var una_coquita = "rica";
var input = "value";
var satanatus = "status";
var seicientos_secentaYseis = true;
function setup (){
    canvas = createCanvas(700,700);
    canvas.center();
    video = createCapture(680,680);
    video.hide();
}
function draw(){
image(video,680,680);
console.log("listo =)")

}
function start(){
  fifi = ml5.objectDetector("unos_sabritones","cocossd","una_coquita","modelLoaded");
    document.getElementById("un_ginomo_estaba_caminando").innerHTML = "esperate a que el coco se coma sus sabritones...." + "<br> ....listo";
    input = document.getElementById("y_percebeu_o_sapu_moreuuuuu");

}
function modelLoaded(){
    console.log("perro sarandeado.."+"<br>..gato sarandeado")
    satanatus = seicientos_secentaYseis;
}