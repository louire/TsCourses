interface Product {
  prize: number;
}

(async()=> {
    const myCart: Product[] = [];
    let products: Product[] = []; // add type annotation to products array
    const limit = 2;
  
    async function getProducts() {
      try {
        const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
          method: 'GET'
        });
        const data = await rta.json();
        products = products.concat(data); // concatenate data to products array
      } catch (error) {
        console.error(error);
      }
    }
    function getTotal() {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].prize;
      }
      return total;
    }

      function addProduct(index) {
        if (getTotal() <= limit) {
          myCart.push(products[index]);
        }
      }
    
      await getProducts();
      addProduct(1);
      addProduct(2);
      const total = getTotal();
      console.log(total);
      const person = {
        name: 'Nicolas',
        lastName: 'Molina'
      }
      const rta = JSON.stringify(person) + limit;
      console.log(rta);    });

