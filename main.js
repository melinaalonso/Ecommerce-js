'use strict';
let d = document;
let div_p = d.querySelector('div#productos');
let main = d.querySelector('main');
let minicart = d.querySelector('#nav');
let filtros = d.querySelectorAll('#filtros button');

const productos = [
    // carteras
    {
        id: 1,
        nombre: "Gucci",
        descripcion: "Cartera clásica, de tela con cuero.",
        imagen: "../img/carteras/01.jpg",
        imagenDos: "../img/carteras/0101.jpg",
        categoria: "Carteras",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Valentino G.",
        descripcion: "Cartera clásica, con cuero negro.",
        imagen: "../img/carteras/02.jpg",
        imagenDos: "../img/carteras/0202.jpg",
        categoria:  "Carteras",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Gucci Blanca",
        descripcion: "Cartera clásica, con cuero blanco.",
        imagenDos: "../img/carteras/0303.jpg",
        imagen: "../img/carteras/03.jpg",
        categoria:  "Carteras",
        precio: 1000
    },
    {
        id: 4,
        nombre: "Bottega Venetta",
        descripcion: "Cartera clásica, con cuero marrón.",
        imagen: "../img/carteras/04.jpg",
        imagenDos: "../img/carteras/0404.jpg",
        categoria:  'Carteras',
        precio: 1000
    },
    {
        id: 5,
        nombre: "Saint Lauren Mediana",
        descripcion: "Cartera clásica, con cuero negro.",
        imagen: "../img/carteras/05.jpg",
        imagenDos: "../img/carteras/0505.jpg",
        categoria:  "Carteras",
        precio: 1000
    },

    {
        id: 6,
        nombre: "Saint Lauren Grande",
        descripcion: "Cartera clásica, grande con cuero.",
        imagen: "../img/carteras/06.jpg",
        imagenDos: "../img/carteras/0606.jpg",
        categoria: "Carteras",
        precio: 1000
    },
    // Zapatos 
    {
        id: 7,
        nombre: "Saint Lauren",
        descripcion: "Zapato con 5cm de taco aguja.",
        imagen: "../img/zapatos/01.jpg",
        imagenDos: "../img/zapatos/0101.jpg",
        categoria:  "Zapatos",
        precio: 1000
    },
    {
        id: 8,
        nombre: "Jimmy Choo",
        descripcion: "Ballerinas rosas",
        imagen: "../img/zapatos/02.jpg",
        imagenDos: "../img/zapatos/0202.jpg",
        categoria:  "Zapatos",
        precio: 1000
    },
    {
        id: 9,
        nombre: "Jimmy Choo Altos",
        descripcion: "Zapatotaco aguja con 10cm de taco",
        imagen: "../img/zapatos/03.jpg",
        imagenDos: "../img/zapatos/0303.jpg",
        categoria:  "Zapatos",
        precio: 1000
    },
    {
        id: 10,
        nombre: "Dolce & Gabbana",
        descripcion: "Ballerinas rojas con DG",
        imagen: "../img/zapatos/04.jpg",
        imagenDos: "../img/zapatos/0404.jpg",
        categoria:  "Zapatos",
        precio: 1000
    },
    {
        id: 11,
        nombre: "Gucci",
        descripcion: "Zapatos floreados con 10cm de taco",
        imagen: "../img/zapatos/05.jpg",
        imagenDos: "../img/zapatos/0505.jpg",
        categoria:  "Zapatos",
        precio: 1000
    },

    // Lentes
    {
        id: 12,
        nombre: "Lentes de sol Saint Laureen",
        imagen: "../img/lentes/01.jpg",
        descripcion: "Lentes de sol con protección UV",
        imagenDos: "../img/lentes/0101.jpg",
        categoria:  "Lentes",
        precio: 1000
    },
    {
        id: 13,
        nombre: "Lentes de sol Valentino",
        descripcion: "Lentes de sol piloto dorados con protección UV",
        imagen: "../img/lentes/02.jpg",
        imagenDos: "../img/lentes/0202.jpg",
        categoria:  "Lentes",
        precio: 1000,
    },
    {
        id: 14,
        nombre: "Lentes de sol Dolce & Gabbana",
        descripcion: "Lentes de sol con protección UV",
        imagen: "../img/lentes/03.jpg",
        imagenDos: "../img/lentes/0303.jpg",
        categoria:  "Lentes",
        precio: 1000,
    },
    {
        id: 15,
        nombre: "Lentes de sol rectangulares D&G",
        descripcion: "Lentes de sol con protección UV",
        imagen: "../img/lentes/04.jpg",
        imagenDos: "../img/lentes/0404.jpg",
        categoria:  "Lentes",
        precio: 1000,
    },
    {
        id: 16,
        nombre: "Lentes de sol rectangulares D&G",
        descripcion: "Lentes de sol con protección UV",
        imagen: "../img/lentes/04.jpg",
        imagenDos: "../img/lentes/0101.jpg",
        categoria:  "Lentes",
        precio: 1000,
    },
];

