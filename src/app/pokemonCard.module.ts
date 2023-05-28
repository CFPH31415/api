export class pokemonCard{
    name!:string;
    id!:number;
    sprite!:string;
    spriteShiny!:string;
    tipo1!:string;
    tipo2!:string;
    color1!:string;
    color2!:string;
    habilidad!:string;
    skill1!:string;
    skill2!:string
    peso!:number;
    height!:number;

    constructor(name:string,
        id:number, 
        sprite:string,
        spriteShiny:string, 
        tipo1:string, 
        tipo2:string, 
        color1:string, 
        color2:string, 
        habilidad:string,
        skill1:string,
        skill2:string,
        peso:number,
        height:number
        ){

        this.name=name;
        this.id=id;
        this.sprite=sprite;
        this.spriteShiny=spriteShiny;
        this.tipo1=tipo1;
        this.tipo2=tipo2;
        this.color1=color1;
        this.color2=color2;
        this.habilidad=habilidad;
        this.skill1=skill1,
        this.skill2=skill2,
        this.peso=peso,
        this.height=height
    }
}