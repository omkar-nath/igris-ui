import { styled } from "@pigment-css/react";

type Props = {
  name: string;
  value: string;
};

const Color = styled("div")({
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",

  borderRadius: "1rem",
});

const ColorDesc = styled("div")({
  fontFamily: "sans-serif",
  display: "flex",
  textTransform: "uppercase",
  flexDirection: "column",
  fontSize: "14px",
});

const ColorSwatch = ({ name, value }: Props) => {
  return (
    <Color
      style={{ backgroundColor: value, color: +name <= 50 ? "black" : "white" }}
    >
      <ColorDesc>
        <span>{value}</span>
      </ColorDesc>
    </Color>
  );
};

export default ColorSwatch;
