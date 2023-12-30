{

    const vendor = document.getElementById("vendor");
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const strikedprice = document.getElementById("striked_price");
    const colours = document.getElementById("colours");
    const chooseASize = document.getElementById("choose_a_size");
    const description = document.getElementById("description");

    const bottomImages = document.getElementById("bottom_images");






    let product = {};
    async function getData(){
        let res = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448");
        let data = await res.json();
        product = data.product;
        let colourValues = product.options[0].values;
        let sizeValues = product.options[1].values;
        let images = product.images;

        vendor.innerHTML = `<p>${product.vendor}</p>`;
        title.innerHTML = `<p>${product.title}</p>`
        price.innerHTML = `${product.price}`;
        strikedprice.innerHTML = `<strike>${product.compare_at_price}</strike>`;

        let col = ["Yellow", "Green", "Blue", "Pink"];
        let index = 0;
        for(let values of colourValues){
            let elem = document.createElement('div');
            elem.style.width = "50px";
            elem.style.height = "50px";
            elem.style.marginRight = "14px";
            elem.style.backgroundColor = colourValues[index][col[index]];
            index++;
            colours.appendChild(elem)
        }

        // for(let size of sizeValues){
        //     let elem = `<input type="radio" class="chooseASize" name="chooseASize" id="${size}"> ${size}`
        //     chooseASize.innerHTML += elem;
        // }

        description.innerHTML = product.description;

        for(let i = 0; i< images.length; i++){
            let elem = `
                <div class="image">
                    <img src="${images[i].src}" alt="" width="70px" height="70px">
                </div>
            `;
            bottomImages.innerHTML +=elem;

        }

    }
    getData();

}