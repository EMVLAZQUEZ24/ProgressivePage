console.log(location.search)
var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for(let i=0; i<args.length; ++i){
    parts[i]= args[i].split('=');
}
console.log(parts)

document.getElementById("id"),value=decodeURIComponent(parts[0][1])
document.getElementById("banda"),value=decodeURIComponent(parts[1][1])
document.getElementById("album"),value=decodeURIComponent(parts[2][1])
document.getElementById("generos"),value=decodeURIComponent(parts[3][1])
document.getElementById("pais"),value=decodeURIComponent(parts[4][1])
document.getElementById("año"),value=decodeURIComponent(parts[5][1])
document.getElementById("imagen"),value=decodeURIComponent(parts[6][1])

function modificar(){
    let id = document.getElementById("id").value
    let b = document.getElementById("banda").value
    let a = document.getElementById("album").value
    let g = document.getElementById("generos").value
    let p = document.getElementById("pais").value
    let añ = parseInt(document.getElementById("año").value)
    let i = document.getElementById("imagen").value

    let producto={
        banda:n,
        album:a,
        generos:g,
        pais:p,
        año:añ,
        imagen:i
    }

    //let url=..........
    var options={
        body: JSON.stringify(producto),
        method: 'PUT',
        header: {'content-type': 'application/json'},
        redirect: 'follow'
    }
    fetch(url, options)
    .then(function(){
        console.log("El álbum fue modificado")
        alert("Álbum modificado")
        window.location.href="../albums.html"
    })
    .catch(err =>{
        console.error(err);
        alert("Error al modificar el álbum")
    })
}