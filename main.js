/* ==========================================================================
   GULOSEIMAS GOURMET - JAVASCRIPT
   Lógica Interativa: Catálogo, Carrinho, Monte sua Caixa e Checkout WhatsApp
   ========================================================================== */

// --- BASE DE PRODUTOS ---
const PRODUCTS = [
    // --- SALGADOS FRITOS ---
    {
        id: 101,
        name: "Coxinha Dourada com Catupiry",
        category: "salgados-fritos",
        categoryName: "Salgados Fritos",
        price: 8.50,
        rating: "5.0 (230)",
        tag: "fried",
        tagName: "Frita na Hora",
        image: "assets/imagens reais/bolo_salgado_01.png",
        description: "Massa leve de batata com tempero especial da Vó Rute, recheio farto de frango desfiado suculento e autêntico Catupiry cremoso.",
        ingredients: "Peito de frango desfiado, batata fresca, requeijão Catupiry, caldo caseiro de galinha, cheiro verde e casquinha crocante panko.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 102,
        name: "Bolinha de Queijo Crocante",
        category: "salgados-fritos",
        categoryName: "Salgados Fritos",
        price: 7.50,
        rating: "4.9 (185)",
        tag: "fried",
        tagName: "Puxa Queijo",
        image: "assets/imagens reais/bolo_salgado_02.png",
        description: "Casquinha sequinha e ultra crocante por fora com recheio cremoso e elástico de queijo mussarela derretido e toque de orégano.",
        ingredients: "Queijo mussarela artesanal, queijo minas curado, orégano desidratado e empanamento crocante sequinho.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 103,
        name: "Quibe Tradicional com Requeijão",
        category: "salgados-fritos",
        categoryName: "Salgados Fritos",
        price: 8.00,
        rating: "4.9 (140)",
        tag: "fried",
        tagName: "Artesanal",
        image: "assets/imagens reais/bolo_salgado_03.png",
        description: "Carne moída bovina de primeira temperada com hortelã fresca da horta, cebola roxa e recheio cremoso de requeijão.",
        ingredients: "Carne bovina magra fresca (patinho), trigo para quibe hidratado, hortelã fresca, cebola, tempero sírio suave e requeijão cremoso.",
        allergens: "Contém glúten e derivados do leite."
    },
    {
        id: 104,
        name: "Risoles de Palmito Cremoso & Alho Poró",
        category: "salgados-fritos",
        categoryName: "Salgados Fritos",
        price: 7.50,
        rating: "4.8 (95)",
        tag: "fried",
        tagName: "Vegetariano",
        image: "assets/imagens reais/bolo_salgado_04.png",
        description: "Massa aveludada e dourada com recheio cremoso de palmito pupunha salteado no alho-poró fresco e azeite extravirgem.",
        ingredients: "Palmito pupunha selecionado, alho-poró, azeite extravirgem, leite, farinha de trigo especial e ervas aromáticas.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 105,
        name: "Cento de Salgados Fritos para Festa",
        category: "salgados-fritos",
        categoryName: "Salgados Fritos",
        price: 120.00,
        rating: "5.0 (310)",
        tag: "combo",
        tagName: "Festa Completa",
        image: "assets/imagens reais/bolo_salgado_06.png",
        description: "100 mini salgadinhos fritos sequinhos na hora: 25 coxinhas com catupiry, 25 bolinhas de queijo, 25 quibes e 25 risoles de palmito.",
        ingredients: "Mix completo dos salgados artesanais fritos da Vó Rute em embalagem térmica para entrega.",
        allergens: "Contém glúten e derivados do leite."
    },

    // --- SALGADOS ASSADOS ---
    {
        id: 201,
        name: "Esfiha Fechada de Carne da Vó Rute",
        category: "salgados-assados",
        categoryName: "Salgados Assados",
        price: 8.50,
        rating: "5.0 (178)",
        tag: "baked",
        tagName: "Forno a Lenha",
        image: "assets/imagens reais/bolo_salgado_09.png",
        description: "Massa super fofa, leve e amanteigada recheada com carne moída de primeira, cebola, tomate picadinho e temperos tradicionais.",
        ingredients: "Farinha especial de trigo, fermentação natural lenta, carne bovina moída, tomate fresco, cebola, limão e especiarias suaves.",
        allergens: "Contém glúten e ovos."
    },
    {
        id: 202,
        name: "Empada Tradicional de Palmito",
        category: "salgados-assados",
        categoryName: "Salgados Assados",
        price: 9.00,
        rating: "4.9 (160)",
        tag: "baked",
        tagName: "Massa Podre",
        image: "assets/imagens reais/bolo_salgado_10.png",
        description: "Receita histórica de família: massa que desmancha suavemente na boca com recheio cremoso e farto de palmito pupunha e azeitona.",
        ingredients: "Manteiga sem sal pura, gemas de ovos caipiras, farinha de trigo, palmito pupunha refogado e requeijão cremoso.",
        allergens: "Contém glúten, leite e ovos."
    },
    {
        id: 203,
        name: "Enroladinho de Presunto e Queijo",
        category: "salgados-assados",
        categoryName: "Salgados Assados",
        price: 8.50,
        rating: "4.9 (112)",
        tag: "baked",
        tagName: "Assado Dourado",
        image: "assets/imagens reais/bolo_salgado_12.png",
        description: "Pãozinho assado macio com pincelada de gema caipira, farto recheio de presunto cozido, queijo mussarela derretido e orégano.",
        ingredients: "Massa suave de leite, presunto especial, queijo mussarela derretido e gergelim tostado.",
        allergens: "Contém glúten e derivados do leite."
    },
    {
        id: 204,
        name: "Folhado de Peito de Peru & Cream Cheese",
        category: "salgados-assados",
        categoryName: "Salgados Assados",
        price: 9.50,
        rating: "4.8 (88)",
        tag: "baked",
        tagName: "Ultra Crocante",
        image: "assets/imagens reais/bolo_salgado_13.png",
        description: "Dezenas de folhas de massa folhada amanteigada crocante com fatias finas de peito de peru defumado e cream cheese fresco.",
        ingredients: "Massa folhada artesanal de manteiga pura, peito de peru defumado e cream cheese.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 205,
        name: "Cento de Salgados Assados para Festa",
        category: "salgados-assados",
        categoryName: "Salgados Assados",
        price: 135.00,
        rating: "5.0 (204)",
        tag: "combo",
        tagName: "Festa Especial",
        image: "assets/imagens reais/bolo_salgado_14.png",
        description: "100 mini salgadinhos assados douradinhos: 25 esfihas de carne, 25 empadinhas de palmito, 25 enroladinhos de presunto/queijo e 25 folhadinhos.",
        ingredients: "Mix completo dos salgados artesanais assados da Vó Rute.",
        allergens: "Contém glúten, ovos e leite."
    },

    // --- DOCES & BRIGADEIROS ---
    {
        id: 1,
        name: "Brigadeiro Tradicional da Vó",
        category: "brigadeiros",
        categoryName: "Doces & Brigadeiros",
        price: 6.50,
        rating: "4.9 (128)",
        tag: "bestseller",
        tagName: "Mais Vendido",
        image: "assets/imagens reais/bolo_salgado_07.png",
        description: "Feito com chocolate nobre 54%, granulado blossom macio e aquela textura aveludada inconfundível.",
        ingredients: "Leite condensado integral, manteiga extra, cacau puro e granulados de chocolate nobre.",
        allergens: "Contém leite e derivados. Não contém glúten."
    },
    {
        id: 2,
        name: "Brigadeiro Pistache Supremo",
        category: "brigadeiros",
        categoryName: "Doces & Brigadeiros",
        price: 8.00,
        rating: "5.0 (94)",
        tag: "new",
        tagName: "Destaque",
        image: "assets/imagens reais/bolo_salgado_08.png",
        description: "Pasta pura de pistache, chocolate branco nobre e finalizado com lascas crocantes de pistache.",
        ingredients: "Pistache selecionado, leite condensado, chocolate branco nobre e manteiga de cacau.",
        allergens: "Contém leite e pistache. Não contém glúten."
    },
    {
        id: 3,
        name: "Brigadeiro Ninho com Nutella",
        category: "brigadeiros",
        categoryName: "Doces & Brigadeiros",
        price: 7.50,
        rating: "4.9 (210)",
        tag: "bestseller",
        tagName: "Favorito",
        image: "assets/imagens reais/bolo_salgado_05.png",
        description: "Massa aveludada de leite Ninho com coração generoso de pura Nutella cremosa.",
        ingredients: "Leite Ninho, leite condensado, manteiga extra e creme de avelã com cacau (Nutella).",
        allergens: "Contém avelãs e leite. Não contém glúten."
    },
    {
        id: 4,
        name: "Bolo Salgado Artesanal Decorado",
        category: "bolos",
        categoryName: "Bolos & Tortas",
        price: 88.00,
        rating: "5.0 (195)",
        tag: "cake",
        tagName: "Especial da Vó",
        image: "assets/imagens reais/bolo_salgado_06.png",
        description: "Autêntico bolo salgado da Vó Rute com farto recheio de frango desfiado com catupiry, milho, azeitonas, maionese artesanal e cobertura aveludada de purê de batata com batata palha.",
        ingredients: "Pão de forma sem casca, peito de frango temperado, requeijão cremoso, purê de batata fresco, milho verde e batata palha crocante.",
        allergens: "Contém glúten, leite e ovos."
    },
    {
        id: 5,
        name: "Bolo Salgado Festivo de Frango & Cenoura",
        category: "bolos",
        categoryName: "Bolos & Tortas",
        price: 95.00,
        rating: "4.9 (132)",
        tag: "cake",
        tagName: "Festa & Aniversário",
        image: "assets/imagens reais/bolo_salgado_01.png",
        description: "Camadas generosas de recheio de frango caipira desfiado, cenoura raladinha fresca, azeitonas e cobertura decorada de purê artesanal.",
        ingredients: "Pão de forma artesanal, frango desfiado, cenoura fresca, azeitonas, requeijão e temperos caseiros.",
        allergens: "Contém glúten, leite e ovos."
    },
    {
        id: 6,
        name: "Bolo Salgado Especial Quatro Queijos",
        category: "bolos",
        categoryName: "Bolos & Tortas",
        price: 98.00,
        rating: "5.0 (87)",
        tag: "bestseller",
        tagName: "Mais Pedido",
        image: "assets/imagens reais/bolo_salgado_02.png",
        description: "Recheio nobre de quatro queijos cremosos (mussarela, provolone, gorgonzola suave e requeijão) intercalados com fatias macias de pão artesanal.",
        ingredients: "Mix especial de 4 queijos nobres, requeijão cremoso, purê suave e ervas finas.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 7,
        name: "Bolo Salgado Tradicional de Atum",
        category: "bolos",
        categoryName: "Bolos & Tortas",
        price: 85.00,
        rating: "4.9 (74)",
        tag: "new",
        tagName: "Receita de Vó",
        image: "assets/imagens reais/bolo_salgado_03.png",
        description: "Recheio leve e suculento de atum sólido de primeira linha com maionese da casa, cheiro-verde, milho e azeitonas picadas.",
        ingredients: "Atum de primeira, maionese caseira, milho verde, azeitonas e purê de batata decorado.",
        allergens: "Contém peixe, ovos e glúten."
    },
    {
        id: 8,
        name: "Bolo Salgado Gourmet de Palmito & Alho Poró",
        category: "bolos",
        categoryName: "Bolos & Tortas",
        price: 92.00,
        rating: "4.9 (68)",
        tag: "vegan",
        tagName: "Vegetariano",
        image: "assets/imagens reais/bolo_salgado_04.png",
        description: "Palmito pupunha fresco salteado no alho-poró e azeite extravirgem com creme aveludado e cobertura decorada com tomates cereja.",
        ingredients: "Palmito pupunha, alho-poró, azeite extravirgem, requeijão cremoso e purê artesanal.",
        allergens: "Contém glúten e leite."
    },
    {
        id: 9,
        name: "Caixa Festa Mista (Salgados & Doces)",
        category: "caixas",
        categoryName: "Kits Festa & Caixas",
        price: 78.00,
        rating: "5.0 (98)",
        tag: "bestseller",
        tagName: "Presente Perfeito",
        image: "assets/imagens reais/bolo_salgado_05.png",
        description: "Caixa presenteável montada com uma seleção dos melhores salgados artesanais e docinhos finos da Vó Rute.",
        ingredients: "Mix completo de delícias da Vó Rute em embalagem presenteável com cartão dedicado.",
        allergens: "Contém leite, ovos, glúten e derivados."
    }
];

