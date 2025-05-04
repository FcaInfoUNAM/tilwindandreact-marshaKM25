function Card() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-2">Título de la Tarjeta</h2>
        <p className="mb-4">Este es un texto dentro de la tarjeta.</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Click aquí</button>
      </div>
    );
  }
  
  export default Card;
  