Feature: Comprar producto en SauceDemo

  @order
  Scenario: Comprar producto

    Given que el Cliente se encuentra en la página SauceDemo
    When inicia sesión con las credenciales: "standard_user", "secret_sauce"
    Then el login es satisfactorio
    When agrega al carrito de compras el primer producto
    And compra el producto con sus datos: Nombre: "César", Apellido: "Alcántara", y Código Postal: "15022"
    Then el pedido es satisfactorio
