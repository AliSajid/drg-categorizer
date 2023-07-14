export function scaleLength(length: string, ratio = 1) {
    const result = (length + "").trim().match(/^([\d.]+)([a-z]*)$/);

    if (!result)
        throw new TypeError("Invalid length, must be a number followed by a unit without spaces.");

    const [numString, unit] = result.splice(1, 2);
    const num = parseFloat(numString);

    return `${num * ratio}${unit || "px"}`;}

