const boton = document.querySelector('#boton').addEventListener('click', captura );
const h2 =document.querySelector('#nombre');
const h3 =document.querySelector('#precio');

function captura() {
    const ID = document.querySelector('#input').value;
    const IdNumber = parseInt (document.querySelector('#input').value);
    comida.forEach (element => {
      //console.log('valor ingresado',ID);
      
     if (IdNumber === element.id)
               {h2.textContent = element.nombre; 
               h3.textContent = element.precio;}
     else if (ID=== '') 
               {h2.textContent = 'ERROR'; 
               h3.textContent = 'NO INGRESO VALOR';}
     else if (ID > element.id) 
              {h2.textContent = 'ERROR'; 
               h3.textContent = 'VALOR INVALIDO';}
          })
  }


////////////////////////////////////////////////////////////////////////////////////

    class Pizza {
        constructor (id,nombre,[...ingredientes],precio){  
          this.id = id;
          this.nombre = nombre;
          this.ingredientes = [ingredientes];
          this.precio = precio;
        }
      }
    
      const muzza = new Pizza(1,'muzzarella',['tomate', 'muzzarella'] ,700);
      const napo = new Pizza(2,'napolitana',['muzzarella', 'jamon', 'morron'],1000);
      const huevoFrito = new Pizza(3,'huevo frito',['huevo frito', 'muzzarella'],800);
      const anana = new Pizza(4,'anana',['muzzarella', 'anana'],1200);
      const carne = new Pizza(5,'carne',['muzzarella', 'carne'],1250);
      const amchoas = new Pizza(6,'anchoas',['muzzarella', 'anchoas'],1400);
      
     let comida = [muzza,napo,fuga,cala,jaMorron,especial];