// Sabores para o construtor "Monte sua Caixa"
const BOX_FLAVORS = [
    "Coxinha com Catupiry",
    "Bolinha de Queijo",
    "Quibe com Requeijão",
    "Esfiha de Carne",
    "Empada de Palmito",
    "Enroladinho Presunto & Queijo",
    "Brigadeiro Tradicional",
    "Brigadeiro de Pistache",
    "Ninho com Nutella",
    "Churros & Doce de Leite"
];

// --- ESTADO DO CARRINHO ---
let cart = [];
const FREE_SHIPPING_THRESHOLD = 90.00;
const WHATSAPP_PHONE = "5511999322574"; // Número de atendimento Vó Rute (+55 11 99932-2574)

// --- ESTADO DO CONSTRUTOR DE CAIXA ---
let boxState = {
    size: 6,
    price: 45.00,
    slots: []
};

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderProducts(PRODUCTS);
    initBoxBuilder();
    initGallery();
    initFaqAccordion();
    initMobileDrawer();
    initTabs();
    initEventListeners();
    updateCartUI();
});

// --- RENDERIZAÇÃO DO CATÁLOGO ---
function renderProducts(items) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600;">Nenhuma guloseima encontrada com esses termos.</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">Tente buscar por outro sabor ou selecione a categoria "Todos".</p>
      </div>
    `;
        return;
    }

    grid.innerHTML = items.map(product => {
        return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-tag ${product.tag}">${product.tagName}</span>
          <button class="quick-view-trigger" onclick="openProductModal(${product.id})" title="Espiar Detalhes">
            👁️
          </button>
        </div>
        <div class="product-content">
          <div class="product-rating">
            <span>⭐</span> ${product.rating}
          </div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <div class="product-price">
              <small>R$</small> ${product.price.toFixed(2).replace('.', ',')}
            </div>
            <button class="btn-add-cart" onclick="addToCart(${product.id})" title="Adicionar à Sacola">
              +
            </button>
          </div>
        </div>
      </article>
    `;
    }).join("");
}

