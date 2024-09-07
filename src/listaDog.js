const listaRaca = document.getElementById("list")
const container = document.getElementById("container")
const imgDog = document.getElementById("imagem_dog")
const txterro = document.getElementById("txterror")



const fetchApi = () => {
    const result = fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.status === "success") {
            console.log("deu certo")
            imgDog.style.display = "none"
            txterro.innerHTML = ""
        }
    })
}

listaRaca.addEventListener("click", () => {
    fetchApi()
})