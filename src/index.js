document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search_btn")
    const nameDog = document.getElementById("search_dog")
    const imgDog = document.getElementById("imagem_dog")

    searchBtn.addEventListener("click", async () => {
        const raca = nameDog.value.trim().toLocaleLowerCase()

        if (raca){
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
                const data = await response.json()
                
                if (data.status === "success") {
                    imgDog.src = data.message
                }
            }
            catch {
                console.error("Erro ao buscar a imagem do cachorro:")
            }
        }
    })
})