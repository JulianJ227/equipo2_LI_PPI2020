const {Router} = require('express');
const router = Router();

const mysqlConnection = require('./db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})


////////////////////////////////PRODUCTO////////////////////////////////
//Petición GET a tabla producto
// YA ESTA LISTA 

router.get('/producto',(req,res)=>{
    mysqlConnection.query('SELECT * FROM PRODUCTO',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})

//Petición POST a tabla producto
router.post('/producto',(req,res)=>{
const {CODIGO_PRODUCTO, CATEGORIA, DESCRIPCION, PRECIO} = req.body;
let nproducto = [CODIGO_PRODUCTO, CATEGORIA, DESCRIPCION, PRECIO];
let nuevoproducto = `INSERT INTO PRODUCTO (CODIGO_PRODUCTO, CATEGORIA, DESCRIPCION, PRECIO)
                  VALUES(?,?,?,?)`;
mysqlConnection.query(nuevoproducto, nproducto, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`PRODUCTO INGRESADO / REGISTRADO`, })
  });
}); 



////////////////////////////////CLIENTE////////////////////////////////

router.get('/cliente', (req, res) => {  
  mysqlConnection.query('SELECT * FROM CLIENTE ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


router.get('/cliente/:id',(req,res)=>{
  let CLIENTE = req.params.id
    mysqlConnection.query('SELECT * FROM CLIENTE WHERE CODIGO_CLIENTE=? ',CLIENTE,
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
}) 
/*

router.post('/cliente',(req,res)=>{

const {NOMBRE,APELLIDO,TELEFONO,CODIGO_REGISTRO} = req.body;
let cliente = [NOMBRE,APELLIDO,TELEFONO,CODIGO_REGISTRO];
let nuevocliente = `INSERT INTO CLIENTE (NOMBRE, APELLIDO,TELEFONO,CODIGO_REGISTRO) VALUES (?,?,?,?)`;
mysqlConnection.query(nuevocliente, cliente, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Cliente registrado`, })
  });
}); 

*/

router.post('/cliente', (req, res) => {
    const {CODIGO_CLIENTE,NOMBRE,APELLIDO,TELEFONO,CODIGO_REGISTRO} = req.body
    let CLIENTE = [CODIGO_CLIENTE,NOMBRE,APELLIDO,TELEFONO,CODIGO_REGISTRO];
    let NUEVOCLIENTE = `INSERT INTO CLIENTE VALUES (?,?,?,?,?);`

   mysqlConnection.query(NUEVOCLIENTE,CLIENTE, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Cliente Ingresado`})
   });
  });



////////////////////////////////TIENDA////////////////////////////////


router.get('/tiendas',(req,res)=>{
    mysqlConnection.query('SELECT * FROM TIENDA',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})



//YA SIRVE 
  router.post('/tiendas', (req, res) => {
    const {CODIGO_TIENDA,TELEFONO,BARRIO,CALLE,INTERIOR} = req.body
    let TIENDA = [CODIGO_TIENDA,TELEFONO,BARRIO,CALLE,INTERIOR];
    let NUEVATIENDA = `INSERT INTO TIENDA VALUES (?,?,?,?,?);`

   mysqlConnection.query(NUEVATIENDA,TIENDA, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`TIENDA REGISTRADA `})
   });
  });




////////////////////////////////REGISTRO////////////////////////////////

router.get('/registro',(req,res)=>{
    mysqlConnection.query('SELECT * FROM REGISTRO',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})

/*

router.post('/registro',(req,res)=>{
const {CODIGO_REGISTRO,NOMBRE_USUARIO,INICIAR_CON_FACEBOOK,INICIAR_CON_GOOGLE,CONTRASENA} = req.body;
let REGISTRO = [CODIGO_REGISTRO,NOMBRE_USUARIO,INICIAR_CON_FACEBOOK,INICIAR_CON_GOOGLE,CONTRASENA];
let NUEVOREGISTRO= `INSERT INTO REGISTRO VALUES(?,?,?,?,?)`;

mysqlConnection.query(NUEVOREGISTRO,REGISTRO, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`REGISTRO EXITOSO`, })
  });
});
*/


router.post('/registro', (req, res) => {
    const {CODIGO_REGISTRO,NOMBRE_USUARIO,INICIAR_CON_FACEBOOK,INICIAR_CON_GOOGLE,CONTRASENA} = req.body
    let REGISTRO = [CODIGO_REGISTRO,NOMBRE_USUARIO,INICIAR_CON_FACEBOOK,INICIAR_CON_GOOGLE,CONTRASENA];
    let NUEVOREGISTRO = `INSERT INTO REGISTRO VALUES (?,?,?,?,?);`

   mysqlConnection.query(NUEVOREGISTRO,REGISTRO, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Cliente Ingresado`})
   });
  });



////////////////////////////////INVENTARIO///////////////////////////////


router.get('/inventario',(req,res)=>{
    mysqlConnection.query('SELECT * FROM INVENTARIO',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})


router.post('/inventario', (req, res) => {
    const {CODIGO_INVENTARIO,DESCRIPCION,CODIGO_TIENDA} = req.body
    let INVENTARIO = [CODIGO_INVENTARIO,DESCRIPCION,CODIGO_TIENDA];
    let NUEVOINVENTARIO = `INSERT INTO INVENTARIO VALUES (?,?,?);`

   mysqlConnection.query(NUEVOINVENTARIO,INVENTARIO, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Bien Registrado`})
   });
  });

////////////////////////////////PROMOCION////////////////////////////////

router.get('/promocion',(req,res)=>{
    mysqlConnection.query('SELECT * FROM PROMOCION',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})



 router.post('/promocion', (req, res) => {
    const {CODIGO_PROMOCION,PRECIO,CODIGO_TIENDA} = req.body
    let PROMOCION = [CODIGO_PROMOCION,PRECIO,CODIGO_TIENDA];
    let NUEVAPROMOCION = `INSERT INTO PROMOCION VALUES (?,?,?);`

   mysqlConnection.query(NUEVAPROMOCION,PROMOCION, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Promocion Registrado`})
   });
  });





