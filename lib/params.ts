export function getPageParam(param: string | undefined | null) {
  if (
    !param ||
    typeof param !== "string" ||
    !Number.isInteger(Number(param)) ||
    Number(param) < 1
  ) {
    return 1;
  }

  return parseInt(param);
}

export function getSearchParam(param: string | undefined | null) {
  if (!param || typeof param !== "string") return "";
  return param;
}
