function guardar(){
    let b = document.getElementById("banda").value
    let a = document.getElementById("album").value
    let g = document.getElementById("generos").value
    let p = document.getElementById("pais").value
    let añ = parseInt(document.getElementById("año").value)
    let i = document.getElementById("imagen").value

    let producto={
        banda: b,
        album: a,
        generos: g,
        pais: p,
        año: añ,
        imagen: i
    }

    //let url = .........
    var options={
        body: JSON.stringify(producto),
        method: 'POST',
        headers:{'content-type': 'application/json'},
    }
    fetch(url, options)
    .then(function(){
        console.log("Creando álbum")
        alert("El álbum fue creado con éxito")
        window.location.href="../albums.html"
    })
    .catch(err =>{
        alert("Error al crear un álbum")
        console.error(err);
    })
}