{

    const vendor = document.getElementById("vendor");
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const strikedprice = document.getElementById("striked_price");
    const colours = document.getElementById("colours");


    let product = {};
    async function getData(){
        let res = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448");
        let data = await res.json();
        product = data.product;
        let colourValues = product.options[0].values;
        

        
        vendor.innerHTML = `<p>${product.vendor}</p>`;
        title.innerHTML = `<p>${product.title}</p>`
        price.innerHTML = `${product.price}`;
        strikedprice.innerHTML = `<strike>${product.compare_at_price}</strike>`;

        let col = ["Yellow", "Green", "Blue", "Pink"];
        let index = 0;
        for(let values of colourValues){
            let elem = document.createElement('div');
            elem.style.width = "30px";
            elem.style.height = "30px";
            elem.style.backgroundColor = colourValues[index][col[index]];
            index++;
            colours.appendChild(elem)
        }

    }
    getData();

}