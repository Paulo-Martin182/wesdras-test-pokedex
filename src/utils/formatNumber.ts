export const formatTag = (tag: string | number) => {
  if (+tag <= 9) {
    return `00${tag}`
  } else if (+tag > 9 && +tag < 99) {
    return `0${tag}`
  } else {
    return `${tag}`
  }
}
