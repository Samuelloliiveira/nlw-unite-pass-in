export function generateSlug(text: string): string {
  return text
    .normalize("NFD") // Normaliza a string para a forma de decomposição canônica compatível com Unicode (NFD)
    .replace(/[\u0300-\u036f]/g, "") // Substitui todos os caracteres diacríticos (acentos) por uma string vazia
    .toLowerCase() // Converte todos os caracteres para minúsculas
    .replace(/[^\w\s-]/g, "") // Remove todos os caracteres que não são letras, dígitos, espaços ou hífens
    .replace(/\s+/g, "-") // Substitui múltiplos espaços por um único hífen
}
