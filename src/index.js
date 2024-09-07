document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search_btn")
    const nameDog = document.getElementById("search_dog")
    const imgDog = document.getElementById("imagem_dog")
    const txterro = document.getElementById("txterror")

    imgDog.style.display = "none"

    searchBtn.addEventListener("click", async () => {
        const raca = nameDog.value.trim().toLocaleLowerCase()

        if (raca){
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
                const data = await response.json()
                
                if (data.status === "success") {
                    txterro.innerHTML = ""
                    txterro.style;display = "none"

                    imgDog.style.display = "block"
                    imgDog.src = data.message
                } else {
                    imgDog.style.display = "none"
                    txterro.innerHTML = "Erro ao buscar está raça"
                }
            }
            catch {
                console.error("Erro ao buscar a imagem do cachorro:")
            }
        }
    })
})