var opt_1 = new Array ("-","DUT","UTQ");
var opt_2 = new Array ("-", "OYS","BSK");
var opt_3 = new Array ("-", "STR","ZHO");
var opt_4 = new Array ("-", "LFT","PUL");
        
function itx_split(){
    var split;
    //Se toma el vamor de la "split seleccionada"
    split = document.formulario1.split[document.formulario1.split.selectedIndex].value;
    //se chequea si la "split" esta definida
    if(split!=0){
    //selecionamos las splits Correctas
        mis_opts=eval("opt_" + split);
        //se calcula el numero de splits
        num_opts=mis_opts.length;
        //marco el numero de opt en el select
        document.formulario1.opt.length = num_opts;
        //para cada opt del array, la pongo en el select
        for(i=0; i<num_opts; i++){
             document.formulario1.opt.options[i].value=mis_opts[i];
            document.formulario1.opt.options[i].text=mis_opts[i];
        }
    }else{
    //si no habia ninguna opt seleccionada, elimino las splits del select
        document.formulario1.opt.length = 1;
        //ponemos un guion en la unica opt que he dejado
        document.formulario1.opt.options[0].value="-";
        document.formulario1.opt.options[0].text="-";
    }
    //hacer un reset de las opts
    document.formulario1.opt.options[0].selected = true;     
}