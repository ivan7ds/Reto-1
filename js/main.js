var brand_1 = new Array ("-","DUT","UTQ");
var brand_2 = new Array ("-", "OYS","BSK");
var brand_3 = new Array ("-", "STR","ZHO");
var brand_4 = new Array ("-", "LFT","PUL");
        
function itx_split(){
    var split;
    //Se toma el vamor de la "split seleccionada"
    split = document.formulario1.split[document.formulario1.split.selectedIndex].value;
    //se chequea si la "split" esta definida
    if(split!=0){
    //selecionamos las splits Correctas
        mis_brands=eval("brand_" + split);
        //se calcula el numero de splits
        num_brands=mis_brands.length;
        //marco el numero de brand en el select
        document.formulario1.brand.length = num_brands;
        //para cada brand del array, la pongo en el select
        for(i=0; i<num_brands; i++){
             document.formulario1.brand.options[i].value=mis_brands[i];
            document.formulario1.brand.options[i].text=mis_brands[i];
        }
    }else{
    //si no habia ninguna brand seleccionada, elimino las splits del select
        document.formulario1.brand.length = 1;
        //ponemos un guion en la unica brand que he dejado
        document.formulario1.brand.options[0].value="-";
        document.formulario1.brand.options[0].text="-";
    }
    //hacer un reset de las brands
    document.formulario1.brand.options[0].selected = true;     
}