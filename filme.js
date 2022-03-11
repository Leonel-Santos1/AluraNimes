var listaConteudo = ["https://static3.mangalivre.net/cdnwp3/capas/IUQzYHNu_qeq5mosQv6wLw/7702/602ef3532b765external_cover.jpg",
    "https://static3.mangalivre.net/cdnwp3/capas/OjSWr60AKaoJbDAHl32TJQ/13372/61189fba41ea8external_cover.jpg",
    "https://static3.mangalivre.net/cdnwp3/capas/w9TRaLrMhPKTjBP09TZftQ/2692/621e5d9221ccdexternal_cover.jpg"
]



function Enviar() {
    var imgUsuario = document.getElementById("link").value
    listaConteudo.push(imgUsuario)
    Exibe()
}
function Exibe() {
    var exibe = document.getElementById("Conteudo")
    exibe.innerHTML = ""
    for (var i = 0; i < listaConteudo.length; i++) {
        exibe.innerHTML += (`<img class="imgConteudo" src="${listaConteudo[i]}">`)
    }
 
}

Exibe()