let carrito = {
    cantidades: [],
    productosIds: [],
    total: 0,
};

let logo = d.createElement('a');
    logo.id = 'logo';
    logo.className = 'logo';
    logo.href = '/index.html';
    logo.innerHTML = 'The Luxury Store';
    minicart.append(logo)

let divCarrito = d.createElement('div');
divCarrito.className = 'divCarrito'
divCarrito.id = 'divCarrito';
    minicart.append(divCarrito)

let CarritoContador = d.createElement('a');
    divCarrito.append(CarritoContador)

let CarritoLogo = d.createElement('i');
    CarritoLogo.id = 'cart-icon';   
    CarritoLogo.classList = 'ver';
    divCarrito.append(CarritoLogo);

let numerito = d.createElement('span');
    numerito.id = 'numerito';
    numerito.className = 'contador';
    CarritoContador.append(numerito);

let total = d.createElement('p');
    total.id = 'total';
    divCarrito.append(total);

let txt_2 = d.createTextNode('Total:');
    total.append(txt_2);
    
let totalAcumulado = d.createElement('span');
    total.append(totalAcumulado);

let txt_3 = d.createTextNode('£');
    total.append(txt_3);

    const MostrarCarrito = () => {
        numerito.innerHTML = `${carrito.cantidades.reduce((acum, n) => acum + n, 0)}`;
        totalAcumulado.innerHTML = carrito.total;
        
    };
    MostrarCarrito();

