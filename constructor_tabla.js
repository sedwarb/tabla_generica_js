const encabezados = ["Nombre","Apellido","Edad","Telefono"],
cuerpo = [
    {
        nombre : "Pepe",
        apellido : "Montenegro",
        edad : "18",
        telefono : "3133206723"
    },
    {
        nombre : "Samanta",
        apellido : "Echeverri",
        edad : "23",
        telefono : "3133206723"
    },
    {
        nombre : "Ana",
        apellido : "Santiago",
        edad : "30",
        telefono : "3133206723"
    }
]

function construccion_tabla(encabezados, cuerpo, id_tbody, id_tabla, id_posicion) {
    const tabla = document.createElement("table"),
    thead = document.createElement("thead"),
    tbody = document.createElement("tbody"),
    posicion_tabla_1 = document.getElementById(id_posicion)

    tbody.id = id_tbody
    tabla.id = id_tabla
    
    for (let i = 0; i < encabezados.length; i++) {
        const th_temp = document.createElement("th")
        th_temp.innerText = encabezados[i]
        thead.appendChild(th_temp)
    }

    for (let i = 0; i < cuerpo.length; i++) {
        const tr_temp = document.createElement("tr")

        for (const key in cuerpo[i]) {
            const td_temp = document.createElement("td")
            td_temp.innerText = cuerpo[i][key]
            tr_temp.appendChild(td_temp)
        }
        tbody.appendChild(tr_temp)
    }

    tabla.appendChild(thead)
    tabla.appendChild(tbody)
    posicion_tabla_1.appendChild(tabla)
}

construccion_tabla(encabezados,cuerpo,"tabla_generica_tbody_1","tabla_generica_tabla_1","posicion_tabla_1")