//////////////////////PEDIDO////////////////////////////
/*

    //Petición post
   router.post('/pedido', (req, res) => {
    const {CODIGO_PEDIDO,TELEFONO,BARRIO,CALLE,INTERIOR,CODIGO_CLIENTE} =req.params
    let PEDIDO = [CODIGO_PEDIDO,TELEFONO,BARRIO,CALLE,INTERIOR,CODIGO_CLIENTE];
    let NUEVOPEDIDO = `INSERT INTO PEDIDO VALUES (?,?,?,?,?,?);`

   mysqlConnection.query(NUEVOPEDIDO,PEDIDO, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Pedido Ingresado`})
   });
  });




router.get('/pedido',(req,res)=>{
    mysqlConnection.query('SELECT * FROM PEDIDO',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})



  router.post('/produin', (req, res) => {
    const {CODIGO_INVENTARIO,CODIGO_PRODUCTO} = req.body
    let PRODUCTO_INVENTARIO = [CODIGO_INVENTARIO,CODIGO_PRODUCTO];
    let NUEVOPRODUCTO_INVENTARIO = `INSERT INTO PRODUCTO_INVENTARIO VALUES (?,?);`

   mysqlConnection.query(NUEVOPRODUCTO_INVENTARIO,PRODUCTO_INVENTARIO, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Bien Registrado`})
   });
  });

*/


//POST DE PRODUCTO 
//YA ESTA LISTO 



 



     //Petición put
  router.put('/inventario/:id', (req,res) => {
  const {DESCRIPCION} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE INVENTARIO SET INVENTARIO = ? WHERE CODIGO_INVENTARIO = ?`,[DESCRIPCION,id], (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

/*

 router.put('/promocion/:id', (req,res) => {
  const {PRECIO} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE PROMOCION SET PROMOCION = ? WHERE ID_TIPO = ?`,[PRomocion,id], (err, rows,fields) => {
   if(!err){
    res.json({status: `la promocion ha sido modificado `});
   }else{
     console.log(err);
   }
});
});
*/

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/promocion/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM PROMOCION WHERE CODIGO_PROMOCION =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `la promocion se ha eliminado`})
      }else{
        console.log(err);
      }
    });
  });

router.delete('/cliente/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM CLIENTE WHERE CODIGO_CLIENTE =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Se ha eliminado el cliente`})
      }else{
        console.log(err);
      }
    });
  });



module.exports = router; 