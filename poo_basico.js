class Libros{
  constructor(titulo, autor, year, estado){
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
    this.estado = estado;
  }
  
  describirLibro(){
    console.log("Libro: " + this.titulo + ", Escrito por: " + this.autor + ", Publicado en: " + this.year
    + ", Disponibilidad: " + this.estado);
  }
}

const libro1 = new Libros("Avatar", "Pepito", "2000", "Prestado");

libro1.describirLibro();