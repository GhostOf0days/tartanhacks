import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./index.module.scss";

export enum DotColor {
  PRIMARY = "circlePrimary",
  SECONDARY = "circleSecondary",
}

export enum DotOpacity {
  DARK = "circleDark",
  FADED = "circleFaded",
}

export enum MatrixSpacing {
  DENSE = "matrixDense",
  SPARSE = "matrixSparse",
}

interface DotMatrixProps {
  width: number;
  height: number;
  matrixSpacing?: MatrixSpacing;
  dotColor?: DotColor;
  dotOpacity?: DotOpacity;
  className?: string;
}

export default function DotMatrix({
  width,
  height,
  matrixSpacing = MatrixSpacing.DENSE,
  dotColor = DotColor.PRIMARY,
  dotOpacity = DotOpacity.DARK,
  className,
}: DotMatrixProps) {
  const matrix = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const circle = (
        <FontAwesomeIcon
          icon={faCircle}
          className={clsx(
            styles.circle,
            styles[dotColor],
            styles[dotOpacity],
            styles[`circle--${i + j}`]
          )}
          key={i * height + j}
        />
      );
      row.push(circle);
    }
    matrix.push(row);
  }

  return (
    <div
      className={clsx(
        styles.dotMatrixContainer,
        styles[matrixSpacing],
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
      }}
    >
      {matrix}
    </div>
  );
}