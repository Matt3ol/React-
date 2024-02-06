import { Color } from "./Color";

export function Colors({ colori }) {
    return (
        <ul>
          {colori.map((color) => (
            <Color key={color.id} color={color} />
          ))}
        </ul>
      );
}