const ProductList = array => {
        div_p.innerHTML = '';
        array.forEach(product => {
    
                let div_cont = d.createElement('div');
                    div_cont.id = product.id;
                    div_cont.className = 'product-box';
                    div_p.append(div_cont);
                
                let img = d.createElement('img');
                    img.src = product.imagen;
                    img.alt = product.nombre;
                    img.className = 'product-img';
                    div_cont.append(img);

                let div_info = d.createElement('div');
                    div_info.id = 'producto-detalle';
                    div_cont.append(div_info);

                let h4 = d.createElement('h4');
                    h4.innerHTML = product.categoria;
                    h4.className = 'product-categoria';
                    div_info.append(h4)

                let h3 = d.createElement('h3');
                    h3.innerHTML = product.nombre;
                    h3.className = 'product-title';
                    div_info.append(h3)

                let p_price = d.createElement('p');
                    p_price.innerHTML = `${product.precio}€`;
                    div_info.append(p_price);
                
                let description = d.createElement('h4');
                    description.innerHTML = product.descripcion;
                    description.className = 'product-description';
                    div_info.append(description)
        
                let btnAgregar = d.createElement('button');
                    btnAgregar.classList = 'add';
                    btnAgregar.dataset.id = product.id;
                    btnAgregar.dataset.val = product.precio;
                    btnAgregar.dataset.cat = product.categoria;
                    div_info.append(btnAgregar);
    
                let btnVer = d.createElement('a');
                btnVer.classList ='show';
                btnVer.innerHTML = 'Ver producto';
                btnVer.dataset.id = product.id;
                btnVer.dataset.val = product.precio;
                    div_info.append(btnVer)
    
                    btnAgregar.addEventListener('click', (e) => {
                        let id = parseInt(e.target.dataset.id);
                        let val = parseInt(e.target.dataset.val);
                        let indiceId = carrito.productosIds.indexOf(id);
                        if (indiceId != -1) {
                            carrito.cantidades[indiceId]++;
                        } else {
                            carrito.productosIds.push(id);
                            carrito.cantidades.push(1);
                        }
                        carrito.total = parseInt(carrito.total) + val;
                        MostrarCarrito();
                    });
    
                    btnVer.addEventListener('click', (e) => {
                        let div_modal = d.createElement('div');
                            div_modal.classList = 'modal';
                            div_modal.id = 'modalProducto';
                            main.append(div_modal);

                            function cerrarModal() {
                                const modal = document.querySelector('.modal');
                                if (modal) {
                                  modal.remove();
                                  document.removeEventListener('keyup', cerrarModal);
                                }
                              }
                              document.addEventListener('keyup', function (e) {
                                if (e.key === 'Escape') {
                                  cerrarModal();
                                }
                              });

                        let div_info_modal = d.createElement('div');
                            div_info_modal.classList = 'infoModal'
                            div_info_modal.id = 'divInfoModal';
                            div_modal.append(div_info_modal);
    
                        let a = d.createElement('button');
                            a.classList = 'cerrar';
                            a.href = 'javascript:void(0)';
                            a.innerHTML = 'X';
                            a.addEventListener('click', () => {
                                d.querySelector('.modal').remove();
                                return false;
                            });
                            div_info_modal.append(a);
    
                        let data = e.currentTarget.dataset.id
                        let show_product = productos.find(product => product.id == data)
    
                            let img = d.createElement('img');
                                img.src = show_product.imagen;
                                div_info_modal.append(img);

                            let imgDos = d.createElement('img');
                                imgDos.src = show_product.imagenDos;
                                div_info_modal.append(imgDos);
    
                            let h3 = d.createElement('h3');
                                h3.textContent = show_product.nombre;
                                div_info_modal.append(h3)
    
                            let p_desc = d.createElement('p');
                                p_desc.textContent = show_product.descripcion;
                                div_info_modal.append(p_desc);   
    
                            let p_price = d.createElement('p');
                                p_price.textContent = 'Precio: ';
                                div_info_modal.append(p_price);
                            let span = d.createElement('span');
                                span.textContent = `${show_product.precio}€`;
                                p_price.append(span);
    
                            let p_cat = d.createElement('p');
                                p_cat.textContent = show_product.categoria
    
                            let btn_m = d.createElement('button');
                                btn_m.innerHTML = 'Agregar al carrito';
                                btn_m.classList = 'add';
                                btn_m.dataset.id = parseInt(e.currentTarget.dataset.id);
                                btn_m.dataset.val = parseInt(e.currentTarget.dataset.val);
                                div_info_modal.append(btn_m);
    
                    btn_m.addEventListener('click', e => {
                            let id = parseInt(e.target.dataset.id);
                            let val = parseInt(e.target.dataset.val);
                            let indiceId = carrito.productosIds.indexOf(id);
                            if (indiceId != -1) {
                                carrito.cantidades[indiceId]++;
                            } else {
                                carrito.productosIds.push(id);
                                carrito.cantidades.push(1);
                            }
                                carrito.total = parseInt(carrito.total) + val;
                                MostrarCarrito();
                            });
                    });
        });
    }
ProductList(productos);

let addBtns = d.querySelectorAll('.add');
let delBtns = d.querySelectorAll('.del');
let showBtns = d.querySelectorAll('.show');

const CancelarPago = () => {
    document.getElementById("nav2").classList.toggle('hidden');
    document.getElementById('checkout-products-container').classList.add('hidden');
    document.getElementById('checkout-details-container').classList.add('hidden');
    d.getElementById("divCarrito").classList.toggle('hidden');
    document.getElementById('productos').style.display = "grid" ;
    

};

