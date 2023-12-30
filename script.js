{

    const vendor = document.getElementById("vendor");
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const strikedprice = document.getElementById("striked_price");
    const colours = document.getElementById("colours");
    const chooseASize = document.getElementById("choose_a_size");
    const description = document.getElementById("description");

    const bottomImages = document.getElementById("bottom_images");

    let countValue = document.getElementById("countValue").innerText;
    console.log(countValue)





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
            console.log(Object.keys(values)[0])
            let elem = document.createElement('div');
            elem.id = Object.keys(values)[0]+"";
            elem.classList.add("colors")
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

    const addToCartBtn = document.getElementById("addToCartBtn");

    let selectedSize;
    let selectedColor;
    addToCartBtn.addEventListener('click', function(e){
        let radioInputs = document.getElementsByClassName("chooseASize");
        for(let inputs of radioInputs){
            if(inputs.checked){
                selectedSize = inputs.value;
                console.log(selectedSize)
            }
        }
        console.log(selectedColor)
        let message = document.getElementById("message");
        message.innerHTML = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`
        if(message.classList.contains("displayNone")){
            message.classList.remove("displayNone");
        }
        message.classList.add("displayBlock");
    })


    document.addEventListener('click',function(e){
        let colorValue = (e.target.id);
        console.log(colorValue)
        switch(colorValue){
            case "Yellow":
                clearClass();
                let yellowColor = document.getElementById("Yellow");
                yellowColor.classList.add("border");
                selectedColor = "Yellow";
                return;
            case "Green":
                clearClass();
                let greenColor = document.getElementById("Green");
                greenColor.classList.add("border");
                selectedColor = "Green";
                return;
            case "Blue":
                clearClass();
                let blueColor = document.getElementById("Blue");
                blueColor.classList.add("border");
                selectedColor = "Blue";
                return;
            case "Pink":
                clearClass();
                let pinkColor = document.getElementById("Pink");
                pinkColor.classList.add("border");
                selectedColor = "Pink";
                return;
            default:
                return;
        }

    });

    function clearClass(){
        let colors = document.getElementsByClassName("colors");
        for(let color of colors){
            if(color.classList.contains("border")){
                color.classList.remove("border");
            }
        }
    }



}