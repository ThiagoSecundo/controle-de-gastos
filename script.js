// Obtem os elementos do DOM
const valorInput = document.getElementById("valor");
const categoriaSelect = document.getElementById("categoria");
const botaoAdicionar = document.querySelector("button");

const categorias = {
  "Alimentação": 0,
  "Transporte": 0,
  "Lazer": 0,
  "Outros": 0
};

let total = 0;

// Formata para moeda brasileira
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Atualiza os valores exibidos no HTML
function atualizarValores() {
  for (const cat in categorias) {
    const p = document.getElementById(cat);
    p.textContent = `${cat}: ${formatarMoeda(categorias[cat])}`;
  }

  document.getElementById("Total").textContent = `Total: ${formatarMoeda(total)}`;
}

// Adiciona gasto ao clicar no botão
botaoAdicionar.addEventListener("click", () => {
  const valor = parseFloat(valorInput.value);
  const categoria = categoriaSelect.value;

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido maior que zero.");
    return;
  }

  categorias[categoria] += valor;
  total += valor;

  atualizarValores();

  // Limpa o campo de entrada
  valorInput.value = "";
});