const Comprar = () => {
    document.getElementById("productos").classList.add('hidden');
    document.getElementById("modalCarrito").classList.add('hidden');
    document.getElementById("nav2").classList.add('hidden');
    document.getElementById('checkout-products-container').classList.add('hidden');
    document.getElementById('checkout-details-container').classList.add('hidden');
    let confirmacionCompra = d.createElement('p')
        confirmacionCompra.innerHTML = 'Muchas gracias por su cumpra, en breve recibirá un mail con las indicaciones del envío 😁'
        main.append(confirmacionCompra);

}
const Checkout = () => {
        d.getElementById("productos").classList.add('hidden');
        d.getElementById("modalCarrito").classList.add('hidden');
        d.getElementById("nav2").classList.add('hidden');
        d.getElementById("divCarrito").classList.add('hidden');

        const MostrarProductosEnCheckout = () => {
        let checkoutProductsContainer = document.createElement('div');
            checkoutProductsContainer.id= 'checkout-products-container';
            main.append(checkoutProductsContainer);
            checkoutProductsContainer.innerHTML = '';
        let resumenCompra = d.createElement('h3');
            resumenCompra.innerHTML = 'Detalle de la compra';
            checkoutProductsContainer.append(resumenCompra); 
        let divTodoJunto = d.createElement('div');
            divTodoJunto.classList = 'todojunto';
            checkoutProductsContainer.append(divTodoJunto)
        let checkoutProductos = d.createElement('div');
            checkoutProductos.classList= 'lista-productos';
            divTodoJunto.append(checkoutProductos);
        let checkoutDetailsContainer = document.createElement('div');
            checkoutDetailsContainer.id = 'checkout-details-container';
            divTodoJunto.append(checkoutDetailsContainer);
            if (carrito.productosIds.length > 0) {
                carrito.productosIds.forEach((productId, index) => {
                    let product = productos.find(p => p.id === productId);
                    let productDiv = document.createElement('div');
                        productDiv.className = 'checkout-product';
                        checkoutProductos.append(productDiv);
                    let nombreProducto = d.createElement('p');
                        nombreProducto.innerHTML = product.nombre;
                        nombreProducto.classList = 'nombre-producto-checkout'
                        productDiv.append(nombreProducto);
                    let categoriaProducto = d.createElement('p');
                        categoriaProducto.innerHTML = `Categoria: ${product.categoria}`;
                        productDiv.append(categoriaProducto);
                    let cantidadUnProducto = d.createElement('p');
                        cantidadUnProducto.innerHTML = `- ${carrito.cantidades[index]} unidades`;
                        productDiv.append(cantidadUnProducto);
                    let subTotal = d.createElement('p');
                        subTotal.innerHTML =`Subtotal: ${product.precio * carrito.cantidades[index]}€`;
                        productDiv.append(subTotal);
                        checkoutProductos.appendChild(productDiv);
                                    });
            let total = carrito.productosIds.reduce((acc, productId, index) => {
            let product = productos.find(product => product.id === productId);
                 return acc + product.precio * carrito.cantidades[index];
                 }, 0);
            let totalDiv = document.createElement('div');
                 totalDiv.classList = 'total-checkout';
                 totalDiv.innerHTML = `<p>Total: ${total}€</p>`;
                  checkoutProductos.appendChild(totalDiv);
            } else {
                checkoutProductsContainer.innerHTML = '<p>El carrito está vacío.</p>';
            }
        let form = document.createElement('form');
            form.id = 'checkout-form';
            form.classList = 'form';
            checkoutDetailsContainer.append(form);
        let labelNombre = document.createElement('label');
            labelNombre.textContent = 'Nombre*';
            labelNombre.setAttribute('for', 'nombre');
            form.appendChild(labelNombre);
        let inputNombre = document.createElement('input');
            inputNombre.type = 'text';
            inputNombre.id = 'nombre';
            inputNombre.classList = 'form__name input';
            inputNombre.name = 'nombre';
            inputNombre.required = true;
            form.appendChild(inputNombre);
        let labelTelefono = document.createElement('label');
            labelTelefono.textContent = 'Teléfono';
            labelTelefono.setAttribute('for', 'telefono');
            form.appendChild(labelTelefono);
        let inputTelefono = document.createElement('input');
            inputTelefono.type = 'tel';
            inputTelefono.id = 'telefono';
            inputTelefono.classList = 'form__telefono input';
            inputTelefono.name = 'telefono';
            inputTelefono.required = true;
            inputTelefono.pattern = '^\\d{10}$';
            inputTelefono.title = 'Ingrese un número de teléfono válido';
            form.appendChild(inputTelefono);
        let labelEmail = document.createElement('label');
            labelEmail.textContent = 'Email*';
            labelEmail.setAttribute('for', 'email');
            form.appendChild(labelEmail);
        let inputEmail = document.createElement('input');
            inputEmail.type = 'email';
            inputEmail.id = 'email';
            inputEmail.name = 'email';
            inputEmail.classList = 'form__email input';
            inputEmail.setAttribute('autocomplete', 'email');
            inputEmail.required = true;
            form.appendChild(inputEmail);
        let labelMetodoPago = document.createElement('label');
            labelMetodoPago.textContent = 'Método de pago:';
            labelMetodoPago.setAttribute('for', 'metodo-pago');
            form.appendChild(labelMetodoPago);   
        let selectMetodoPago = document.createElement('select');
            selectMetodoPago.id = 'metodo-pago';
            selectMetodoPago.name = 'metodo-pago';
            selectMetodoPago.classList = 'input';
            selectMetodoPago.required = true;
        let optionEfectivo = document.createElement('option');
            optionEfectivo.value = 'efectivo';
            optionEfectivo.textContent = 'Efectivo';
            selectMetodoPago.appendChild(optionEfectivo);
        let optionTarjeta = document.createElement('option');
            optionTarjeta.value = 'tarjeta';
            optionTarjeta.textContent = 'Tarjeta';
            selectMetodoPago.appendChild(optionTarjeta);
            form.appendChild(selectMetodoPago); 
            selectMetodoPago.addEventListener('change', function() {
                if (this.value !== 'tarjeta') {
                    removeTarjetaFields();
                } else {
                    addTarjetaFields();
                }
            });
            
            function addTarjetaFields() {
                let labelNumeroTarjeta = document.createElement('label');
                    labelNumeroTarjeta.textContent = 'Número de Tarjeta*';
                    labelNumeroTarjeta.setAttribute('for', 'numero-tarjeta');
                    form.append(labelNumeroTarjeta);
                let inputNumeroTarjeta = document.createElement('input');
                    inputNumeroTarjeta.type = 'text';
                    inputNumeroTarjeta.id = 'numero-tarjeta';
                    inputNumeroTarjeta.classList = 'form__tarjeta input';
                    inputNumeroTarjeta.name = 'numero-tarjeta';
                    inputNumeroTarjeta.required = true;
                    form.append(inputNumeroTarjeta);
                let labelFechaExpiracion = document.createElement('label');
                    labelFechaExpiracion.textContent = 'Fecha de Expiración*';
                    labelFechaExpiracion.setAttribute('for', 'fecha-expiracion');
                    form.append(labelFechaExpiracion);
                let inputFechaExpiracion = document.createElement('input');
                    inputFechaExpiracion.type = 'text';
                    inputFechaExpiracion.id = 'fecha-expiracion';
                    inputFechaExpiracion.classList = 'form__expiracion input';
                    inputFechaExpiracion.name = 'fecha-expiracion';
                    inputFechaExpiracion.required = true;
                    form.append(inputFechaExpiracion);
                let labelNombreTarjeta = document.createElement('label');
                    labelNombreTarjeta.textContent = 'Nombre en la Tarjeta*';
                    labelNombreTarjeta.setAttribute('for', 'nombre-tarjeta');
                    form.append(labelNombreTarjeta);
                let inputNombreTarjeta = document.createElement('input');
                    inputNombreTarjeta.type = 'text';
                    inputNombreTarjeta.id = 'nombre-tarjeta';
                    inputNombreTarjeta.classList = 'form__nombre-tarjeta input';
                    inputNombreTarjeta.name = 'nombre-tarjeta';
                    inputNombreTarjeta.required = true;
                    form.append(inputNombreTarjeta);
                let labelCodigoSeguridad = document.createElement('label');
                    labelCodigoSeguridad.textContent = 'Código de Seguridad*';
                    labelCodigoSeguridad.setAttribute('for', 'codigo-seguridad');
                    form.append(labelCodigoSeguridad);
                let inputCodigoSeguridad = document.createElement('input');
                    inputCodigoSeguridad.type = 'text';
                    inputCodigoSeguridad.id = 'codigo-seguridad';
                    inputCodigoSeguridad.classList = 'form__codigo-seguridad input';
                    inputCodigoSeguridad.name = 'codigo-seguridad';
                    inputCodigoSeguridad.required = true;
                    form.appendChild(inputCodigoSeguridad);
                let labelCuotas = document.createElement('label');
                    labelCuotas.textContent = 'Cuotas (si corresponde):';
                    labelCuotas.setAttribute('for', 'cuotas');
                    form.append(labelCuotas);
                let inputCuotas = document.createElement('input');
                    inputCuotas.type = 'number';
                    inputCuotas.classList = 'input';
                    inputCuotas.id = 'cuotas';
                    inputCuotas.name = 'cuotas';
                    inputCuotas.min = '1';
                    form.append(inputCuotas);
            }
            function removeTarjetaFields() {
                let numeroTarjeta = d.getElementById('numero-tarjeta');
                let fechaExpiracion = d.getElementById('fecha-expiracion');
                let nombreTarjeta = d.getElementById('nombre-tarjeta');
                let codigoSeguridad = d.getElementById('codigo-seguridad');
                let cuotas = d.getElementById('cuotas');
                if (numeroTarjeta) {
                    numeroTarjeta.remove();
                }

                if (fechaExpiracion) {
                    fechaExpiracion.remove();
                }

                if (nombreTarjeta) {
                    nombreTarjeta.remove();
                }

                if (codigoSeguridad) {
                    codigoSeguridad.remove();
                }
                if (cuotas) {
                    cuotas.remove();
                }

            }
    
        let labelLugarEntrega = document.createElement('label');
                labelLugarEntrega.textContent = 'Lugar de entrega*';
                labelLugarEntrega.setAttribute('for', 'lugar-entrega');
                form.appendChild(labelLugarEntrega);       
        let inputLugarEntrega = document.createElement('input');
                inputLugarEntrega.type = 'text';
                inputLugarEntrega.classList = 'input';
                inputLugarEntrega.id = 'lugar-entrega';
                inputLugarEntrega.name = 'lugar-entrega';
                inputLugarEntrega.required = true;
                form.appendChild(inputLugarEntrega);
        let labelFechaEntrega = document.createElement('label');
                labelFechaEntrega.textContent = 'Fecha de entrega*';
                labelFechaEntrega.setAttribute('for', 'fecha-entrega');
                form.appendChild(labelFechaEntrega);
        let inputFechaEntrega = document.createElement('input');
                inputFechaEntrega.type = 'date';
                inputFechaEntrega.classList = 'input';
                inputFechaEntrega.id = 'fecha-entrega';
                inputFechaEntrega.name = 'fecha-entrega';
                inputFechaEntrega.required = true;
                form.appendChild(inputFechaEntrega);
        let divButtonCheckOut = d.createElement('div');
            checkoutDetailsContainer.append(divButtonCheckOut);

        let divError = d.createElement('div');
            divError.id = 'error-mensaje';
            divButtonCheckOut.append(divError);

        let submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.id = 'btn-pagar';
            submitButton.textContent = 'Realizar pago';
            submitButton.addEventListener('click', function(event) {
                if (validateForm()) {
                    Comprar();
                    VaciarCarrito();
                } else {
                    displayErrorMessage('Por favor complete todos los campos requeridos.');
                }

            });  
            divButtonCheckOut.appendChild(submitButton);
            function validateForm() {
                let nombre = document.getElementById('nombre').value;
                let telefono = document.getElementById('telefono').value;
                let email = document.getElementById('email').value;
                let metodoPago = document.getElementById('metodo-pago').value;
    
                if (!nombre || !telefono || !email || !metodoPago) {
                    highlightRequiredFields();
                    return false;
                }
            
                return true;
            }

            function highlightRequiredFields() {
                let requiredFields = ['nombre', 'telefono', 'email', 'metodo-pago'];
                requiredFields.forEach(fieldId => {
                    let field = document.getElementById(fieldId);
                    field.style.border = '1px solid red';
                });
            }
            function displayErrorMessage(message) {
                let errorMessage = document.getElementById('error-mensaje');
                let messageElement = document.createElement('p');
                messageElement.textContent = message;
                messageElement.style.color = 'red';
                errorMessage.appendChild(messageElement);
            }
            let cancelButton = document.createElement('button');
                cancelButton.id = 'btn-cancel';
                cancelButton.type = 'button';
                cancelButton.textContent = 'Cancelar';
                cancelButton.addEventListener('click', CancelarPago);
                divButtonCheckOut.appendChild(cancelButton);
        };
        MostrarProductosEnCheckout();
} 
//  -   -   -   -   -   -   -   Carrito
const VaciarCarrito = () => {
    d.querySelector('#productoUnidad').remove();
    carrito = {
        productosIds: [],
        cantidades: [],
        total: 0,
    }
    let t = d.querySelector('h3 > span');
    t.textContent = `${carrito.total}`;
    MostrarCarrito();
}

