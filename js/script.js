function girar(){
    var graus = Math.round(Math.random() * 8 + 1) * 45;
    var pos = (document.getElementById('roleta').style['transform']).replace('rotate(','').replace('deg)','');
    if (pos !== '') {
        graus += parseInt(pos);
    }    
    graus += 742;    
    document.getElementById('roleta').style['transform'] = 'rotate(' + graus + 'deg)';
};


