import { styled } from "@pigment-css/react";

type Props = {
  name: string;
  value: string;
};

const Color = styled("div")({
  width: "100px",
  height: "100px",
  textAlign: "center",
  paddingTop: "1rem",
});

const ColorDesc = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3rem",
  flexDirection: "column",

  fontFamily: "sans-serif",
  fontSize: "14px",
});

const ColorSwatch = ({ name, value }: Props) => {
  return (
    <Color
      style={{ backgroundColor: value, color: +name <= 60 ? "black" : "white" }}
    >
      <ColorDesc>
        <strong> {name}</strong>
        <span>{value}</span>
      </ColorDesc>
    </Color>
  );
};

export default ColorSwatch;