const VerCarrito = () => {
    let btn_carrito = d.querySelector('.ver');
    btn_carrito.addEventListener('click', e => {
    let div_modal_cart = d.createElement('div');
        div_modal_cart.classList = 'modal';
        div_modal_cart.id = 'modalCarrito';
        main.append(div_modal_cart);
    let div_info_carrito = d.createElement('div');
        div_info_carrito.classList = 'carrito-productos';
        div_info_carrito.id = 'carrito-productos';
        div_modal_cart.append(div_info_carrito);
    let btnCerrar = d.createElement('button');
        btnCerrar.classList = 'cerrar';
        btnCerrar.href = 'javascript:void(0)';
        btnCerrar.innerHTML = 'X';
        btnCerrar.addEventListener('click', () => {
            d.querySelector('.modal').remove();
        });
        div_info_carrito.append(btnCerrar);
    function cerrarModal() {
            const modal = document.querySelector('.modal');
            if (modal) {
              modal.remove();
              document.removeEventListener('keyup', cerrarModal);
            }
          }
          document.addEventListener('keyup', function (e) {
            if (e.key === 'Escape') {
              cerrarModal();
            }
          });
    if (carrito.productosIds.length === 0) {
            let mensajeVacio = d.createElement('p');
            mensajeVacio.textContent = 'Vaya, parece que aún no has seleccionado ningún producto.';
            div_info_carrito.append(mensajeVacio);    
        } else {

    let head = d.createElement('h2');
        head.innerHTML = 'Mi carrito';
        head.style.color = 'black';
        div_info_carrito.append(head);

    let hr = d.createElement('hr');
        div_info_carrito.append(hr);

    let divCarritoProducto = d.createElement('div');
        divCarritoProducto.id = 'carrito-producto';
        div_info_carrito.append(divCarritoProducto);
    
    carrito.productosIds.forEach(ids => {
    let add_product = productos.find(product => product.id == ids);
    let id_producto = carrito.productosIds.indexOf(ids);

    let divProducto = d.createElement('div');
        divProducto.id = 'productoUnidad';
        divCarritoProducto.append(divProducto)

    let liFoto = d.createElement('img');
        liFoto.src = add_product.imagen;
        liFoto.id = 'fotoMiniCarrito';
        divProducto.append(liFoto);
    
    let divCarritoNombre = d.createElement('div');
        divCarritoNombre.id = 'carrito-producto-titulo';
        divProducto.append(divCarritoNombre)

        let tituloNombre = d.createElement('small');
            tituloNombre.innerHTML = 'Producto';
            divCarritoNombre.append(tituloNombre);

        let nombreProducto = d.createElement('h3');
            nombreProducto.textContent = add_product.nombre;
            divCarritoNombre.append(nombreProducto);
    
    let divCarritoCantidad = d.createElement('div');
        divCarritoCantidad.id = 'carrito-producto-cantidad';
        divProducto.append(divCarritoCantidad)

        let smallCantidad = d.createElement('small');
            smallCantidad.innerHTML = 'Cantidad';
            divCarritoCantidad.append(smallCantidad);

        let cantidadProductos = d.createElement('span');
            cantidadProductos.textContent = carrito.cantidades[id_producto]
            divCarritoCantidad.append(cantidadProductos);
       
    let divCarritoPrecio = d.createElement('div');
        divCarritoPrecio.id = 'carrito-producto-precio';
        divProducto.append(divCarritoPrecio);

        let smallPrecio = d.createElement('small');
            smallPrecio.innerHTML = 'Precio';
            divCarritoPrecio.append(smallPrecio);

        let Productoprecio = d.createElement('span');
            Productoprecio.textContent = add_product.precio;
            divCarritoPrecio.append(Productoprecio);

    let agregar = d.createElement('a');
        agregar.href = '#';
        agregar.id = 'ad';
        agregar.innerHTML = '+';
        divProducto.append(agregar);

    agregar.addEventListener('click', (e) => {
            carrito.cantidades[id_producto]++;
            cantidadProductos.textContent = carrito.cantidades[id_producto];
            carrito.total = carrito.total + add_product.precio;
            num_total.textContent = carrito.total;
            MostrarCarrito();
        });
        
    let eliminar = d.createElement('a');
        eliminar.href = '#';
        eliminar.id = 'dl';
        divProducto.append(eliminar);

    eliminar.addEventListener('click', (e) => {
            if (carrito.cantidades[id_producto] >= 1) {
            carrito.cantidades[id_producto]--;
            cantidadProductos.textContent = carrito.cantidades[id_producto];
            carrito.total = carrito.total - add_product.precio;
            num_total.textContent = carrito.total
            }

            if (carrito.cantidades[id_producto] == 0) {
                carrito.cantidades.splice([id_producto], 1)
                carrito.productosIds.splice([id_producto], 1)
                divProducto.remove()
            }
            MostrarCarrito();
      }); 
    })   
    let finalCarrito = d.createElement('div');
        finalCarrito.className = 'finalCarrito';
        div_info_carrito.append(finalCarrito);

    let vaciar = d.createElement('button');
        vaciar.innerHTML = 'Vaciar carrito';
        vaciar.classList = "vaciar-carrito"
        vaciar.addEventListener('click', e => {
            let mensajeVacio = d.createElement('p');
            mensajeVacio.textContent = 'Vaya, parece que aún no has seleccionado ningún producto.';
            div_info_carrito.append(mensajeVacio);   
            VaciarCarrito();
            });
        finalCarrito.append(vaciar);

    let totales = d.createElement('h3');
        totales.id = 'totalesModal'
        totales.textContent = `Total: `;
        finalCarrito.append(totales);

    let num_total = d.createElement('span');
        num_total.style.fontSize = '1em';
        num_total.textContent = `${carrito.total}€`;
        totales.append(num_total)
    
    let checkout = d.createElement('button');
        checkout.innerHTML = 'Pagar ahora';
        checkout.classList ='payment';
        checkout.id = 'btn-checkout'
        checkout.addEventListener('click', e => {
            e.preventDefault();
            Checkout();  
        });
        finalCarrito.append(checkout);
    }     
});

}
VerCarrito();
  
