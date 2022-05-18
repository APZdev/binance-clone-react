interface Props {
    id: string;
    width?: number;
    height?: number;
}

export const SvgIcon = ({ id, width, height }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width={width === undefined ? 24 : width}
            height={height === undefined ? 24 : height}
        >
            <use xlinkHref={`#${id}`}></use>
        </svg>
    );
};
