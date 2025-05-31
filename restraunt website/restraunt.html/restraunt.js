console.log("welcome to food good!");

function filterMenu(){
    const maxPrice = parseFloat(document.getElementById('priceFilter').value);
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item=>{
        const price = parseFloat(item.getAttribute('date-price'));
        if(!isNaN(maxPrice)&& price > maxPrice){
            item.style.display = 'none';
        }else{
            item.style.display = 'block';
        }
    });
}