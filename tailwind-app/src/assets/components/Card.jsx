function Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
      <h2 className="text-xl font-bold mb-2">🐶 Pug</h2>
      <div className="text-left mb-4">
          Es una raza de perro pequeña y de origen chino.
          Se caracteriza por:
          <ul className="list-disc list-inside">
          <li>
            <ul className="list-disc list-inside ml-4">
              <li>Cara arrugada y achatada.</li>
              <li>Ojos grandes y expresivos.</li>
              <li>Cuerpo compacto y musculoso.</li>
              <li>Personalidad juguetona, cariñosa y sociable.</li>
            </ul>
          </li>
          <li>Es muy popular como mascota por:
            <ul className="list-disc list-inside ml-4">
              <li>Su carácter amigable.</li>
              <li>Su tamaño ideal para espacios pequeños.</li>
            </ul>
          </li>
        </ul>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Click aquí</button>
    </div>
  );
}

export default Card;
