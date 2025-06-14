    const recipes = [
            {
                id: 1,    
                name: "Tacos al Pastor",
                category: "antojitos",
                difficulty: "medio",
                time: "45 min",
                icon: "🌮",
                ingredients: [
                    "1 kg de carne de cerdo en filetes",
                    "3 chiles guajillo",
                    "2 chiles chipotle",
                    "1 piña pequeña",
                    "1 cebolla blanca",
                    "Tortillas de maíz",
                    "Cilantro fresco",
                    "Sal y pimienta"
                ],
                steps: [
                    "Remoja los chiles en agua caliente por 20 minutos",
                    "Licúa los chiles con especias para hacer la marinada",
                    "Marina la carne por al menos 2 horas",
                    "Asa la carne en comal o plancha",
                    "Corta la piña y cebolla en cubos pequeños",
                    "Calienta las tortillas",
                    "Arma los tacos con carne, piña, cebolla y cilantro"
                ],
                tips: "El secreto está en la marinada. Déjala reposar toda la noche para mejor sabor.",
                culture: "Los tacos al pastor son una fusión única entre la cocina mexicana y libanesa, creada por inmigrantes árabes en México."
            },
            {
                id: 2,
                name: "Mole Poblano",
                category: "tradicionales",
                difficulty: "dificil",
                time: "3 horas",
                icon: "🍗",
                ingredients: [
                    "1 pollo entero",
                    "6 chiles mulato",
                    "4 chiles ancho",
                    "2 chiles chipotle",
                    "100g de chocolate de tabla",
                    "2 tomates",
                    "1 cebolla",
                    "Almendras, nueces, ajonjolí",
                    "Especias varias"
                ],
                steps: [
                    "Cuece el pollo en agua con sal",
                    "Tuesta los chiles y remójalos",
                    "Fríe todos los ingredientes por separado",
                    "Muele todo en el metate o licuadora",
                    "Cocina la pasta de mole por 1 hora",
                    "Agrega el caldo de pollo poco a poco",
                    "Añade el chocolate y cocina 30 min más",
                    "Sirve sobre el pollo cocido"
                ],
                tips: "La paciencia es clave. Un buen mole requiere tiempo y amor en cada paso.",
                culture: "El mole poblano es considerado el platillo nacional de México, con más de 20 ingredientes que simbolizan la riqueza culinaria del país."
            },
            {
                id: 3,
                name: "Quesadillas de Flor de Calabaza",
                category: "faciles",
                difficulty: "facil",
                time: "20 min",
                icon: "🧀",
                ingredients: [
                    "Tortillas de maíz",
                    "200g de queso Oaxaca",
                    "1 taza de flor de calabaza",
                    "1 cebolla pequeña",
                    "Epazote fresco",
                    "Aceite para freír",
                    "Sal al gusto"
                ],
                steps: [
                    "Limpia las flores de calabaza",
                    "Sofríe la cebolla hasta que esté transparente",
                    "Agrega las flores de calabaza y epazote",
                    "Rellena las tortillas con queso y la mezcla",
                    "Cocina en comal hasta que el queso se derrita",
                    "Sirve calientes con salsa verde"
                ],
                tips: "Las flores de calabaza se cocinan muy rápido, no las dejes mucho tiempo en el fuego.",
                culture: "Las flores de calabaza han sido consumidas en México desde la época prehispánica, siendo un ingrediente muy apreciado."
            },
            {
                id: 4,
                name: "Churros con Cajeta",
                category: "postres",
                difficulty: "medio",
                time: "40 min",
                icon: "🍩",
                ingredients: [
                    "1 taza de agua",
                    "2 cucharadas de azúcar",
                    "1 taza de harina",
                    "2 huevos",
                    "Aceite para freír",
                    "Canela molida",
                    "Cajeta para acompañar"
                ],
                steps: [
                    "Hierve el agua con azúcar",
                    "Agrega la harina de golpe y mezcla",
                    "Deja enfriar y agrega los huevos uno por uno",
                    "Pon la masa en manga pastelera",
                    "Forma los churros y fríelos hasta dorar",
                    "Espolvorea con canela y azúcar",
                    "Sirve con cajeta tibia"
                ],
                tips: "La temperatura del aceite es crucial: debe estar a 180°C para que queden crujientes por fuera y suaves por dentro.",
                culture: "Los churros llegaron a México durante la época colonial y se adaptaron con ingredientes locales como la cajeta."
            },
            {
                id: 5,
                name: "Salsa Verde Cruda",
                category: "salsas",
                difficulty: "facil",
                time: "10 min",
                icon: "🌶️",
                ingredients: [
                    "500g de tomates verdes",
                    "2 chiles serranos",
                    "1/4 de cebolla blanca",
                    "2 dientes de ajo",
                    "Cilantro fresco",
                    "Sal al gusto"
                ],
                steps: [
                    "Quita las cáscaras de los tomates verdes",
                    "Corta todos los ingredientes",
                    "Muele en molcajete o licuadora",
                    "Agrega sal al gusto",
                    "Deja reposar 10 minutos antes de servir"
                ],
                tips: "Si la quieres menos picante, quita las semillas de los chiles.",
                culture: "El molcajete de piedra volcánica da el mejor sabor a las salsas mexicanas tradicionales."
            },
            {
                id: 6,
                name: "Pozole Rojo",
                category: "tradicionales",
                difficulty: "medio",
                time: "2 horas",
                icon: "🍲",
                ingredients: [
                    "1 kg de espinazo de cerdo",
                    "500g de maíz pozolero",
                    "4 chiles guajillo",
                    "2 chiles ancho",
                    "Lechuga, rábanos",
                    "Orégano, chile piquín",
                    "Limones, tostadas"
                ],
                steps: [
                    "Cuece la carne en agua con sal por 1 hora",
                    "Agrega el maíz pozolero y cocina 30 min más",
                    "Tuesta los chiles y licúa con ajo",
                    "Cuela la salsa y agrégala al pozole",
                    "Sazona con sal y hierve 15 minutos",
                    "Sirve con acompañamientos tradicionales"
                ],
                tips: "El pozole sabe mejor al día siguiente, cuando todos los sabores se han integrado.",
                culture: "El pozole era un platillo sagrado para los aztecas, preparado en ceremonias religiosas importantes."
            },
        { id: 7,
                name: "Enchiladas Verdes",
                category: "antojitos",
                difficulty: "medio",
                time: "30 min",
                icon: "🌯",
                ingredients: [
                    "12 tortillas de maíz",
                    "500g de pechuga de pollo deshebrada",
                    "500g de tomates verdes",
                    "2 chiles serranos",
                    "1/4 de cebolla",
                    "Cilantro fresco",
                    "Crema y queso fresco"
                ],
                steps: [
                    "Hierve los tomates y chiles hasta que estén suaves",
                    "Licúa con cebolla y sal para hacer la salsa",
                    "Rellena las tortillas con pollo y baña con la salsa",
                    "Calienta en comal hasta que estén calientes",
                    "Sirve con crema, queso y cilantro"
                ],
                tips: "Puedes agregar aguacate o frijoles refritos como acompañamiento.",
                culture: "Las enchiladas son un platillo tradicional mexicano que ha evolucionado en cada región del país."
            },
        {
    "id": 8,
    "name": "Frijoles Charros",
    "category": "plato_fuerte",
    "difficulty": "facil",
    "time": "1 hr 30 min",
    "icon": "🍲",
    "ingredients": [
        "500g de frijoles bayos o negros",
        "150g de tocino picado",
        "100g de chorizo desmoronado",
        "1/2 cebolla blanca picada",
        "2 dientes de ajo picados",
        "1 chile serrano o jalapeño picado (opcional)",
        "2 jitomates maduros picados",
        "Cilantro fresco picado al gusto",
        "Sal al gusto",
        "Agua"
    ],
    "steps": [
        "Lava y remoja los frijoles en agua fría por al menos 4 horas (o desde la noche anterior).",
        "Escurre los frijoles remojados y cuécelos en una olla con suficiente agua limpia hasta que estén suaves. Esto puede tardar de 1 a 1.5 horas en olla normal, o 30-40 minutos en olla de presión. Salpimienta al final.",
        "Mientras los frijoles se cuecen, en un sartén grande, fríe el tocino hasta que esté dorado y crujiente. Retira el tocino y reserva.",
        "En la misma grasa del tocino, añade el chorizo y cocina hasta que esté bien dorado y suelto. Retira y reserva junto al tocino.",
        "En la misma sartén, agrega la cebolla y el ajo picados y sofríe hasta que estén transparentes.",
        "Incorpora el chile serrano (si usas) y los jitomates picados. Cocina hasta que el jitomate se suavice y suelte su jugo.",
        "Cuando los frijoles estén cocidos, agrega el sofrito de cebolla, ajo, chile y jitomate a la olla de los frijoles. Incorpora también el tocino y el chorizo reservados.",
        "Deja que todo hierva a fuego lento por unos 15-20 minutos para que los sabores se integren. Rectifica la sal si es necesario.",
        "Sirve calientes, espolvorea con cilantro fresco picado y disfruta."
    ],
    "tips": "Para un toque extra, puedes añadir trozos de salchicha, chicharrón o jamón. Acompaña con tortillas de maíz calientes y aguacate.",
    "culture": "Los frijoles charros son un platillo típico de la gastronomía mexicana, especialmente popular en el norte del país. Se caracterizan por su caldo especiado y la combinación de carnes que le dan un sabor ahumado y reconfortante, ideal para acompañar carnes asadas."
}
        ];

        let currentCategory = 'all';
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        let cookingCounts = JSON.parse(localStorage.getItem('cookingCounts') || '{}');

        // Inicializar la aplicación
        document.addEventListener('DOMContentLoaded', function() {
            displayRecipes(recipes);
            setupEventListeners();
        });

        function setupEventListeners() {
            // Botones de navegación
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    currentCategory = this.dataset.category;
                    filterRecipes();
                });
            });

            // Buscador
            document.querySelector('.search-input').addEventListener('input', function() {
                filterRecipes();
            });

            // Cerrar modal al hacer click fuera
            document.getElementById('recipeModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        }

        function filterRecipes() {
            const searchTerm = document.querySelector('.search-input').value.toLowerCase();
            let filteredRecipes = recipes;

            // Filtrar por categoría
            if (currentCategory !== 'all') {
                filteredRecipes = filteredRecipes.filter(recipe => recipe.category === currentCategory);
            }

            // Filtrar por término de búsqueda
            if (searchTerm) {
                filteredRecipes = filteredRecipes.filter(recipe => 
                    recipe.name.toLowerCase().includes(searchTerm) ||
                    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
                    recipe.category.toLowerCase().includes(searchTerm)
                );
            }

            displayRecipes(filteredRecipes);
        }

        function displayRecipes(recipesToShow) {
            const grid = document.getElementById('recipesGrid');
            const noResults = document.getElementById('noResults');

            if (recipesToShow.length === 0) {
                grid.innerHTML = '';
                noResults.style.display = 'block';
                return;
            }

            noResults.style.display = 'none';
            
            grid.innerHTML = recipesToShow.map(recipe => `
                <div class="recipe-card" style="animation-delay: ${Math.random() * 0.5}s">
                    <div class="recipe-image">
                        <span style="font-size: 3em;">${recipe.icon}</span>
                    </div>
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span class="difficulty ${recipe.difficulty}">${getDifficultyText(recipe.difficulty)}</span>
                            <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                        </div>
                        <div class="recipe-actions">
                            <button class="btn btn-primary" onclick="openRecipe(${recipe.id})">
                                <i class="fas fa-eye"></i> Ver Receta
                            </button>
                            <button class="btn btn-favorite ${favorites.includes(recipe.id) ? 'active' : ''}" 
                                    onclick="toggleFavorite(${recipe.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        ${cookingCounts[recipe.id] ? `<div style="text-align: center; margin-top: 10px; color: #666; font-size: 0.9em;">
                            <i class="fas fa-utensils"></i> Cocinado ${cookingCounts[recipe.id]} veces
                        </div>` : ''}
                    </div>
                </div>
            `).join('');
        }

        function getDifficultyText(difficulty) {
            const texts = {
                'facil': 'Fácil',
                'medio': 'Medio',
                'dificil': 'Difícil'
            };
            return texts[difficulty] || difficulty;
        }

        function openRecipe(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) return;

            // Incrementar contador de veces cocinadas
            cookingCounts[recipeId] = (cookingCounts[recipeId] || 0) + 1;
            localStorage.setItem('cookingCounts', JSON.stringify(cookingCounts));

            document.getElementById('modalTitle').textContent = recipe.name;
            document.getElementById('modalBody').innerHTML = `
                <div class="ingredients">
                    <h3><i class="fas fa-list"></i> Ingredientes</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="steps">
                    <h3><i class="fas fa-tasks"></i> Pasos de Preparación</h3>
                    <ol>
                        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                ${recipe.tips ? `
                <div class="tips">
                    <h4><i class="fas fa-lightbulb"></i> Tip del Chef</h4>
                    <p>${recipe.tips}</p>
                </div>
                ` : ''}
                
                ${recipe.culture ? `
                <div class="tips" style="background: linear-gradient(135deg, #E6F3FF, #CCE7FF); border-left-color: #007ACC;">
                    <h4><i class="fas fa-book"></i> Curiosidad Cultural</h4>
                    <p>${recipe.culture}</p>
                </div>
                ` : ''}
            `;
            
            document.getElementById('recipeModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Actualizar la vista para mostrar el contador
            filterRecipes();
        }
        function closeModal() {
            document.getElementById('recipeModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
