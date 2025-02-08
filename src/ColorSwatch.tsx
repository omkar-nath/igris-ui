import { styled } from "@linaria/react";

type Props = {
  name: string;
  value: string;
};

const Color = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 1rem;
  padding-top: 1rem;
`;

const ColorDesc = styled.div`
  display: flex;
  align-items: center;
  justifycontent: center;
  flex-direction: column;
  fontfamily: sans-serif;
  fontsize: "14px";
`;
const ColorSwatch = ({ name, value }: Props) => {
  return (
    <Color
      style={{
        backgroundColor: value,
        color: +name <= 400 ? "black" : "white",
      }}
    >
      <ColorDesc>
        <strong> {name}</strong>
        <span>{value}</span>
      </ColorDesc>
    </Color>
  );
};

export default ColorSwatch;