// --- FILTRAGEM E BUSCA ---
function filterCatalog(category) {
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(p => {
        const pCat = p.getAttribute("data-category");
        if (pCat === category) {
            p.classList.add("active");
        } else {
            p.classList.remove("active");
        }
    });

    filterProducts();
}

function filterProducts() {
    const activePill = document.querySelector(".category-pill.active");
    const activeCategory = activePill ? activePill.getAttribute("data-category") : "all";
    const currentTab = document.body.getAttribute("data-active-tab") || "inicio";
    const searchInput = document.getElementById("searchInput");
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const sortSelect = document.getElementById("sortSelect");
    const sortBy = sortSelect ? sortSelect.value : "featured";

    let filtered = PRODUCTS.filter(p => {
        let matchesCategory = false;
        if (activeCategory === "all") {
            if (currentTab === "salgados") {
                matchesCategory = p.category === "salgados-fritos" || p.category === "salgados-assados";
            } else if (currentTab === "doces") {
                matchesCategory = p.category === "brigadeiros" || p.category === "brownies";
            } else if (currentTab === "bolos") {
                matchesCategory = p.category === "bolos";
            } else {
                matchesCategory = true;
            }
        } else if (activeCategory === "salgados") {
            matchesCategory = p.category === "salgados-fritos" || p.category === "salgados-assados";
        } else if (activeCategory === "doces") {
            matchesCategory = p.category === "brigadeiros" || p.category === "brownies";
        } else {
            matchesCategory = p.category === activeCategory;
        }

        const matchesQuery = p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    // Ordenação
    if (sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProducts(filtered);
}

// --- CARRINHO DE COMPRAS ---
function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItemIndex = cart.findIndex(item => item.id === productId && !item.isCustomBox);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            isCustomBox: false
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`🍬 "${product.name}" adicionado à sacola!`);
    openCartDrawer();
}

function updateCartItemQty(index, change) {
    if (!cart[index]) return;
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
}

function removeCartItem(index) {
    if (!cart[index]) return;
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
    showToast(`🗑️ "${removedName}" removido.`);
}

function updateCartUI() {
    const cartCounter = document.getElementById("cartCounter");
    const cartItemsList = document.getElementById("cartItemsList");
    const cartSubtotalEl = document.getElementById("cartSubtotal");
    const cartTotalEl = document.getElementById("cartTotal");
    const shippingFill = document.getElementById("shippingProgressBarFill");
    const shippingText = document.getElementById("shippingProgressText");

    const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCounter) cartCounter.textContent = totalItemsCount;

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cartSubtotalEl) cartSubtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartTotalEl) cartTotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    // Barra de Frete Grátis
    if (shippingFill && shippingText) {
        if (subtotal >= FREE_SHIPPING_THRESHOLD) {
            shippingFill.style.width = "100%";
            shippingFill.style.backgroundColor = "var(--accent-pistachio)";
            shippingText.innerHTML = `🎉 Parabéns! Você ganhou <strong>Frete Grátis</strong>!`;
        } else {
            const percentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
            shippingFill.style.width = `${percentage}%`;
            shippingFill.style.backgroundColor = "var(--primary)";
            const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2).replace('.', ',');
            shippingText.innerHTML = `Faltam <strong>R$ ${remaining}</strong> para ganhar Frete Grátis!`;
        }
    }

    // Renderizar Itens
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `
        <div class="empty-cart-state">
          <span class="empty-cart-icon">🧁</span>
          <h4 style="color: var(--dark-chocolate); margin-bottom: 8px;">Sua sacola está vazia</h4>
          <p style="font-size: 0.9rem; margin-bottom: 20px;">Que tal adoçar o seu dia com nossas delícias artesanais?</p>
          <button class="btn-primary" onclick="closeCartDrawer()" style="padding: 10px 24px; font-size: 0.9rem;">
            Ver Cardápio
          </button>
        </div>
      `;
        } else {
            cartItemsList.innerHTML = cart.map((item, idx) => {
                return `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
              <h4 class="cart-item-title">${item.name}</h4>
              <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
              <div class="cart-item-controls">
                <div class="qty-control">
                  <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
                  <span class="qty-value">${item.quantity}</span>
                  <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
                </div>
                <button class="btn-remove-item" onclick="removeCartItem(${idx})">Remover</button>
              </div>
            </div>
          </div>
        `;
            }).join("");
        }
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem("guloseimas_cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Erro ao salvar carrinho no localStorage", e);
    }
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem("guloseimas_cart");
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        console.error("Erro ao carregar carrinho do localStorage", e);
        cart = [];
    }
}

