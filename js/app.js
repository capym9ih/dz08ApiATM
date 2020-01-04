const data = fetch('https://capym9ih.github.io/dz08ApiATM/data.json');
data
    .then((res) => res.json())
    .then((res) => {
        const { devices } = res

        const obj = new Object
        devices.map(el => Array.isArray(obj[el.placeRu]) ? obj[el.placeRu].push(el) : obj[el.placeRu] = [el])
        console.log(obj);
    })