//  -   -   -   -   -   -   -   Filtros Categoria
filtros.forEach(filtro => {
    
    filtro.addEventListener('click', (e) => {
        let catId = e.target.dataset.cat;
        if (catId == 'Productos') {
            d.querySelector('h2').innerHTML = 'Todos los productos'
            ProductList(productos);
        } else {
            d.querySelector('h2').innerHTML = catId
            let filtrado = productos.filter((producto) => producto.categoria.toLowerCase() == catId.toLowerCase());
            ProductList(filtrado);
            let popup = d.createElement('div');
            popup.className = 'popup';
            let mensaje = '';
            switch (catId.toLowerCase()) {
                case 'zapatos':
                    mensaje = 'Descubrí los nuevos zapatos en tendencia de esta temporada, no te pierdas todo lo último';
                    break;
                case 'carteras':
                    mensaje = 'Con el código SUMMER2024 obtené un 10% off en todas nuestras carteras';
                    break;
                case 'lentes':
                    mensaje = 'Descubrí la nueva colección de lentes de Gucci 🕶️';
                    break;
                case 'productos':
                    mensaje = 'Descubrí la nueva colección de lentes de Gucci 🕶️';
                    break;                  
                default:
                    mensaje = 'Si es tu primera compra, obtené un 25% off en toda la web con nuestro código NEWUSERNEWCLOTHES';
            }
            
            main.append(popup);
            setTimeout(() => {
                main.removeChild(popup);
                e.preventDefault();
                ProductList(filtrado);
            }, 10000);
            let txtPopUp = d.createElement('h3');
            txtPopUp.innerHTML = 'HEY!';
            popup.append(txtPopUp);
            let txtPrincipalPopUp = d.createElement('p');
            txtPrincipalPopUp.innerHTML = mensaje;
            popup.append(txtPrincipalPopUp);

        }
    })
});