// --- CHECKOUT VIA WHATSAPP ---
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast("⚠️ Adicione guloseimas à sua sacola antes de finalizar!");
        return;
    }

    const orderNotesInput = document.getElementById("orderNotes");
    const notes = orderNotesInput ? orderNotesInput.value.trim() : "";
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

    let message = `🧁 *NOVO PEDIDO - GULOSEIMAS DA VÓ RUTE (Doces & Salgados)*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `*ITENS DO PEDIDO:*\n`;

    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    message += `*Entrega:* ${isFreeShipping ? "GRÁTIS (Campanha Promocional)" : "A calcular conforme endereço"}\n`;
    message += `*Total Estimado:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

    if (notes) {
        message += `\n*Observações do Cliente:*\n"${notes}"\n`;
    }

    message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Olá! Gostaria de confirmar a disponibilidade e o prazo de entrega desse pedido. Obrigado(a)! ✨`;

    const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, "_blank");
}

// --- CONSTRUTOR "MONTE SUA CAIXA" ---
function initBoxBuilder() {
    const sizeBtns = document.querySelectorAll(".size-btn");
    const flavorsGrid = document.getElementById("flavorsChoiceGrid");

    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const size = parseInt(btn.getAttribute("data-size"));
            const price = parseFloat(btn.getAttribute("data-price"));

            boxState.size = size;
            boxState.price = price;
            // Ajusta slots
            boxState.slots = boxState.slots.slice(0, size);
            renderBoxSlots();
        });
    });

    if (flavorsGrid) {
        flavorsGrid.innerHTML = BOX_FLAVORS.map(flavor => {
            return `
        <button class="flavor-choice-btn" onclick="addFlavorToBox('${flavor}')">
          <span>🍫 ${flavor}</span>
          <span style="font-weight: 800; color: var(--primary);">+</span>
        </button>
      `;
        }).join("");
    }

    renderBoxSlots();
}

function renderBoxSlots() {
    const slotsGrid = document.getElementById("boxSlotsGrid");
    const countText = document.getElementById("boxSlotsCount");
    const boxPriceEl = document.getElementById("boxTotalPrice");

    if (!slotsGrid) return;

    if (countText) {
        countText.textContent = `${boxState.slots.length} de ${boxState.size} doces escolhidos`;
    }

    if (boxPriceEl) {
        boxPriceEl.textContent = `R$ ${boxState.price.toFixed(2).replace('.', ',')}`;
    }

    let html = "";
    for (let i = 0; i < boxState.size; i++) {
        const item = boxState.slots[i];
        if (item) {
            html += `
        <div class="box-slot filled">
          <span>${item}</span>
          <div class="box-slot-remove" onclick="removeFlavorFromBox(${i})" title="Remover">✕</div>
        </div>
      `;
        } else {
            html += `
        <div class="box-slot">
          <span style="color: var(--text-light); font-size: 1.2rem;">+</span>
          <span style="color: var(--text-light); font-size: 0.7rem;">Vazio</span>
        </div>
      `;
        }
    }

    slotsGrid.innerHTML = html;
}

function addFlavorToBox(flavorName) {
    if (boxState.slots.length >= boxState.size) {
        showToast(`⚠️ A caixa já está cheia com ${boxState.size} guloseimas!`);
        return;
    }
    boxState.slots.push(flavorName);
    renderBoxSlots();
}

function removeFlavorFromBox(index) {
    boxState.slots.splice(index, 1);
    renderBoxSlots();
}

function addCustomBoxToCart() {
    if (boxState.slots.length < boxState.size) {
        showToast(`⚠️ Por favor, escolha mais ${boxState.size - boxState.slots.length} sabor(es) para completar a caixa.`);
        return;
    }

    const boxName = `Caixa Personalizada (${boxState.size} Doces: ${boxState.slots.join(", ")})`;
    cart.push({
        id: Date.now(),
        name: boxName,
        price: boxState.price,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
        quantity: 1,
        isCustomBox: true
    });

    saveCartToStorage();
    updateCartUI();
    showToast(`🎁 Caixa personalizada de ${boxState.size} doces adicionada!`);
    openCartDrawer();

    // Reset slots da caixa
    boxState.slots = [];
    renderBoxSlots();
}

// --- MODAL DE PRODUTO (QUICK VIEW) ---
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const modalImg = document.getElementById("modalImg");
    const modalTag = document.getElementById("modalTag");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalIngredients = document.getElementById("modalIngredients");
    const modalAllergens = document.getElementById("modalAllergens");
    const modalPrice = document.getElementById("modalPrice");
    const modalAddBtn = document.getElementById("modalAddBtn");

    if (modalImg) modalImg.src = product.image;
    if (modalTag) modalTag.textContent = product.categoryName;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalDesc) modalDesc.textContent = product.description;
    if (modalIngredients) modalIngredients.textContent = product.ingredients;
    if (modalAllergens) modalAllergens.textContent = product.allergens;
    if (modalPrice) modalPrice.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;

    if (modalAddBtn) {
        modalAddBtn.onclick = () => {
            addToCart(product.id);
            closeProductModal();
        };
    }

    if (modal) modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
}

// --- CONTROLES DE DRAWER (CARRINHO) ---
function openCartDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    const drawer = document.getElementById("cartDrawer");
    if (overlay && drawer) {
        overlay.classList.add("active");
        drawer.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    const drawer = document.getElementById("cartDrawer");
    if (overlay && drawer) {
        overlay.classList.remove("active");
        drawer.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// --- FAQ ACCORDION ---
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                faqItems.forEach(i => i.classList.remove("active"));
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });
}

// --- CUPOM DE DESCONTO ---
function copyCoupon(couponCode = "PRIMEIRACOMPRA10") {
    navigator.clipboard.writeText(couponCode).then(() => {
        showToast(`🎟️ Cupom "${couponCode}" copiado com sucesso!`);
    }).catch(() => {
        showToast(`🎟️ Utilize o cupom: ${couponCode}`);
    });
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// --- GALERIA DE FOTOS REAIS ---
const GALLERY_ITEMS = [
    { image: "assets/imagens reais/bolo_salgado_01.png", title: "Bolo Salgado Artesanal Decorado", category: "bolos", tag: "🍰 Bolo de Festa" },
    { image: "assets/imagens reais/bolo_salgado_02.png", title: "Bolo Salgado Quatro Queijos", category: "bolos", tag: "🧀 4 Queijos Nobres" },
    { image: "assets/imagens reais/bolo_salgado_03.png", title: "Coxinhas Douradas & Salgadinhos Fritos", category: "salgados-fritos", tag: "🥟 Frito na Hora" },
    { image: "assets/imagens reais/bolo_salgado_04.png", title: "Empadinhas e Assados da Vó", category: "salgados-assados", tag: "🥐 Forno a Lenha" },
    { image: "assets/imagens reais/bolo_salgado_05.png", title: "Bolo Salgado Confeitado de Frango", category: "bolos", tag: "🎂 Aniversários & Festas" },
    { image: "assets/imagens reais/bolo_salgado_06.png", title: "Cento de Salgados para Festa Completa", category: "festas", tag: "🎉 100 Salgados" },
    { image: "assets/imagens reais/bolo_salgado_07.png", title: "Brigadeiros Tradicionais Enrolados à Mão", category: "doces", tag: "🍫 Chocolate Nobre" },
    { image: "assets/imagens reais/bolo_salgado_08.png", title: "Doces Finos e Brigadeiros Gourmet", category: "doces", tag: "🍬 Doces de Festa" },
    { image: "assets/imagens reais/bolo_salgado_09.png", title: "Esfihas Fechadas Suculentas", category: "salgados-assados", tag: "🥐 Massa Fofinha" },
    { image: "assets/imagens reais/bolo_salgado_10.png", title: "Empadas Tradicionais de Palmito", category: "salgados-assados", tag: "🥧 Massa que Desmancha" },
    { image: "assets/imagens reais/bolo_salgado_12.png", title: "Enroladinhos de Presunto e Queijo", category: "salgados-assados", tag: "🧀 Recheio Farto" },
    { image: "assets/imagens reais/bolo_salgado_13.png", title: "Mix de Salgados Assados para Encomendas", category: "festas", tag: "🎁 Kit Festa" },
    { image: "assets/imagens reais/bolo_salgado_14.png", title: "Bolo Salgado Especial com Cobertura Aveludada", category: "bolos", tag: "🎂 Receita Exclusiva" }
];

function initGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    renderGallery("all");

    // Filtros da Galeria
    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter") || "all";
            renderGallery(filter);
        });
    });

    // Fechar Lightbox
    const closeBtn = document.getElementById("lightboxCloseBtn");
    const lightbox = document.getElementById("lightboxModal");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
}

function renderGallery(filterCategory) {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const filtered = filterCategory === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === filterCategory);

    grid.innerHTML = filtered.map(item => {
        return `
      <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}')" title="Clique para ampliar">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="gallery-zoom-icon">🔍</span>
        <div class="gallery-item-overlay">
          <span style="font-size: 0.75rem; font-weight: 800; color: #FEF08A; text-transform: uppercase; margin-bottom: 2px;">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>Clique para ver detalhes</p>
        </div>
      </div>
    `;
    }).join("");
}

function openLightbox(imageSrc, captionText) {
    const lightbox = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const caption = document.getElementById("lightboxCaption");

    if (img) img.src = imageSrc;
    if (caption) caption.textContent = captionText;
    if (lightbox) lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightboxModal");
    if (lightbox) lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

// --- EVENT LISTENERS GERAIS ---
function initEventListeners() {
    // Categorias
    const categoryPills = document.querySelectorAll(".category-pill");
    categoryPills.forEach(pill => {
        pill.addEventListener("click", () => {
            categoryPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            filterProducts();
        });
    });

    // Busca e ordenação
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", filterProducts);
    }

    // Fechar gaveta do carrinho
    const closeDrawerBtn = document.getElementById("closeCartDrawerBtn");
    const cartOverlay = document.getElementById("cartDrawerOverlay");
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

    // Abrir carrinho pelo botão do header
    const openCartBtn = document.getElementById("openCartBtn");
    if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);

    // Fechar modal de produto
    const closeProductModalBtn = document.getElementById("closeProductModalBtn");
    const productModal = document.getElementById("productModal");
    if (closeProductModalBtn) closeProductModalBtn.addEventListener("click", closeProductModal);
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) closeProductModal();
        });
    }

    // Botão Adicionar Caixa ao Carrinho
    const addBoxBtn = document.getElementById("addBoxToCartBtn");
    if (addBoxBtn) addBoxBtn.addEventListener("click", addCustomBoxToCart);

    // Tecla Escape para fechar tudo
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartDrawer();
            closeProductModal();
            closeLightbox();
            closeMobileDrawer();
        }
    });
}

// --- CONTROLES DO MENU MOBILE ---
function openMobileDrawer() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    const drawer = document.getElementById("mobileDrawer");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    if (overlay && drawer) {
        overlay.classList.add("active");
        drawer.classList.add("active");
        document.body.style.overflow = "hidden";
        if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "true");
    }
}

function closeMobileDrawer() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    const drawer = document.getElementById("mobileDrawer");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    if (overlay && drawer) {
        overlay.classList.remove("active");
        drawer.classList.remove("active");
        document.body.style.overflow = "";
        if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "false");
    }
}

function initMobileDrawer() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("closeMobileDrawerBtn");
    const overlay = document.getElementById("mobileDrawerOverlay");

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMobileDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeMobileDrawer);
    if (overlay) overlay.addEventListener("click", closeMobileDrawer);
}

// --- SISTEMA DE ABAS INTERNAS ---
function switchTab(tabId) {
    if (!tabId) return;

    // Atualiza atributo no body para controle CSS
    document.body.setAttribute("data-active-tab", tabId);

    // Atualiza estado ativo em todos os menus/barras de abas
    const allTabTriggers = document.querySelectorAll("[data-tab]");
    allTabTriggers.forEach(el => {
        const isCurrent = el.getAttribute("data-tab") === tabId;
        el.classList.toggle("active", isCurrent);
        if (el.getAttribute("role") === "tab") {
            el.setAttribute("aria-selected", isCurrent ? "true" : "false");
        }
    });

    // Fecha o menu mobile se estiver aberto
    closeMobileDrawer();

    // Filtros e estados específicos por aba
    if (tabId === "inicio") {
        filterCatalog("all");
    } else if (tabId === "bolos") {
        filterCatalog("bolos");
    } else if (tabId === "doces") {
        filterCatalog("brigadeiros");
    } else if (tabId === "salgados") {
        filterCatalog("salgados");
    }

    // Scroll suave para o topo do conteúdo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Atualiza a URL sem recarregar a página
    if (window.history && window.history.replaceState) {
        window.history.replaceState({ tab: tabId }, "", `#${tabId}`);
    }
}

function initTabs() {
    const tabTriggers = document.querySelectorAll("[data-tab]");
    tabTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = trigger.getAttribute("data-tab");
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    // Verifica se há uma âncora/hash inicial na URL
    const hash = window.location.hash.replace("#", "");
    const validTabs = ["inicio", "bolos", "doces", "salgados", "sobre", "contato"];
    if (hash && validTabs.includes(hash)) {
        switchTab(hash);
    } else {
        switchTab("inicio");
    }

    // Suporte ao botão voltar/avançar do navegador
    window.addEventListener("popstate", () => {
        const currentHash = window.location.hash.replace("#", "");
        if (currentHash && validTabs.includes(currentHash)) {
            switchTab(currentHash);
        } else {
            switchTab("inicio");
        }
    });
}

