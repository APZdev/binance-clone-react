export const SvgIcon = ({ id, width, height }: { id: string; width: number; height: number }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={width} height={height}>
            <use xlinkHref={`#${id}`}></use>
        </svg>
    );
};
